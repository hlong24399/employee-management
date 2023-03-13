import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Employee({ onSelectId, onContactStat, onFlag }) {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:8888/api/contact");
    const data = response.data;
    setUser(data);

    // call props handler function
    var statData = {};
    statData.total = data.length;

    var totalExp = 0;
    data.map((item) => {
      totalExp += item.experience;
    });

    statData.avgExp = Math.round((totalExp / data.length) * 100) / 100;
    onContactStat(statData);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8888/api/contact/${id}`);
    getUsers();
  };

  return (
    <div>
      <div className="employee">
        <div className="employee-inner row my-2">
          <div  className="col col-4">
            <h4 style={{marginLeft:"-40px"}}>Name</h4>
          </div>
          <div className="col col-3">
            <h4>Email</h4>
          </div>
          <div className="col col-5">
            <h4>Actions</h4>
          </div>
        </div>

        <div className="">
          {users.map((user) => {
            return (
              <div key={user._id} className="employee-inner row my-2">
                <div
                  className="col col-4"
                  style={{
                    paddingRight: "80px",
                  }}
                >
                  <h4>{user.userName}</h4>
                </div>

                <div className="col col-3">
                  <p>{user.email}</p>
                </div>

                <div className="employee-bt col col-5 .text-right">
                  <button
                    className="btn btn-danger mx-4 my-2"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                  
                  <Link to={`/edit/${user._id}`}>
                    <button className="btn btn-secondary mx-4 my-2">
                      Edit
                    </button>
                  </Link>

                  <button
                    className="btn btn-info mx-4 my-2"
                    onClick={() => {
                      onSelectId(user._id);
                      onFlag(user.country);
                    }}
                  >
                    select
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <hr></hr>
      </div>
    </div>
  );
}

export default Employee;
