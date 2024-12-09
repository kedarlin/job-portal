// import React from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';
import Logo from '../logo/logo';
import './navbar.css';
import { FaMessage } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-content'>
          <div className='navbar-left'>
              <Logo />
              <div className='nav-search'>
                  <FaSearch className='nav-search-icon'/>
                  <input type='text' name='search' className='nav-search-input' placeholder='Search jobs' />
              </div>
          </div>
          <div className='navbar-right'>
            <div className='navbar-right-oppurtunity-lists'>
              <div className='navbar-right-oppurtunity-item'>
                Internships
              </div>
              <div className='navbar-right-oppurtunity-item'>
                Jobs
              </div>
              <div className='navbar-right-oppurtunity-item'>
                Wishlist
              </div>
              <div className='navbar-right-oppurtunity-item'>
                Applications
              </div>
            </div>
            <div className='navbar-right-user-section' style={{display: "flex", flexDirection: "row", gap: "20px"}}>
              <div style={{display: "flex", flexDirection: "row"}}>
                <div className='navbar-right-item'>
                  <FaMessage className='navbar-right-item-icon'/>
                </div>
                <div className='navbar-right-item'>
                  <FaBell className='navbar-right-item-icon'/>
                </div>
                <div className='navbar-right-item'>
                  <IoPerson className='navbar-right-item-icon'/>
                </div>
              </div>
              <>
                <button onClick={()=>{}} className='nav-auth-button'>
                  Login
                </button>
              </>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar