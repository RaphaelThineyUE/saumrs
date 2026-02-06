import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';
import { contactApi } from '../api/client';
import './Contact.css';

export const Contact = () => {
  useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await contactApi.submitContact(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="page-title scroll-animate">
        <h1>Reach Out to Us</h1>
      </section>

      <section className="contact-section">
        <div className="contact-info scroll-animate">
          <h6>Phone: +1 (877) 4-SAUMRS</h6>
          <h6>Email: Support@SAUMRS.COM</h6>
        </div>

        <div className="contact-form scroll-animate">
          {submitStatus === 'success' && (
            <div className="status-message success">
              ✓ Message sent successfully! We'll be in touch soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="status-message error">
              ✗ Error sending message. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>

        <div className="location-info scroll-animate">
          <h6>
            1000 Brickell Ave, Ste 715
            <br />
            Miami, FL 33131
          </h6>
          <h6>
            MON-FRI 09:00 - 19:00
            <br />
            SAT-SUN 10:00 - 14:00
          </h6>

          <div className="social-icons" aria-label="Social links">
            <a href="#" aria-label="Facebook">
              <svg aria-hidden="true" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="map-section scroll-animate">
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=1000%20Brickell%20Ave%2C%20STE%20715%2C%20Miami%2C%20FL%2033131&t=m&z=13&output=embed&iwloc=near"
          title="1000 Brickell Ave, STE 715, Miami, FL 33131"
          aria-label="1000 Brickell Ave, STE 715, Miami, FL 33131"
        ></iframe>
      </section>

      <section className="subscribe-section">
        <h2>Subscribe Now</h2>
        <p className="welcome-text">WELCOME TO THE SAUMRS FAMILY! =)</p>
        <p>
          SAUMRS is bespoke just for you. The nutrition needs for a 5'7" 115lb female are
          dramatically different than a 6' 200lb male. In order for you to experience optimal results,
          we need to tailor your subscription JUST FOR YOU! Every subscription comes with a{' '}
          <strong>FREE 15-30 MINUTE HEALTH EVALUATION</strong> with a diet/lifestyle/wellness master.
          Once performed, we can offer you the best advice on daily product dosage and the most
          appropriate protein(s) needed to reach your goals.
        </p>
        <p className="booking-text">
          <strong>
            For Booking Please Give Us a Call or Send Us an Email with the Best Time for your
            Appointment :
          </strong>
        </p>

        <div className="subscribe-contact-grid">
          <div className="subscribe-contact-card">
            <h6>
              Phone:
              <br />
              +1 (877) 4-SAUMRS
            </h6>
            <a className="subscribe-contact-button" href="tel:+1(833)472-8677">
              <svg aria-hidden="true" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
              </svg>
              PHONE US
            </a>
          </div>
          <div className="subscribe-contact-card">
            <h6>
              Email:
              <br />
              Booking@SAUMRS.COM
            </h6>
            <a className="subscribe-contact-button" href="mailto:support@saumrs.com">
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
