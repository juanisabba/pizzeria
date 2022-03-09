import React from "react";
import Salon from "../images/salon.jpg";

function Banner3() {
  return (
    <div id="nuestra-casa" className="banner3">
      <img src={Salon} alt="" />
      <div className="banner3__info">
        <h1>NUESTRA CASA</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae
          cum, illo obcaecati explicabo doloremque velit dignissimos fuga
          reiciendis, voluptatibus asperiores, excepturi alias qui illum
          repellat aut quam adipisci odio.
        </p>
      </div>
    </div>
  );
}

export default Banner3;
