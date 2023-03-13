import React from "react";
import { useState, useEffect } from "react";

function InfoBox({selectId}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!selectId) {
      // No ID is selected, reset the data state
      setData(null);
      console.log("here");
      return;
    }

    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8888/api/contact/${selectId}`);
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [selectId]);

  return (
    <div>
      {selectId ? (
        <div>
          <h4>User</h4>
          {/* <p>{selectId}</p> */}
          <p>Age : {data?.age}</p>
          <p>Phone number: {data?.phone}</p>
          <p>Experience : {data?.experience}</p>
          <p>Country : {data?.country}</p>
        </div>
      ) : (
        <div>
          
        <h4>User</h4>
        <p>No user selected</p>
        </div>
      )}
    </div>
  );
}

export default InfoBox;
