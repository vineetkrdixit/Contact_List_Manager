import React from "react";
import "../Contact Form/ContactForm.css";

export default function ContactForm() {
  return (
    <div className="container contactForm-Wrapper">
      <form className="fullform-body">
        <div className="form_body">
          <label htmlFor="Name">
            <h6>Name</h6>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            className="inputName"
            id="Name"
          />
          <label htmlFor="Phone">
            <h6>Phone No</h6>
          </label>
          <input
            type="tel"
            placeholder="Enter Phone"
            className="inputPhone"
            id="Phone"
          />
          <label htmlFor="Email">
            <h6>Email</h6>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="inputEmail"
            id="Email"
          />
          <label htmlFor="Image">
            <h6>Profile Pic</h6>
          </label>
          <input
            type="file"
            placeholder="Choose image"
            className="inputImage"
            id="Image"
          />
        </div>
        <div>
          <input type="button" value="ADD" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
