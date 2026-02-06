import { useEffect } from 'react';
import { LogosCarousel } from '../components/LogosCarousel';
import { YouTubeVideo } from '../components/YouTubeVideo';
import './Ingredients.css';

type IngredientItem = {
  href: string;
  title: string;
  src: string;
  description: string;
};

const ingredientItems: IngredientItem[] = [
  {
    href: 'https://www.saumrs.com/organic-coconut-milk-powder/',
    title: 'Organic Coconut Milk Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Coconut-Milk-Powder.png',
    description: 'Health Concerns- Anti-Aging, Anti-Bacterial, Antifungal, Antiviral, Anemia, Atherosclerosis, Blood Pressure, Blood Sugar, Cholesterol Health, Colitis, Crohn’s Disease, Dermatitis, Eczema, Hair/Skin/Nails, Hemorrhoids, Immune Support, Kidney/Urinary Tract, Kidney Stones, Pancreas, Prostate Health, Psoriasis, Stress and Anxiety, Sports Performance, Thyroid Support, Ulcers, Weight Loss',
  },
  {
    href: 'https://www.saumrs.com/organic-banana-powder',
    title: 'Organic Banana Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Banana-Powder.png',
    description: 'Health Concerns- Acid Reflux, Diarrhea Relief, Cholesterol Health, Constipation Relief, Dizziness, Hangover, Heartburn, Mood/Emotions, Sports Performance, Ulcers',
  },
  {
    href: 'https://www.saumrs.com/organic-papaya-juice-powder',
    title: 'Organic Papaya Juice Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Papaya-Juice-Powder-Organic-Fruit-Powders.png',
    description: 'Health Concerns- Acid Reflux, Alkalizing, Anti-inflammatory, Antiseptic, Burns, Cardiovascular Support, Celiacs, Colon Health, Constipation Relief, Crohn\'s Disease, Digestion, Energy &amp; Vitality, Gallbladder Health, Gas &amp; Bloating, Gastritis, Gastrointestinal Disorders, Motion Sickness, Mucus, Nausea, Parasite Removal, Psoriasis, Ulcers, Unhealthy Cellular Reproduction, Vein &amp; Vascular',
  },
  {
    href: 'https://www.saumrs.com/organic-pineapple-juice-powder',
    title: 'Organic Pineapple Juice Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Pineapple-Juice-Powder-Organic-Fruit-Powders.webp',
    description: 'Health Concerns- Healthy Immune Response, Digestion, Indigestion',
  },
  {
    href: 'https://www.saumrs.com/organic-cashew-milk-powder',
    title: 'Cashew Milk Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Cashew-Milk-Powder.png',
    description: 'Health Concerns- Blood Sugar, Bone Support, Blood Pressure, Cardiovascular Support, Cholesterol Health, Diabetes, Energy and Vitality, Heart Health, Hypoglycemia, Joint/Cartilage, Men’s Health, Weight Loss, Women’s Health',
  },
  {
    href: 'https://www.saumrs.com/organic-premium-freeze-dried-acai-powder',
    title: 'Organic Premium Freeze Dried Açaí Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Acai-Berry-Powder-Premium-Organic-Freeze-Dried-Fruit-Powders.png',
    description: 'Health Concerns- Acid Reflux, Allergies, Anti-Inflammatory, Anti-Microbial, Antiseptic, Antispasmodic, Antiviral, Antibiotic, Arthritis, Ayurvedic Herbs, Blood Clots, Blood Pressure, Celiacs, Chills, Cholesterol Health, Circulation, Cold/Flu, Colitis, Colon Health, Cough Relief, Decongestant, Diabetes, Diarrhea Relief, Digestion, Dizziness, Eczema, Fevers, Gas/Bloating, Gastritis, Gastrointestinal Disorders, H pylori, Hangover, Heartburn, Hypertension, IBS, Loss of Appetite, Lymph Cleansing, Menstrual Cramps, Migraine/Headaches, Motion Sickness, Nausea, Pain Reduction, Prostate Health, Rheumatism, Sore Throat, Stomach Aches, Stroke Defense, Tendonitis, Ulcers, Unhealthy Cellular Reproduction, Vertigo, Water Retention',
  },
  {
    href: 'https://www.saumrs.com/organic-apple-powder/',
    title: 'Organic Apple Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Apple-Powder.png',
    description: 'Health Concerns- Anti-Inflammatory, Antioxidants, Astringent, Blood Pressure, Blood Sugar, Cardiovascular, Cholesterol Health, Energy and Vitality, Gastritis, Heart Health, Heartburn, Joint/Cartilage, Lung Health, Nervous System, Respiratory/Lung',
  },
  {
    href: 'https://www.saumrs.com/organic-cacao-powder',
    title: 'Organic Cacao Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Cacao-Powder.png',
    description: 'Health Concerns-&nbsp; ADHD, Anemia, Antidepressant, Antioxidants, Aphrodisiac, Blood Sugar, Cardiovascular Support, Depression, Energy and Vitality, Heart Health, Memory/Brain Health, Mood/Emotions, Sexual Health, Sports Performance, Stroke Defense',
  },
  {
    href: 'https://www.saumrs.com/organic-tart-cherry-juice-powder',
    title: 'Organic Tart Cherry Juice Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Tart-Cherry-Juice-Powder.png',
    description: 'Health Concerns- Alkalizing, Analgesic, Anti-Inflammatory, Antioxidants, Arthritis, Atherosclerosis, Cardiovascular Support, Cholesterol Health, Gout, Joint/Cartilage, Muscle Soreness, Osteoarthritis, Pain Reduction, Restless Legs Syndrome, Sleep and Relaxation, Stress and Anxiety, Sports Performance, Unhealthy Cellular Reproduction, Uric Acid',
  },
  {
    href: 'https://www.saumrs.com/organic-sea-buckthorn-juice-powder',
    title: 'Organic Sea Buckthorn Juice Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Sea-Buckthorn-Juice-Powder-Organic-Fruit-Powders.png',
    description: 'Health Concerns- Anti-Inflammatory, Antioxidants, Breast Health, Depression, Sports Performance, Vitamins, Women’s Health',
  },
  {
    href: 'https://www.saumrs.com/organic-tomato-powder/',
    title: 'Organic Tomato Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Tomato-Powder.png',
    description: 'Health Concerns- Antioxidants, Healthy Cardiovascular System, Strong Bones, Healthy Inflammation Response, Blood Pressure, Cholesterol Health, Heart Health, Restless Legs Syndrome, Stroke Defense, Unhealthy Cellular Reproduction',
  },
  {
    href: 'https://www.saumrs.com/organic-goji-berry-juice-powder',
    title: 'Organic Goji Berry Juice Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Goji-Berry-Juice-Powder-Organic-Fruit-Powders.png',
    description: 'Health Concerns- Alkalizing, Anti-Aging, Antioxidants, Allergies, Blood Pressure, Blood Sugar, Chi Deficiency, Circulation, Eye/Vision Health, Fertility, Immune Support, Jing Herbs, Kidney/Urinary Tract, Muscular Degeneration, Sexual Health, Stress and Anxiety, Sports Performance',
  },
  {
    href: 'https://www.saumrs.com/organic-mangosteen-fruit-powder/',
    title: 'Organic Mangosteen Fruit Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Mangosteen-Fruit-Powder.png',
    description: 'Health Concerns- Anti-Aging, Anti-Inflammatory, Antiviral, Antioxidants, Allergies, Alzheimer’s, Arthritis, Asthma, Cardiovascular Support, Eczema, Heart Health, Infections, Joint/Cartilage, Lupus, Pain Reduction, Rheumatism, Rosacea, Ulcers, Unhealthy Cellular Reproduction',
  },
  {
    href: 'https://www.saumrs.com/organic-freeze-dried-acerola-cherry-powder-unripe',
    title: 'Organic Freeze Dried Acerola Cherry Powder (Unripe)',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Freeze-Dried-Acerola-Cherry-Powder-Unripe.png',
    description: 'Health Concerns- Anti-Aging, Anti-Inflammatory, Antiviral, Antioxidants, Blood Pressure, Bruises, Burns, Cellulite, Cold/Flu, Cold Sores, Collagen, COPD, Cuts/Wounds, Diarrhea Relief, Energy and Vitality, Eye/Vision Health, Gums, Hair/Skin/Nails, Heart Health, Immune Support, Infections, Mood/Emotions, Respiratory, Rosacea, Stress and Anxiety, Unhealthy Cellular Reproduction, Varicose Spider Veins',
  },
  {
    href: 'https://www.saumrs.com/organic-cranberry-juice-powder/',
    title: 'Organic Cranberry Juice Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Cranberry-Juice-Powder.png',
    description: 'Health Concerns- Antioxidants, Phytonutrients, Fibromyalgia, Kidney/Urinary Tract, Kidney Stones',
  },
  {
    href: 'https://www.saumrs.com/organic-noni-fruit-powder',
    title: 'Organic Noni Fruit Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Noni-Fruit-Powder.png',
    description: 'Health Concerns- Alkalizing, Analgesic, Anti-Bacterial, Antifungal, Anti-Inflammatory, Anti-Microbial, Antiseptic, Antiviral, Arthritis, Burns, Constipation Relief, Cuts/Wounds, Detoxification, Digestion, Gallbladder Health, Gas/Bloating, Immune Support, Infections, Joint/Cartilage, Pain Reduction, Parasite Removal, Psoriasis, Unhealthy Cellular Reproduction',
  },
  {
    href: 'https://www.saumrs.com/organic-pomegranate-juice-powder',
    title: 'Organic Pomegranate Juice Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Pomegranate-Juice-Powder.png',
    description: 'Health Concerns- Anti-Aging, Antioxidants, Blood Pressure, Breast Health, Cardiovascular Support, Heart Health, Hypertension, Prostate Health, Unhealthy Cellular Reproduction',
  },
  {
    href: 'https://www.saumrs.com/organic-amla-fruit-powder',
    title: 'Organic Amla Fruit Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Amla-Fruit-Powder.png',
    description: 'Health Concerns- Acid Reflux, Anti-Aging, Anti-Bacterial, Anti-Inflammatory, Antioxidants, Atherosclerosis, Ayurvedic Herbs, Blood Pressure, Blood Sugar, Cardiovascular Support, Cholesterol Health, Circulation, Constipation Relief, Dandruff, Dental/Oral Health, Digestion, Eye/Vision Health, Gastritis, Hair/Skin/Nails, Heart Health, Hemorrhoids, Immune Support, Respiratory/Lung, Unhealthy Cellular Reproduction, Vein/Vascular',
  },
  {
    href: 'https://www.saumrs.com/organic-baobab-fruit-powder',
    title: 'Organic Baobab Fruit Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Baobab-Fruit-Powder.png',
    description: 'Health Concerns- Anti-Bacterial, Antifungal, Anti-Inflammatory, Antioxidants, Appetite Control, Celiacs, Cholesterol Health, Colon Health, Constipation Relief, Diarrhea Relief, Digestion, Fiber, Gas/Bloating, Prebiotics, Stomach Aches, Weight Loss',
  },
  {
    href: 'https://www.saumrs.com/organic-cordyceps-extract-powder',
    title: 'Organic Cordyceps Extract Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Cordyceps-Extract-Powder.png',
    description: 'Health Concerns- Adrenal Support, Allergies, Asthma, Cold/Flu, Depression, Emphysema, Immune Support, Infections, Jing Herbs, Kidney/Urinary tract, Lung Health, Respiratory, Sexual Health, Sports Performance, Tonic',
  },
  {
    href: 'https://www.saumrs.com/organic-lions-mane-extract-powder/',
    title: 'Organic Lion\'s Mane Extract Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Lions-Mane-Extract-Powder.png',
    description: 'Health Concerns- Alzheimer’s, Dementia, Antioxidant, Brain Health, Immune System',
  },
  {
    href: 'https://www.saumrs.com/organic-shiitake-mushroom-powder',
    title: 'Organic Shiitake Mushroom Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Shiitake-Mushroom-Powder.png',
    description: 'Health Concerns- Blood Clots, Candida, Cold/Flu, Jing Herbs',
  },
  {
    href: 'https://www.saumrs.com/organic-kale-powder',
    title: 'Organic Kale Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Kale-Powder.png',
    description: 'Health Concerns- Anti-Inflammatory, Antiestrogen, Antioxidants, Breast Health, Cardiovascular Support, Celiacs, Detoxification, Digestion, Eye/Vision Health, Macular Degeneration, Unhealthy Cellular Reproduction',
  },
  {
    href: 'https://www.saumrs.com/organic-broccoli-powder/',
    title: 'Organic Broccoli Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Broccoli-Powder.png',
    description: 'Health Concerns- Acid Reflux, Alkalizing, Antiestrogen, Breast Health, COPD, Dandruff, Detoxification, Eye and Vision, Gastritis, H. pylori, Prostate Health, Unhealthy Cellular Reproduction, Phytonutrients',
  },
  {
    href: 'https://www.saumrs.com/organic-spirulina-powder',
    title: 'Organic Spirulina Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Spirulina-Powder.png',
    description: 'Health Concerns- Alkalizing, Antioxidants, Bone Support, Energy and Vitality, Eye/Vision Health, Memory/Brain Health, Weight Loss',
  },
  {
    href: 'https://www.saumrs.com/organic-chlorella-powder-cracked-cell-wall/',
    title: 'Chlorella Powder (Cracked Cell Wall)',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Chlorella-Powder-Cracked-Cell-Wall.png',
    description: 'Health Concerns- Alkalizing, Anti-Aging, Blood Cleansing, Chlorophyll, Detoxification, Energy and Vitality, Eye/Vision Health, Hair/Skin/Nails, Heavy Metal Detox, Nervous System, Unhealthy Cellular Reproduction, Women’s Health',
  },
  {
    href: 'https://www.saumrs.com/organic-moringa-leaf-powder/',
    title: 'Organic Moringa Leaf Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Moringa-Leaf-Powder.png',
    description: 'Health Concerns- Alkalizing, Anemia, Detoxification, Diabetes, Energy and Vitality',
  },
  {
    href: 'https://www.saumrs.com/organic-kelp-rockweed-powder',
    title: 'Organic Kelp (Rockweed) Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Kelp-Rockweed-Powder.png',
    description: 'Health Concerns- Alkalizing, Blood Cleansing, Cellulite, Constipation Relief, Detoxification, Heavy Metal Detox, Hypertension, Lymph Cleansing, Metabolism, Rheumatism',
  },
  {
    href: 'https://www.saumrs.com/organic-alfalfa-leaf-powder',
    title: 'Organic Alfalfa Leaf Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Alfalfa-Leaf-Powder.png',
    description: 'Health Concerns- Alkalizing, Anorexia, Arthritis, Bone Support, Constipation Relief, Depression, Detoxification, Edema, Hair, Skin and Nails, Halitosis, Heavy Metal Detox, Joint and Cartilage, Loss of Appetite, Memory and Brain Health, Minerals, Rheumatism, Stomach Aches, Uric Acid',
  },
  {
    href: 'https://www.saumrs.com/organic-beetroot-juice-powder/',
    title: 'Organic Beetroot Juice Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Beet-Root-Juice-Powder-Organic-Herb-Root-Powders.png',
    description: 'Health Concerns- Anemia, Antioxidants, Acid Reflux, Blood Cleansing, Blood Pressure, Cardiovascular Support, Circulation, Constipation Relief, Detoxification, Diuretics, Edma, Gallstones, Gastritis, Heart Health, Heavy Metal Detox, Increase Red Blood Cells, Kidney/Urinary Tract, Men’s Health, Nitric Oxide, Sexual Health, Sports Performance, Stroke Defense',
  },
  {
    href: 'https://www.saumrs.com/ingredients/organic-ginger-root-powder/',
    title: 'Organic Ginger Root Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Ginger-Root-Powder.png',
    description: 'Health Concerns- Acid Reflux, Allergies, Anti-Inflammatory, Anti-Microbial, Antiseptic, Antispasmodic, Antiviral, Antibiotic, Arthritis, Ayurvedic Herbs, Blood Clots, Blood Pressure, Celiacs, Chills, Cholesterol Health, Circulation, Cold/Flu, Colitis, Colon Health, Cough Relief, Decongestant, Diabetes, Diarrhea Relief, Digestion, Dizziness, Eczema, Fevers, Gas/Bloating, Gastritis, Gastrointestinal Disorders, H pylori, Hangover, Heartburn, Hypertension, IBS, Loss of Appetite, Lymph Cleansing, Menstrual Cramps, Migraine/Headaches, Motion Sickness, Nausea, Pain Reduction, Prostate Health, Rheumatism, Sore Throat, Stomach Aches, Stroke Defense, Tendonitis, Ulcers, Unhealthy Cellular Reproduction, Vertigo, Water Retention',
  },
  {
    href: 'https://www.saumrs.com/organic-cinnamon-powder',
    title: 'Organic Cinnamon Powder',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/06/Organic-Cinnamon-Powder.png',
    description: 'Health Concerns- Acid Reflux, Alzheimer’s, Anti-Bacterial, Antibiotic, Blood Sugar, Cholesterol Health, Diabetes, Diarrhea Relief, Gas/Bloating, H pylori, Halitosis, Jing Herbs, Loss of Appetite, Memory/Brain Health, Migraine/Headaches, Pancreas',
  },
  {
    href: 'https://www.saumrs.com/organic-acacia-fiber/',
    title: 'Acacia Fiber',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/07/Acacia-Fiber-Gum-Arabic-Powder-Organic.png',
    description: 'Health Concerns- Acid Reflux, Alzheimer’s, Anti-Bacterial, Antibiotic, Blood Sugar, Cholesterol Health, Diabetes, Diarrhea Relief, Gas/Bloating, H pylori, Halitosis, Jing Herbs, Loss of Appetite, Memory/Brain Health, Migraine/Headaches, Pancreas',
  },
  {
    href: 'https://www.saumrs.com/organic-sunflower-lecithin/',
    title: 'Sunflower Lecithin',
    src: 'https://www.saumrs.com/wp-content/uploads/2023/07/Sunflower-Lecithin.png',
    description: 'Health Concerns- Acid Reflux, Alzheimer’s, Anti-Bacterial, Antibiotic, Blood Sugar, Cholesterol Health, Diabetes, Diarrhea Relief, Gas/Bloating, H pylori, Halitosis, Jing Herbs, Loss of Appetite, Memory/Brain Health, Migraine/Headaches, Pancreas',
  },
];

const ingredientGroups = [
  {
    title: 'Fruit and Nuts',
    items: [
      'Organic Coconut Milk Powder',
      'Organic Banana Powder',
      'Organic Papaya Juice Powder',
      'Organic Pineapple Juice Powder',
      'Cashew Milk Powder',
      'Organic Premium Freeze Dried Açaí Powder',
      'Organic Apple Powder',
      'Organic Cacao Powder',
      'Organic Tart Cherry Juice Powder',
      'Organic Sea Buckthorn Juice Powder',
      'Organic Tomato Powder',
      'Organic Goji Berry Juice Powder',
      'Organic Mangosteen Fruit Powder',
      'Organic Freeze Dried Acerola Cherry Powder (Unripe)',
      'Organic Cranberry Juice Powder',
      'Organic Noni Fruit Powder',
      'Organic Pomegranate Juice Powder',
      'Organic Amla Fruit Powder',
      'Organic Baobab Fruit Powder',
    ],
  },
  {
    title: 'Mushroom',
    items: [
      'Organic Cordyceps Extract Powder',
      "Organic Lion's Mane Extract Powder",
      'Organic Shiitake Mushroom Powder',
    ],
  },
  {
    title: 'Greens',
    items: [
      'Organic Kale Powder',
      'Organic Broccoli Powder',
      'Organic Spirulina Powder',
      'Chlorella Powder (Cracked Cell Wall)',
      'Organic Moringa Leaf Powder',
      'Organic Kelp (Rockweed) Powder',
      'Organic Alfalfa Leaf Powder',
    ],
  },
  {
    title: 'Trees and Roots',
    items: [
      'Organic Beetroot Juice Powder',
      'Organic Ginger Root Powder',
      'Organic Cinnamon Powder',
      'Acacia Fiber',
      'Sunflower Lecithin',
    ],
  },
];

const decodeEntities = (text: string) =>
  text
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, '’');

const itemMap = new Map(ingredientItems.map((item) => [item.title, item]));

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
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
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
      <section className="ingredients-hero">
        <div className="ingredients-hero-content">
          <h1>Ultra Premium Ingredients for Human Excellence</h1>
          <h6>Learn What Makes S.A.U.M.R.S Extraordinary Nutrition</h6>
          <p>Short Description of Video</p>
          <div className="ingredients-hero-video">
            <YouTubeVideo videoId="XHOmBV4js_E" title="SAUMRS Ingredients" />
          </div>
          <p>Short Description of Video</p>
          <a className="ingredients-hero-button" href="#">
            <svg aria-hidden="true" className="ingredients-video-icon" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path>
            </svg>
            Watch Video
          </a>
        </div>
        <div className="ingredients-hero-image">
          <img
            src="https://www.saumrs.com/wp-content/uploads/2023/06/spirulina-powder-1024x867.jpg"
            alt="Spirulina powder"
          />
        </div>
      </section>

      <section className="ingredients-logos">
        <LogosCarousel />
      </section>

      <section className="ingredients-intro">
        <h2>Premium Ingredients? We've Got You Covered</h2>
        <p>
          Do you aspire to extend your lifespan and cultivate a more gratifying existence? Among the five pillars of longevity, nutrition holds immense significance. While quantifying the precise impact of a well-balanced diet on an individual's overall health and well-being may prove challenging, the profound benefits of appropriate nourishment cannot be ignored. By embracing the right dietary choices, one can bolster the immune system, enhance physical and cognitive performance, and mitigate the risk of chronic ailments. Opting for nutrient-dense foods not only fortifies cellular health but also invigorates vitality and elongates the lifespan. Cultivating a diverse array of fruits and vegetables, incorporating lean proteins, and maintaining an optimal macronutrient balance are all prudent measures in the pursuit of long-term well-being. Embrace the nutritional aspects encapsulated within the five pillars and unlock the key to a prolonged and enriched existence.
        </p>
      </section>

      {ingredientGroups.map((group) => {
        const items = group.items
          .map((title) => itemMap.get(title))
          .filter(Boolean) as IngredientItem[];

        return (
          <section className="ingredients-category" key={group.title}>
            <h2 className="ingredients-category-title">{group.title}</h2>
            <div className="ingredients-grid">
              {items.map((item) => {
                const cleaned = decodeEntities(item.description);
                const label = 'Health Concerns-';
                const rest = cleaned.startsWith(label)
                  ? cleaned.slice(label.length).trim()
                  : cleaned;

                return (
                  <a className="ingredient-card" key={item.title} href={item.href}>
                    <div className="ingredient-image">
                      <img src={item.src} alt={item.title} loading="lazy" />
                    </div>
                    <h3>{item.title}</h3>
                    <p className="ingredient-description">
                      <em>Health</em> <em>Concerns</em>-<br />
                      {rest}
                    </p>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}

      <section className="ingredients-subscribe">
        <h2>Subscribe Now</h2>
        <div className="ingredients-subscribe-copy">
          <p>WELCOME TO THE SAUMRS FAMILY! =)</p>
          <p>
            SAUMRS is bespoke just for you. The nutrition needs for a 5’7” 115lb female are dramatically different than a 6’2” 200lb male. In order for you to experience optimal results, we need to tailor your subscription JUST FOR YOU! Every subscription comes with a <strong>FREE 15-30 MINUTE HEALTH EVALUATION</strong> with a diet/lifestyle/wellness master. Once performed, we can offer you the best advice on daily product dosage and the most appropriate protein(s) needed to reach your goals.
          </p>
        </div>
        <h6>For Booking Please Give Us a Call or Send Us an Email with the Best Time for your Appointment :</h6>
        <div className="ingredients-contact-grid">
          <div className="ingredients-contact-card">
            <h6>
              Phone:<br />+1 (877) 4-SAUMRS
            </h6>
            <a className="ingredients-contact-button" href="tel:+1(833)472-8677">
              <svg aria-hidden="true" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
              </svg>
              PHONE US
            </a>
          </div>
          <div className="ingredients-contact-card">
            <h6>
              Email:<br />Booking@SAUMRS.COM
            </h6>
            <a className="ingredients-contact-button" href="mailto:support@saumrs.com">
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
