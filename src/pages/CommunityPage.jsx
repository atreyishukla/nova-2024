import React from 'react';
import post from '../assets/images/post.png';
import shuklaIcon from '../assets/images/@shukla.png';

const CommunityPage = () => {
  const containerStyle = {
    display: 'flex',
    backgroundColor: '#000',
    fontFamily: "'Urbanist', sans-serif", // Ensure Urbanist font is applied globally
    color: 'white',
  };

  const sidebarStyle = {
    backgroundColor: '#111',
    color: 'white',
    height: '100vh',
    width: '200px',
    paddingTop: '20px',
    paddingLeft: '20px',
    position: 'fixed',
    top: '0',
    left: '0',
  };

  const contentStyle = {
    flexGrow: '1',
    paddingLeft: '220px', // Leave room for the sidebar
    paddingTop: '20px',
  };

  const menuItemStyle = {
    marginLeft: '20px',
    marginTop: '10px',
    color: '#fff',
  };

  const storyContainerStyle = {
    display: 'flex',
    margin: '20px 0',
    overflowX: 'scroll',
    whiteSpace: 'nowrap',
    padding: '20px 0', // Add padding to top and bottom
  };

  const storyStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '35px', // Increase margin for even spacing
  };

  const storyImageStyle = {
    width: '70px', // Increase the size of the icon
    height: '70px', // Increase the size of the icon
    borderRadius: '50%',
  };

  const cardStyle = {
    display: 'flex',  // To split into two sections (60% image, 40% text)
    backgroundColor: '#171616',
    width: '967px',
    height: '410px',
    margin: '20px auto',
    borderRadius: '15px',
    position: 'relative', // Position relative for absolute positioning of children
    fontFamily: "'Urbanist', sans-serif", // Ensure Urbanist font throughout the page
  };

  const cardImageContainerStyle = {
    width: '75%',  // 60% of the card for the image
    position: 'relative',
  };

  const cardTextContainerStyle = {
    width: '25%',  // 40% for text
    padding: '20px', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left',
  };

  const profileIconStyle = {
    position: 'absolute',
    top: '10px',
    left: '15px',
    width: '50px',
    height: '60px',
    borderRadius: '50%',
    zIndex: 1,
  };

  const usernameStyle = {
    position: 'absolute',
    top: '10px',
    left: '75px',
    color: 'white',
    fontSize: '16.38px',
    fontWeight: '600',
    fontFamily: "'Urbanist', sans-serif",
  };

  const noCommentStyle = {
    color: 'white',
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '20px',
    opacity: 0.4,
    fontFamily: "'Urbanist', sans-serif",
    marginBottom: '15px', // Spacing for caption
  };

  const captionStyle = {
    color: 'white',
    fontSize: '17.53px',
    fontWeight: '400',
    lineHeight: '15.78px',
    fontFamily: "'Urbanist', sans-serif",
  };

  // Add media query to adjust for mobile responsiveness
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  if (mediaQuery.matches) {
    // For smaller screens, adjust styles
    sidebarStyle.width = '150px';
    contentStyle.paddingLeft = '170px';
    cardStyle.width = '90%';
  }

  return (
    <div style={containerStyle}>
      {/* Main Content */}
      <div style={contentStyle}>
        {/* Stories */}
        <div style={storyContainerStyle}>
          {[...Array(10)].map((_, index) => (
            <div style={storyStyle} key={index}>
              <img src={shuklaIcon} alt="Your Story" style={storyImageStyle} />
              <p style={{ marginTop: '8px', fontSize: '16px', fontFamily: "'Urbanist', sans-serif" }}>
                Your story
              </p>
            </div>
          ))}
        </div>

        {/* Post */}
        <div className="card" style={cardStyle}>
          {/* Image Section */}
          <div style={cardImageContainerStyle}>
            <img src={post} alt="Post Image" style={{ width: '100%', height: '100%', borderRadius: '15px 0 0 15px' }} />
            <img src={shuklaIcon} alt="Profile Icon" style={profileIconStyle} />
            <p style={usernameStyle}>@jyororoa</p>
          </div>

          {/* Text Section */}
          <div style={cardTextContainerStyle}>
            <br />
            <br />
            <br />
            <br />
            <p style={noCommentStyle}>no comments yet</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p style={captionStyle}>@jyororoa</p>
            <br />
            <p style={captionStyle}>
              Extremely grateful for this experience (I had fun at this event lolz 😁)
            </p>
          </div>
        </div>

        {/* Repeat post for demo */}
        <div className="card" style={cardStyle}>
          {/* Image Section */}
          <div style={cardImageContainerStyle}>
            <img src={post} alt="Post Image" style={{ width: '100%', height: '100%', borderRadius: '15px 0 0 15px' }} />
            <img src={shuklaIcon} alt="Profile Icon" style={profileIconStyle} />
            <p style={usernameStyle}>@jyororoa</p>
          </div>

          {/* Text Section */}
          <div style={cardTextContainerStyle}>
            <br />
            <br />
            <br />
            <br />
            <p style={noCommentStyle}>no comments yet</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p style={captionStyle}>@jyororoa</p>
            <br />
            <p style={captionStyle}>
              Extremely grateful for this experience (I had fun at this event lolz 😁)
            </p>
          </div>
        </div>
        </div>
      </div>

  );
};

export default CommunityPage;
