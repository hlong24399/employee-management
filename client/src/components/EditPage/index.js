import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditPage() {
  const { userId } = useParams();
  const [user, setUser] = useState({userName: "", email: "", experience: 0, age: 0, phone: 0, country: ""});
  const [oldUser, setOldUser] = useState(null);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const loadUser = async () => {
    const response = await fetch(`http://localhost:8888/api/contact/${userId}`);
    const data = await response.json();
    setOldUser(data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();


    fetch(`http://localhost:8888/api/contact/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
         
          console.log("Success:", data);
      })
      .catch((error) => console.error(error));
  };

  let content;
  if (userId == 0) {
    content = <div> no user is being edited </div>;
  } else {
    content = (
      <div>
        <div className="original">
            <h4>Original User</h4>
            <div>
                <p>Username: {oldUser?.userName}</p>
                <p>Email: {oldUser?.email}</p>
                <p>Age: {oldUser?.age}</p>
                <p>Phone: {oldUser?.phone}</p>
                <p>Experience: {oldUser?.experience}</p>
                <p>Country: {oldUser?.country}</p>
            </div>
        </div>
        <hr></hr>
        <h4>Update User</h4>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label>Username:</label>
            <input
              className="form-control"
              type="text"
              onChange={handleInputChange}
            />
          </div>

          <div className="">
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              onChange={handleInputChange}
            />
          </div>

          <div className="">
            <label>Age:</label>
            <input
              className="form-control"
              type="text"
              onChange={handleInputChange}
            />
          </div>

          <div className="">
            <label>Phone:</label>
            <input
              className="form-control"
              type="text"
              onChange={handleInputChange}
            />
          </div>

          <div className="">
            <label>Experience:</label>
            <input
              className="form-control"
              type="text"
              onChange={handleInputChange}
            />
          </div>

          <div className="">
            <label>Country:</label>
            <input
              className="form-control"
              type="text"
              onChange={handleInputChange}
            />
          </div>

          <button type="submit">Update User</button>
        </form>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default EditPage;
