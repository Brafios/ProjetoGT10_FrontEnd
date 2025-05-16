import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img1 from '../assets/img/img_4.jpg';
import img2 from '../assets/img/img_5.jpg';
import img3 from '../assets/img/img_6.jpg';
import img4 from '../assets/img/img_4.jpg';

const images = [img1, img2, img3, img4];

export default function ImageCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 1,
    },
    autoplay: {
      delay: 2500,
      stopOnInteraction: false,
    },
    created(slider) {
      setInterval(() => {
        slider.next();
      }, 2500);
    }
  });

  return (
    <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
      {images.map((src, index) => (
        <div key={index} className="keen-slider__slide">
          <img src={src} alt={`slide-${index}`} className="w-full h-auto object-cover"/>
        </div>
      ))}
    </div>
  );
}
