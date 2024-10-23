import { useState } from "react";
import { useEffect } from "react";
import * as Realm from "realm-web";

const Database = () => {
	const [locations, setLocations] = useState([]);
	const [city, setCity] = useState("");

	// Maak een nieuwe Realm-app aan met de juiste App ID
	const app = new Realm.App({ id: "mongodb+srv://nellefavoreel:<123rhinogolden>@web2.gaz0k0d.mongodb.net/?retryWrites=true&w=majority&appName=Web2" }); // Vervang met jouw Realm App ID
	// Functie om locaties op te halen
	const fetchLocations = async () => {
		const credentials = Realm.Credentials.anonymous();
		const user = await app.logIn(credentials);

		const mongodb = user.mongoClient("mongodb-atlas");
		const locationsCollection = mongodb.db("Web2").collection("Locations");

		const fetchedLocations = await locationsCollection.find();
		setLocations(fetchedLocations);
	};

	// Functie om een locatie toe te voegen
	const addLocation = async () => {
		console.log("Adding location:", city);
		const credentials = Realm.Credentials.anonymous();
		const user = await app.logIn(credentials);
		const mongodb = user.mongoClient("mongodb-atlas");
		const locationsCollection = mongodb.db("Web2").collection("Locations");

		const locationDoc = { name: city, position: { lat: 52.3676, lon: 4.9041 } };
		await locationsCollection.insertOne(locationDoc);
		console.log("Location added:", locationDoc);
		setCity("");
		fetchLocations();
	};

	// Laad locaties wanneer de component wordt gemonteerd
	useEffect(() => {
		fetchLocations();
	}, []);

	return (
		<div>
			<h1>Locaties</h1>
			<input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Voer een stad in" />
			<button onClick={addLocation}>Voeg Locatie Toe</button>
			<ul>
				{locations.map((location) => (
					<li key={location._id}>
						{location.name} ({location.position.lat}, {location.position.lon})
					</li>
				))}
			</ul>
		</div>
	);
};

export default Database;
