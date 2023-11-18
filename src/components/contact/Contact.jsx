import React from 'react'
import './contact.css'
function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
<div className="container contact__container">

  <div className="contact__options">

<article className="contact__option">
<i class="fa-regular fa-envelope contact__option__icon"></i>
  <h4>Email</h4>
  <h5>AnyEmail@gmail.com</h5>
  <a href="#">Email Me</a>
</article>


<article className="contact__option">
<i class="fa-brands fa-facebook-messenger contact__option__icon"></i>
  <h4>Messenger</h4>
  <h5>egatortutorial</h5>
  <a href="#">Send Me Meesage</a>
</article>



<article className="contact__option">
<i class="fa-brands fa-whatsapp contact__option__icon"></i>
  <h4>What'sApp</h4>
  <h5>09987654321</h5>
  <a href="#">Text Me</a>
</article>
  </div>

<form action="">
  <input type="text" name='name' placeholder='Full name' required/>
  <input type="email" name='email' placeholder='Email Address' required/>
<textarea name="message" rows="7" placeholder='Your Message' required></textarea>
<button type='submit' className='btn btn-primary'>Send Message</button>
</form>

</div>
    </section>
  )
}

export default Contact