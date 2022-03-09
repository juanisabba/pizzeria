import React, {  useState } from 'react'
import Logo from '../images/logo.jpg'
import PizzaPromo from '../images/pizza-promo.mp4'
function Header({isOnTop}) {
  const [animationDelay, setAnimationDelay] = useState(false)

    setTimeout(() => {
      setAnimationDelay(true)
    }, 2000);

  return (
    <div className='header' >
      <h1 className={!animationDelay ? 'header__animation' : 'header__title'}>Bienvenidos a Napoli Pizzeria</h1>
      <img onClick={()=>window.scrollTo(0,0)} className={isOnTop === 0 ? 'header__logo' : 'header__logo header__logo-mini'} src={Logo} alt="" />
      <video className='header__video' autoPlay loop muted playsInline>
  <source src={PizzaPromo} type="video/mp4"/>
Your browser does not support the video tag.
</video>
    </div>
  )
}

export default Header