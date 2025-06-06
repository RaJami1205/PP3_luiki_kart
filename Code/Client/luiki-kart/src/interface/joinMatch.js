import React from 'react';
import '../styles/joinMatch.css';
import { useNavigate } from 'react-router-dom';

const JoinMatch = () => {
  const navigate = useNavigate();

  const [selectedGameType, setSelectedGameType] = React.useState(null);
  const [selectedTrack, setSelectedTrack] = React.useState(null);

  // Opciones simplificadas
  const gameTypes = [
    { id: 1, name: "VS", icon: "⚔️" }
  ];

  const tracks = [
    { id: 1, name: "Pista Urbana", icon: "🏙️" }
  ];

  const handleBack = () => {
    navigate('/');
  };

  const handleJoin = () => {
    if (selectedGameType && selectedTrack) {
      console.log("Uniéndose a partida:", {
        gameType: selectedGameType,
        track: selectedTrack
      });
      // Lógica para unirse a la partida
    }
  };

  // Seleccionar automáticamente las únicas opciones disponibles
  React.useEffect(() => {
    if (gameTypes.length === 1) setSelectedGameType(gameTypes[0]);
    if (tracks.length === 1) setSelectedTrack(tracks[0]);
  }, []);

  return (
    <div className="join-match-container">
      <div className="join-match-header">
        <h1>Opciones de Jugabilidad</h1>
        <div className="car-illustration"></div>
      </div>

      <div className="selection-section">
        <h2>Tipo de Juego</h2>
        <div className="options-grid">
          {gameTypes.map((type) => (
            <div 
              key={type.id}
              className="option-card selected" // Siempre seleccionado
            >
              <span className="option-icon">{type.icon}</span>
              <span className="option-name">{type.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="selection-section">
        <h2>Pista</h2>
        <div className="options-grid">
          {tracks.map((track) => (
            <div 
              key={track.id}
              className="option-card selected" // Siempre seleccionado
            >
              <span className="option-icon">{track.icon}</span>
              <span className="option-name">{track.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="action-buttons">
        <button className="back-button" onClick={handleBack}>
          🔙 Volver
        </button>
        <button 
          className="join-button"
          onClick={handleJoin}
        >
          🚦 Crear Partida
        </button>
      </div>
    </div>
  );
};

export default JoinMatch;