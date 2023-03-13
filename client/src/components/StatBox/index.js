import React from "react";

function StatBox({ stat }) {
  return (
    <div>
      <h4>Overall View</h4>
      <div className="mt-3">
        <p> Total Employees: {stat?.total} </p>
        <p> Average Experience: {stat?.avgExp} </p>
      </div>
    </div>
  );
}

export default StatBox;
