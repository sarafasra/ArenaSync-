import React, { useState } from "react";
import '../styles/app.css';
import Header from './Header.jsx';
import TournamentCard from "./components/TournamentCard.jsx";
import { tournamentData } from "./data/tournamentDB.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";

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
          />
        ))}
      </div>

      <div>

        <RegistrationForm onSubmit={addParticipant} />


   

      </div>

    </div>
  );
}

export default App;