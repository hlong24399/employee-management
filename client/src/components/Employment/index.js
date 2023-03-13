import React from "react";
import { useState } from "react";
import axios from "axios";

function Employment() {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState(0);
  const [country, setCountry] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("age", age);
    formData.append("phone", phone);
    formData.append("experience", experience);
    formData.append("country", country);
    console.log(formData);

    const jsonObject = {};
    for (const [key, value] of formData.entries()) {
      jsonObject[key] = value;
    }

    axios
      .post("http://localhost:8888/api/contact", jsonObject)
      .then((response) => {
        console.log(response);
      }).catch
      ((error) => {
        console.log(error);
      }).then(() => {
        alert("Successfully added");
      }).catch
      ((error) => {
        alert("Error")});
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="">
        <label>Name:</label>
        <input
          className="form-control"
          type="text"
   
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="">
        <label>Email:</label>
        <input
          className="form-control"
          type="email"
         
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="">
        <label>Age:</label>
        <input
          className="form-control"
          type="text"
     
          onChange={(event) => setAge(event.target.value)}
        />
      </div>
      <div className="">
        <label>Phone:</label>
        <input
          className="form-control"
          type="text"
       
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>

      <div className="">
        <label>Experience:</label>
        <input
          className="form-control"
          type="text"
        
          onChange={(event) => setExperience(event.target.value)}
        />
      </div>

      <div className="">
        <label>Country:</label>
        <input
          className="form-control"
          type="text"
   
          onChange={(event) => setCountry(event.target.value)}
        />
      </div>

      <button className="btn btn-secondary my-2" type="submit">Submit</button>
    </form>
  );
}

export default Employment;
