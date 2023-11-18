import React, { useState } from 'react'
import './nav.css'
function Nav() {
  const [activeNav,setactive] = useState('#');  
  return (
    <nav>
      <a href="#" className={activeNav ==='#' ? 'active' : ''}><i class="fa-regular fa-house"></i></a>
      <a href="#about" onClick={()=> setactive('#about') } className={activeNav ==='#about' ? 'active' : ''}><i class="fa-regular fa-user"></i></a>
      <a href="#experience" onClick={()=> setactive('#experience') } className={activeNav ==='#experience' ? 'active' : ''}><i class="fa-regular fa-book"></i></a>
      <a href="#services" onClick={()=> setactive('#services') } className={activeNav ==='#services' ? 'active' : ''}><i class="fa-regular fa-handshake"></i></a>
      <a href="#contact" onClick={()=> setactive('#contact') } className={activeNav ==='#contact' ? 'active' : ''}><i class="fa-regular fa-envelope"></i></a>
    </nav>
  )
}

export default Nav