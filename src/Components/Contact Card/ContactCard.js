import React from "react";
import "../Contact Card/ContactCard.css";

export default function ContactCard() {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://placeimg.com/640/480/any"
          alt="Card image cap"
        />

        <ul className="list-group list-group-flush cardDetail">
          <li className="list-group-item">Name:</li>
          <li className="list-group-item">Mobile No:</li>
          <li className="list-group-item">Email:</li>
        </ul>
      </div>
    </>
  );
}
