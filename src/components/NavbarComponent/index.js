import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
	return (
		<div className="header-content">
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="">
					<img alt="" src="./logo512.png" width="30" height="30" className="d-inline-block align-top" /> User
					Directory
				</Navbar.Brand>
			</Navbar>
		</div>
	);
};

export default NavbarComponent;
