import { useEffect } from 'react';
import './Ingredients.css';

type IngredientCard = {
  emoji: string;
  title: string;
  description: string;
};

const ingredientCards: IngredientCard[] = [
  {
    emoji: '🥬',
    title: 'Spirulina',
    description:
      'A nutrient-dense blue-green algae packed with protein, vitamins, and minerals. Supports immune function and provides powerful antioxidants.',
  },
  {
    emoji: '🍌',
    title: 'Maca Root',
    description:
      'An adaptogenic root that helps balance hormones, boost energy, and enhance mental clarity naturally.',
  },
  {
    emoji: '🧡',
    title: 'Turmeric',
    description:
      'Contains curcumin, a powerful anti-inflammatory compound that supports joint health and overall wellness.',
  },
  {
    emoji: '🍋',
    title: 'Ashwagandha',
    description:
      'Ancient adaptogen that reduces stress, improves cognitive function, and supports balanced energy levels.',
  },
  {
    emoji: '🌿',
    title: 'Chlorella',
    description:
      'Detoxifying green algae rich in chlorophyll, helping to cleanse and nourish at the cellular level.',
  },
  {
    emoji: '🍇',
    title: 'Acai Berry',
    description:
      'Antioxidant powerhouse that supports heart health, brain function, and provides sustained energy.',
  },
  {
    emoji: '🥥',
    title: 'MCT Oil',
    description:
      'Medium-chain triglycerides that provide quick, clean energy and support cognitive performance.',
  },
  {
    emoji: '🍄',
    title: "Lion's Mane",
    description:
      'Medicinal mushroom that enhances cognitive function, memory, and supports nervous system health.',
  },
  {
    emoji: '🌱',
    title: 'Moringa',
    description:
      'Nutrient-rich superfood containing essential amino acids, vitamins, and minerals for complete nutrition.',
  },
  {
    emoji: '🫐',
    title: 'Goji Berry',
    description:
      'Ancient superfruit packed with antioxidants, vitamins, and immune-supporting compounds.',
  },
  {
    emoji: '🌾',
    title: 'Chia Seeds',
    description:
      'Rich in omega-3 fatty acids, fiber, and protein. Supports heart health and digestive wellness.',
  },
  {
    emoji: '🥜',
    title: 'Hemp Seeds',
    description:
      'Complete protein source with optimal omega fatty acid ratios for balanced nutrition.',
  },
  {
    emoji: '🍵',
    title: 'Matcha',
    description:
      'Concentrated green tea powder rich in L-theanine and antioxidants for calm, focused energy.',
  },
  {
    emoji: '🌰',
    title: 'Cacao',
    description:
      'Raw chocolate packed with flavonoids, magnesium, and mood-enhancing compounds.',
  },
  {
    emoji: '🥕',
    title: 'Beetroot',
    description:
      'Nitrate-rich vegetable that supports cardiovascular health and athletic performance.',
  },
  {
    emoji: '🫚',
    title: 'Ginger',
    description:
      'Anti-inflammatory root that aids digestion, reduces nausea, and supports immune function.',
  },
  {
    emoji: '🍠',
    title: 'Reishi',
    description:
      'Adaptogenic mushroom that supports immune health, reduces stress, and promotes restful sleep.',
  },
  {
    emoji: '🥒',
    title: 'Wheatgrass',
    description:
      'Nutrient-dense grass rich in chlorophyll, vitamins, and enzymes for cellular health.',
  },
  {
    emoji: '🌸',
    title: 'Rhodiola',
    description:
      'Adaptogen that combats fatigue, enhances mental performance, and reduces stress impact.',
  },
  {
    emoji: '🍯',
    title: 'Bee Pollen',
    description:
      "Nature's multivitamin containing proteins, vitamins, minerals, and antioxidants.",
  },
  {
    emoji: '🥗',
    title: 'Kale',
    description:
      'Nutrient powerhouse loaded with vitamins K, A, C, and powerful antioxidants.',
  },
  {
    emoji: '🫑',
    title: 'Spinach',
    description:
      'Iron-rich leafy green supporting energy production and overall vitality.',
  },
  {
    emoji: '🥦',
    title: 'Broccoli',
    description:
      'Cruciferous vegetable with detoxifying properties and cancer-fighting compounds.',
  },
  {
    emoji: '🌶️',
    title: 'Cayenne',
    description:
      'Metabolism-boosting spice that supports circulation and digestive health.',
  },
  {
    emoji: '🥝',
    title: 'Baobab',
    description:
      'African superfruit rich in vitamin C, fiber, and prebiotic compounds for gut health.',
  },
  {
    emoji: '🌻',
    title: 'Sunflower Lecithin',
    description:
      'Natural emulsifier that supports brain health and cellular function.',
  },
  {
    emoji: '🍊',
    title: 'Camu Camu',
    description:
      'Amazonian berry with the highest natural vitamin C content for immune support.',
  },
  {
    emoji: '🌿',
    title: 'Kelp',
    description:
      'Iodine-rich seaweed supporting thyroid function and metabolic health.',
  },
  {
    emoji: '🥥',
    title: 'Coconut Water Powder',
    description:
      'Natural electrolyte source for hydration and mineral replenishment.',
  },
  {
    emoji: '🫘',
    title: 'Pea Protein',
    description:
      'Plant-based complete protein supporting muscle recovery and growth.',
  },
  {
    emoji: '🌾',
    title: 'Brown Rice Protein',
    description:
      'Hypoallergenic protein source with balanced amino acid profile.',
  },
  {
    emoji: '🥜',
    title: 'Almond',
    description:
      'Vitamin E-rich nut supporting skin health and providing healthy fats.',
  },
  {
    emoji: '🍓',
    title: 'Monk Fruit',
    description:
      'Natural zero-calorie sweetener with antioxidant properties.',
  },
  {
    emoji: '🌿',
    title: 'Stevia',
    description:
      'Plant-based sweetener that supports healthy blood sugar levels.',
  },
];

export const Ingredients = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, index * 50);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' },
    );

    const animateElements = document.querySelectorAll('.ingredient-card');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="ingredients-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Ultra Premium Ingredients for Human Excellence</h1>
          <p className="subtitle">Discover the extraordinary superfoods that power SAUMRS nutrition.</p>
          <p>
            Every ingredient in SAUMRS has been carefully selected for its nutritional density,
            bioavailability, and synergistic effects. We source only the highest quality organic and
            wildcrafted ingredients from around the world.
          </p>
          <p>
            Our blend combines 34 premium superfoods, adaptogens, medicinal mushrooms, and plant-based
            proteins to create the ultimate meal replacement experience that supports your body's natural
            optimization.
          </p>
          <a className="view-button" href="/five-pillars">
            Explore Our Philosophy
          </a>
        </div>
        <div className="hero-image">
          <img src="/images/spirulina-powder-1024x867.jpg" alt="Spirulina powder" />
        </div>
      </section>

      <section className="press-bar"></section>

      <section className="intro-section">
        <h2>Premium Ingredients? We've Got You Covered</h2>
        <p>
          At SAUMRS, we believe that true nutrition comes from nature's most potent superfoods. Our
          ingredients are selected based on scientific research, traditional wisdom, and proven results.
          Each component serves a specific purpose in supporting your health, energy, and longevity.
        </p>
      </section>

      <section className="ingredients-grid">
        <div className="grid-container">
          {ingredientCards.map((card) => (
            <div className="ingredient-card" key={card.title}>
              <div className="ingredient-image">{card.emoji}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="subscribe-section">
        <h2>Subscribe Now</h2>
        <p>Experience the power of all 34 superfood ingredients working together.</p>
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
