import React from 'react'

export default function HeroSection() {
  return (
    <section id='heroSection' className='hero--section'>
        <div className='hero--section--content--box'>
          <div className="hero--section--content">
            <p className='section--title'>Hey, I'm Olusola</p>
            <h1 className='hero--section--title'>
              <span className='hero--section--title--colour'>Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className='hero--section--description'>
              My Name Olusola Jaiyeola, I'm a Full Stack Developer, 
              <br />
              I build beautiful and responsive websites and web applications using the latest technologies.
            </p>
          </div>
          <button className='btn btn-primary'>Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero_img.png" alt="Hero Section Image" />
        </div>
    </section>
  )
}
