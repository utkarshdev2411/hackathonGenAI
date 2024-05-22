import React from "react";
import "../styles/ApptBook.css";

function ApptBook() {
  return (
    <div className="hero">
      <AppointmentCard />
      <PatientDetails />
    </div>
  );
}

const AppointmentCard = () => {
  return (
    <div id="appointment-card">
      <h2>In-clinic Appointment</h2>

      <div className="appointment-details">
        <p>
          <span>📅</span>On May 22, 2024
        </p>
        <p>
          <span>⏰</span>At 11:30 AM
        </p>
      </div>

      <div className="doctor-details">
        <img src="src/assets/demodr.jpg" alt="Doctor's Avatar" />
        <div>
          <h3>Dr. Kapil Garg</h3>
          <p>
            BDS, MDS - Periodontics Surgeon, Periodontist, Implantologist,
            Dental Dentist
          </p>
        </div>
      </div>

      <div className="clinic-details">
        <p>
          <span>🏥</span>City Dental
        </p>
        <p>E-986, Saraswati Vihar, Delhi</p>
      </div>
    </div>
  );
};

const PatientDetails = () => {
  return (
    <div className="patient-details">
      <h2>Patient Details</h2>

      <p>This in-clinic appointment is for:</p>

      <div className="radio-group">
        <div>
          <input
            type="radio"
            id="aman"
            name="patient"
            value="Aman Soni"
            checked
          />
          <label htmlFor="aman">Aman Soni</label>
        </div>

        <div>
          <input
            type="radio"
            id="someoneElse"
            name="patient"
            value="Someone Else"
          />
          <label htmlFor="someoneElse">Someone Else</label>
        </div>
      </div>

      <div className="info-inputs">
        <label>Patient's Full Name</label>
        <input type="text" placeholder="eg Aman Soni" />
        <label>Mobile</label>
        <input type="text" placeholder="eg 9555565759" />
        <label>Your Email (Optional)</label>
        <input type="text" placeholder="eg aman.soni0713@gmail.com" />
      </div>

      <div className="payment-options">
        <p>Choose a payment option to Book Appointment:</p>
        <div className="radio-group">
          <div>
            <input type="radio" id="free" name="payment" value="free" checked />
            <label htmlFor="free">₹400 - Pay Online </label>
          </div>
          <div> 
            <input type="radio" id="payLater" name="payment" value="payLater" />
            <label htmlFor="payLater">₹400 - Pay at clinic</label>
          </div>
        </div>
      </div>
      <button className="confirm-button">Confirm FREE Clinic Visit</button>
    </div>
  );
};

export default ApptBook;
