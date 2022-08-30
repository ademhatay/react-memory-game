import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

import SettingsProvider from './context/SettingsContext';
import Header from './components/Header';
import Footer from './components/Footer';
import starwars from './main';

const App = () => {
	
	return (
		<Container className="my-4 text-center">
			<SettingsProvider>
				<Header />
				<Footer />
			</SettingsProvider>

			<img src={starwars[0].src} />
			<img src={starwars[1].src} />
			<img src={starwars[2].src} />
			<img src={starwars[3].src} />
			<img src={starwars[4].src} />
			<img src={starwars[5].src} />
			<img src={starwars[6].src} />
			<img src={starwars[7].src} />
			<img src={starwars[8].src} />
			<img src={starwars[9].src} />
			<img src={starwars[10].src} />
			<img src={starwars[11].src} />
		</Container>
	);
};

export default App;