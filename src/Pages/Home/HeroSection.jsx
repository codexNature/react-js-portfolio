import React from 'react'

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Olusola</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--colour">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
            I'm Olusola Jaiyeola, a Full Stack Developer who specializes in
            creating stunning, responsive websites and web applications using
            cutting-edge technologies.
          </p>
        </div>
        <button
          onClick={() => 
          (window.location = "mailto:olusolajaiyeola@gmail.com")}
          className="btn btn-primary"
        >
          Get In Touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section Image" />
      </div>
    </section>
  );
}
