import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import SettingsProvider from "./context/SettingsContext";
import GameProvider from "./context/GameContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Game from "./components/Game";

const App = () => {
  return (
    <Container className="my-4 text-center">
      <SettingsProvider>
        <GameProvider>
          <Header />
          <Game />
          <Footer />
        </GameProvider>
      </SettingsProvider>
    </Container>
  );
};

export default App;
