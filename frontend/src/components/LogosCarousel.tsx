import { useEffect, useRef } from 'react';
import './LogosCarousel.css';

export const LogosCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!carousel) return;
      scrollAmount += scrollSpeed;
      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
      }
      carousel.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const logos = [
    { name: 'Yahoo News', file: 'yahoo-news-logo-300x200-white-q6yrxifgzyjorm79fgfli29ifie1295apuzsb08wp6.png' },
    { name: 'Exceleon Magazine', file: 'exceleon-magazine-logo-300x200-white-q6yrxhhmt4ieg08mky0yxki1u4inuk1kdqcatqaave.png' },
    { name: 'Medium', file: 'medium-logo-300x200-white-q6yrxhhmt4ieg08mky0yxki1u4inuk1kdqcatqaave.png' },
    { name: 'Fast Company', file: 'fast-company-new-logos-300x200-white-q6yrxhhmt4ieg08mky0yxki1u4inuk1kdqcatqaave.png' },
    { name: 'Entrepreneur Magazine', file: 'entrepreneur-magazine-logo-300x200-white-q6yrxgjsmah44e9zqfmcd2ql8qnamuxu1lotcgbp1m.png' },
    { name: 'Bloomberg Radio', file: 'bloomberg-radio-logo-300x200-white-q6yrxgjsmah44e9zqfmcd2ql8qnamuxu1lotcgbp1m.png' },
  ];

  return (
    <section className="logos-carousel-section">
      <div className="logos-carousel" ref={carouselRef}>
        <div className="logos-track">
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={`/images/${logo.file}`} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
