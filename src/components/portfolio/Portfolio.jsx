import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/d1.jpg'
import IMG2 from '../../assets/d2.svg'
import IMG3 from '../../assets/d3.jpg'
import IMG4 from '../../assets/d4.jpg'
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Reacent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className="portfolio__item">
          <div className="portfolio__item_image">
          <img src={IMG1} alt="work image" />
          </div>

            <h3>UI Design</h3>
            <div className='portfolio__item_cta'>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item_image">
          <img src={IMG2} alt="work image" />

          </div>

            <h3>App UX Design</h3>
            <div className='portfolio__item_cta'>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item_image">
          <img src={IMG3} alt="work image" />

          </div>

            <h3>Appareal Design</h3>
            <div className='portfolio__item_cta'>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item_image">
          <img src={IMG4} alt="work image" />

          </div>

            <h3>PhotoShop Real Design</h3>
            <div className='portfolio__item_cta'>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item_image">
          <img src={IMG1} alt="work image" />
          </div>

            <h3>UI Design</h3>
            <div className='portfolio__item_cta'>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item_image">
          <img src={IMG4} alt="work image" />

          </div>

            <h3>PhotoShop Real Design</h3>
            <div className='portfolio__item_cta'>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio