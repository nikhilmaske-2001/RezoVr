import React from "react";
import "./Contact.css";
import contact from "../../images/contact.PNG";

function Contact() {
  return (
    <div className="contact-page" id="Contact">
      <div className="left-part">
        <h1>Request a Callback</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <form>
          <label for="fname">First Name</label>
          <input></input>
          <label for="fname">Email id</label>
          <input></input>
          <label for="fname">Mobile no.</label>
          <input></input>
        </form>
        <button className="submit-btn">Submit</button>
      </div>
      <div className="right-part">
        <img className="contact-img" src={contact} alt={contact} />
      </div>
    </div>
  );
}

export default Contact;
