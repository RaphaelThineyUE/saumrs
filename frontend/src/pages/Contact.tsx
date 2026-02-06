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
          <div className="info-item">
            <h3>Phone:</h3>
            <p>
              <a href="tel:+18774728677">+1 (877) 4-SAUMRS</a>
            </p>
          </div>
          <div className="info-item">
            <h3>Email:</h3>
            <p>
              <a href="mailto:Support@SAUMRS.COM">Support@SAUMRS.COM</a>
            </p>
          </div>
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
          <h3>1000 Brickell Ave, Ste 715</h3>
          <p>Miami, FL 33131</p>
          <p>
            <strong>MON-FRI</strong> 09:00 - 19:00
          </p>
          <p>
            <strong>SAT-SUN</strong> 10:00 - 14:00
          </p>

          <div className="social-icons">
            <a href="#facebook" aria-label="Facebook">
              f
            </a>
            <a href="#twitter" aria-label="Twitter">
              𝕏
            </a>
            <a href="#youtube" aria-label="YouTube">
              ▶
            </a>
            <a href="#instagram" aria-label="Instagram">
              📷
            </a>
          </div>
        </div>
      </section>

      <section className="subscribe-section">
        <h2>Subscribe Now</h2>
        <p className="welcome-text">
          <strong>WELCOME TO THE SAUMRS FAMILY! =)</strong>
        </p>
        <p>
          SAUMRS is bespoke just for you. The nutrition needs for a 5'7" 115lb female are
          dramatically different than a 6' 200lb male. In order for you to experience optimal results
          we need to tailor your subscription JUST FOR YOU! Every subscription comes with a{' '}
          <strong>FREE 15-30 MINUTE HEALTH EVALUATION</strong> with a diet/lifestyle/wellness master.
        </p>
        <p className="booking-text">
          <strong>For Booking Please Give Us a Call or Send Us an Email:</strong>
        </p>

        <div className="subscribe-info">
          <div className="info-block">
            <h3>Phone:</h3>
            <p>+1 (877) 4-SAUMRS</p>
          </div>
          <div className="info-block">
            <h3>Email:</h3>
            <p>Booking@SAUMRS.COM</p>
          </div>
        </div>

        <div className="subscribe-buttons">
          <a href="tel:+18774728677" className="btn-subscribe">
            📞 PHONE US
          </a>
          <a href="mailto:Booking@SAUMRS.COM" className="btn-subscribe">
            ✉️ EMAIL US
          </a>
        </div>
      </section>
    </div>
  );
};
