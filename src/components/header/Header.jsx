import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/person.png'
import HeaderSocial from './HeaderSocial'
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vladimer Putin</h1>
        <h5 className='text-light'> Graphic Designer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="profile" />

          <a href="#contact" className='scroll__down'>scroll down</a>
        </div>
      </div>
    </header>
  )
}

export default Header