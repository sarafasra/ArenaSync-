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
      <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
      </div>
    </div>
  </div>
  
 
</div>
  );
}

export default Header;