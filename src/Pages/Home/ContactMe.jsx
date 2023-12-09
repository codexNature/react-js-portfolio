import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub-title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text--lg">Lorem ipsum dolor sit amet, consectetur adip</p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact--form--container"
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>

          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="Last-name"
              required
            />
          </label>

          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>

          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span c lassName="text-md">
            Choose a topic
          </span>
          <select id="choose-topic" className="contact--input contact">
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2.</option>
            <option>Item 3</option>
          </select>
        </label>

        <label 
        htmlFor="message" 
        className="contact--label">
          <span 
          lassName="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="message"
            id="message"
            rows="8"
            placeholder="Type your message"
          />
        </label>

        <label 
        htmlFor="checkbox" 
        className="checkbox--label">
          <input 
          type="checkbox" 
          required name="checkbox" 
          id="checkbox" />
          <span 
          className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
