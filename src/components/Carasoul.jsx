import image1 from '../assets/images/tstg.png';
import image2 from '../assets/images/post.png'; // Add more images as needed
// ... (other imports and settings)

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [image1, image2, /* ... more images */]; // Array of images

  const handleAfterChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel-container">
      {/* Use Slider for horizontal scrolling */}
      <Slider {...settings} afterChange={handleAfterChange}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>

      {/* Use Carousel for vertical scrolling (if needed) */}
      <Carousel showThumbs={false} infiniteLoop>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carousel-indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => slider.slickGoTo(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carasoul