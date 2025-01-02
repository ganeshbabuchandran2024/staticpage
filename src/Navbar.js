import React, { useState } from "react";
import "../src/Source/navbar.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  
  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setDropdown(null); 
    }
  };

  return (
    <>
    <nav className="navbar">
    
      <ul className="navbar-list">
      <div className="title"><h2 className="header">Company Name</h2></div>
        <li>
          <button className='dropdown-toggle' onClick={() => toggleDropdown("services")}>SERVICES<span className="arrow">&#11163;</span></button>
          {dropdown === "services" && (
            <ul className="dropdown-menu">
              <li className='li'><a href="#section-item-1"><button className='dropdown-toggle1'>IT Services</button></a></li>
              <li className='li'><a href="#section-item-2"><button className='dropdown-toggle1'>Consulting Service</button></a></li>
              <li className='li'><a href="#section-item-3"><button className='dropdown-toggle1'>Cloud Services</button></a></li>
            </ul>
          )}
        </li>
        <li><button className='dropdown-toggle' onClick={() => toggleDropdown("training")}>TRAINING<span className="arrow">&#11163;</span></button>
          {dropdown === "training" && (
            <ul className="dropdown-menu">
              <li className='li'><a href="#section-item-4"><button className='dropdown-toggle1'>Prompt Design</button></a></li>
              <li className='li'><a href="#section-item-5"><button className='dropdown-toggle1'>Database Service</button></a></li>
              <li className='li'><a href="#section-item-6"><button className='dropdown-toggle1'>Operational Support Services</button></a></li>
            </ul>
          )}
        </li>
        <li><button className='dropdown-toggle' onClick={() => toggleDropdown("support")}>OPERATIONAL SUPPORT<span className="arrow">&#11163;</span></button>
          {dropdown === "support" && (
            <ul className="dropdown-menu">
              <li className='li'><a href="#section-item-7"><button className='dropdown-toggle1'>Cloud Computing</button></a></li>
              <li className='li'><a href="#section-item-8"><button className='dropdown-toggle1'>DevOps</button></a></li>
              <li className='li'><a href="#section-item-9"><button className='dropdown-toggle1'>AWS</button></a></li>
            </ul>
          )}
        </li>
        <li><button className='dropdown-toggle' onClick={() => scrollToSection("section-item-11")}>About Us</button></li>
        <li><button className='dropdown-toggle' onClick={() => scrollToSection("section-item-10")}>Contact US</button></li>
      </ul>
    </nav></>
  );
};

export default Navbar;
