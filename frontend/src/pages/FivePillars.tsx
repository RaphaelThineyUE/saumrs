import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LogosCarousel } from '../components/LogosCarousel';
import { YouTubeVideo } from '../components/YouTubeVideo';
import { FitnessIcon, NutritionIcon, SleepIcon, StressIcon, SocialIcon } from '../components/PillarIcons';
import './FivePillars.css';

export const FivePillars = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="five-pillars-page">
      <Header />
      
      <main className="five-pillars-content">
        {/* Hero Section with Video */}
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-left fade-in-up">
              <h6 className="hero-subtitle">Learn About Our Wellness Belief Systems</h6>
              <div className="hero-video">
                <YouTubeVideo 
                  videoId="XHOmBV4js_E" 
                  description="Short Description of Video"
                />
              </div>
              <button className="watch-video-btn">
                <svg aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path>
                </svg>
                Watch Video
              </button>
            </div>
            <div className="hero-right fade-in-up">
              <img 
                src="/images/microscope-with-flasks-and-vials-chemistry-labratory-tools--1024x768.jpg" 
                alt="Microscope with flasks and vials. Chemistry laboratory tools."
                loading="eager"
              />
              <h1>Developed with Cutting Edge Research In Mind</h1>
            </div>
          </div>
        </section>

        {/* Logos Carousel */}
        <section className="logos-section">
          <LogosCarousel />
        </section>

        {/* Five Pillars Introduction */}
        <section className="pillars-intro">
          <div className="container">
            <h1 className="fade-in-up">The Five Pillars of Longevity</h1>
            <p className="intro-text fade-in-up">
              Despite the fact that the concepts of lifestyle medicine are the same across institutions and countries, with enough research, you will find that there are slight variations in the proposed pillars of longevity. Based on the rigor of the evidence-based recommendations and the potential for significant behavioral change, we follow the five proposed by Stanford University. They are as follows:
            </p>
          </div>
        </section>

        {/* Five Pillars Icons Section */}
        <section className="pillars-icons-section">
          <div className="container">
            <div className="pillars-icons-grid">
              <div className="pillar-icon-card fade-in-up">
                <div className="pillar-svg-icon">
                  <FitnessIcon />
                </div>
                <h6>Regular<br />Fitness</h6>
                <p>Elevate Longevity with Regular Fitness: Energize your body, boost endurance, and enhance well-being through consistent physical activity.</p>
              </div>

              <div className="pillar-icon-card fade-in-up">
                <div className="pillar-svg-icon">
                  <NutritionIcon />
                </div>
                <h6>Focused<br />Nutrition</h6>
                <p>Fuel Longevity with Focused Nutrition: Nourish your body with vital nutrients, support cellular health, and optimize your overall well-being.</p>
              </div>

              <div className="pillar-icon-card fade-in-up">
                <div className="pillar-svg-icon">
                  <SleepIcon />
                </div>
                <h6>Optimized<br />Sleep</h6>
                <p>Unlock Longevity with Optimized Sleep: Recharge your mind and body, improve cognitive function, and promote optimal health through quality sleep.</p>
              </div>

              <div className="pillar-icon-card fade-in-up">
                <div className="pillar-svg-icon">
                  <StressIcon />
                </div>
                <h6>Stress<br />Management</h6>
                <p>Manage Stress for Longevity: Find balance, cultivate resilience, and safeguard your well-being by effectively managing and reducing stress.</p>
              </div>

              <div className="pillar-icon-card fade-in-up">
                <div className="pillar-svg-icon">
                  <SocialIcon />
                </div>
                <h6>Social<br />Relationships</h6>
                <p>Foster Social Connections for Longevity: Cultivate meaningful relationships, enhance happiness, and promote overall longevity through strong social bonds.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Section */}
        <section className="educational-section">
          <div className="container">
            <h1 className="fade-in-up">Explore the Lifestyle Medicine Pillars: Unlock Your Path to Optimal Well-being</h1>
            <p className="fade-in-up">
              Welcome to our comprehensive collection of educational videos, where you can delve into the transformative power of Lifestyle Medicine otherwise known as the Five Pillars. Extensively researched by the esteemed Stanford University and showcased at longevity.stanford.edu, these lifestyle pillars serve as a guiding light on your journey toward a healthier, more fulfilling life. we are thrilled to present you with an enticing glimpse into the realm of Lifestyle Medicine.
            </p>
          </div>
        </section>

        {/* Individual Pillar Video Sections */}
        <section className="pillar-video-section">
          <div className="container pillar-video-container">
            <div className="pillar-video-content">
              <div className="pillar-video-left">
                <YouTubeVideo videoId="XHOmBV4js_E" />
              </div>
              <div className="pillar-video-right">
                <p>
                  Welcome to our comprehensive collection of educational videos, where you can delve into the transformative power of Lifestyle Medicine otherwise known as the Five Pillars. Extensively researched by the esteemed Stanford University and showcased at longevity.stanford.edu, these lifestyle pillars serve as a guiding light on your journey toward a healthier, more fulfilling life. we are thrilled to present you with an enticing glimpse into the realm of Lifestyle Medicine.
                </p>
              </div>
            </div>
            <div className="pillar-divider"></div>
            <h1 className="pillar-video-title fade-in-up">Regular Fitness</h1>
          </div>
        </section>

        <section className="pillar-video-section">
          <div className="container pillar-video-container">
            <div className="pillar-video-content">
              <div className="pillar-video-left">
                <YouTubeVideo videoId="XHOmBV4js_E" />
              </div>
              <div className="pillar-video-right">
                <p>
                  Welcome to our comprehensive collection of educational videos, where you can delve into the transformative power of Lifestyle Medicine otherwise known as the Five Pillars. Extensively researched by the esteemed Stanford University and showcased at longevity.stanford.edu, these lifestyle pillars serve as a guiding light on your journey toward a healthier, more fulfilling life. we are thrilled to present you with an enticing glimpse into the realm of Lifestyle Medicine.
                </p>
              </div>
            </div>
            <div className="pillar-video-bottom">
              <p>
                Welcome to our comprehensive collection of educational videos, where you can delve into the transformative power of Lifestyle Medicine otherwise known as the Five Pillars. Extensively researched by the esteemed Stanford University and showcased at longevity.stanford.edu, these lifestyle pillars serve as a guiding light on your journey toward a healthier, more fulfilling life. we are thrilled to present you with an enticing glimpse into the realm of Lifestyle Medicine.
              </p>
            </div>
            <div className="pillar-divider"></div>
            <h1 className="pillar-video-title fade-in-up">Focused Nutrition</h1>
          </div>
        </section>

        <section className="pillar-video-section">
          <div className="container pillar-video-container">
            <div className="pillar-video-content">
              <div className="pillar-video-left">
                <YouTubeVideo videoId="XHOmBV4js_E" />
              </div>
              <div className="pillar-video-right">
                <p>
                  Welcome to our comprehensive collection of educational videos, where you can delve into the transformative power of Lifestyle Medicine otherwise known as the Five Pillars. Extensively researched by the esteemed Stanford University and showcased at longevity.stanford.edu, these lifestyle pillars serve as a guiding light on your journey toward a healthier, more fulfilling life. we are thrilled to present you with an enticing glimpse into the realm of Lifestyle Medicine.
                </p>
              </div>
            </div>
            <div className="pillar-video-bottom">
              <p>
                Welcome to our comprehensive collection of educational videos, where you can delve into the transformative power of Lifestyle Medicine otherwise known as the Five Pillars. Extensively researched by the esteemed Stanford University and showcased at longevity.stanford.edu, these lifestyle pillars serve as a guiding light on your journey toward a healthier, more fulfilling life. we are thrilled to present you with an enticing glimpse into the realm of Lifestyle Medicine.
              </p>
            </div>
            <div className="pillar-divider"></div>
            <h1 className="pillar-video-title fade-in-up">Optimized Sleep</h1>
          </div>
        </section>

        <section className="pillar-video-section">
          <div className="container pillar-video-container">
            <div className="pillar-video-content">
              <div className="pillar-video-left">
                <YouTubeVideo videoId="XHOmBV4js_E" />
              </div>
              <div className="pillar-video-right">
                <p>
                  Welcome to our comprehensive collection of educational videos, where you can delve into the transformative power of Lifestyle Medicine otherwise known as the Five Pillars. Extensively researched by the esteemed Stanford University and showcased at longevity.stanford.edu, these lifestyle pillars serve as a guiding light on your journey toward a healthier, more fulfilling life. we are thrilled to present you with an enticing glimpse into the realm of Lifestyle Medicine.
                </p>
              </div>
            </div>
            <div className="pillar-video-bottom">
              <p>
                Welcome to our comprehensive collection of educational videos, where you can delve into the transformative power of Lifestyle Medicine otherwise known as the Five Pillars. Extensively researched by the esteemed Stanford University and showcased at longevity.stanford.edu, these lifestyle pillars serve as a guiding light on your journey toward a healthier, more fulfilling life. we are thrilled to present you with an enticing glimpse into the realm of Lifestyle Medicine.
              </p>
            </div>
            <div className="pillar-divider"></div>
            <h1 className="pillar-video-title fade-in-up">Stress Management</h1>
          </div>
        </section>

        <section className="pillar-video-section">
          <div className="container pillar-video-container">
            <div className="pillar-video-content">
              <div className="pillar-video-left">
                <YouTubeVideo videoId="XHOmBV4js_E" />
              </div>
              <div className="pillar-video-right">
                <p>
                  Welcome to our comprehensive collection of educational videos, where you can delve into the transformative power of Lifestyle Medicine otherwise known as the Five Pillars. Extensively researched by the esteemed Stanford University and showcased at longevity.stanford.edu, these lifestyle pillars serve as a guiding light on your journey toward a healthier, more fulfilling life. we are thrilled to present you with an enticing glimpse into the realm of Lifestyle Medicine.
                </p>
              </div>
            </div>
            <div className="pillar-video-bottom">
              <p>
                Welcome to our comprehensive collection of educational videos, where you can delve into the transformative power of Lifestyle Medicine otherwise known as the Five Pillars. Extensively researched by the esteemed Stanford University and showcased at longevity.stanford.edu, these lifestyle pillars serve as a guiding light on your journey toward a healthier, more fulfilling life. we are thrilled to present you with an enticing glimpse into the realm of Lifestyle Medicine.
              </p>
            </div>
            <div className="pillar-divider"></div>
            <h1 className="pillar-video-title fade-in-up">Social Relationships</h1>
          </div>
        </section>

        {/* Subscribe Now Section */}
        <section className="subscribe-section">
          <div className="container subscribe-container">
            <h2 className="fade-in-up">Subscribe Now</h2>
            <div className="subscribe-content fade-in-up">
              <p style={{ textAlign: 'center' }}>WELCOME TO THE SAUMRS FAMILY! =)</p>
              <p style={{ textAlign: 'center' }}>
                SAUMRS is bespoke just for you. The nutrition needs for a 5'7" 115lb female are dramatically different than a 6' 200lb male. In order for you to experience optimal results, we need to tailor your subscription JUST FOR YOU! Every subscription comes with a <strong>FREE 15-30 MINUTE HEALTH EVALUATION</strong> with a diet/lifestyle/wellness master. Once performed, we can offer you the best advice on daily product dosage and the most appropriate protein(s) needed to reach your goals.
              </p>
            </div>
            <div className="booking-info fade-in-up">
              <h6>For Booking Please Give Us a Call or Send Us an Email with the Best Time for your Appointment :</h6>
            </div>
            <div className="contact-options">
              <div className="contact-option">
                <h6>Phone:<br />+1 (877) 4-SAUMRS</h6>
                <a href="tel:+18774728677" className="contact-btn">
                  <svg aria-hidden="true" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
                  </svg>
                  PHONE US
                </a>
              </div>
              <div className="contact-option">
                <h6>Email:<br />Booking@SAUMRS.COM</h6>
                <a href="mailto:booking@saumrs.com" className="contact-btn">
                  <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                  </svg>
                  EMAIL US
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
