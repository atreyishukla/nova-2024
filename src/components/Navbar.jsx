import React, { useState } from 'react';
import { FaHome, FaCalendarAlt, FaUsers, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png'
const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const sidebarStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '200px',
    height: '100vh',
    backgroundColor: '#171616',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  };

  const menuItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const iconStyle = {
    width: '31.74px',
    marginRight: '10px',
  };

  const logosize ={
    height: '55px',
    width: '135px',
    padding: '10px',
  };
  const isSelected = (item) => selectedItem === item;

  const menuItems = [
    { id: 'home', label: 'Home', icon: <FaHome style={iconStyle} />, link: '/' },
    { id: 'events', label: 'Events', icon: <FaCalendarAlt style={iconStyle} />, link: '/events' },
    { id: 'community', label: 'Community', icon: <FaUsers style={iconStyle} />, link: '/community' },
    { id: 'learn', label: 'Learn', icon: <FaBook style={iconStyle} />, link: '/learn' },
  ];

  return (
    <>
       <div style={sidebarStyle}>
       <img src={Logo} style={logosize}/>
       <br />
      {menuItems.map((item) => (
        <Link
          key={item.id}
          to={item.link}
          style={{
            textDecoration: 'none', // Remove link underline
          }}
          onClick={() => setSelectedItem(item.id)}
        >
          <div
            className="menu-item"
            style={{
              ...menuItemStyle,
              color: isSelected(item.id) ? '#17e16f' : 'white', // Change color if selected
            }}
          >
            <div style={{ color: isSelected(item.id) ? '#17e16f' : 'white' }}>
              {item.icon}
            </div>
            <p style={{ marginLeft: '-4px' }}>{item.label}</p>
          </div>
        </Link>
      ))}
    </div>
    </>
  
  );
};

export default Navbar;
