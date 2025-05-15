import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';

const images = [img1, img2, img3];

export default function ImageCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 1,
    },
    autoplay: {
      delay: 3000,
      stopOnInteraction: false,
    },
    created(slider) {
      setInterval(() => {
        slider.next();
      }, 3000);
    }
  });

  return (
    <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
      {images.map((src, index) => (
        <div key={index} className="keen-slider__slide">
          <img src={src} alt={`slide-${index}`} className="w-full h-64 object-cover" />
        </div>
      ))}
    </div>
  );
}
