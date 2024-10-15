import { Outlet, Link } from "react-router-dom";

function Layout() {
	return (
		<>
			<nav>
				<div className="navigation">
					<ul id="nav">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/Explenation">Explenation</Link>
						</li>
					</ul>
				</div>
			</nav>
			<Outlet />
		</>
	);
}

export default Layout;
