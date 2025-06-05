import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MenuInicial from './interface/mainMenu';
import JoinMatch from './interface/joinMatch';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unirse-partida" element={<JoinMatch />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  const handleCrearPartida = () => {
    window.location.href = "/unirse-partida";
  };

  const handleUnirsePartida = () => {
    console.log("Unirse a partida clickeado");
  };

  const handleVerRanking = () => {
    console.log("Ver ranking clickeado");
  };

  return (
    <MenuInicial
      onCrearPartida={handleCrearPartida}
      onUnirsePartida={handleUnirsePartida}
      onVerRanking={handleVerRanking}
    />
  );
}

export default App;