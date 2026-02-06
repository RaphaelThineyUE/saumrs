import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = () => {
  const [animatedElements, setAnimatedElements] = useState<Set<Element>>(
    new Set(),
  );

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -80px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedElements.has(entry.target)) {
          setTimeout(() => {
            entry.target.classList.add("animate");
            setAnimatedElements((prev) => new Set(prev).add(entry.target));
          }, 100);
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll(
      ".scroll-animate, .icon-item, .nutrition-item",
    );
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      elementsToObserve.forEach((el) => observer.unobserve(el));
    };
  }, [animatedElements]);
};

export const useParallax = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const parallaxElements =
            document.querySelectorAll(".parallax-element");

          parallaxElements.forEach((el) => {
            const rect = (el as HTMLElement).getBoundingClientRect();
            const scrollPercent =
              (window.innerHeight - rect.top) / window.innerHeight;
            if (scrollPercent > 0 && scrollPercent < 1) {
              const yPos = scrollPercent * 15 - 7.5;
              (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
            }
          });

          const circle = document.querySelector(
            ".nutrition-circle",
          ) as HTMLElement;
          if (circle) {
            const scrolled = window.pageYOffset;
            const rotation = scrolled * 0.03;
            circle.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return containerRef;
};
