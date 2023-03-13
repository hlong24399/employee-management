import React, { useState } from "react";
import Employee from "../Employee";
import InfoBox from "../InfoBox";
import StatBox from "../StatBox";
import Flag from "../Flag";

function Contact() {

  const [selectedId, setSelectedId] = useState(null);
  const [contactStat, setContactStat] = useState(null);
  const [flag, setFlag] = useState(null);
  function handleSelectId(userId) {
    setSelectedId(userId)
  }

  function handleContactStat(stat) {
    setContactStat(stat)
  }

  function handleFlag(flag) {
    flag = flag.toLowerCase();
    setFlag(flag);
  }


  return (
    <div>
      <div className=".text-center row info-sec">
        <div className="contact-inner col col-4">
          <StatBox stat={contactStat}> </StatBox>
        </div>

        <div className="contact-inner col col-4">
          <h4>Country</h4>
          <Flag flag={flag}/>
        </div>
        <div className="contact-inner col col-4">
          <InfoBox selectId={selectedId}></InfoBox>
        </div>
      </div>

      <div className="bot-part">
        <div className="bot-inner">
          <Employee onFlag={handleFlag} onSelectId={handleSelectId} onContactStat={handleContactStat}></Employee>
        </div>
      </div>
    </div>
  );
}

export default Contact;
