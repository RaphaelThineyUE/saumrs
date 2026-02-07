import { Link } from 'react-router-dom';
import './Protein.css';
import { LogosCarousel } from '../components/LogosCarousel';
import { proteinDetails } from '../data/proteinDetails';

export const Protein = () => (
  <div className="protein-page">
    <section className="protein-hero">
      <div className="protein-hero-content">
        <h1>S.A.U.M.R.S Protein powders are the purest and best available on earth.</h1>
        <h6>Learn What Makes S.A.U.M.R.S Extraordinary Nutrition</h6>
      </div>
      <div className="protein-hero-image">
        <img
          src="/images/Organic-Grass-Fed-Whey-Protein-Isolate.png"
          alt="Organic Grass-Fed Whey Protein Isolate"
        />
      </div>
    </section>

    <section className="protein-logos">
      <LogosCarousel />
    </section>

    <section className="protein-intro">
      <h2>Want the Best Protein Available? We've Got You Covered</h2>
      <p>
        Do you aspire to extend your lifespan and cultivate a more gratifying existence? Among the five pillars of longevity, nutrition holds immense significance. While quantifying the precise impact of a well-balanced diet on an individual's overall health and well-being may prove challenging, the profound benefits of appropriate nourishment cannot be ignored. By embracing the right dietary choices, one can bolster the immune system, enhance physical and cognitive performance, and mitigate the risk of chronic ailments. Opting for nutrient-dense foods not only fortifies cellular health but also invigorates vitality and elongates the lifespan. Cultivating a diverse array of fruits and vegetables, incorporating lean proteins, and maintaining an optimal macronutrient balance are all prudent measures in the pursuit of long-term well-being. Embrace the nutritional aspects encapsulated within the five pillars and unlock the key to a prolonged and enriched existence.
      </p>
    </section>

    <section className="protein-products">
      <div className="protein-products-grid">
        {proteinDetails.map((protein) => (
          <Link key={protein.slug} className="protein-card" to={`/protein/${protein.slug}`}>
            <div className="protein-card-images">
              {protein.images.map((src, index) => (
                <img
                  key={`${protein.slug}-${index}`}
                  src={src}
                  alt={protein.title}
                  loading="lazy"
                />
              ))}
            </div>
            <h3>{protein.title}</h3>
            <h2 className="protein-price">{protein.price}</h2>
            <p className="protein-description">
              <em>Health</em> <em>Concerns</em>-<br />
              {protein.healthConcerns}
            </p>
          </Link>
        ))}
      </div>
    </section>

    <section className="protein-subscribe">
      <h2>Subscribe Now</h2>
      <div className="protein-subscribe-copy">
        <p>WELCOME TO THE SAUMRS FAMILY! =)</p>
        <p>
          SAUMRS is bespoke just for you. The nutrition needs for a 5’7” 115lb female are dramatically different than a 6’2” 200lb male. In order for you to experience optimal results, we need to tailor your subscription JUST FOR YOU! Every subscription comes with a <strong>FREE 15-30 MINUTE HEALTH EVALUATION</strong> with a diet/lifestyle/wellness master. Once performed, we can offer you the best advice on daily product dosage and the most appropriate protein(s) needed to reach your goals.
        </p>
      </div>
      <h6>For Booking Please Give Us a Call or Send Us an Email with the Best Time for your Appointment :</h6>
      <div className="protein-contact-grid">
        <div className="protein-contact-card">
          <h6>
            Phone:<br />+1 (877) 4-SAUMRS
          </h6>
          <a className="protein-contact-button" href="tel:+1(833)472-8677">
            <svg aria-hidden="true" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
            </svg>
            PHONE US
          </a>
        </div>
        <div className="protein-contact-card">
          <h6>
            Email:<br />Booking@SAUMRS.COM
          </h6>
          <a className="protein-contact-button" href="mailto:support@saumrs.com">
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
