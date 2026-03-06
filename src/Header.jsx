import React from "react";
import '../styles/app.css'

import search from "./search.jpg";

function Header() {
  return (
    <div className="bg-blue-600 p-6 pb-16  text-white">
  <div className="flex justify-between items-center">
    <div>
      <p className="text-sm opacity-80">Good Morning,</p>
      <h1 className="text-xl font-bold">Samuel Walker!</h1>
    </div>
    <div className="flex gap-2">
      <div className="bg-white/20 p-2 rounded-full">🔔</div>
     
    </div>
  </div>
  
  <div className="mt-6 flex gap-2">
    <input type="text" placeholder="Search" className="flex-1 p-3 rounded-xl text-black bg-white "/>
    <button className="bg-indigo-800 p-3 rounded-xl">Tune</button>
  </div>
</div>
  );
}

export default Header;