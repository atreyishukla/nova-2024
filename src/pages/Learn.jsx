import React from "react";
import card from '../assets/images/learning.png';
import arrow from '../assets/images/arrow.png';
import rocket from '../assets/images/Rocket-1.svg';

const Learn = () => {
  const style2 = {
    container: {
      display: 'flex',
      height: '100vh', 
      backgroundColor: '#121212',
      fontFamily: "'Urbanist', sans-serif",
    },
    sidebar: {
      width: '250px', 
      background: '#171616',
      padding: '20px',
      color: 'white',
    },
    mainContent: {
      flex: 1, 
      padding: '20px',
      overflowY: 'auto', 
    },
    scrollContainer: {
      display: 'flex',
      alignItems: 'center', 
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      padding: '10px',
      height: '400px', 
      marginBottom: '20px', 
      position: 'relative', 
    },
    card: {
      flex: '0 0 auto',
      margin: '0 10px',
      borderRadius: '15px',
      width: '350px',
      height: '350px', 
      position: 'relative', 
      overflow: 'hidden', 
    },
    image: {
      width: '100%',
      height: '400px', 
      borderRadius: '15px',
    },
    cardText: {
      position: 'absolute',
      bottom: '10px',
      left: '10px',
      color: 'white',
      textAlign: 'left',
      fontWeight: 'bold',
      zIndex: 1, 
    },
    inputContainer: {
      display: 'flex',
      alignItems: 'center',
      margin: '20px 0',
    },
    inputField: {
      width: '90%',
      padding: '10px',
      background: '#171616',
      border: '1px solid #171616',
      borderRadius: '5px',
      fontSize: '16px', 
      color: 'white', 
    },
    rocketIcon: {
      width: '18px',
      height: '18px',
      marginLeft: '10px',
    },
    scrollButton: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      marginLeft: '10px', 
      zIndex: 1, 
      height: '40px', 
      width: '40px', 
    },
    carouselTitle: {
      marginTop: '20px',
      color: 'white',
      fontSize: '24px',
    },
    helpOut: {
      marginTop: '20px',
      color: 'white',
      fontSize: '24px',
    },
  };

  const scrollRight = (scrollContainerId) => {
    const container = document.getElementById(scrollContainerId);
    if (container) {
      container.scrollBy({ left: container.offsetWidth + 20, behavior: 'smooth' }); 
    }
  };

  return (
    <div style={style2.container}>
      <div style={style2.sidebar}>
        <h2>Sidebar</h2>
        {/* Sidebar content can be added here */}
      </div>
      <div style={style2.mainContent}>
        <h1 style={style2.carouselTitle}>Popular Resources</h1>
        <div style={style2.scrollContainer} id="scrollContainer1">
          {Array.from({ length: 5 }).map((_, index) => (
            <div style={style2.card} key={index}>
              <img 
                src={card} 
                alt="Resource" 
                style={style2.image} 
              />
              <div style={style2.cardText}>
                <h2 style={{ margin: '0', fontSize: '20px' }}>3D Modeling</h2>
                <p style={{ margin: '0' }}>Shared by JLo</p>
              </div>
            </div>
          ))}
        
          <button
            style={style2.scrollButton}
            onClick={() => scrollRight("scrollContainer1")}
          >
            <img style={{ width: '40px', height: '40px' }} src={arrow} alt="Scroll Right" />
          </button>
        </div>

        <h1 style={style2.helpOut}>Help Out</h1>
        <InputForm style={style2} />

        <h1 style={style2.carouselTitle}>Learning Design</h1>
        <div style={style2.scrollContainer} id="scrollContainer2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div style={style2.card} key={index}>
              <img 
                src={card} 
                alt="Resource" 
                style={style2.image} 
              />
              <div style={style2.cardText}>
                <h2 style={{ margin: '0', fontSize: '20px' }}>UI Design</h2>
                <p style={{ margin: '0' }}>Shared by Alex</p>
              </div>
            </div>
          ))}
          <button
            style={style2.scrollButton}
            onClick={() => scrollRight("scrollContainer2")}
          >
            <img style={{ width: '40px', height: '40px' }} src={arrow} alt="Scroll Right" />
          </button>
        </div>

        <h1 style={style2.carouselTitle}>Learning Development</h1>
        <div style={style2.scrollContainer} id="scrollContainer3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div style={style2.card} key={index}>
              <img 
                src={card} 
                alt="Resource" 
                style={style2.image} 
              />
              <div style={style2.cardText}>
                <h2 style={{ margin: '0', fontSize: '20px' }}>Web Development</h2>
                <p style={{ margin: '0' }}>Shared by Alex</p>
              </div>
            </div>
          ))}
          <button
            style={style2.scrollButton}
            onClick={() => scrollRight("scrollContainer3")}
          >
            <img style={{ width: '40px', height: '40px' }} src={arrow} alt="Scroll Right" />
          </button>
        </div>
      </div>
    </div>
  );
};

const InputForm = ({ style }) => {
  return (
    <form>
      <div style={style.inputContainer}>
        <input
          type="text"
          id="first_name"
          style={style.inputField}
          placeholder="Post questions for peers and alums to answer..."
          required
        />
        <img
          style={style.rocketIcon}
          src={rocket}
          alt="Rocket Icon"
        />
      </div>
    </form>
  );
};

export default Learn;
