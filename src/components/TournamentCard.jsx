import { useState } from "react";
import RegistrationForm from "./RegistrationForm.jsx";

export default function TournamentCard({ tournament, onSubmit }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">{tournament.title}</h2>
      </div>

      <p className="text-gray-500 text-sm mt-2">{tournament.description}</p>

      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-green-500 text-white p-2 rounded-[18px] mt-2"
      >
        S'inscrire
      </button>

      {showForm && (
        <RegistrationForm
          onSubmit={(participant) => onSubmit(participant)}
        />
      )}

      <div className="text-sm mt-3 space-y-1 text-gray-600">
        <p>👥 {tournament.participants.length} participants</p>
        <p>🏆 {tournament.type}</p>
        <p>📅 {tournament.date}</p>
        <p>📍 {tournament.location}</p>
      </div>

      {tournament.participants.length > 0 && (
        <div className="mt-3 text-sm text-gray-700">
          <p className="font-semibold">Participants:</p>
          <ul className="list-disc ml-5">
            {tournament.participants.map((p, i) => (
              <li key={i}>
                {p.name} - {p.equipe} - {p.niveau}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}