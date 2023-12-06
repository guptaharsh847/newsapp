        import React from 'react'

        export default function About() {
               return (
            <>
    <div className="accordion"  id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Our Offerings
      </button>
    </h2>
    <div id="collapseOne"  className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Whether you need to convert text from lowercase to uppercase, vice versa, remove extra spaces, or accurately count words and characters, our intuitive and user-friendly platform has you covered.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Welcome to TextUtils
      </button>
    </h2>
    <div id="collapseTwo"  className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Welcome to TextUtils, your go-to for quick and easy text manipulation. At TextUtils, we understand the importance of efficient text handling, which is why we offer a range of tools to help you transform your text effortlessly.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Our Mission
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Our mission is to simplify the way you interact with text, providing powerful yet accessible tools for all your text processing needs. Join us at TextUtils and experience the convenience of seamless text transformation today
      </div>
    </div>
  </div>
  
</div>

        </>)
        }
