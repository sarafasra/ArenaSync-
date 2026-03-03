import React from "react";
import '../styles/app.css'
import myImage from "./image.jpg";
function Header() {
  return (
    <div className=" relative flex flex-col items-center justify-start h-screen p-4 " >
      <h1 className="text-6xl font-bold text-red-600">Good Morning  <br />Samuel Walker!</h1>
<input type="text" placeholder="search"   className="border p-2 rounded mb-4"  />

  <img src={myImage} alt="image" className="w-64 h-64 object-cover" />
    </div>
  );
}

export default Header;