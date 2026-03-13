import React, { useState } from "react";
import "../styles/app.css";
import Header from "./Header.jsx";
import TournamentCard from "./components/TournamentCard.jsx";
import { tournamentData } from "./data/tournamentDB.jsx";

function App() {

  const [participants, setParticipants] = useState([]);

  const addParticipant = (participant) => {
    setParticipants([...participants, participant]);
  };

  return (
    <div>

      <Header />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

        {tournamentData.map((tournament) => (

          <TournamentCard
            key={tournament.id}
            tournament={tournament}
            onSubmit={addParticipant}
          />

        ))}

      </div>

      <div>

        <h2>Liste des participants</h2>

        <ul>
          {participants.map((p, i) => (
            <li key={i}>
              {p.name} - {p.equipe} - {p.niveau}
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default App;