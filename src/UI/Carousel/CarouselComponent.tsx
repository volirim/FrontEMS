import Carousel from "nuka-carousel";
import { useState } from "react";

const CarouselComponent = () => {
   return (
       <Carousel 
       adaptiveHeight={true} 
       autoplay={true}
       autoplayInterval={3000} 
       wrapAround={true}
       > 
           <img src='./static/pictures/carousel/first.png' alt='slide1' style={{width: '100%'}}></img>
           <img src='./static/pictures/carousel/second.png' alt='slide2' style={{width: '100%'}}></img>
           <img src='./static/pictures/carousel/third.png' alt='slide3' style={{width: '100%'}}></img>
           <img src='./static/pictures/carousel/fourth.png' alt='slide4' style={{width: '100%'}}></img>
       </Carousel>
   ) 
}

export default CarouselComponent;