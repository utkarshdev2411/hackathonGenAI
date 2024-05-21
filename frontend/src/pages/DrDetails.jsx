// React Component JSX
import React from "react";
import "../styles/DrDetails.css"; // Make sure to create this CSS file

const DrDetails = () => {
  return (
    <div className="doctor-profile-container">
      <div className="profile-section">
        <div className="doctor-info">
          <ProfileCard />
        </div>

        {/* <div className="clinic-info">
          <h3>Clinic Address</h3>
          <p>Timings</p>
          <button>Book Online Appointment</button>
        </div>
      </div>

      <div className="appointment-section">
        <h2>Pick a time slot</h2>
        <div className="date-picker">
          Date picker component goes here
        </div>
        <div className="time-slots">
          Time slots go here
        </div> */}
      </div>
    </div>
  );
};

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div>
        <img
          src="src/assets/demodr.jpg"
          alt="Profile"
          className="profile-image"
        />
      </div>

      <div className="profile-header">
        <h1>Dr. Dheeraj Setia </h1>
        <p>BDS, MDS - Conservative Dentistry & Endodontics,</p>
        <p>MDS - Implantologist, Cosmetic/Aesthetic Dentist</p>
        <p>
          <strong>23+ years Experience Overall </strong>
          <span className="dental-icon">DENTAL</span>
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
