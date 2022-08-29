import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

import SettingsProvider from './context/SettingsContext';
import Header from './components/Header';

const App = () => {
	
	return (
		<Container className="my-4 text-center">
			<SettingsProvider>
				<Header />
			</SettingsProvider>
		</Container>
	);
};

export default App;