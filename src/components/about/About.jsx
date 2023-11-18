import React from 'react'
import './about.css'
import ME from '../../assets/profile-2.jpeg'
function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
<div className="about__me_image">
  <img src={ME} alt="proifle" />
</div>
        </div>

        <div className="about__content">
<div className="about__cards">
<article className="about__card">
<i className="fa-regular fa-award about__icon"></i>
<h5>Experience</h5>
<small>3+ years Working</small>
</article>

<article className="about__card">
<i className="fa-regular fa-users about__icon"></i>
<h5>Clients</h5>
<small>300+ Worldwide</small>
</article>

<article className="about__card">
<i className="fa-regular fa-palette about__icon"></i>
<h5>Experience</h5>
<small>120+ Art work</small>
</article>
</div>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, natus, repellat distinctio qui error eius aperiam nobis odio laudantium asperiores accusamus sit eaque hic? Hic inventore repudiandae eius optio perferendis?</p>
<a href="#contact" className='btn btn-primary'>Contact me</a>

        </div>
      </div>
    </section>
  )
}

export default About