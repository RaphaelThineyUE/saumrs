import { useEffect } from 'react';
import { useScrollAnimation, useParallax } from '../hooks/useAnimations';
import './Home.css';

export const Home = () => {
  useScrollAnimation();
  useParallax();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <div className="top-text-banner">
        <span>Super</span>
        <span>Awesome</span>
        <span>Ultimate</span>
        <span>Meal</span>
        <span>Replacement</span>
        <span>Shake</span>
      </div>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to the SAUMRS family.</h1>
          <p>
            SAUMRS is RAW, Whole Food, Anabolic Energy. Pure, Organic, Nutrient Dense Superfoods.
            Packed with Adaptogens and Prebiotics.
          </p>
          <p>No fillers, no added sugar, nothing artificial... period.</p>
          <p>
            Each 60-90gram serving of SAUMRS is uniquely formulated so that every single ingredient
            meets or exceeds functional nutrient density significance. They do what they are supposed
            to do for your body.
          </p>
          <p>
            ie. NO B.S. ingredients for "marketing purposes" that do nothing. Every ingredient in
            SAUMRS is freeze dried or low temperature dried to maintain optimal, raw, whole food
            nutrition.
          </p>
          <p>
            Lab tested to meet the highest standards of quality and purity. Developed by Aerospace
            and Biomedical engineers; SAUMRS is the most advanced nutrition on earth.
          </p>
        </div>
        <div className="hero-image">
          <div className="product-placeholder parallax-element">PRODUCT IMAGE</div>
        </div>
      </section>

      <section className="press-section">
        <div className="press-logo">Bloomberg</div>
        <div className="press-logo">Yahoo! News</div>
        <div className="press-logo">Exeleon</div>
        <div className="press-logo">Medium</div>
        <div className="press-logo">Fast Company</div>
      </section>

      <section className="superfoods">
        <div className="athlete-image scroll-animate parallax-element">
          <div className="athlete-placeholder">ATHLETE IMAGE</div>
        </div>
        <div className="superfoods-content scroll-animate">
          <h2>Superfoods make Superhumans</h2>
          <div className="icons-grid">
            <div className="icon-item scroll-animate">
              <div className="icon-circle">🚫</div>
              <h3>Non GMO</h3>
              <p>Natural, wholesome, & free from genetic modification.</p>
            </div>
            <div className="icon-item scroll-animate">
              <div className="icon-circle">🌱</div>
              <h3>Organic</h3>
              <p>Pure, nature's best for your health and well-being.</p>
            </div>
            <div className="icon-item scroll-animate">
              <div className="icon-circle">🥬</div>
              <h3>Vegan</h3>
              <p>Plant-powered nutrition for a compassionate lifestyle.</p>
            </div>
            <div className="icon-item scroll-animate">
              <div className="icon-circle">🌾</div>
              <h3>Gluten Free</h3>
              <p>Delight in gluten-free goodness, and worry-free meals.</p>
            </div>
            <div className="icon-item scroll-animate">
              <div className="icon-circle">🧪</div>
              <h3>Chemical Free</h3>
              <p>Embrace purity, free from harmful substances.</p>
            </div>
            <div className="icon-item scroll-animate">
              <div className="icon-circle">✡️</div>
              <h3>Kosher</h3>
              <p>Faithfully prepared, meeting rigorous standards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ingredients-section">
        <a href="#ingredients" className="btn-primary">
          🔬 Ingredients
        </a>
      </section>

      <section className="subscribe-section">
        <h2>Subscribe Now</h2>
        <p>
          <strong>WELCOME TO THE SAUMRS FAMILY! =)</strong>
        </p>
        <p>
          SAUMRS is bespoke just for you. The nutrition needs for a 5'7" 115lb female are
          dramatically different than a 6' 200lb male. In order for you to experience optimal results
          we need to tailor your subscription JUST FOR YOU! Every subscription comes with a{' '}
          <strong>FREE 15-30 MINUTE HEALTH EVALUATION</strong> with a diet/lifestyle/wellness master.
        </p>
        <p>
          <strong>For Booking Please Give Us a Call or Send Us an Email:</strong>
        </p>
        <div className="subscribe-options">
          <div className="subscribe-card scroll-animate">
            <h3>Phone:</h3>
            <p>+1 (877) 4-SAUMRS</p>
            <a href="tel:+18774728677" className="btn-primary">
              📞 PHONE US
            </a>
          </div>
          <div className="subscribe-card scroll-animate">
            <h3>Email:</h3>
            <p>Booking@SAUMRS.COM</p>
            <a href="mailto:Booking@SAUMRS.COM" className="btn-primary">
              ✉️ EMAIL US
            </a>
          </div>
        </div>
      </section>

      <section className="super-nutrition">
        <h2>Super Nutrition</h2>
        <div className="nutrition-top-row">
          <div className="nutrition-item scroll-animate">
            <div className="nutrition-icon">💪</div>
            <h3>Anabolic Nutrition</h3>
            <p>SAUMRS promotes healthy cellular mitosis and detoxing of senescent cells.</p>
          </div>
          <div className="nutrition-item scroll-animate">
            <div className="nutrition-icon">🧬</div>
            <h3>34 Ingredients</h3>
            <p>Experience the power of nature with our custom curated blend.</p>
          </div>
        </div>

        <div className="nutrition-middle">
          <div className="nutrition-circle"></div>
          <div className="center-product-wrapper scroll-animate parallax-element">
            <div className="product-placeholder">S.A.U.M.R.S</div>
          </div>
          <div className="nutrition-item-positioned left-top scroll-animate">
            <div className="nutrition-icon">⏳</div>
            <h3>Life Extension</h3>
            <p>Mitigate aging with the unique adaptogen superfood formula.</p>
          </div>
          <div className="nutrition-item-positioned left-bottom scroll-animate">
            <div className="nutrition-icon">⚡</div>
            <h3>Increased Energy</h3>
            <p>Elevate your endurance with our energy-boosting formula.</p>
          </div>
          <div className="nutrition-item-positioned right-top scroll-animate">
            <div className="nutrition-icon">🧘</div>
            <h3>Extended Focus</h3>
            <p>Sustain mental clarity and concentration for longer.</p>
          </div>
          <div className="nutrition-item-positioned right-bottom scroll-animate">
            <div className="nutrition-icon">💆</div>
            <h3>Beautiful Hair, Skin, Nails</h3>
            <p>Foundational Beauty starts with foundational nutrition</p>
          </div>
        </div>

        <div className="nutrition-bottom-row">
          <div className="nutrition-item scroll-animate">
            <div className="nutrition-icon">🧠</div>
            <h3>Improved Cognition</h3>
            <p>Unlock your cognitive potential and enhance mental performance.</p>
          </div>
          <div className="nutrition-item scroll-animate">
            <div className="nutrition-icon">🏃</div>
            <h3>Faster Recovery</h3>
            <p>Enhance healing and bounce back faster than ever.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Join the Family</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card scroll-animate">
            <div className="testimonial-avatar"></div>
            <p className="testimonial-text">
              Amazing. This boosted my energy levels! Highly recommend this shake.
            </p>
            <div className="testimonial-stars">★★★★★</div>
            <p>Regina</p>
          </div>
          <div className="testimonial-card scroll-animate">
            <div className="testimonial-avatar"></div>
            <p className="testimonial-text">
              Life-changing product! I Feel better since starting this shake.
            </p>
            <div className="testimonial-stars">★★★★★</div>
            <p>Samir</p>
          </div>
          <div className="testimonial-card scroll-animate">
            <div className="testimonial-avatar"></div>
            <p className="testimonial-text">
              Improved focus, balanced hormones, and delicious taste. Love it
            </p>
            <div className="testimonial-stars">★★★★★</div>
            <p>Shelly</p>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div>
          <div className="product-placeholder parallax-element" style={{ maxWidth: '400px' }}>
            PRODUCT PACKAGES
          </div>
        </div>
        <div className="pricing-content">
          <h2>Join the SAUMRS Family for as Little as $5.55 per Day!</h2>
          <p>
            <strong>Less than the price of a craft coffee!</strong>
          </p>
          <p>
            Unlock incredible savings with our bi-annual and annual supply bundles. Subscribe today
            and enjoy amazing pricing.
          </p>
          <a href="/subscriptions" className="btn-primary">
            🔒 SUBSCRIBE
          </a>
        </div>
      </section>

      <div className="two-column-section">
        <div className="column-image">Executives and Athletes Image</div>
        <div className="column-content">
          <h2>Executives and Athletes</h2>
          <p>
            <strong>We made this for you!</strong>
          </p>
          <p>
            Discover our groundbreaking health products crafted with a perfect blend of innovative
            thinking and scientific expertise.
          </p>
        </div>
      </div>

      <div className="two-column-section">
        <div className="column-content">
          <h2>Innovative Health Products</h2>
          <p>
            <strong>Research & Development</strong>
          </p>
        </div>
        <div className="column-image">Research & Development Image</div>
      </div>

      <section className="faq-section">
        <div>
          <div className="product-placeholder parallax-element" style={{ maxWidth: '380px' }}>
            PRODUCT IMAGE
          </div>
        </div>
        <div className="faq-list">
          <h2>FAQ's</h2>
          <p className="faq-intro">Here are some of the most common questions we get.</p>

          <FAQItem
            question="What is in SAUMRS?"
            answer="Organic Coconut Milk, Organic Banana, Organic Papaya Juice, Organic Pineapple Juice, Organic Cashew Nut Milk, Organic Acai, Organic Maltodextrin, Organic Apple, Organic Cacao, Organic Tart Cherry Juice, Organic Cordyceps Mushroom Extract, Organic Sea Buckthorn Juice, Organic Lion's Mane Extract, Organic Tomato, Organic Rice, Organic Goji Berry Juice, Organic Kale, Organic Broccoli, Organic Spirulina, Organic Unripe Acerola Cherry, Organic Chlorella, Organic Beetroot Juice, Organic Ginger, Organic Mangosteen, Organic Cranberry Juice, Organic Noni Fruit, Organic Alfalfa Grass Juice, Organic Pomegranate Juice, Organic Amla, Organic Moringa Leaf, Organic Baobab Fruit, Organic Shiitake Mushroom, Organic Cinnamon, Organic Kelp, Organic Sunflower Lecithin, Organic Acacia, Silicon Dioxide"
          />
          <FAQItem
            question="How is SAUMRS different?"
            answer="There is no other meal available on Earth to obtain all of the benefits of SAUMRS. Each ingredient has been selected for optimal nutrition and potency while keeping flavor profile and nutrition in mind. The 16 fruits, 6 vegetables/leaf/grass, 3 algae/seaweeds, 3 mushrooms, 3 herb/roots and 2 nuts provide antioxidants, vitamins, minerals, amino acids, and many other nutritional benefits."
          />
          <FAQItem
            question="Is SAUMRS safe and sustainable?"
            answer="Each ingredient is chemical and pesticide free. SAUMRS ingredients are sustainably sourced using and dried using low temperature to maintain RAW food quality or freeze dried to maintain optimal nutrition. Multiple assessments are used to meet high standards of quality and freshness including Current Good Manufacturing Practices, Hazard Analysis, Critical Control Points, and Organoleptic Testing."
          />
          <FAQItem
            question="Is SAUMRS good for fat loss?"
            answer="The fat quality is ideal for a 'low fat' meal. The carb: protein ratio (with recommended additional protein) is ideal for muscle gain, 'pre' and post-workout."
          />
          <FAQItem
            question="How is SAUMRS a beauty product?"
            answer="Beauty starts from the inside out. Collagen protein is the foundation of hair, skin and nails. Vitamin C is the catalyst for growing hair, skin and nails. Addressing this topically is the insane capitalist model of the beauty industry. SAUMRS improves beauty from the inside out."
          />
          <FAQItem
            question="How will I poop?"
            answer="As this is a liquid meal it inherently promotes soft poop. If you have constipation it can be a cure. Everyone will react differently. There is a detox period when initially taking SAUMRS. SAUMRS by itself creates runny poop. The wrong protein profile will create runny poop. With the proper protein profile such as pea and rice this will be mitigated. SAUMRS should be mild on your stomach with no negative effects."
          />
          <FAQItem
            question="How does SAUMRS taste?"
            answer="As SAUMRS is 100% organic there will be slight variances in flavor given the ingredient profile. At its' peak, we like to call it tropical ginger bread. At its' worst, it has a very green flavor. Sometimes it tastes more chocolatey. The thicker it is the sweeter. If you add more water it has a more green (kale and seaweed) flavor."
          />
        </div>
      </section>
    </div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className={`faq-arrow ${isOpen ? 'active' : ''}`}>›</span>
      </div>
      <div className={`faq-answer ${isOpen ? 'active' : ''}`}>
        {answer}
      </div>
    </div>
  );
};

import { useState } from 'react';
