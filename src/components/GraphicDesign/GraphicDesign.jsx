import './graphicDesign.css';
import img1 from '../../assets/graphic/img-1.png';
import img2 from '../../assets/graphic/img-2.jpg';
import img3 from '../../assets/graphic/img-3.png';
import img4 from '../../assets/graphic/img-4.png';
import img5 from '../../assets/graphic/img-5.png';
import img6 from '../../assets/graphic/img-6.png';
import img7 from '../../assets/graphic/img-7.png';
import img8 from '../../assets/graphic/img-8.png';
import img9 from '../../assets/graphic/img-9.jpg';
import img10 from '../../assets/graphic/img-10.png';
import img11 from '../../assets/graphic/img-11.png';
import img12 from '../../assets/graphic/img-12.png';
import img13 from '../../assets/graphic/img-13.png';
import img14 from '../../assets/graphic/img-14.jpg';
import img15 from '../../assets/graphic/img-15.jpg';
import img16 from '../../assets/graphic/img-16.png';
import img17 from '../../assets/graphic/img-17.jpg';

import React, { useEffect, useRef } from 'react';

const GraphicDesign = () => {
  const containerRef = useRef(null); // Ref to access the scrollable container

  useEffect(() => {
    const container = containerRef.current;

    // Handle scroll event
    const handleWheelScroll = (e) => {
      if (container) {
        if (e.deltaY !== 0) {
          // Prevent default behavior to avoid vertical scroll
          e.preventDefault();
          // Horizontal scroll based on vertical scroll delta
          container.scrollLeft += e.deltaY; // Scroll left/right
        }
      }
    };

    // Attach the wheel event to the container
    container.addEventListener('wheel', handleWheelScroll, { passive: false });

    // Cleanup event listener when the component unmounts
    return () => {
      container.removeEventListener('wheel', handleWheelScroll);
    };
  }, []);

  return (
    <div className="graphic-design-container" id="graphic_design">
      <div className="header">
        <h5>What I have designed</h5>
        <h2>Graphic Design Portfolio</h2>
      </div>
      <div ref={containerRef} className="scroller">
        <div className='background-container'>
          <div className="image-container">
            <img className='image' src={img1} alt='images' draggable="false" />
            <img className='image' src={img2} alt='images' draggable="false" />
            <img className='image' src={img3} alt='images' draggable="false" />
            <img className='image' src={img4} alt='images' draggable="false" />
            <img className='image' src={img5} alt='images' draggable="false" />
            <img className='image' src={img6} alt='images' draggable="false" />
            <img className='image' src={img7} alt='images' draggable="false" />
            <img className='image' src={img8} alt='images' draggable="false" />
            <img className='image' src={img9} alt='images' draggable="false" />
            <img className='image' src={img10} alt='images' draggable="false" />
            <img className='image' src={img11} alt='images' draggable="false" />
            <img className='image' src={img12} alt='images' draggable="false" />
            <img className='image' src={img13} alt='images' draggable="false" />
            <img className='image' src={img14} alt='images' draggable="false" />
            <img className='image' src={img15} alt='images' draggable="false" />
            <img className='image' src={img16} alt='images' draggable="false" />
            <img className='image' src={img17} alt='images' draggable="false" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
