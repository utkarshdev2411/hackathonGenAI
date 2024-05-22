
import React, { useState } from 'react';

import '../styles/Home.css'; // Make sure to name your CSS file accordingly
import { IoSearch } from "react-icons/io5";

function Home() {
  const [prompt,setPrompt]=useState("");
  

  const handleClick=()=>{
    console.log(prompt);
  }
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

        <div className=" w-[777.6px] mb-4 flex gap-4 px-6 py-4 rounded-md border-[1px] shadow-md ">
          <input className='py-3 px-4 outline-none bg-transparent text-slate-200' type="text" placeholder="Ask anything to Cosmo..." value={prompt} onChange={e=>setPrompt(e.target.value)} />
          <button onClick={handleClick}><IoSearch className='text-xl '/></button>
        </div>

        <div className='drs'>
          <div className='drcards'><ProfileCard /></div>
          <div className='drcards'><ProfileCard /></div>
        </div>
      </main>

    </div>
  );

}
const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="w-20 h-20 mr-4 overflow-hidden rounded-full object-center">
        <img className='w-20 h-20 ' src="src/assets/demodr.jpg" alt="logo" />
      </div>

      <div className="info-section">
        <h2 id="dr-name">Dr. Rahul Dentalville</h2>
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
