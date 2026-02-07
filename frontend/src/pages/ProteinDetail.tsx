import { Link, useParams } from 'react-router-dom';
import { proteinDetailsBySlug } from '../data/proteinDetails';
import { ingredientBadges } from '../data/ingredientDetails';
import './ProteinDetail.css';

const badgeIcon = (
  <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.2 166.1-151 182c-5.7 6.9-14.2 11-23.2 11h-.8c-8.7-.2-17-4.1-22.7-10.6l-83.7-95.6c-9.8-11.2-8.6-28.3 2.6-38.1 11.2-9.8 28.3-8.6 38.1 2.6l62.4 71.3 130.4-157.2c9.5-11.5 26.6-13.1 38-3.6 11.5 9.5 13.1 26.6 3.6 38.1z" />
  </svg>
);

export const ProteinDetail = () => {
  const { slug } = useParams();
  const detail = slug ? proteinDetailsBySlug[slug] : undefined;

  if (!detail) {
    return (
      <div className="protein-detail-not-found">
        <h1>Protein not found</h1>
        <p>Sorry, we could not find that protein.</p>
        <Link className="protein-detail-back-link" to="/protein">
          Back to Protein
        </Link>
      </div>
    );
  }

  return (
    <div className="protein-detail-page">
      <section className="protein-detail-hero">
        <h2>Protein Details</h2>
        <h1>{detail.title}</h1>
        <p className="protein-detail-price">{detail.price}</p>
      </section>

      <section className="protein-detail-overview">
        <div>
          <div className="protein-detail-image">
            <img src={detail.images[0]} alt={detail.title} />
          </div>
          {detail.images.length > 1 && (
            <div className="protein-detail-gallery">
              {detail.images.map((image) => (
                <img key={image} src={image} alt={detail.title} />
              ))}
            </div>
          )}
        </div>
        <div className="protein-detail-overview-text">
          <h3>Overview</h3>
          <div dangerouslySetInnerHTML={{ __html: detail.overviewHtml }} />
        </div>
      </section>

      <section className="protein-detail-badges">
        <div className="protein-badge-grid">
          {ingredientBadges.map((badge) => (
            <div className="protein-badge" key={badge.label}>
              <div className="protein-badge-icon">{badgeIcon}</div>
              <h4>{badge.label}</h4>
              <p>{badge.description}</p>
            </div>
          ))}
        </div>
      </section>

      {detail.sections.length > 0 && (
        <section className="protein-detail-sections">
          {detail.sections.map((section) => (
            <div className="protein-detail-section" key={section.title}>
              <h3>{section.title}</h3>
              <div className="protein-detail-section-body" dangerouslySetInnerHTML={{ __html: section.html }} />
            </div>
          ))}
        </section>
      )}

      <div className="protein-detail-back">
        <Link className="protein-detail-back-link" to="/protein">
          Back
        </Link>
      </div>

      <section className="protein-detail-subscribe">
        <h2>Subscribe Now</h2>
        <div className="protein-detail-subscribe-copy">
          <p>WELCOME TO THE SAUMRS FAMILY! =)</p>
          <p>
            SAUMRS is bespoke just for you. The nutrition needs for a 5'7" 115lb female are dramatically
            different than a 6'2" 200lb male. In order for you to experience optimal results, we need to
            tailor your subscription JUST FOR YOU! Every subscription comes with a{' '}
            <strong>FREE 15-30 MINUTE HEALTH EVALUATION</strong> with a diet/lifestyle/wellness master. Once
            performed, we can offer you the best advice on daily product dosage and the most appropriate
            protein(s) needed to reach your goals.
          </p>
        </div>
        <h6>For Booking Please Give Us a Call or Send Us an Email with the Best Time for your Appointment :</h6>
        <div className="protein-detail-contact-grid">
          <div className="protein-detail-contact-card">
            <h6>
              Phone:<br />+1 (877) 4-SAUMRS
            </h6>
            <a className="protein-detail-contact-button" href="tel:+1(833)472-8677">
              <svg aria-hidden="true" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
              </svg>
              PHONE US
            </a>
          </div>
          <div className="protein-detail-contact-card">
            <h6>
              Email:<br />Booking@SAUMRS.COM
            </h6>
            <a className="protein-detail-contact-button" href="mailto:support@saumrs.com">
              <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
              </svg>
              EMAIL US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
