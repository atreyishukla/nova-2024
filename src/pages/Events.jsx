import React from 'react';
import post from '../assets/images/img1.png';
const Events = () => {
  const styles = {
    container: {
      display: 'flex',
      background: '#000',
      minHeight: '100vh',
      fontFamily: "'Urbanist', sans-serif", 
      color: 'white',
      margin: 0,
      padding: 0,
    },
    sidebar: {
      width: '200px',
      background: '#111',
      padding: '20px',
    },
    mainContent: {
      marginLeft: '200px',
      padding: '40px',
      position: 'relative',
    },
    heroImage: {
      width: '500px',
      height: '334px',
      marginBottom: '50px',
    },
    eventTitle: {
      position: 'absolute',
      left: '70px',
      marginTop: '-385px',
      fontFamily: "'ES Klarheit Plakat TRIAL Exblack', sans-serif",
      color: 'white',
      fontSize: '36.85px',
      fontWeight: '800',
      marginLeft: '500px',
    },
    eventInfo: {
      position: 'absolute',
      left: '569px',
      top: '89px',
      color: '#16E16E',
      fontSize: '19.25px',
      fontWeight: '500',
    },
    eventDescription: {
      position: 'absolute',
      left: '568px',
      top: '120px',
      maxWidth: '600px',
    },
    datesSection: {
      position: 'absolute',
      left: '572px',
      top: '180px',
    },
    sectionTitle: {
      fontFamily: "'ES Klarheit Plakat TRIAL Exblack', sans-serif",
      fontSize: '20px',
      marginTop: '30px',
      marginBottom: '10px',
    },
    dateInfo: {
      color: '#16E16E',
      fontSize: '16.55px',
      fontWeight: '500',
      marginTop: '-13px',
    },
    bottomImages: {
      position: 'absolute',
      left: '40px',
      top: '720px',
      display: 'flex',
      gap: '4px',
      marginTop: '-340px',
    },
    bottomImageLeft: {
      width: '260px',
      height: '154px',
    },
    bottomImageRight: {
      width: '230px',
      height: '154px',
    },
    button1: {
      color: 'white',
      fontSize: '15.34px',
      fontWeight: '100',
      padding: '12px 20px',
      width: '256px',
      marginLeft: '530px',
      backgroundColor: 'black',
      borderRadius: '8px',
      border: '2px solid #125f35',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
      transition: 'background-color 0.3s ease',
    },
    button2: {
      color: 'black',
      fontSize: '15.34px',
      fontWeight: '100',
      padding: '12px 20px',
      width: '256px',
      marginLeft: '530px',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '2px solid #125f35',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
      transition: 'background-color 0.3s ease',
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      margin: '10px 0',
    },
    menuIcon: {
      width: '36px',
      marginRight: '10px',
    },
  };

  return (
    <>
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <img src={post} alt="Hero" style={styles.heroImage} />
        <h1 style={styles.eventTitle}>NCrypt</h1>
        <p style={styles.eventInfo}>Event by DPS Sushant Lok</p>
        <p style={styles.eventDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div style={styles.datesSection}>
          <h2 style={styles.sectionTitle}>Dates</h2>
          <p style={styles.dateInfo}>25th October</p>
          <h2 style={styles.sectionTitle}>Registration Deadline</h2>
          <p style={styles.dateInfo}>10th October</p>
        </div>
        <button style={styles.button1}><a href="https://docs.google.com/presentation/d/1540_1EaWm-EloUFrjZr6UdWnCC2wHVrjt8EAGgcMwBM/edit?fbclid=PAZXh0bgNhZW0CMTEAAaZsCix1aK_QQMoPopvXnrDYXb0I4LxQBZyITHRWRqTrRatn6UFnB19-2h0_aem__buuyL3Nw4-A6hwD8i4m4Q#slide=id.p">Event Brochure</a></button>
        <button style={{ ...styles.button2, marginTop: '5px' }}>Register</button>
        <div style={styles.bottomImages}>
          <img src={post} alt="Bottom Left" style={styles.bottomImageLeft} />
          <img src={post} alt="Bottom Right" style={styles.bottomImageRight} />
        </div>
      </div>
    </div>
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <img src={post} alt="Hero" style={styles.heroImage} />
        <h1 style={styles.eventTitle}>Exun</h1>
        <p style={styles.eventInfo}>Event by DPS RK Puram </p>
        <p style={styles.eventDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div style={styles.datesSection}>
          <h2 style={styles.sectionTitle}>Dates</h2>
          <p style={styles.dateInfo}>9th Novmeber</p>
          <h2 style={styles.sectionTitle}>Registration Deadline</h2>
          <p style={styles.dateInfo}>25th October</p>
        </div>
        <button style={styles.button1}><a href="https://reg.exunclan.com/brochure">Event Brochure</a></button>
        <button style={{ ...styles.button2, marginTop: '5px' }}> <a href='https://reg.exunclan.com'>Register</a></button>
        <div style={styles.bottomImages}>
          <img src={post} alt="Bottom Left" style={styles.bottomImageLeft} />
          <img src={post} alt="Bottom Right" style={styles.bottomImageRight} />
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Events;
