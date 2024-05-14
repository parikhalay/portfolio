
import './graphicDesign.css';
import img1 from '../../assests/graphic/img-1.png'
import img2 from '../../assests/graphic/img-2.jpg'
import img3 from '../../assests/graphic/img-3.png'
import img4 from '../../assests/graphic/img-4.png'
import img5 from '../../assests/graphic/img-5.png'
import img6 from '../../assests/graphic/img-6.png'
import img7 from '../../assests/graphic/img-7.png'
import img8 from '../../assests/graphic/img-8.png'
import img9 from '../../assests/graphic/img-9.jpg'
import img10 from '../../assests/graphic/img-10.png'
import img11 from '../../assests/graphic/img-11.png'
import img12 from '../../assests/graphic/img-12.png'
import img13 from '../../assests/graphic/img-13.png'
import img14 from '../../assests/graphic/img-14.jpg'
import img15 from '../../assests/graphic/img-15.jpg'
import img16 from '../../assests/graphic/img-16.png'
import img17 from '../../assests/graphic/img-17.jpg'


import { useEffect } from 'react';

function GraphicDesign() {

  useEffect(() => {
    const track = document.getElementById('image-track');
    const handleOnDown = e => {
      track.dataset.mouseDownAt= e.clientX;
    }

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    }

    const handleOnMove = e => {
      if(track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta/maxDelta) * -100,
      nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

      

      track.dataset.percentage = nextPercentage;

      track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });

      for(const image of track.getElementsByClassName("image"))
    {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards" });
    }
    }

    window.onmousedown = e => handleOnDown(e);

    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);

    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);

    window.ontouchmove = e => handleOnMove(e.touches[0]);

  }, []);
  
  

  return (
    <div className="image-section" id="graphic_design" >
      <h5>What I have designed</h5>
      <h2>Graphic Design Portfolio</h2>
      <div className='image-container'>
      <div className='inside-image-container'>
      <div id="image-track" className='images-div' data-mouse-down-at='0' data-prev-percentage="0">
       <img className='image' src={img1} alt='images' draggable="false" />
       <img className='image' src={img2} alt='images' draggable="false"/>
       <img className='image' src={img3} alt='images' draggable="false"/>
       <img className='image' src={img4} alt='images' draggable="false"/>
       <img className='image' src={img5} alt='images' draggable="false"/>
       <img className='image' src={img6} alt='images' draggable="false"/>
       <img className='image' src={img7} alt='images' draggable="false"/>
       <img className='image' src={img8} alt='images' draggable="false"/>
       <img className='image' src={img9} alt='images' draggable="false"/>
       <img className='image' src={img10} alt='images' draggable="false"/>
       <img className='image' src={img11} alt='images' draggable="false"/>
       <img className='image' src={img12} alt='images' draggable="false"/>
       <img className='image' src={img13} alt='images' draggable="false"/>
       <img className='image' src={img14} alt='images' draggable="false"/>
       <img className='image' src={img15} alt='images' draggable="false"/>
       <img className='image' src={img16} alt='images' draggable="false"/>
       <img className='image' src={img17} alt='images' draggable="false"/>
       </div>
      </div>
      </div>
    </div>
  );
}

export default GraphicDesign;
