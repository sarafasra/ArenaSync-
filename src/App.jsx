import React, { useState } from "react";
import Header from "./Header.jsx";
import TournamentCard from "./components/TournamentCard.jsx";
import { tournamentData } from "./data/tournamentDB.jsX";

function App() {
  const [tournaments, setTournaments] = useState(tournamentData);
  const [searchTerm, setSearchTerm] = useState("");

const addParticipant = (participant, tournamentId) => {
  // juste ajouter le participant direct dans la carte
  setTournaments((prev) =>
    prev.map((t) => {
      if (t.id === tournamentId) {
        return {
          ...t,
          participants: [...t.participants, participant] // simple push
        };
      }
      return t;
    })
  );
};

  const filteredTournaments = tournaments.filter((t) =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {filteredTournaments.map((tournament) => (
          <TournamentCard
            key={tournament.id}
            tournament={tournament}
            onSubmit={(participant) => addParticipant(participant, tournament.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;