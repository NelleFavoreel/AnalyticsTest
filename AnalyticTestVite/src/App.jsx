import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";
import Explenation from "./Pages/Explenation.jsx";
import Layout from "./Pages/Layout.jsx";

function App() {
	return (
		<>
			{/* <div className="head">
				<h1>Website</h1>
				<div className="buttons">
					<button>Klik hier!</button>
					<button>Of klik hier!</button>
					<Link to="/home">Ga naar Home</Link>
				</div>
			</div> */}
			<BrowserRouter basename="/AnalyticsTest">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="explenation" element={<Explenation />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
