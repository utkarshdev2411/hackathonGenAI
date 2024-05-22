import React from 'react';
import '../styles/Home.css'; // Make sure to name your CSS file accordingly

function Home() {
  return (
    <div className="cosmo-chat">

      <aside className="sidebar">
        <div className="sidebar-up">
          <img className='image' src="src/assets/color_logo.webp" />
          <div className="sidebar-item">New Chat</div>
          <div className="sidebar-item">Chat History</div>
          <div className="sidebar-item">All Agents</div>
        </div>
        <div className="sidebar-down">
          <div className="sidebar-item">Settings</div>
          <div className="sidebar-item">Logout</div>
        </div>
      </aside>

      <main className="main-content">
        <header className="welcome-header">
          <h1>Welcome to Cosmo👋</h1>
        </header>

        <div className="search-container">
          <input type="text" placeholder="Ask anything to Cosmo..." />
        </div>

        <div className='drs'>
          <div className='drcards'><ProfileCard /></div>
          <div className='drcards'><ProfileCard /></div>
        </div>

        <div className="suggested-actions">
          {/* Add buttons for suggested actions */}
        </div>
      </main>


      <footer className="footer">
      </footer>
    </div>
  );
}
const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="logo-section">
        <img src="src/assets/demodr.jpg" alt="logo" />
      </div>

      <div className="info-section">
        <h2 id="dr-name">Dr. Rahul's Dentalville</h2>
        <p id="dr-experience">1 Dentist - 18 years experience</p>
        <p id="dr-location">Thane West</p>
        <p id="dr-fees">₹500 Consultation Fees</p>
        <div className="rating-section">
          <span>98%</span>
          <span>791 Patient Stories</span>
        </div>
      </div>

      <div className="booking-button-section">
        <button>Book Appointment</button>
      </div>
    </div>
  );
};


export default Home;
