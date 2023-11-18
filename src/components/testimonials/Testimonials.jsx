import React from 'react'
import './testimonials.css'
import Avatar1 from '../../assets/profile-1.jpeg'
import Avatar2 from '../../assets/profile-3.jpeg'
import Avatar3 from '../../assets/profile-4.jpeg'
import Avatar4 from '../../assets/profile-5.jpeg'
import { useEffect } from 'react'
import { useState } from 'react'

function Testimonials() {
  const reviews =[
    {id:1 , img:Avatar1, name:'Ernest Gevara', review:'Lorem ipsumefdhahbfabafb dolor sit amet consectetur, adipisicing elit. Debibfbngfnatis nostrum deleniti quisquam, itaque aspernatur eveniet, totam in recusandae reprehendefnnadgnrit explicabo nesciunt omnis vitae! Non magnam perspiciatis laborum voluptgnfsnatum eius aut?' },
    {id:2 , img:Avatar2, name:'Helary klinton', review:'Lorem gergefgdefabgipsum dolor sit amet consectetur, adipisicing elit. Debibhabhgfebdaftis nostrum deleniti quisquam, itaque aspernatur eveniet, tnbaotam in recusandae repregnsazhenderit explicabo nesciunt omnis vitae! Non magnam perspiciatis laborum voluptatum eius aut?' },
    {id:3 , img:Avatar3, name:'Kim jongun', review:'Lorem ipsum dolor sit amet consectetur, adipisicingnrtansgn elit. Deartnaeritis nostrum deleniti quisquam, itaque aspernatur eveniet, totam in recusandfnadae rfandeprehenderit explicabafo nesciunt omnis vitae! Non magnam perspiciatis laborum voluptatum eius agsnfgut' },
    {id:4 , img:Avatar4, name:'Yuki Samora', review:'Lorem ipsum doerbhatfn brfbernbalor sit amet consectetur, adipgnfdnisicing elit. Debitis nostrum deleniti quisquam, itaque aspernatur eveniet, totam in recusandae reprehendegfnsrit explicabo nesciunt omnis vitae! Non magnam perspiciatis laborum voluptatsdnagaum eius aut' },
  ];
 const [currentEl,setCurrEl] = useState(0);
  
 const [userReview , setReview] = useState(reviews[currentEl]);

function handleNext(){
setCurrEl(prev=>{
  if (prev==reviews.length-1) {
    return(prev=0)
  }
return(prev+=1);
})
setReview(
  
    reviews[currentEl]

);
// console.log(currentEl);
}


function handleprev(){
  setCurrEl(prev=>{

  if (prev==0) {
    return(
    prev=reviews.length-1
  )
  }
  return(prev-=1)
  

})
setReview(
  
    reviews[currentEl]

);
// console.log(prev);

}


  return (
    <section id='testimonial'>

      <h5>Review From Clients</h5>
      <h2>Testimonial</h2>
      <div className="container testimonial__container">

        <article key={userReview.id} className="testimonial">
          <div className="client__avatar">
            <img id='img' src={userReview.img} alt="Avatar" />
          </div>
            <h5 id='name' className='client__name'>{userReview.name}</h5>
            <small id='review' className='client__review'>{userReview.review}</small>


            <div className="button-container">
            <button onClick={handleprev} className="prev-btn">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={handleNext} className="next-btn">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

        </article>


        
      </div>
    </section>
  )
}

export default Testimonials