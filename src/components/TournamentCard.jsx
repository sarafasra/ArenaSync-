import { useState } from "react";
import StatusBadge from "./StatusBadge";

export default function TournamentCard({ tournament }) {
    const [isRegistered, setIsRegistered] = useState(false)

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">

      <div className="flex justify-between items-center">
        <h2 className="font-semibold">{tournament.title}</h2>
        <StatusBadge status={tournament.status} />
        
      </div>

      <p className="text-gray-500 text-sm mt-2">
        {tournament.description}
      </p>

      <button
          onClick={()=>setIsRegistered(!isRegistered)}
        className={isRegistered ? "bg-red-500 text-white p-2" : "bg-green-500 text-white p-2  rounded-[20px] "}
>
    {isRegistered ? "Se désinscrire" : "S'inscrire"}


</button>

      <div className="text-sm mt-3 space-y-1 text-gray-600">
        <p>👥 {tournament.participants.length} participants</p>
        <p>🏆 {tournament.type}</p>
        <p>📅 {tournament.date}</p>
        <p>📍 {tournament.location}</p>
      </div>

    </div>
  );
}

