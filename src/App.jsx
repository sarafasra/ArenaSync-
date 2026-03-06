import React from "react";
import '../styles/app.css';
import Header from './Header.jsx';
import TournamentCard from "./components/TournamentCard.jsx";
import { tournamentData } from "./data/tournamentDB.jsx";

function App() {
  return (
    <div>
      <Header />
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {tournamentData.map((tournament) => (
          <TournamentCard
            key={tournament.id}
            tournament={tournament}
          />
        ))}
      </div>
        
    </div>
  );
}

export default App;