import React from 'react';

import NavbarComponent from './components/NavbarComponent';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<header>
				<NavbarComponent />
			</header>
			<div className="main-container">
				<Main />
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
