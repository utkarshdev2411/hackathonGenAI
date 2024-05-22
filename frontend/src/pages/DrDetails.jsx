// React Component JSX
// import React from "react";
import "../styles/DrDetails.css"; // Make sure to create this CSS file

const DrDetails = () => {
  return (
    <div id="doctor-profile-container">
      <div id="profile-section">
        <div id="doctor-info">
          <ProfileCard />
        </div>

        {/* <div className="clinic-info">
          <h3>Clinic Address</h3>
          <p>Timings</p>
          <button>Book Online Appointment</button>
        </div> */}
      </div>

      <div className="appointment-section">
        <AppointmentComponent/>
      </div>
    </div>
  );
};


function AppointmentComponent() {
  return (
    <div className="clinic-appointment">

      <div className="header">
        <h1>Clinic Appointment</h1>
        <span className="price-tag">Rs 2000</span>
      </div>

      <div className="date-picker">
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" />
      </div>

      <div className="time-picker">
        <label htmlFor="time">Time</label>
        <input type="time" id="time" name="time" />
      </div>




      <div className="date-tabs">
        <button className="date-tab">Today</button>
        <button className="date-tab">Tomorrow</button>
        <button className="date-tab">Fri, 24 May</button>
      </div>

      <div className="time-slots">
        <div className="morning-slots">
          <h3>Morning</h3>
          <button className="time-slot">11:30 AM</button>
          <button className="time-slot">11:45 AM</button>
        </div>
        <div className="afternoon-slots">
          <h3>Afternoon</h3>
          <button className="time-slot">12:00 PM</button>
          <button className="time-slot">12:15 PM</button>
        </div>
      </div>
    </div>
  );
}



const ProfileCard = () => {
  return (
    <div id="profile-card">
      <div id="img">
        <img src="src/assets/demodr.jpg" alt="Profile" id="profile-image" />
      </div>

      <div className="profile-header">
        <h1>Dr. Dheeraj Setia </h1>
        <p>BDS, MDS - Conservative Dentistry & Endodontics,</p>
        <p>MDS - Implantologist, Cosmetic/Aesthetic Dentist</p>
        <p>
          <strong>23+ years Experience Overall </strong>
        </p>

        <div className="profile-body">
          <div className="rating-verified">
            Trusted Care. Lasting Smiles.
            <div className="verified-checkmark">98% (293 ratings) Verified</div>
          </div>
          <p>
            Dr Dheeraj Setia is a principal dentist at The Dental Roots Gurgaon
            providing patients with treatment involving all aspects of dentistry
            including Single Sitting Root Canal, more...
          </p>
        </div>
      </div>
    </div>
  );

  
};

export default DrDetails;
