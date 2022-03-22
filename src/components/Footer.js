import React from "react";
import Logo from "../images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <img src={Logo} alt="Guerrin logo" />
      <ul>
      
        <li><a href="#historia">Historia</a></li>
        <li><a href="#galeria">Galería</a></li>
        <li><a href="#nuestra-casa">Nuestra Casa</a></li>
      </ul>
      <div>
        <FontAwesomeIcon
          icon={faWhatsapp}
          size="2x"
          aria-hidden="true"
          className="icon"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
          aria-hidden="true"
          className="icon"
        />
      </div>
      <p style={{textAlign:'center'}}>© 2022. No hay derechos reservados. Esto es una demo.</p>
    </div>
  );
}

export default Footer;
