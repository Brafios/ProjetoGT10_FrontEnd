import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img1 from '../../assets/img/img_4.jpg';
import img2 from '../../assets/img/img_5.jpg';
import img3 from '../../assets/img/img_6.jpg';
import img4 from '../../assets/img/img_4.jpg';

const images = [img1, img2, img3, img4];

const ImageCarousel = () => {
    const [sliderRef] = useKeenSlider({
        spacing: 10,
        loop: true,
        renderMode: "performance",
        slides: {
          perView: 1,
        },
        created(slider) {
          setInterval(() => {
            slider.next();
          }, 2500);
        }
      });
    return ( 
        <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden aspect-[2/1] max-h-[500px]">
        {images.map((src, index) => (
        <div key={index} className="keen-slider__slide flex justify-center items-center">
          <img src={src} alt={`slide-${index}`} className="w-full h-full object-cover"/>
        </div>
        ))}
      </div>
     );
}
 
export default ImageCarousel;