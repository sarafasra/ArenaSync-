import { useState } from "react";
import RegistrationForm from "./RegistrationForm";

export default function TournamentCard({ tournament }) {

const [isRegistered, setIsRegistered] = useState(false);
const [showForm, setShowForm] = useState(false);

const handleClick = () => {

if(!isRegistered){
setShowForm(true);   // يبان الفورمولير
}

setIsRegistered(!isRegistered);

}

return(

<div className="bg-white p-4 rounded-xl shadow">

<h2>{tournament.title}</h2>

<p>{tournament.description}</p>

<button
onClick={handleClick}
className={  "bg-green-500 text-white p-2 rounded"}
>

{ "S'inscrire"}

</button>

{/* الفورمولير يبان غير منين نكليكي */}

{showForm && <RegistrationForm />}

</div>

)

}