import React from 'react'
import './footer.css'
function Footer() {
  return (
    <footer>
<a href="#" className='footer__logo'>Vlad</a>


<ul className='permalinks'>
  <li><a href="#"></a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#testimonial">Testimonial</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

<div className="footer__social">

  <a href="https://facebook.com"><i class="fa-brands fa-facebook-messenger"></i></a>
  <a href="https://twitter.com"><i class="fa-brands fa-twitter"></i></a>
  <a href="https://instagram.com"><i class="fa-brands fa-instagram"></i></a>
</div>


<div className="footer__copyright">
  <small>&copy; Vlad . All rights reseved</small>
</div>

    </footer>
  )
}

export default Footer