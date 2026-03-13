import React, { useState } from "react";

export default function RegistrationForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [equipe, setEquipe] = useState("");
  const [niveau, setNiveau] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return; 

    onSubmit({ name, equipe, niveau });


    setName("");
    setEquipe("");
    setNiveau("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-4 rounded mt-2 flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Equipe"
        value={equipe}
        onChange={(e) => setEquipe(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Niveau"
        value={niveau}
        onChange={(e) => setNiveau(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded mt-2"
      >
        Valider
      </button>
    </form>
  );
}