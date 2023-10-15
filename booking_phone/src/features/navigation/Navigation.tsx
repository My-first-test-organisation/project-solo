import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = (): JSX.Element => {
	return (
		<>
			<div className='container-navbar'>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container-fluid">
						<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link className="nav-link active" aria-current="page" to="/phones">
										Phones
									</Link >
								</li>
								<>
									<li className="nav-item">
										<Link className="nav-link active" aria-current="page" to="/register">
											Registration
										</Link >
									</li>
									<li className="nav-item">
										<Link className="nav-link active" aria-current="page" to="/login">
											Login
										</Link >
									</li>
								</>
							</ul>
						</div>
					</div>
				</nav>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
