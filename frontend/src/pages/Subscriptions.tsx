import { useEffect } from 'react';
import { LogosCarousel } from '../components/LogosCarousel';
import { subscriptionPlans } from '../data/subscriptionPlans';
import './Subscriptions.css';

export const Subscriptions = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );

    const animateElements = document.querySelectorAll('.scroll-animate, .pricing-card');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="subscriptions-page">
      <section className="subscriptions-title scroll-animate">
        <h2>Subscriptions</h2>
      </section>

      <section className="subscriptions-logos">
        <LogosCarousel />
      </section>

      <section className="intro-section scroll-animate">
        <h2>Every Human is Unique. Shouldn't your Wellness Plan Also Be?</h2>
        <p>
          Unlock incredible savings with our bi-quarterly and annual supply bundles. Subscribe today and enjoy amazing pricing that rewards your commitment to long-term wellness. Come experience the most comprehensive, advanced nutrition on earth!
        </p>
      </section>

      <section className="team-section scroll-animate">
        <div className="team-image">
          <img
            src="/images/Every_Human_is_Different-transformed.jpeg"
            alt="Every Human is Different"
          />
        </div>
      </section>

      <section className="bespoke-section scroll-animate">
        <div className="bespoke-content">
          <h2>Bespoke Nutrition Matched to Your Health Profile</h2>
          <p>
            Unlock incredible savings with our bi-annual and annual supply bundles. Subscribe today and enjoy amazing pricing that rewards your commitment to long-term wellness. Come experience the most comprehensive, advanced nutrition on earth!
          </p>
        </div>
        <div className="bespoke-image">
          <img
            src="/images/bowl-of-dna-stranded-vegetables-and-superfoods.png"
            alt="Nutrition"
          />
        </div>
      </section>

      <section className="pricing-section scroll-animate">
        <div className="pricing-grid">
          {subscriptionPlans.map((plan) => (
            <div key={plan.title} className="pricing-card">
              {plan.ribbon && <div className="pricing-badge">{plan.ribbon}</div>}
              <div className="pricing-header">
                <h3>{plan.title}</h3>
                <p className="subtitle">{plan.subtitle}</p>
              </div>
              <div className="pricing-price">
                {plan.originalPrice && <p className="price-old">{plan.originalPrice}</p>}
                <p className="price-amount">{plan.price}</p>
                <p className="price-details">{plan.period}</p>
              </div>
              <div className="pricing-features">
                {plan.features.map((feature) => (
                  <div key={feature} className="feature-item">
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="pricing-button">
                <a href="#" className="btn-order">
                  Book Consultation
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing-intro scroll-animate">
        <h2>Plan Your Health For as Little as  $5.55 per Day</h2>
      </section>

      <section className="final-cta scroll-animate">
        <div className="final-cta-image">
          <img
            src="/images/Every_Human_is_Different-transformed.jpeg"
            alt="Every Human is Different"
          />
        </div>
        <div className="final-cta-content">
          <h2>Every Human is Different. Shouldn't your Nutrition Be Also?</h2>
          <p>
            Unlock incredible savings with our bi-quarterly and annual supply bundles. Subscribe today and enjoy amazing pricing that rewards your commitment to long-term wellness. Come experience the most comprehensive, advanced nutrition on earth!
          </p>
        </div>
      </section>

      <section className="subscriptions-subscribe">
        <h2>Subscribe Now</h2>
        <div className="subscriptions-subscribe-copy">
          <p>WELCOME TO THE SAUMRS FAMILY! =)</p>
          <p>
            SAUMRS is bespoke just for you. The nutrition needs for a 5’7” 115lb female are dramatically different than a 6’2” 200lb male. In order for you to experience optimal results, we need to tailor your subscription JUST FOR YOU! Every subscription comes with a <strong>FREE 15-30 MINUTE HEALTH EVALUATION</strong> with a diet/lifestyle/wellness master. Once performed, we can offer you the best advice on daily product dosage and the most appropriate protein(s) needed to reach your goals.
          </p>
        </div>
        <h6>For Booking Please Give Us a Call or Send Us an Email with the Best Time for your Appointment :</h6>
        <div className="subscriptions-contact-grid">
          <div className="subscriptions-contact-card">
            <h6>
              Phone:<br />+1 (877) 4-SAUMRS
            </h6>
            <a className="subscriptions-contact-button" href="tel:+1(833)472-8677">
              <svg aria-hidden="true" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
              </svg>
              PHONE US
            </a>
          </div>
          <div className="subscriptions-contact-card">
            <h6>
              Email:<br />Booking@SAUMRS.COM
            </h6>
            <a className="subscriptions-contact-button" href="mailto:support@saumrs.com">
              <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
              EMAIL US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
