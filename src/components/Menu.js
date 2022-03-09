import React from "react";
import Logo from "../images/logo.jpg";

function Menu({setOpen}) {
  return (
    <div className="menu">
      <img onClick={()=>setOpen(false)} src={Logo} alt="Guerrin logo" />
      <ul>
      <li><a onClick={()=>setOpen(false)} href="#historia">Historia</a></li>
        <li><a onClick={()=>setOpen(false)} href="#galeria">Galería</a></li>
        <li><a onClick={()=>setOpen(false)} href="#nuestra-casa">Nuestra Casa</a></li>
        <li><a onClick={()=>setOpen(false)} href="#como-llegar">Como Llegar</a></li>
      </ul>
      <div>
        <p className="menu__footer">The best pizza since 1999🍕</p>
      </div>
    </div>
  );
}

export default Menu;
