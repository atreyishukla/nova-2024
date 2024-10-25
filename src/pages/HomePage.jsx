import React from 'react';
import Hero from '../components/Hero';
import card from '../assets/images/learning.png'; 
import arrow from '../assets/images/arrow.png'; 
import post from '../assets/images/cw.png'
import exun from '../assets/images/exun.png'
import post1 from '../assets/images/post1.png'
import post2 from '../assets/images/post2.png'
import post3 from '../assets/images/post3.png'
import {Link} from 'react-router-dom'
import res1 from '../assets/images/res1.png'
import res2 from '../assets/images/res2.png'
import res3 from '../assets/images/res3.png'
import res4 from '../assets/images/res4.png'
import story1 from '../assets/images/story1.png'
import story2 from '../assets/images/story2.png'
import story3 from '../assets/images/story3.png'
import story4 from '../assets/images/story4.png'
const HomePage = () => {
  const containerStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    overflowX: 'hidden', // To prevent horizontal scroll
  };
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
      marginTop: 0,
      marginBottom: 0,
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
    
      display: 'flex',
      gap: '100px',
    },
    bottomImageLeft: {
      width: '600px', 
      height: '450px', 
    },
    bottomImageRight: {
      width: '600px', 
      height: '420px', 
    },
    postImages: {
      display: 'flex',
      gap: '100px',
    },
    postImageLeft: {
      width: '796px', 
      height: '600px', 
    },
    postImageRight: {
      width: '796px', 
      height: '600px', 
    },
    resImages: {
      display: 'flex',
      gap: '40px',
    },
    resImageLeft: {
      width: '350px', 
      height: '350px', 
    },
    resImageRight: {
      width: '350px', 
      height: '350px', 
    },
    storyImages: {
      display: 'flex',
      gap: '40px',
    },
    storyImageLeft: {
      width: '547x', 
      height: '383px', 
    },
    storyImageRight: {
      width: '547px', 
      height: '383px', 
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
    carouselTitle: {
      marginTop: '20px',
      color: 'white',
      fontSize: '24px',
      fontWeight: '900'
    },
  };

  return (
    <>
    <Hero />
    <div style={styles.container}>
      <div style={styles.mainContent}>
      <h1 style={styles.carouselTitle}>Registrations Closing Soon</h1>
      <div style={styles.bottomImages}>
        <img src={post} alt="Hero" style={styles.bottomImageLeft} />
        <img src={exun} alt="Hero" style={styles.bottomImageRight} />
        </div></div>
      </div>
      <div style={styles.container}>
      <div style={styles.mainContent}>
      <h1 style={styles.carouselTitle}>Popular Posts</h1>
      <div style={styles.postImages}>
        <img src={post1} alt="Hero" style={styles.postImageLeft} />
        <img src={post2} alt="Hero" style={styles.postImageLeft} />
        <img src={post3} alt="Hero" style={styles.postImageRight} />
        </div></div>
      </div>
      <div style={styles.container}>
      <div style={styles.mainContent}>
      <h1 style={styles.carouselTitle}>Popular Resources</h1>
      <div style={styles.resImages}>
    
        <a href='https://coreisus.notion.site/CORE-Learning-Resources-7ee22fa7a13c433da622e0f4e0861879'><img src={res1} alt="Hero" style={styles.resImageLeft} /></a>
        <a href='https://coreisus.notion.site/CORE-Learning-Resources-7ee22fa7a13c433da622e0f4e0861879'><img src={res2} alt="Hero" style={styles.resImageLeft} /></a>
        <a href='https://coreisus.notion.site/CORE-Learning-Resources-7ee22fa7a13c433da622e0f4e0861879'><img src={res3} alt="Hero" style={styles.resImageRight} /></a>
        </div></div>
      </div>
      <div style={styles.container}>
      <div style={styles.mainContent}>
      <h1 style={styles.carouselTitle}>Popular News</h1>
      <div style={styles.storyImages}>
        <img src={story1} alt="Hero" style={styles.storyImageLeft} />
        <img src={story2} alt="Hero" style={styles.storyImageLeft} />
        <img src={story3} alt="Hero" style={styles.storyImageLeft} />
        <img src={story4} alt="Hero" style={styles.storyImageRight} />
        </div></div>
      </div>
    </>
  );
};

export default HomePage;
