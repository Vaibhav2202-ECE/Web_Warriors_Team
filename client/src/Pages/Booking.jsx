import React from 'react';

function HospitalList({ hospitals, userName, phoneNumber }) {
  return (
    <div id="hospital">
      <div className="heading"><span> Hospitals </span></div>
      <div id="line"></div>

      <div id="hospital-list">
        {hospitals.map((hospital, index) => (
          <div className="hospital-item" key={index}>
            <div className="hospital-name">{hospital.name}</div>
            <div className="hospital-address">{hospital.address}</div>
            <form action="/hospital" method="post">
              <input name="userName" value={userName} style={{ display: 'none' }} />
              <input name="phoneNumber" value={phoneNumber} style={{ display: 'none' }} />
              <input name="hospitalName" value={hospital.name} style={{ display: 'none' }} />
              <input name="hospitalAddress" value={hospital.address} style={{ display: 'none' }} />
              <button type="submit" className="hospital-button">BOOK NOW</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HospitalList;
