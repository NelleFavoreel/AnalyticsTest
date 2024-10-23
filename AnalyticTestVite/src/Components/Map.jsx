import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Importeer de marker iconen via ES6 imports
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix voor de Leaflet marker iconen
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: markerIcon2x,
	iconUrl: markerIcon,
	shadowUrl: markerShadow,
});

// Component om de kaart naar een nieuwe positie te verplaatsen
function ChangeView({ center }) {
	const map = useMap();
	map.setView(center, 13);
	return null;
}

const MyMap = () => {
	const [position, setPosition] = useState([52.3676, 4.9041]); // Default positie is Amsterdam
	const [city, setCity] = useState(""); // Gebruikersinvoer voor de stad

	// Functie om de stad naar coördinaten om te zetten via de Nominatim API
	const searchCity = async () => {
		const response = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json`);
		const data = await response.json();

		if (data && data.length > 0) {
			const { lat, lon } = data[0]; // Haal de coördinaten van de eerste zoekresultaten
			setPosition([parseFloat(lat), parseFloat(lon)]); // Zet de nieuwe positie
		} else {
			alert("Stad niet gevonden!");
		}
	};

	return (
		<>
			{/* De kaartcontainer */}
			<MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
				<Marker position={position}>
					<Popup>
						{city || "Amsterdam"} <br /> {city ? `De stad ${city}` : "De hoofdstad van Nederland"}
					</Popup>
				</Marker>
				{/* Verplaats de kaart naar de nieuwe locatie */}
				<ChangeView center={position} />
			</MapContainer>

			{/* Invoerveld en knop om een stad te zoeken */}
			<div style={{ marginTop: "10px" }}>
				<input
					type="text"
					placeholder="Voer een stad in"
					value={city}
					onChange={(e) => setCity(e.target.value)} // Verander de stad na invoer
				/>
				<button onClick={searchCity}>Zoek stad</button>
			</div>
		</>
	);
};

export default MyMap;
