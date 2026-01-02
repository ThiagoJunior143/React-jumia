import { useEffect, useRef, useState } from "react";
import "./carousel.css";

const images = [
  "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/01-afcon/Untitled-1.gif",
  "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/0-0-1-holiday-sales/ZAP/homepage-slider.jpg",
  "https://ng.jumia.is/cms/0-1-initiatives/cxp/2025-dec-holiday/3pm-above/712X384copy2.jpg",
  "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Global-mini-Campaigns/Clearance-Sales/Artboard1.jpg",
  "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/02-klump/Untitled-2.gif",
  "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Awoof-deals/December/updated/712X384.jpg",
  "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/0-0-1-holiday-sales/Generic-banner/Updated/KV.gif",
];

export default function Carousel() {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const intervalRef = useRef(null);
  const startX = useRef(0);

  const slides = [
    images[images.length - 1], // clone last
    ...images,
    images[0], // clone first
  ];

  const next = () => setIndex(i => i + 1);
  const prev = () => setIndex(i => i - 1);

  /* Autoplay */
  useEffect(() => {
    intervalRef.current = setInterval(next, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const pauseAutoplay = () => clearInterval(intervalRef.current);
  const resumeAutoplay = () => {
    intervalRef.current = setInterval(next, 3000);
  };

  /* Handle clone snap */
  const handleTransitionEnd = () => {
    if (index === slides.length - 1) {
      setTransition(false);
      setIndex(1);
    }

    if (index === 0) {
      setTransition(false);
      setIndex(slides.length - 2);
    }
  };

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  /* Swipe */
  const onTouchStart = e => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = e => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) next();
    if (endX - startX.current > 50) prev();
  };

  return (
    <div
      className="carousel"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <button className="nave prev" onClick={prev}>&#10094;</button>

      <div
        className="track"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: transition ? "transform 0.4s ease" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            onError={e => (e.target.src = "https://picsum.photos/800/400")}
          />
        ))}
      </div>

      <button className="nave next" onClick={next}>&#10095;</button>

      {/* Dots */}
      <div className="dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={index === i + 1 ? "active" : ""}
            onClick={() => setIndex(i + 1)}
          />
        ))}
      </div>
    </div>
  );
}
