import React from "react";
import '../styles/app.css'
import myImage from "./image.jpg";
function Header() {
  return (
    <div className="  flex flex-col items-center justify-start h-screen p-4 " >
      <h1 className="text-xl font-bold text-red-600">Good Morning  <br />Samuel Walker!</h1>
<input type="text" placeholder="search"   className="border  rounded mb-2"  />

  <img src={myImage} alt="image" className="w-77 h-70 object-cover" />
    </div>
  );
}

export default Header;