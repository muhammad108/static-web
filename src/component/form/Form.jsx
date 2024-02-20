import React from "react";
import "./form.css";
function Form() {
  return (
    <>
      <div id="form" className="form-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h4>Lorem Assumenda, aspernatur? Minima recusandae vel quia.Tempore unde in sapiente eius ab.</h4>
            </div>
            <div className="col-md-3">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="john"
              />
               <label htmlFor="firstName">bussiness/organization*</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Enter Bussiness Name"
              />
               <label htmlFor="firstName">john</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter Bussiness Name"
              />
               <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
              />
            </div>

            <div className="col-md-3">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                required
              />
                 <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                required
              />
                 <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                required
              />
                 <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
        </div>
          <button className="submit-btn" type="submit">submit</button>
      </div>
    </>
  );
}

export default Form;
