import React, { useState } from "react";
import "../Contact Form/ContactForm.css";

export default function ContactForm() {
  const [inputs, setInputs] = useState({
    names: "",
    phone: "",
    email: "",
    image: "",
  });
  // console.log(inputs);

  const handelChange = (e) => {
    const names = e.target.name;
    const value = e.target.value;
    console.log(names);
    console.log(value);
    setInputs({ ...inputs, [names]: value });
  };

  const handelClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container contactForm-Wrapper">
      <form className="fullform-body" onSubmit={handelClick}>
        <div className="form_body">
          <label htmlFor="Name">
            <h6>Name</h6>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            className="inputName"
            id="Name"
            name="names"
            value={inputs.names}
            onChange={handelChange}
          />
          <label htmlFor="Phone">
            <h6>Phone No</h6>
          </label>
          <input
            type="tel"
            placeholder="Enter Phone"
            className="inputPhone"
            id="Phone"
            name="phone"
            value={inputs.phone}
            onChange={handelChange}
          />
          <label htmlFor="Email">
            <h6>Email</h6>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="inputEmail"
            id="Email"
            name="email"
            value={inputs.email}
            onChange={handelChange}
          />
          <label htmlFor="Image">
            <h6>Profile Pic</h6>
          </label>
          <input
            type="file"
            placeholder="Choose image"
            className="inputImage"
            name="image"
            id="Image"
            value={inputs.image}
            onChange={handelChange}
          />
        </div>
        <div>
          <input type="submit" value="ADD" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
