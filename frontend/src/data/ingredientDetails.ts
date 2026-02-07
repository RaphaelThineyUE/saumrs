export type IngredientDetailSection = {
  title: string;
  html: string;
};

export type IngredientDetail = {
  slug: string;
  title: string;
  image: string;
  overviewHtml: string;
  sections: IngredientDetailSection[];
};

export type IngredientBadge = {
  label: string;
  description: string;
};

export const ingredientBadges: IngredientBadge[] = [
  {
    "label": "Non GMO",
    "description": "Natural, wholesome, & free from genetic modification."
  },
  {
    "label": "Organic",
    "description": "Pure, nature's best for your health and well-being."
  },
  {
    "label": "Vegan",
    "description": "Plant-powered nutrition for a compassionate lifestyle."
  },
  {
    "label": "Gluten Free",
    "description": "Delight in gluten-free goodness, and worry-free meals."
  },
  {
    "label": "Chemical Free",
    "description": "Embrace purity, free from harmful substances."
  },
  {
    "label": "Kosher",
    "description": "Faithfully prepared, meeting rigorous standards."
  }
];

export const ingredientDetails: IngredientDetail[] = [
  {
    "slug": "organic-acacia-fiber",
    "title": "Acacia Fiber",
    "image": "/images/Acacia-Fiber-Gum-Arabic-Powder-Organic.png",
    "overviewHtml": "<p>  Acacia Fiber, a natural dietary supplement, boasts a rich history and exceptional digestive health benefits. Celebrated by ancient civilizations and revered for its digestive regularity support, gut health promotion, and potential role in blood sugar and cholesterol management, it is renowned for its versatility in enhancing culinary creations. Acacia Fiber represents centuries of digestive balance and culinary versatility, offering vitality and holistic well-being.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p>Acacia Fiber has a history that extends across civilizations, from ancient Egypt to traditional Ayurvedic practices. Its use as a natural remedy for digestive health dates back centuries. Acacia Fiber&#8217;s prominence in traditional medicines and holistic wellness practices around the world has elevated its status to that of a revered dietary supplement. It is celebrated for its digestive benefits and potential health advantages. Acacia Fiber&#8217;s journey through history reflects its enduring popularity as a natural means of promoting digestive wellness. From ancient remedies to modern dietary supplements, it remains a trusted source of dietary fiber.</p>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Digestive Regularity: Acacia Fiber promotes regular bowel movements and helps alleviate digestive discomfort, making it valuable for individuals seeking digestive balance.</p><p></p><p>Gut Health: It serves as a prebiotic, nourishing beneficial gut bacteria and supporting a healthy microbiome.</p><p></p><p>Blood Sugar Management: Acacia Fiber may help stabilize blood sugar levels, particularly valuable for individuals with diabetes or those seeking to manage their sugar intake.</p><p></p><p>Cholesterol Control: Some research suggests that Acacia Fiber may contribute to healthy cholesterol levels, supporting cardiovascular wellness.</p><p></p><p>Weight Management: As a source of soluble fiber, Acacia Fiber can help promote feelings of fullness and may aid in weight management efforts.</p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><br></p>\n<p></p>\n<p><strong><u>Constituents Include:</u></strong></p>\n<p>• Gum acacia contains neutral sugars (rhamnose, arabinose, and galactose), acids (glucuronic acid and 4-methoxyglucuronic acid), arabinose, galactose, rhamnose, glucuronic acid, calcium, magnesium, potassium, and sodium. Its complex structure is still not entirely known. Its backbone chain consists of D-galactose units, and its side chains are composed of D-glucuronic acid units with l-rhamnose or l-arabinose as end units.</p>\n<p></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Parts Used:&nbsp;</strong>The gum.</p>\n<p><strong>Certifications:&nbsp;</strong>Certified USDA Organic.<br><strong>Ingredients:</strong>&nbsp;Organic Acacia Fiber (Gum Arabic).<br><strong>Origin:&nbsp;</strong>Grown in Africa and processed in the USA, and packaged with care in Florida, USA.</p>"
      }
    ]
  },
  {
    "slug": "organic-alfalfa-leaf-powder",
    "title": "Organic Alfalfa Leaf Powder",
    "image": "/images/Organic-Alfalfa-Leaf-Powder.png",
    "overviewHtml": "<p>   Alfalfa Leaf Powder, an ancient superfood, boasts a rich history and exceptional health benefits. Celebrated by ancient civilizations and revered for its nutrient density, it is renowned for its detoxification support, digestive wellness, and nutrient absorption properties. Alfalfa&#8217;s unique flavors enhance a variety of culinary creations, representing centuries of nourishment and culinary delight.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<div class=\"pdp_main_dec\"><div class=\"pdp_main_dec\"><p>Alfalfa&#8217;s history is deeply rooted in ancient civilizations, where it was cherished for its nutritional value and medicinal properties. From Asia to the Mediterranean, Alfalfa has been a symbol of health and vitality. Alfalfa&#8217;s prominence in traditional medicines and culinary traditions around the world has elevated its status to that of a revered superfood. It is celebrated for its unique nutritional qualities and potential health benefits. Alfalfa&#8217;s journey through history reflects its adaptability and enduring popularity. Once a forage crop and herbal remedy, it has become a symbol of holistic well-being and nutrition.</p></div></div>"
      },
      {
        "title": "Health Benefits",
        "html": "<div class=\"pdp_main_dec\"><p>Nutrient Density: Despite its unassuming appearance, Alfalfa Leaf Powder is a nutritional powerhouse, providing an abundance of essential vitamins, minerals, and antioxidants that promote overall well-being.</p><p></p><p>Detoxification Support: Alfalfa&#8217;s unique properties may aid in natural detoxification processes, helping to remove toxins and heavy metals from the body.</p><p></p><p>Digestive Wellness: Alfalfa&#8217;s fiber content supports digestive regularity and gut health, potentially alleviating discomfort.</p><p></p><p>Nutrient Absorption: It contains enzymes that may enhance nutrient absorption, making it a valuable addition to your dietary routine.</p><p></p><p>Antioxidant Defense: The potent antioxidants in Alfalfa combat free radicals, contributing to cellular health and longevity.</p><div></div></div>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body)); letter-spacing: 1.2px;\"><span style=\"text-decoration: underline;\"><span style=\"font-weight: bold;\"><strong>Enhancing the Flavor Profile:</strong></span></span></p>\n<p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body));\"><span style=\"letter-spacing: 1.2px;\">Alfalfa Leaf Powder offers a mild, earthy taste with subtle herbal undertones.</span><span style=\"letter-spacing: 1.2px; text-decoration: underline;\"><span style=\"font-weight: bold;\"><strong><br></strong></span></span></p><p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body));\"><span style=\"letter-spacing: 1.2px;\"><br></span></p>\n<p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body)); letter-spacing: 1.2px;\"><span style=\"text-decoration: underline;\"><span style=\"font-weight: bold;\"><strong>Additional Information:</strong></span></span></p>\n<p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body)); letter-spacing: 1.2px;\"><span style=\"font-weight: bold;\">• Parts Used:</span>&nbsp;Alfalfa Leaf.<br><span style=\"font-weight: bold;\">• Ingredients</span>: Organic Alfalfa Leaf Powder.<br><span style=\"font-weight: bold;\">• Origin</span>:&nbsp;Grown and dried in China and packaged with care in Florida, USA.</p>\n<p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body)); letter-spacing: 1.2px;\"><span style=\"font-weight: bold;\">• Certifications</span>: Certified USDA Organic.</p>"
      }
    ]
  },
  {
    "slug": "organic-amla-fruit-powder",
    "title": "Organic Amla Fruit Powder",
    "image": "/images/Organic-Amla-Fruit-Powder.png",
    "overviewHtml": "<p>  Welcome to the world of Amla Fruit, a remarkable and ancient fruit known for its rich history, profound health benefits, and unique flavor profile. Scientifically known as Phyllanthus emblica, Amla is revered as a symbol of vitality and rejuvenation in many cultures. Its legacy traces back thousands of years, making it a cherished fruit in Ayurvedic and traditional medicine.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p>Amla&#8217;s history is deeply rooted in the traditions of Ayurveda, an ancient system of medicine originating in India. It is often referred to as the &#8220;Indian Gooseberry&#8221; and has been valued for its holistic health-promoting properties for millennia. Amla holds a special place in Indian culture, where it is considered a sacred and auspicious fruit. In various parts of India, Amla is used in religious ceremonies and festivals, symbolizing purity, longevity, and prosperity. In Ayurvedic medicine, Amla is regarded as a Rasayana, an elixir of life that promotes vitality, balance, and rejuvenation. It is utilized in diverse Ayurvedic formulations to address a wide range of health concerns.</p>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Antioxidant Powerhouse: Amla is one of the richest sources of vitamin C and antioxidants, helping combat free radicals and support overall well-being.</p><p></p><p>Immune Booster: The high vitamin C content enhances the immune system, fortifying the body&#8217;s natural defenses.</p><p></p><p>Digestive Harmony: Amla supports digestive health by promoting regularity and alleviating discomfort.</p><p></p><p>Hair and Skin Vitality: Amla is used in hair and skincare products due to its potential to promote healthy hair growth and radiant skin.</p><p></p><p>Heart Health: Amla may contribute to cardiovascular wellness by reducing cholesterol levels and supporting heart function.</p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body)); letter-spacing: 1.2px;\"><strong><u>Enhancing the Flavor Profile:</u></strong></p>\n<p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body));\">Amla&#8217;s flavor profile is a unique blend of sour, astringent, and slightly bitter notes. Its taste is often described as tart and tangy, with a hint of earthiness.<br></p>\n<p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body)); letter-spacing: 1.2px;\"><strong><u>&nbsp;</u></strong></p>\n<p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body)); letter-spacing: 1.2px;\"><strong><u>Constituents Include:</u></strong></p>\n<p><strong>Anthocyanins</strong>: Pelargonidin, Cyanidin</p>\n<p><strong>Flavones</strong>: Apigenin, Luteolin</p>\n<p><span style=\"background-color: var(--global--color-background);\"><b>Flavanols</b></span>: Kaempferol, Myricetin, Quercetin</p>\n<p><strong>Lipids</strong>: EPA, DPA, DHA</p>\n<p><strong>Vitamins</strong>: Vitamin C, Thiamin, Riboflavin, Niacin, Pantothenic Acid, Vitamin B-6, Folate, Folate DFE, Vitamin B-12, Vitamin A RAE, Retinol, Vitamin A IU</p>\n<p><strong>Minerals</strong>: Calcium, Iron, Magnesium, Phosphorus, Potassium, Sodium, Zinc, Copper, Selenium</p>"
      }
    ]
  },
  {
    "slug": "organic-apple-powder",
    "title": "Organic Apple Powder",
    "image": "/images/Organic-Apple-Powder.png",
    "overviewHtml": "<p>  Apple Powder is more than a fruit; it&#8217;s a crisp and nutritious choice that complements your lifestyle. Rich in fiber, vitamins, and antioxidants, it supports your health while enhancing your culinary experience. Embrace the timeless appeal and wellness benefits of Apple Powder—it&#8217;s a taste of orchard-fresh goodness.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<div><p>Apples have been a staple in orchards for centuries, with their history intertwined with human civilization. Apple Powder captures the essence of these orchard gems, transforming them into a versatile and convenient form for your enjoyment.</p></div>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Digestive Wellness: The high fiber content supports a healthy digestive system, aiding in regularity and gut health.</p><p></p><p>Heart Health: Apples&#8217; fiber and potassium content may help maintain healthy blood pressure and cholesterol levels.</p><p></p><p>Immune Support: Vitamin C enhances your immune system, fortifying your body&#8217;s natural defenses.</p><p></p><p>Cognitive Function: Apples are a source of antioxidants and phytonutrients that may support cognitive function and brain health, potentially reducing the risk of neurodegenerative diseases.</p><p></p><p>Weight Management: The high fiber content in apples can help with weight management by promoting a feeling of fullness and reducing overall calorie intake.</p><p></p><p>Detoxification: Apples contain compounds that support the body&#8217;s natural detoxification processes, aiding in the removal of toxins and waste.</p><p></p><p>Oral Health: Chewing apples stimulates saliva production, which can help reduce the risk of tooth decay and gum disease by maintaining oral hygiene.</p><p></p><p>Skin Protection: The antioxidants in apples may protect the skin from UV radiation and promote a youthful complexion<span style=\"font-family: var( --e-global-typography-text-font-family ), Sans-serif; font-size: var( --e-global-typography-text-font-size ); letter-spacing: var( --e-global-typography-text-letter-spacing );\">.</span></p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><strong><u>Enhancing the Flavor Profile:</u></strong></p>\n<p>Apple Powder is an incredibly versatile ingredient, enriching SAUMRS with a hint of orchard-fresh flavor. It encapsulates the delightful essence of apples, with a taste profile that&#8217;s both sweet and crisp. Experience the crispness and nutritional richness of Apple Powder, and savor the classic taste of apples in every spoonful.<strong><u><br></u></strong></p>\n<p><strong><u>&nbsp;</u></strong></p>\n<p><strong><u>Constituents Include:</u></strong></p>\n<p>• Minerals: Calcium, Copper, Iron, Magnesium, Potassium, Sodium, and Zinc<br>• Vitamins: Vitamins A, B1, B2, B6, Niacin, B5, Folic Acid, Vitamin C, Vitamin E<br>• Other Constituents: Alpha-Linolenic-Acid, Asparagine, D-Categin, Hyperoside, Ferulic-Acid, Farnesene, Neoxathin, Phosphatidyl-Choline, Reynoutrin, Sinapic-Acid, Lutein, Quercitin, Rutin, Ursolic-Acid, Protocatechuic-Acid<br>For additional constituent information, visit http://ndb.nal.usda.gov/ndb/foods.</p><p><br></p>\n<p></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Parts Used:&nbsp;</strong>Whole Apple, including skin (no seed).</p>\n<p><strong>Ingredients</strong>: Organic Apple, Organic Rice, Organic Sunflower Lecithin.&nbsp;</p>\n<p><strong>Origin</strong>: Grown and dried in the USA and packaged with care in Florida, USA.</p>\n<p><strong>Certifications</strong>: Certified USDA Organic.</p>"
      }
    ]
  },
  {
    "slug": "organic-banana-powder",
    "title": "Organic Banana Powder",
    "image": "/images/Organic-Banana-Powder.png",
    "overviewHtml": "<p>  Introducing Banana Powder—an extraordinary ingredient celebrated for its incredible health benefits. Crafted from ripe bananas, our banana powder is a nutritional powerhouse that makes it effortless to incorporate essential nutrients, like potassium and vitamin B6, into your daily diet. Embrace a healthier lifestyle as you savor the delightful taste and harness the energy-boosting properties of this superfood. Unlock the secret to enhancing your well-being with the natural goodness of bananas in every spoonful.</p>",
    "sections": [
      {
        "title": "Miscellaneous",
        "html": "<p><strong><u>Enhancing the Flavor Profile:</u><br></strong></p>\n<p>Banana powder is a culinary wonder that enhances the flavor profile of natural banana sweetness and aroma that infuse each recipe with a delightful tropical essence.<strong><u><br></u></strong></p>\n<p><br></p>\n<p><span style=\"text-decoration: underline;\"><strong>Constituents Include:</strong></span></p>\n<p>• Vitamins: Vitamin C, Thiamin, Riboflavin, Niacin, Vitamin B-6, Folate, Choline, Vitamin A (IU), Lutein &amp; Zeaxanthin, Vitamin E (alpha-tocopherol), Vitamin K (phylloquinone)<br>• Minerals: Potassium, Calcium, Iron, Magnesium, Phosphorus, Potassium, Zinc, Copper, Manganese, Selenium<br>• Amino Acids: threonine, isoleucine, leucine, lysine, methionine, cystine, phenylalanine, tyrosine, valine, arginine, histidine, alanine, aspartic acid, glutamic acid, glycine, proline, serine.</p>\n<p><strong>Ingredients:&nbsp;</strong>Raw Ripe Banana.</p>\n<p><strong>Origin:&nbsp;</strong>Grown and dried in Ecuador and packaged with care in Florida, USA.</p>\n<p><strong>Certifications</strong>: Certified USDA Organic.</p>"
      }
    ]
  },
  {
    "slug": "organic-baobab-fruit-powder",
    "title": "Organic Baobab Fruit Powder",
    "image": "/images/Organic-Baobab-Fruit-Powder.png",
    "overviewHtml": "<p>  Baobab is an extraordinary and ancient tree known for its illustrious history, remarkable health benefits, and unique flavor profile. Scientifically known as Adansonia, the Baobab tree is often referred to as the &#8220;Tree of Life&#8221; for its ability to provide sustenance, shelter, and healing to those who encounter it.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p>Baobab&#8217;s history is intertwined with legends and myths, particularly in Africa, where it is native. These colossal trees can live for thousands of years, making them witnesses to the passage of time and a symbol of resilience. In African cultures, Baobab trees are revered and hold deep spiritual and cultural significance. They are often referred to as &#8220;The Upside-Down Tree&#8221; due to their distinctive appearance with massive trunks and branches that resemble roots. Baobab fruit has been used for centuries in traditional African medicine and cuisine. The fruit, leaves, and bark of the Baobab tree are utilized in various ways to address a multitude of health concerns.</p><p></p><h5 style=\"font-weight: 600; font-size: 24px; letter-spacing: 1.2px; line-height: 1.4em; outline-color: currentcolor; outline-style: none;\" data-elementor-setting-key=\"title\" data-pen-placeholder=\"Type Here...\">Health Benefits</h5><div></div><div><div>Vitamin C Abundance: Baobab is exceptionally rich in vitamin C, providing a significant boost to the immune system and overall health.</div><div></div><div>Antioxidant Powerhouse: The fruit is packed with antioxidants that help combat free radicals, protecting cells from oxidative stress.</div><div></div><div>Digestive Wellness: Baobab is a source of dietary fiber, which promotes digestive regularity and gut health.</div><div></div><div>Skin Vitality: The antioxidants in Baobab contribute to healthy skin, potentially aiding in maintaining a youthful complexion.</div><div></div><div>Heart Health: Regular consumption of Baobab may support cardiovascular wellness by helping to maintain healthy blood pressure and cholesterol levels.</div></div><div></div><p></p><p></p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><strong><u>Enhancing the Flavor Profile:</u></strong></p><p>Baobab&#8217;s flavor profile is a delightful blend of sweet and tart notes. The fruit&#8217;s pulp, when dried and ground, yields a naturally tangy and slightly citrusy powder. This unique taste adds a burst of exotic and refreshing flavor to a variety of culinary creations.<strong><u><br /></u></strong></p><p></p><p><strong><u>Constituents Include:</u></strong></p><p>• Fiber.<br />• Protein.<br />• Vitamin C.<br />• Lipids: Oleic and linoleic unsaturated fatty acids.<br />• Amino Acids: Aspartic Acid, Glutamic Acid, Serine, Histidine, Glycine, Threonine, Arginine, Alanine, Prolamine, Tyrosine, Methionine, Valine, Phenylalanine, Isoleucine, Leucine, Lysine, Cysteine.<br />• Minerals: Iron, Calcium, Phosphorus, Magnesium, Copper, Zinc, Manganese.<br />• Phytochemicals: Carbohydrates, Starch, Alkaloids, Phytic Acids, Saponins, Sterols, Flavonoids, soluble polysaccharides.</p><p></p><p></p><p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p><p><strong>Parts Used:</strong>Whole Baobab, no seed or rind.</p><p><strong>Ingredients:</strong>Organic Baobab Fruit.</p><p><strong>Origin:</strong>Wildcrafted and dried in South Africa. It was packaged with care in Florida, USA.</p><p><strong>Certifications:</strong>Certified USDA Organic.</p>"
      }
    ]
  },
  {
    "slug": "organic-beetroot-juice-powder",
    "title": "Organic Beetroot Juice Powder",
    "image": "/images/Beet-Root-Juice-Powder-Organic-Herb-Root-Powders.png",
    "overviewHtml": "<p>  Beetroot Juice Powder, an ancient superfood, boasts a rich history and exceptional health benefits. Celebrated by ancient civilizations and revered for its heart health support, detoxification properties, and exercise performance enhancement, it is renowned for its sweet and earthy flavor profile. Beetroot&#8217;s vibrant color and versatile nature enhance a variety of culinary creations, representing centuries of nourishment and culinary delight.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p>Beetroot&#8217;s history can be traced back to ancient civilizations, where it was valued for its nutritional and medicinal properties. From ancient Egypt to the Roman Empire, beetroot was revered as a symbol of health and vitality. Beetroot&#8217;s prominence in traditional cuisines and folklore worldwide has elevated its status to that of a revered superfood. It is celebrated for its unique nutritional qualities and potential health benefits. Beetroot&#8217;s journey through history reflects its adaptability and enduring popularity. Once considered a simple root vegetable, it has become a symbol of holistic well-being and nutrition.</p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><span style=\"text-decoration: underline;\"><strong>Enhancing the Flavor Profile</strong></span></p>\n<p>Beetroot Juice Powder offers a naturally sweet and earthy taste with vibrant, reddish hues.&nbsp;<span style=\"text-decoration: underline;\"><strong><br></strong></span></p>\n<p><br></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>• Parts Used:&nbsp;</strong>Beet Root.</p>\n<p><strong>Ingredients:&nbsp;</strong>Organic Beet Root.</p>\n<p><strong>• Origin:</strong>&nbsp;Grown and dried in China and packaged with care in Florida, USA.</p>\n<p><strong>• Certifications:</strong>&nbsp;Certified USDA Organic.</p>"
      }
    ]
  },
  {
    "slug": "organic-broccoli-powder",
    "title": "Organic Broccoli Powder",
    "image": "/images/Organic-Broccoli-Powder.png",
    "overviewHtml": "<p>  Broccoli, a revered cruciferous vegetable, boasts a rich history and remarkable health benefits. With origins dating back to ancient Roman times, broccoli has evolved into a global culinary treasure. Its nutrient abundance, cancer-fighting properties, and heart and digestive health support make it a nutritional powerhouse. Broccoli&#8217;s harmonious flavor profile enhances a variety of dishes, representing centuries of nourishment and culinary excellence.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<div><div><p><span style=\"font-family: var( --e-global-typography-text-font-family ), Sans-serif; font-size: var( --e-global-typography-text-font-size ); letter-spacing: var( --e-global-typography-text-letter-spacing );\">Broccoli&#8217;s history can be traced back to ancient Roman times, where it was cultivated for its unique appearance and nutritional value. Over time, broccoli has evolved from a regional specialty to a globally adored vegetable. Broccoli&#8217;s prominence in various cuisines around the world has elevated its status to that of a culinary treasure. From Italian dishes to international favorites, broccoli has a special place on plates worldwide. Broccoli&#8217;s journey through history reflects its adaptability and enduring popularity. Once a regional delicacy, it has become a symbol of health and well-being.</span></p><div></div></div></div>"
      },
      {
        "title": "Health Benefits",
        "html": "<div class=\"pdp_main_dec\"><p>Nutrient Abundance: Broccoli is a nutritional powerhouse, providing an array of essential vitamins, minerals, and antioxidants that promote overall well-being.</p><p></p><p>Cancer-Fighting Properties: Regular consumption of broccoli may reduce the risk of certain cancers, thanks to its potent compounds like sulforaphane.</p><p></p><p>Heart Health: Broccoli supports cardiovascular wellness by helping to maintain healthy blood pressure and cholesterol levels.</p><p></p><p>Digestive Wellness: The fiber in broccoli promotes digestive regularity and gut health, potentially alleviating discomfort.</p><p></p><p>Bone Health: Broccoli&#8217;s calcium and vitamin K content supports strong bones and teeth, promoting skeletal vitality.</p><div></div></div>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><span style=\"text-decoration: underline;\"><strong>Enhancing the Flavor Profile:</strong></span></p>\n<p>Broccoli&#8217;s flavor profile is a harmonious blend of earthy and slightly sweet notes.<span style=\"text-decoration: underline;\"><strong><br></strong></span></p>\n<p><br></p>\n<p><span style=\"text-decoration: underline;\"><strong>Constituents Include:</strong></span></p>\n<p>• <strong>Minerals:</strong> <span style=\"font-family: var(--list--font-family); color: var( --e-global-color-secondary ); letter-spacing: 1.2px;\">Calcium, Iron, Magnesium, Phosphorus, Potassium, Sodium, Zinc, Copper, Manganese, Selenium</span></p>\n<p><span style=\"letter-spacing: 1.2px; color: var( --e-global-color-secondary );\">•</span><span style=\"letter-spacing: 1.2px; color: var( --e-global-color-secondary );\">&nbsp;</span><strong>Vitamins:&nbsp;</strong><span style=\"font-family: var(--list--font-family); color: var( --e-global-color-secondary ); letter-spacing: 1.2px;\">Vitamin C, Thiamin, Riboflavin, Niacin, Pantothenic Acid, Vitamin B-6, Folate, Choline, Betaine, Vitamin A (RAE), Vitamin A (IU), Beta Carotene, Alpha Carotene, Beta Cryptoxanthin, Lutein &amp; Zeaxanthin, Vitamin E, Beta Tocopherol, Gamma Tocopherol, Vitamin K</span></p>\n<p><span style=\"letter-spacing: 1.2px; color: var( --e-global-color-secondary );\">•</span><span style=\"letter-spacing: 1.2px; color: var( --e-global-color-secondary );\">&nbsp;</span><strong>Amino Acids:&nbsp;</strong><span style=\"font-family: var(--list--font-family); color: var( --e-global-color-secondary ); letter-spacing: 1.2px;\">Tryptophan, Threonine, Isoleucine, Leucine, Lysine, Methionine, Cystine, Phenylalanine, Tyrosine, Valine, Arginine, Histidine, Alanine, Aspartic Acid, Glutamic Acid, Glycine, Proline, Serine</span></p>\n<p><span style=\"letter-spacing: 1.2px; color: var( --e-global-color-secondary );\">•</span><span style=\"letter-spacing: 1.2px; color: var( --e-global-color-secondary );\">&nbsp;</span><strong>Flavones:&nbsp;</strong><span style=\"font-family: var(--list--font-family); color: var( --e-global-color-secondary ); letter-spacing: 1.2px;\">Luteolin</span></p>\n<p><span style=\"letter-spacing: 1.2px; color: var( --e-global-color-secondary );\">•</span><span style=\"letter-spacing: 1.2px; color: var( --e-global-color-secondary );\">&nbsp;</span><strong>Flavonols:&nbsp;</strong><span style=\"font-family: var(--list--font-family); color: var( --e-global-color-secondary ); letter-spacing: 1.2px;\">Kaempferol, Myricetin, Quercetin</span></p>\n<p><span style=\"font-family: var(--list--font-family); color: var( --e-global-color-secondary ); letter-spacing: 1.2px;\">&nbsp;</span></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><span style=\"letter-spacing: 1.2px; color: var( --e-global-color-secondary );\">•</span><span style=\"letter-spacing: 1.2px; color: var( --e-global-color-secondary );\">&nbsp;</span><strong>Ingredients:</strong>&nbsp;Organic Broccoli Powder.</p>\n<p><span style=\"letter-spacing: 1.2px; color: var( --e-global-color-secondary );\">•</span><span style=\"letter-spacing: 1.2px; color: var( --e-global-color-secondary );\">&nbsp;</span><strong>Parts Used:</strong>&nbsp;Whole Broccoli.</p>\n<p><span style=\"letter-spacing: 1.2px; color: var( --e-global-color-secondary );\">•</span><span style=\"letter-spacing: 1.2px; color: var( --e-global-color-secondary );\">&nbsp;</span><strong>Origin:</strong>&nbsp;Grown and dried in China and packaged with care in Florida, USA.</p>\n<p><span style=\"letter-spacing: 1.2px; color: var( --e-global-color-secondary );\">•</span><span style=\"letter-spacing: 1.2px; color: var( --e-global-color-secondary );\">&nbsp;</span><strong>Certifications:</strong>&nbsp;Certified USDA Organic</p>"
      }
    ]
  },
  {
    "slug": "organic-cacao-powder",
    "title": "Organic Cacao Powder",
    "image": "/images/Organic-Cacao-Powder.png",
    "overviewHtml": "<p>  Cacao Powder is more than just a culinary delight; it&#8217;s a decadent and wholesome choice that complements your lifestyle. Rich in antioxidants, minerals, and mood-enhancing compounds, it elevates your health while adding a touch of luxury to your culinary creations. Embrace the exquisite taste and well-being benefits of Cacao Powder—it&#8217;s a journey to the heart of indulgence and vitality.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p>Cacao&#8217;s roots trace back to the ancient Mesoamerican civilizations, where it was revered for its mystical properties and culinary excellence. Cacao Powder carries forward this legacy, capturing the essence of the cacao bean in a form that can be enjoyed across continents. Cacao Powder is more than a delectable treat; it&#8217;s a nutritional treasure trove.</p>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Heart Health: The antioxidants in cacao may support cardiovascular well-being by improving blood flow and reducing the risk of heart-related issues.</p><p></p><p>Mood Enhancement: Cacao contains serotonin precursors, potentially promoting positive mood and reducing feelings of stress.</p><p></p><p>Cognitive Function: Flavonoids in cacao may support brain health, enhancing cognitive function and memory.</p><p></p><p>Antioxidant Abundance: Cacao boasts an impressive array of antioxidants, safeguarding your cells against oxidative stress.</p><p></p><p>Mineral Richness: It&#8217;s a source of essential minerals, including magnesium, iron, and potassium.</p><p></p><p>Mood Elevation: Cacao contains compounds that may promote feelings of well-being and happiness.</p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><strong><u>Enhancing the Flavor Profile:</u></strong></p>\n<p>Cacao Powder&#8217;s versatility in the kitchen knows no bounds. Its rich, chocolatey flavor adds depth and decadence to culinary creations. Cacao Powder&#8217;s flavor profile is a symphony of deep, dark chocolatey notes and transports your palate to a realm of pure indulgence.<strong><u><br></u></strong></p>\n<p><br></p>\n<p><strong><u>Constituents Include:</u></strong></p>\n<p>• Minerals: Magnesium, Calcium, Iron, Phosphorus, Potassium, Zinc, Sulfur<br>• Vitamins: Vitamin C, Thiamin, Riboflavin, Niacin, Vitamin B-6, Vitamin A (IU), Vitamin E, Vitamin K<br>• Amino Acids: Tryptophan<br>• Phytochemicals: Flavonoids, PEA (phenylethylamine), Anandamide, Theobromine, Caffeine, Resveratrol <br>• Essential Fatty Acids: Oleic Acid</p><p><br></p>\n<p></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Certifications:&nbsp;</strong>Certified USDA Organic.</p>\n<p><strong>Ingredients</strong>: Extra Rich Cacao.</p>\n<p><strong>Parts Used:&nbsp;</strong>Cacao Beans.</p>\n<p><strong>Origin</strong>: Grown, harvested, and dried in the Dominican Republic and cold-pressed in Switzerland. Packaged with care in Florida, USA.</p>"
      }
    ]
  },
  {
    "slug": "organic-cashew-milk-powder",
    "title": "Organic Cashew Milk Powder",
    "image": "/images/Cashew-Milk-Powder.png",
    "overviewHtml": "<p>  Cashew Milk Powder is not just a dairy substitute; it&#8217;s a heart-healthy delight that complements your lifestyle. Packed with heart-healthy fats, protein, and essential vitamins and minerals, it promotes bone health, skin vitality, and heart well-being. As you savor the creamy delight of Cashew Milk Powder in your daily routine, you&#8217;re also nourishing your body with essential nutrients.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p>Cashew milk has its roots in Asia, where cashew trees flourish. The creamy, nutty flavor of cashews has been enjoyed for centuries in various culinary traditions. Cashew Milk Powder takes this legacy and transforms it into a convenient and shelf-stable form that can be enjoyed around the world.</p><p><br></p>\n<p></p>\n<h5 style=\"font-weight: 600; font-size: 24px; letter-spacing: 1.2px; line-height: 1.4em; outline-color: currentcolor; outline-style: none;\" data-elementor-setting-key=\"title\" data-pen-placeholder=\"Type Here...\">Health Benefits</h5>\n<div>&nbsp;</div>\n<div>\n<div>Heart-Healthy Fats: Cashews contain predominantly unsaturated fatty acids, with about 75% being oleic acid, a monounsaturated fat also found in olive oil. Oleic acid contributes to cardiovascular health, even among individuals with diabetes.</div>\n<div>&nbsp;</div>\n<div>Triglyceride Regulation: Studies have shown that a diet rich in monounsaturated fats, like those found in cashews, can help reduce elevated triglyceride levels in the blood—a significant factor in heart disease risk.</div>\n<div>&nbsp;</div>\n<div>Nutrient-Rich Profile: Cashew Milk Powder provides essential vitamins, minerals, and protein, supporting bone health, skin vitality, and overall well-being.</div>\n<div>&nbsp;</div>\n<div>Dairy-Free and Digestible: As a dairy-free alternative, Cashew Milk Powder is easily digestible and suitable for lactose-intolerant individuals and vegans.</div>\n<div>&nbsp;</div>\n<div>Bone and Skin Health: The magnesium and phosphorus in cashews contribute to strong bones and teeth. Additionally, vitamin E promotes healthy skin.</div>\n<div>&nbsp;</div>\n<div>Protein Source: Cashews provide plant-based protein, making Cashew Milk Powder an excellent choice for those seeking to increase their protein intake.</div>\n</div>\n<div>&nbsp;</div>\n<p></p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><b><u>Enhancing the Flavor Profile:</u></b></p><p>The subtle nutty notes in Cashew Milk Powder complement both sweet and savory dishes, harmonizing with a variety of ingredients. Cashew Milk Powder adds a unique and irresistible flavor dimension, elevating the taste experience of this culinary creation.<b><u><br /></u></b></p><p><span style=\"text-decoration: underline;\"><strong></strong></span></p><p><span style=\"text-decoration: underline;\"><strong>Constituents Include:</strong></span></p><p>Minerals: Calcium, Iron, Magnesium, Phosphorus, Potassium, Copper, Zinc<br />Vitamins: Vitamin C, Thiamin, Riboflavin, Niacin, Vitamin B-6, Folate, Vitamin A (RAE), Vitamin E (Alpha), Vitamin D, Vitamin K<br />Essential Fatty Acids- Omega 3 and omega 6<br />Amino Acids: Tryptophan, Threonine, Alanine, Isoleucine, Leucine, Lysine, Methionine, Cystine, Phenylalanine, Tyrosine, Valine, Arginine, Histidine, Aspartic acid, Glutamic acid, Glycine, Proline, Serine<br />Sterols: Campesterol, Stigmasterol, Beta-sitosterol<br />Fiber</p><p></p><p></p><p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p><p><strong>Ingredients:</strong>Raw Cashews and Inulin.</p><p><strong>Origin:</strong>Grown and harvested in Vietnam and packaged with care in Florida, USA</p>"
      }
    ]
  },
  {
    "slug": "organic-chlorella-powder-cracked-cell-wall",
    "title": "Organic Chlorella Powder (Cracked Cell Wall)",
    "image": "/images/Chlorella-Powder-Cracked-Cell-Wall.png",
    "overviewHtml": "<p>  Cracked Cell Wall Chlorella, one of Earth&#8217;s oldest life forms, boasts a rich history and exceptional health benefits. Celebrated by various cultures and scientific communities, it is renowned for its nutrient abundance, detoxification support, and immune-boosting properties. Chlorella&#8217;s unique qualities also extend to its ecological importance, contributing to the planet&#8217;s ecosystem. With a mild, earthy taste, Chlorella enhances a variety of health-conscious dishes, representing billions of years of nourishment and environmental significance.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<div class=\"pdp_main_dec\"><p>Chlorella&#8217;s history spans billions of years, making it one of the oldest known life forms on Earth. This microalga has evolved over eons, adapting to changing environments and surviving through its exceptional resilience. Chlorella&#8217;s prominence in various cultures and scientific communities has elevated its status to that of a revered superfood. It is celebrated for its unparalleled nutritional qualities and potential health benefits. Chlorella&#8217;s journey through history reflects its adaptability and enduring popularity. Once a microscopic organism, it has become a symbol of holistic well-being and nutritional excellence.</p></div>"
      },
      {
        "title": "Nutrition",
        "html": "<p>• Chlorella is a natural source of chlorophyll and may have a strong cleansing effect.<br />• It contains over 20 vitamins and minerals that are easy for the body to digest.<br />• Chlorella has 19 essential amino acids that can promote tissue and cell regeneration.<br />• It may have a higher quantity of healthy fatty acids than spirulina or wild blue-green algae.<br />• Chlorella contains 60% superior protein, which is three times more than the amount found in steak or fish.<br />• It is a good source of vitamin B complex, especially B12, which is recommended for vegetarians and vegans.<br />• Beta-carotene in chlorella is a powerful antioxidant that supports the body&#8217;s ability to fight free radicals.</p>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Nutrient Abundance: Despite its microscopic size, Chlorella is a nutritional powerhouse, providing a wealth of essential vitamins, minerals, and antioxidants that promote overall well-being.</p><p></p><p>Detoxification Support: Chlorella&#8217;s unique properties may aid in natural detoxification processes, helping to remove toxins and heavy metals from the body.</p><p></p><p>Immune Enhancement: It may bolster the immune system, enhancing the body&#8217;s defenses against illnesses and promoting vitality.</p><p></p><p>Digestive Wellness: Chlorella&#8217;s fiber content supports digestive regularity and gut health, potentially alleviating discomfort.</p><p></p><p>Antioxidant Defense: The potent antioxidants in Chlorella combat free radicals, contributing to cellular health and longevity.</p><div></div>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><span style=\"text-decoration: underline;\"><strong>Enhancing the Flavor Profile:</strong></span></p>\n<p>While Cracked Cell Wall Chlorella is primarily consumed in tablet or powder form, it offers a mild, earthy taste.&nbsp;</p>\n<p><br></p>\n<p><span style=\"text-decoration: underline;\"><strong>Constituents Include:</strong></span></p>\n<p><strong>Minerals:</strong>&nbsp;Calcium, Iron, Magnesium, Phosphorus, Potassium, Zinc</p>\n<p><strong>Vitamins:&nbsp;</strong>Vitamin C, Thiamin, Riboflavin, Niacin, Vitamin B-6, Folate, Vitamin E (Alpha), Vitamin K</p>\n<p><strong>Amino Acids:&nbsp;</strong>Tryptophan, Threonine, Isoleucine, Leucine, Lysine, Methionine, Cystine, Phenylalanine, Tyrosine, Valine, Arginine, Histidine, Alanine, Aspartic Acid, Glutamic Acid, Proline, Serine</p>\n<p><strong>Fatty Acid Content:</strong>&nbsp;Lauric Acid, Myristic Acid, Caprylic Acid, Capric Acid, Palmitic Acid, Oleic Acid, Palmitoleic Acid, Linoleic Acid, Linolenic Acid, Stearic Acid</p>\n<p><strong>Phospholipids:</strong>&nbsp;Phosphatidylcholine, Phosphatidylethanolamine, Phosphatidylinositol, Phosphatidylserine, Lysophosphatidylcholine, Lysophosphatidylethanolamine, phosphatidic acid Tocopherols</p>\n<p><strong>Sterols:&nbsp;</strong>B-Sitosterol, Stigmasterol, Avenasterol Campesterol, Stigmasterol Brassicasterol</p>\n<p></p>\n<p><span style=\"text-decoration: underline;\"><strong><br></strong></span></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Parts Used:&nbsp;</strong>Cracked Cell Wall Chlorella.</p>\n<p><strong>Ingredients</strong>: Cracked Cell Wall Chlorella.</p>\n<p><strong>Origin</strong>: Grown and dried in China and packaged with care in Florida, USA.</p>"
      }
    ]
  },
  {
    "slug": "organic-cinnamon-powder",
    "title": "Organic Cinnamon Powder",
    "image": "/images/Organic-Cinnamon-Powder.png",
    "overviewHtml": "<p>   Cinnamon, a timeless spice, boasts a rich history and exceptional health benefits. Celebrated by ancient civilizations and revered for its blood sugar support, anti-inflammatory properties, and digestive wellness benefits, it is renowned for its warm and sweet-spicy flavor profile. Cinnamon&#8217;s versatility enhances a variety of culinary creations, representing centuries of warmth, comfort, and culinary delight.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p>Cinnamon&#8217;s history can be traced to ancient Asia, where it was considered a precious spice with a range of applications, from culinary to medicinal. Cinnamon&#8217;s prominence in traditional cuisines, ancient rituals, and folklore worldwide has elevated its status to that of a revered spice. It is celebrated for its unique sensory qualities and potential health benefits. Cinnamon&#8217;s journey through history reflects its enduring popularity. Once a rare and highly sought-after commodity, it has become a symbol of warmth, comfort, and culinary excellence.</p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><span style=\"text-decoration: underline;\"><strong>Enhancing the Flavor Profile:</strong></span></p><p>Cinnamon&#8217;s warm and sweet-spicy flavor profile with aromatic undertones adds depth and character to a wide range of culinary creations.<span style=\"text-decoration: underline;\"><strong><br /></strong></span></p><p></p><p></p><p><span style=\"text-decoration: underline;\"><strong>Constituents Include:</strong></span></p><p><strong>• Minerals</strong>: Calcium, Iron, Magnesium, Phosphorus, Potassium, Zinc, Copper, Manganese, Selenium</p><p><strong>• Vitamins</strong>:Vitamin C, Thiamin, Riboflavin, Niacin, Pantothenic Acid, Vitamin B-6, Folate, Choline, Betaine, Beta carotene, Alpha Carotene, Cryptoxanthin-Beta, Lycopene, Vitamin A (I.U.), Lutein &amp; Zeaxanthin, Vitamin E, Gamma Tocopherol, Delta Tocopherol, Vitamin K</p><p><strong>• Amino Acids:</strong>Tryptophan, Threonine, Isoleucine, Leucine, Lysine, Methionine, Cystine, Phenylalanine, Tyrosine, Valine, Arginine, Histidine, Alanine, Aspartic Acid, Glutamic Acid, Proline, Serine</p><p><strong>• Flavonoids</strong>: Proanthocyanidin, 4-6 Mers, 7-10 Mers, Monomers, Dimers, Trimers</p><p><strong>• Essential Oils:</strong>Cinnamaldehyde</p><p><strong>• Phenols and Terpenes</strong>: Eugenol, Trans-Cinnamic acid, Hydroxycinnamaldehyde, o- Methoxycinnamaldehyde, Cinnamyl alcohol and its acetate, Limonene, Alpha-terpineol, oligomeric procyanidins</p><p></p><p></p><p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p><p><strong>Certification</strong>: USDA Certified Organic.</p><p><strong>Ingredients</strong>: Organic Ceylon Cinnamon (Cinnamomum Verum)</p><p><strong>Origin</strong>: Grown and harvested in Sri Lanka. Packaged with care in Florida, USA.</p>"
      }
    ]
  },
  {
    "slug": "organic-coconut-milk-powder",
    "title": "Organic Coconut Milk Powder",
    "image": "/images/Organic-Coconut-Milk-Powder.png",
    "overviewHtml": "<p><span style=\"font-weight: 400;\">  Welcome to the world of Coconut Milk Powder—a versatile and nutritious ingredient that has been a culinary treasure for centuries. Derived from the flesh of mature coconuts, this natural powder is a powerhouse of essential nutrients, adding both health and flavor benefits to your daily routine. Join us on a journey as we explore the history, health advantages, and delightful flavor profile of coconut milk powder.</span></p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p><span style=\"font-weight: 400;\">Coconut milk has deep-rooted historical significance, with a presence in tropical cuisines for generations. This creamy, nutrient-rich liquid was extracted from mature coconuts and used in traditional dishes across the globe. As its popularity grew, the desire to make coconut milk more accessible led to the creation of coconut milk powder. This innovative development allowed people worldwide to enjoy the goodness of coconut milk conveniently. Today, our shake product seamlessly blends this historical richness with modern accessibility.</span></p>"
      },
      {
        "title": "Health Benefits",
        "html": "<p><span style=\"font-weight: 400;\">Rich in Healthy Fats: Coconut milk powder is a prime source of healthy fats, particularly Medium-Chain Triglycerides (MCTs). These fats provide a quick and sustained energy source, making our shake perfect for those in need of a pre- or post-workout boost.</span></p><p><span style=\"font-weight: 400;\"></span></p><p></p><p><span style=\"font-weight: 400;\">Weight Management Support: The MCTs in coconut milk powder contribute to feelings of fullness and calorie burning, an excellent addition to weight management strategies.</span></p><p><span style=\"font-weight: 400;\"></span></p><p></p><p><span style=\"font-weight: 400;\">Amino Acid Boost for Fitness Enthusiasts: Fitness enthusiasts will appreciate that coconut milk powder contains essential amino acids, aiding in muscle recovery and growth, making our shake a valuable addition to your workout routine.</span></p><p><span style=\"font-weight: 400;\"></span></p><p></p><p><span style=\"font-weight: 400;\">Quick and Convenient Nutrition: Enjoy the benefits of coconut milk powder daily with ease. Our shake is a convenient way to incorporate this nutritious ingredient into your routine. Simply mix, shake, and savor the goodness.</span></p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p></p>\n<p><strong style=\"text-decoration: underline;\">Enhancing the Flavor Profile:</strong></p>\n<p>Coconut milk powder is the secret ingredient that elevates the flavor profile of our shake. Its rich and tropical coconut notes infuse every sip with a delightful creaminess and a touch of exotic sweetness. The natural sweetness of coconut milk powder harmonizes perfectly with the other ingredients in our shake, creating a balanced and indulgent taste sensation.<span style=\"text-decoration: underline;\"><strong><br></strong></span></p><p><br></p>\n<p></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Certifications:&nbsp;</strong>Certified USDA Organic.</p>\n<p><strong>Ingredients:</strong>&nbsp;Organic Dehydrated Coconut Milk, Organic Tapioca Maltodextrin (Derived from Organic Yuca Root*), Organic Acacia Fiber.</p>\n<p><strong>Parts Used:</strong>&nbsp;Coconut Meat.</p>\n<p><strong>Origin:&nbsp;</strong>Grown and dried in Vietnam. Packaged with care in Florida, USA.</p>"
      }
    ]
  },
  {
    "slug": "organic-cordyceps-extract-powder",
    "title": "Organic Cordyceps Extract Powder",
    "image": "/images/Organic-Cordyceps-Extract-Powder.png",
    "overviewHtml": "<p>  Welcome to the fascinating realm of Cordyceps, a unique and esteemed fungus renowned for its extraordinary history, potential health benefits, and intriguing flavor profile. Scientifically known as Cordyceps sinensis, this remarkable organism has captured the imagination of cultures across the globe for centuries. With its origin rooted in traditional Chinese medicine and its remarkable properties, Cordyceps invites you to embark on a journey through its historical significance, holistic wellness potential, and the captivating taste it brings—a journey that promises both vitality and culinary wonder.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<div class=\"pdp_main_dec\"><p>Cordyceps&#8217; history is deeply entwined with traditional Chinese medicine, where it has been used for centuries to promote well-being and vitality. This unique fungus has long been treasured for its mysterious growth in the high-altitude regions of Tibet and the Himalayas. In Chinese culture, Cordyceps is often referred to as the &#8220;Winter Worm, Summer Grass.&#8221; It is highly regarded for its potential to support various aspects of health, earning it a special place in traditional remedies. Cordyceps has a history of use in traditional Chinese medicine to address a range of health concerns, from respiratory health to fatigue and vitality.</p></div>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Energy and Endurance: Cordyceps may boost energy levels and enhance physical performance, making it a popular choice among athletes and those seeking vitality.</p><p></p><p>Respiratory Support: Traditionally, Cordyceps has been used to support lung health and respiratory function.</p><p></p><p>Immune Booster: The fungus is believed to strengthen the immune system, helping the body defend against illnesses.</p><p></p><p>Anti-Inflammatory: Cordyceps may possess anti-inflammatory properties, potentially contributing to overall well-being.</p><div></div>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><strong><u>Enhancing the Flavor Profile:</u></strong></p>\n<p>Cordyceps&#8217; flavor profile is unique, characterized by a mild, earthy taste with subtle notes of umami. When incorporated into culinary creations, Cordyceps adds depth and complexity, elevating dishes with its intriguing flavor.</p><p><br></p>\n<p><strong><u>Constituents Include:</u></strong></p>\n<p>• Minerals: calcium, iron, magnesium, potassium, zinc, copper, manganese, selenium.<br>• Vitamins: thiamin, riboflavin, vitamin b-6, vitamin b12, vitamin E, vitamin K.<br>• Amino acids: cysteic acid, aspartic acid, methionine, threonine, serine, glutamic acid, proline, glycine, alanine, valine, isoleucine, leucine, tyrosine, phenylalanine, lysine, histidine, arginine.<br>• Fatty acids: palmitic acid, palmitoleic acid, stearic acid, oleic acid, linoleic acid, linolenic acid.<br>• Phytochemicals: nucleosides, cordycepin, adenosine, polysaccharides, exopolysaccharide fraction, acid polysaccharide, cps-1, cps-2, sterols. <br>• Nucleobases: cytosine, uracil, thymine, adenine, guanine, hypoxanthine, <br>• Nucleotides: uridine-5-monophosphate, adenosine-5-monophosphate, guanosine-5-monophosphate.<br>• Peptides: cordymin, cordycedipeptide a, cordyceamides a &amp; b.</p><p><br></p>\n<p></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Parts Used:&nbsp;</strong>Fruiting body</p>\n<p><strong>Ingredients:</strong>&nbsp;Organic Cordyceps Mushroom Extract, Organic Maltodextrin.</p>\n<p><strong>Certifications:</strong>&nbsp;Certified USDA Organic</p>\n<p><strong>Origin:&nbsp;</strong>China</p>"
      }
    ]
  },
  {
    "slug": "organic-cranberry-juice-powder",
    "title": "Organic Cranberry Juice Powder",
    "image": "/images/Organic-Cranberry-Juice-Powder.png",
    "overviewHtml": "<p>  Cranberry Powder encapsulates the essence of cranberries, from their historical significance to their modern versatility. It invites you to explore the tangy and vibrant world of cranberries while benefiting from their potential health advantages. Enjoy the journey of flavor, tradition, and well-being with Cranberry Powder.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p>Cranberry Powder embodies a timeless treasure—a fruit that has journeyed through centuries, cultures, and traditions. From its humble origins with Native Americans to its place of honor on Thanksgiving tables, cranberries have left an indelible mark on culinary history. Today, Cranberry Powder enables us to savor the tart and zesty essence of cranberries while benefiting from their potential health advantages. It&#8217;s a celebration of tradition, flavor, and wellness—a journey that invites you to explore the cranberry&#8217;s vibrant legacy.</p>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Urinary Tract Health: Cranberries contain proanthocyanidins that may prevent harmful bacteria from adhering to the urinary tract, reducing the risk of urinary tract infections (UTIs).</p><p></p><p>Antioxidant Rich: Loaded with antioxidants and vitamin C, Cranberry Powder helps neutralize free radicals, promoting overall well-being and cell protection.</p><p></p><p>Oral Health: Some compounds in cranberries may deter the adhesion of harmful bacteria in the mouth, potentially reducing dental plaque and gum issues.</p><p></p><p>Digestive Wellness: Cranberry Powder&#8217;s dietary fiber content supports regular bowel movements and a balanced gut microbiome, contributing to gastrointestinal health.</p><p></p><p>Heart Health: Regular consumption of cranberries may help lower blood pressure and reduce the risk of heart disease by improving blood vessel function and reducing inflammation.</p><p></p><p>Immune Support: Vitamin C enhances the immune system, fortifying your body&#8217;s natural defenses.</p><p></p><p>Skin Health: Antioxidants in cranberries, including vitamin C, protect the skin from oxidative damage and promote healthy, radiant skin.</p><p></p><p>Weight Management: Low in calories and fat, Cranberry Powder can enhance the flavor of low-calorie dishes, supporting healthier eating habits.</p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><strong><u>Enhancing the Flavor Profile:</u></strong></p>\n<p>The flavor profile of Cranberry Powder is a captivating symphony of tartness and zesty essence. It encapsulates the vibrant taste of fresh cranberries, offering a delightful and invigorating burst of flavor. Cranberry Powder is a versatile culinary companion, enhancing both sweet and savory dishes with its bold and tangy notes.&nbsp;<strong><u><br></u></strong></p><p><br></p>\n<p></p>\n<p><strong><u>Constituents Include:</u></strong></p>\n<p>• Minerals: Calcium, Iron, Magnesium, Phosphorus, Potassium, Zinc, Copper, Manganese, Selenium<br>• Vitamins: Vitamin C, Thiamin, Riboflavin, Niacin, Pantothenic Acid, Vitamin B-6, Folate, Choline, Betaine, Vitamin A (RAE), Beta carotene, Vitamin A (IU), Lutein &amp; Zeaxanthin, Vitamin E, Gamma Tocopherol, Vitamin K<br>• Amino Acids: Tryptophan, Threonine, Isoleucine, Leucine, Lysine, Methionine, Cystine, Phenylalanine, Tyrosine, Valine, Arginine, Histidine, Alanine, Aspartic Acid, Glutamic Acid, Proline, Serine<br>• Anthocyanidins: Petunidin, Delphinidin, Malvidin, Peonidin, Cyanidin<br>• Flavan-3-ols: Catechin, Epigallocatechin, Epicatechin, Gallocatechin<br>• Flavonols: Kaempferol, Myricetin, Quercetin<br>• Proanthocyanidins: Proanthocyanidin Monomers, Proanthocyanidin Dimers, Proanthocyanidin Trimers, Proanthocyanidin 4-6mers, Proanthocyanidin 7-10mers, Proanthocyanidin (&gt;10mers).</p><p><br></p>\n<p></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Certifications</strong>:&nbsp;Certified USDA Organic.</p>\n<p><strong>Ingredients</strong>: Organic Cranberry Fruit and maltodextrin.*</p>\n<p><strong>Parts Used:</strong>&nbsp;Whole, Cranberry.</p>\n<p><strong>Origin</strong>: Grown in the USA and Dried in China. Packaged with care in Florida, USA.</p>"
      }
    ]
  },
  {
    "slug": "organic-freeze-dried-acerola-cherry-powder-unripe",
    "title": "Organic Freeze Dried Acerola Cherry Powder (Unripe)",
    "image": "/images/Organic-Freeze-Dried-Acerola-Cherry-Powder-Unripe.png",
    "overviewHtml": "<p>  Discover the vibrant and nutrient-rich Freeze Dried Acerola Cherry Powder (Unripe), a powerhouse of health benefits and zesty flavor. Made from unripe acerola cherries, this powder is packed with an abundance of vitamins, minerals, and antioxidants, offering a convenient and potent way to boost your nutritional intake. Whether added to smoothies, beverages, or recipes, Acerola Cherry Powder provides a tangy twist and an array of health advantages.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p>Acerola cherries, also known as Barbados cherries or West Indian cherries, have been cherished for centuries, particularly in the Caribbean, Central America, and South America. Traditionally, these cherries were used for their medicinal properties and as a natural remedy for various ailments. Indigenous cultures valued acerola cherries for their ability to enhance vitality and combat illnesses. With the advent of modern processing techniques like freeze-drying, the benefits of unripe acerola cherries are now more accessible, allowing people worldwide to enjoy their nutritional richness.</p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body)); letter-spacing: 1.2px;\"><span style=\"text-decoration-line: underline;\"><span style=\"font-weight: bold;\"><strong>Enhancing the Flavor Profile:</strong></span></span></p><p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body));\">Freeze Dried Acerola Cherry Powder (Unripe) offers a tangy and slightly tart flavor, adding a refreshing and zesty note.</p><p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body)); letter-spacing: 1.2px;\"><span style=\"letter-spacing: 1px;\"></span></p><p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body)); letter-spacing: 1.2px;\"><span style=\"text-decoration-line: underline;\"><span style=\"font-weight: bold;\"><strong>Constituents Include:</strong></span></span></p><p><strong>Protein:</strong> Essential for various bodily functions and tissue repair.</p><p><strong>Anthocyanins:</strong> Pelargonidin and Cyanidin, which are powerful antioxidants that help protect cells from damage.</p><p><strong>Flavones:</strong> Apigenin and Luteolin, which have anti-inflammatory and antioxidant properties.</p><p><strong>Flavonols:</strong> Kaempferol, Myricetin, and Quercetin, which have antioxidant and anti-inflammatory effects.</p><p><strong>Lipids:</strong> EPA (eicosapentaenoic acid), DPA (docosapentaenoic acid), and DHA (docosahexaenoic acid), which are omega-3 fatty acids that support brain health and heart health.</p><p><strong>Vitamins:</strong> Vitamin C, Thiamin (Vitamin B1), Riboflavin (Vitamin B2), Niacin (Vitamin B3), Pantothenic Acid (Vitamin B5), Vitamin B-6, Folate, Folate DFE (dietary folate equivalents), Vitamin B-12, Vitamin A RAE (retinol activity equivalents), Retinol (Vitamin A), and Vitamin A IU (international units). These vitamins play crucial roles in various bodily functions, including energy metabolism, immune function, and vision health.</p><p><strong>Minerals:</strong> Calcium, Iron, Magnesium, Phosphorus, Potassium, Sodium, Zinc, Copper, and Selenium. These minerals are essential for maintaining healthy bones, supporting energy production, aiding in muscle function, and promoting overall well-being.</p><p></p><p><span style=\"text-decoration: underline;\"><strong></strong></span></p><p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p><p><strong>Certifications:</strong>Certified USDA Organic.</p><p><strong>Ingredients:</strong>Raw Unripe Green Acerola Cherry Fruit</p><p><strong>Parts Used:</strong>Whole Acerola, no seed.</p><p><strong>Origin:</strong>Wildcrafted and Freeze-Dried in Brazil. Packaged with care in Florida, USA.</p><p dir=\"ltr\"></p>"
      }
    ]
  },
  {
    "slug": "organic-goji-berry-juice-powder",
    "title": "Organic Goji Berry Juice Powder",
    "image": "/images/Goji-Berry-Juice-Powder-Organic-Fruit-Powders.webp",
    "overviewHtml": "<p>  Welcome to the vibrant world of Goji Berry Juice Powder, a nutrient-dense superfood known for its rich history, myriad health benefits, and unique flavor profile. Derived from the bright red berries of the Lycium barbarum plant, this powder offers a convenient way to enjoy the potent nutritional benefits of goji berries. Renowned for their high antioxidant content and holistic health properties, goji berries have been cherished in traditional medicine for centuries. Discover how Goji Berry Juice Powder can enhance your health and add a burst of flavor to your favorite dishes.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p>Goji berries, also known as wolfberries, have been used in traditional Chinese medicine for over 2,000 years. Originating in the Himalayan regions of Tibet and China, they were believed to promote longevity and overall well-being. Ancient Chinese texts praised these berries for their ability to improve eyesight, boost the immune system, and protect the liver. Today, goji berries are celebrated worldwide for their nutritional profile and are a staple in health-conscious diets.</p>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Antioxidant Powerhouse: Goji Berry Juice Powder is rich in antioxidants, particularly zeaxanthin, which helps protect cells from oxidative stress and supports overall health.</p><p></p><p>Immune System Support: High levels of vitamin C and other immune-boosting compounds in goji berries enhance the body&#8217;s natural defenses against illness.</p><p></p><p>Eye Health: The zeaxanthin and other carotenoids in goji berries are known to support eye health and may help prevent age-related macular degeneration.</p><p></p><p>Skin Health: The antioxidants and vitamins in goji berries contribute to healthy, radiant skin by combating free radicals and promoting collagen production.</p><p></p><p>Energy and Vitality: Goji berries are known to improve energy levels and overall vitality, thanks to their rich nutrient content.</p><p></p><p>Heart Health: Goji Berry Juice Powder contains essential fatty acids, which support cardiovascular health and help maintain healthy cholesterol levels.</p><p></p><p>Liver Protection: Traditional medicine values goji berries for their liver-protective properties, which are supported by modern research showing they can help detoxify and support liver function.</p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><strong><u>Enhancing the Flavor Profile</u></strong></p>\n<p>Goji Berry Juice Powder offers a unique flavor that is both sweet and slightly tart, making it a versatile addition to a variety of culinary creations.<strong><u><br></u></strong></p>\n<p><br></p>\n<p><strong><u>Constituents Include:</u></strong></p>\n<p>• Minerals: Calcium, Iron, Phosphorus, Zinc, Copper, Selenium, Potassium<br>• Vitamins: Vitamin C, Thiamin, Riboflavin, Vitamin B-6, Vitamin A, Vitamin E, Zeaxanthin &amp; Lutine<br>• Amino Acids: Tryptophan, Threonine, Isoleucine, Leucine, Lysine, Methionine, Cystine, Phenylalanine, Tyrosine, Valine, Arginine, Histidine, Alanine, Aspartic Acid, Glutamic Acid, Proline, Serine<br>• Essential Fatty Acids: Linoleic Acid, Alpha-Linolenic Acid<br>• Carotenoids: Beta Carotene, Zeaxanthin, Lutein, Lycopene, Cryptoxanthin, Xanthophyll<br>• Polysaccharides<br>• Monosaccharides<br>• Phytosterols: Beta-Sitosterol<br>• Phenols: Resveratrol<br>• Other Phytochemicals: Cyperone, Solavetivone, Physalin.</p>\n<p><br></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Parts Used:&nbsp;</strong>Whole, Goji Berries.<br><strong>Ingredients:</strong>&nbsp;Organic Goji Berry Juice Powder and Organic non-GMO maltodextrin derived from yuca root*.</p>\n<p><strong>Origin:&nbsp;</strong>Grown and dried in China and packaged with care in Florida, USA.<br><strong>Certifications:</strong>&nbsp;Certified USDA Organic.</p>\n<p><br></p>"
      }
    ]
  },
  {
    "slug": "organic-kale-powder",
    "title": "Organic Kale Powder",
    "image": "/images/Organic-Kale-Powder.png",
    "overviewHtml": "<div><p>  Kale, with its rich history dating back to ancient civilizations, is a nutritional powerhouse celebrated for its versatility and potential health benefits. Its adaptability in various cuisines worldwide makes it a culinary treasure. Kale offers an array of holistic health benefits, from supporting heart health to providing essential nutrients and antioxidants. With its harmonious flavor profile, Kale enhances dishes and promotes well-being, representing centuries of nourishment and culinary excellence.</p></div>",
    "sections": [
      {
        "title": "Description",
        "html": "<div class=\"pdp_main_dec\"><p>Kale&#8217;s history can be traced back to ancient civilizations, where it was cultivated for its exceptional nutritional value and hearty resilience. Over time, kale has evolved from a staple food to a beloved superfood. Kale&#8217;s prominence in various cuisines around the world has elevated its status to that of a culinary treasure. From Mediterranean dishes to American favorites, kale has a special place on plates worldwide. Kale&#8217;s journey through history reflects its adaptability and enduring popularity. Once a basic leafy green, it has transformed into a symbol of health.</p></div>"
      },
      {
        "title": "Health Benefits",
        "html": "<div class=\"pdp_main_dec\"><p>Nutrient Density: Kale is a nutritional powerhouse, providing an abundance of essential vitamins, minerals, and antioxidants that promote overall well-being.</p><p></p><p>Heart Health: Regular consumption of kale may support cardiovascular wellness by helping to maintain healthy blood pressure and cholesterol levels.</p><p></p><p>Antioxidant Defense: The potent antioxidants in kale combat free radicals, contributing to cellular health and longevity.</p><p></p><p>Bone Health: Kale&#8217;s calcium content supports strong bones and teeth, promoting skeletal vitality.</p><p></p><p>Digestive Wellness: The fiber in kale promotes digestive regularity and gut health, potentially alleviating discomfort.</p><div></div></div>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><b><u>Enhancing the Flavor:</u></b></p>\n<p>Kale&#8217;s flavor profile is a harmonious blend of earthy, slightly bitter, and subtly peppery notes.<br></p>\n<p><span style=\"text-decoration: underline;\"><strong><br></strong></span></p>\n<p><span style=\"text-decoration: underline;\"><strong>Constituents Include:</strong></span></p>\n<p><strong>• Minerals</strong>: Calcium, Iron, Magnesium, Phosphorus, Potassium, Zinc, Copper, Manganese, Selenium</p>\n<p><strong>• Vitamins</strong>: Vitamin C, Thiamin, Riboflavin, Niacin, Pantothenic Acid, Vitamin B-6, Folate, Choline, Betaine, Vitamin A (RAE), Beta carotene, Vitamin A (IU), Lutein &amp; Zeaxanthin, Vitamin E, Vitamin K</p>\n<p><strong>• Amino Acids</strong>: Tryptophan, Threonine, Isoleucine, Leucine, Lysine, Methionine, Cystine, Tyrosine, Valine, Arginine, Histidine, Alanine, Aspartic Acid, Glutamic Acid, Proline</p>\n<p><strong>• Flavonols</strong>: Isorhamnetin, Myricetin, Quercetin</p>\n<p><strong>• Phytochemicals</strong>: Sulforaphane, Indole-3-carbinol, Di-indolyl-methane (DIM)</p>\n<p></p>\n<p><b><span style=\"text-decoration: underline;\"><strong><br></strong></span></b></p>\n<p><b><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></b></p>\n<p><b>•&nbsp;</b><strong>Parts Used:&nbsp;</strong>Whole Kale leaf.<br><b>• Ingredients</b>: Raw Kale Leaf.<br><b>• Origin:</b>&nbsp;Grown and dried in China and packaged with care in Florida, USA.<br><b>• Certifications</b>: Certified USDA Organic.</p>"
      }
    ]
  },
  {
    "slug": "organic-kelp-rockweed-powder",
    "title": "Organic Kelp (Rockweed) Powder",
    "image": "/images/Organic-Kelp-Rockweed-Powder.png",
    "overviewHtml": "<p>  Kelp, also known as Rockweed, is a marine superfood with a rich history and exceptional health benefits. Celebrated by coastal communities and revered for its nutrient richness, it is renowned for its thyroid support, digestive wellness, and immune-boosting properties. Kelp&#8217;s unique flavors enhance a variety of culinary creations, representing centuries of nourishment and culinary delight.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<div class=\"pdp_main_dec\"><p>Kelp&#8217;s history is intertwined with coastal communities that have relied on this marine treasure for centuries. Harvested from the pristine waters of oceans and seas, Kelp has been a source of sustenance, commerce, and cultural significance. Kelp&#8217;s prominence in traditional cuisines and coastal traditions worldwide has elevated its status to that of a revered superfood. It is celebrated for its unique nutritional qualities and potential health benefits. Kelp&#8217;s journey through history reflects its adaptability and enduring popularity. Once a coastal delicacy and essential resource for coastal communities, it has become a symbol of holistic well-being and nutrition.</p></div>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Nutrient Richness: Despite its oceanic origins, Kelp is a nutritional powerhouse, providing an abundance of essential vitamins, minerals, and antioxidants that promote overall well-being.</p><p></p><p>Thyroid Support: Kelp is a natural source of iodine, a crucial mineral for thyroid health. It may help maintain a healthy thyroid function.</p><p></p><p>Digestive Wellness: Kelp&#8217;s fiber content supports digestive regularity and gut health, potentially alleviating discomfort.</p><p></p><p>Immune Support: It offers immune-boosting properties that help fortify the body&#8217;s defenses against illnesses, promoting vitality.</p><p></p><p>Mineral Abundance: Kelp is rich in minerals like calcium, magnesium, and iron, contributing to bone health and overall well-being.</p><div></div>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><span style=\"text-decoration: underline;\"><strong>Enhancing the Flavor Profile:</strong></span></p>\n<p>Kelp&#8217;s unique flavors add depth and umami to various culinary creations.<span style=\"text-decoration: underline;\"><strong><br></strong></span></p>\n<p><span style=\"text-decoration: underline;\"><strong><br></strong></span></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>• </strong><strong>Certification</strong>: USDA Certified Organic.</p>\n<p><strong>• Ingredients</strong>: Organic Kelp.</p>\n<p><strong>• Parts Used</strong>: Whole, Kelp.</p>\n<p><strong>• Origin</strong>: Grown and dried in Nova Scotia, Canada, and packaged with care in Florida, USA.</p>"
      }
    ]
  },
  {
    "slug": "organic-lions-mane-extract-powder",
    "title": "Organic Lion's Mane Extract Powder",
    "image": "/images/Organic-Lions-Mane-Extract-Powder.png",
    "overviewHtml": "<p>  Lion&#8217;s Mane is a unique and esteemed mushroom known for its rich history, potential health benefits, and intriguing flavor profile. Scientifically known as Hericium erinaceus, this remarkable fungi has captured the attention of cultures around the world for centuries.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p><span style=\"font-weight: 400;\">Lion&#8217;s Mane&#8217;s history is steeped in traditional medicine, particularly in Asian cultures, where it has been revered for centuries as a natural remedy. The mushroom&#8217;s appearance, resembling a cascading lion&#8217;s mane, has contributed to its distinctive name. In many Asian cultures, Lion&#8217;s Mane is highly regarded not only for its potential health benefits but also for its unique appearance. It has earned a place in traditional remedies as a source of vitality and well-being. Lion&#8217;s Mane has a long history of use in traditional Asian medicine to support cognitive function, digestive health, and overall vitality. Its potential benefits have made it a sought-after natural remedy.</span></p>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Brain Health: Lion&#8217;s Mane may support cognitive function and brain health, potentially enhancing memory and mental clarity.</p><p></p><p>Digestive Harmony: Traditionally, Lion&#8217;s Mane has been used to promote digestive wellness and maintain a healthy gut.</p><p></p><p>Immune Support: The mushroom is believed to strengthen the immune system, helping the body defend against illnesses.</p><p></p><p>Nervous System Health: Lion&#8217;s Mane&#8217;s potential to support the nervous system contributes to overall well-being.</p><div></div>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><strong><u>Enhancing the Flavor Profile:</u></strong></p>\n<p>Lion&#8217;s Mane&#8217;s flavor profile is a delightful blend of umami and seafood-like notes. Its tender, meaty texture and mild, slightly sweet taste make it a versatile ingredient that elevates a variety of culinary creations, adding depth and complexity to dishes.<strong><u><br></u></strong></p>\n<p><strong><u><br></u></strong></p>\n<p><strong><u>Constituents Include:</u></strong></p>\n<p>• Minerals: Calcium, Chromium, Copper, Iron, Magnesium, Phosphorus, Potassium, Zinc, Copper, Manganese, Selenium, Germanium<br>• Vitamins: Vitamin C, Thiamin, Riboflavin, Niacin, Pantothenic Acid, Vitamin B-6, Folate, Choline, Betaine, Vitamin A (RAE), Beta carotene, Vitamin A (IU), Lutein &amp; Zeaxanthin, Vitamin E, Beta Tocopherol, Gamma Tocopherol, Delta Tocopherol, Vitamin K<br>• Amino Acids: Tryptophan, Threonine, Isoleucine, Leucine, Lysine, Methionine, Cystine, Phenylalanine, Tyrosine, Valine, Arginine, Histidine, Alanine, Aspartic Acid, Glutamic Acid, Glycine, Proline, Serine<br>• Polysaccharides: D-glucose, D-xylose, D-mannose, D-galactose, D-fucose, L-arabinose, L-rhamnose<br>• Triterpenes: Gandenic Acid, Lucidunic Acid, Ganoderenic acid, Sanedermic acid, Ganosporeic acid, Ganosporelactone A, B, Ganoderma Nonol, Ganodermenonol A, Epoxyganoderiol A, B, C<br>• Fatty acids: Phosphatidylethanolamine, Phosphatidylcholine<br>• Other Phytochemicals: Phosphatidylethanolamine, Phosphatidylcholine<br>• Fatty acids: Phosphatidylethanolamine, Phosphatidylcholine</p>\n<p><br></p>\n<p></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Ingredients</strong>: Organic Lion’s Mane Mushroom Extract, Organic Maltodextrin.</p>\n<p><strong>Certifications</strong>: Certified USDA Organic.</p>\n<p><strong>Origin</strong>: Grown and extracted in China and packaged with care in Florida, USA.</p>"
      }
    ]
  },
  {
    "slug": "organic-mangosteen-fruit-powder",
    "title": "S.A.U.M.R.S",
    "image": "/images/Organic-Mangosteen-Fruit-Powder.png",
    "overviewHtml": "<p>  Welcome to the exotic world of Mangosteen Fruit Powder, a tropical treasure celebrated for its rich history, numerous health benefits, and delightful flavor. Derived from the mangosteen fruit, often referred to as the &#8220;queen of fruits,&#8221; this powder offers a convenient and potent way to enjoy the unique properties of this Southeast Asian gem. Packed with antioxidants, vitamins, and minerals, Mangosteen Fruit Powder is a versatile and nutritious addition to your diet.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p>Mangosteen has been cherished in Southeast Asia for centuries, known not only for its delectable taste but also for its medicinal properties. Ancient texts from regions like Thailand and Malaysia highlight its use in traditional medicine to treat various ailments, including inflammation, infections, and digestive issues. The fruit&#8217;s revered status earned it the title &#8220;queen of fruits,&#8221; and it has been a symbol of health and wellness in Asian cultures for generations. Today, mangosteen is enjoyed worldwide, both for its flavor and its health-promoting qualities.</p>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Antioxidant Rich: Mangosteen Fruit Powder is loaded with xanthones, powerful antioxidants that help protect the body from oxidative stress and support overall health.</p><p></p><p>Anti-Inflammatory Properties: The anti-inflammatory compounds in mangosteen can help reduce inflammation and may alleviate symptoms of inflammatory conditions.</p><p></p><p>Immune Support: High in vitamin C and other immune-boosting nutrients, mangosteen helps strengthen the immune system, enhancing the body&#8217;s ability to fight off illnesses.</p><p></p><p>Digestive Health: Mangosteen aids in maintaining a healthy digestive system, thanks to its natural fiber content and traditional use as a remedy for digestive issues.</p><p></p><p>Skin Health: The antioxidants and vitamins in mangosteen promote healthy, radiant skin by combating free radicals and supporting collagen production.</p><p></p><p>Heart Health: Mangosteen supports cardiovascular health by helping to maintain healthy cholesterol levels and providing essential nutrients for heart function.</p><p></p><p>Weight Management: The fiber content in mangosteen aids in digestion and helps promote a feeling of fullness, which can assist in weight management efforts.</p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><span style=\"text-decoration: underline;\"><strong>Enhancing the Flavor Profile:</strong></span></p>\n<p>Mangosteen Fruit Powder offers a unique and delightful flavor that is both sweet and tangy.<span style=\"text-decoration: underline;\"><strong><br></strong></span></p>\n<p><br></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Parts Used</strong>: Whole Mangosteen Fruit including Pericarp (rind) and excluding seeds.</p>\n<p><strong>Ingredients</strong>: Mangosteen Fruit.</p>\n<p><strong>Origin</strong>: Grown and dried in Thailand and packaged with care in Florida, USA.</p>\n<p><strong>Certifications</strong>: Certified USDA Organic.</p>"
      }
    ]
  },
  {
    "slug": "organic-moringa-leaf-powder",
    "title": "Organic Moringa Leaf Powder",
    "image": "/images/Organic-Moringa-Leaf-Powder.png",
    "overviewHtml": "<p>  Moringa Leaf Powder, an ancient superfood, boasts a rich history and exceptional health benefits. Celebrated by various cultures and revered for its nutrient density, it is renowned for its immune-boosting, anti-inflammatory, and digestive support properties. Moringa&#8217;s unique flavors enhance a variety of culinary creations, representing centuries of nourishment and culinary delight.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<div class=\"pdp_main_dec\"><p>Moringa&#8217;s history can be traced back thousands of years, with its use documented in ancient cultures, including the Indian subcontinent and Africa. Revered for its nutritional and medicinal properties, Moringa has been a source of sustenance and wellness for generations. Moringa&#8217;s prominence in traditional medicine and culinary traditions around the world has elevated its status to that of a revered superfood. It has been celebrated for its unique nutritional qualities and potential health benefits. Moringa&#8217;s journey through history reflects its adaptability and enduring popularity. Once a regional delicacy and herbal remedy, it has become a symbol of holistic well-being and nutrition.</p></div>"
      },
      {
        "title": "Health Benefits",
        "html": "<p><span style=\"font-family: var( --e-global-typography-text-font-family ), Sans-serif; font-size: var( --e-global-typography-text-font-size ); letter-spacing: var( --e-global-typography-text-letter-spacing );\">Nutrient Density: Despite its unassuming appearance, Moringa Leaf Powder is a nutritional powerhouse, providing a vast array of essential vitamins, minerals, and antioxidants that promote overall well-being.</span></p><p></p><p></p><p>Immune Support: Moringa&#8217;s immune-boosting properties help fortify the body&#8217;s defenses against illnesses, promoting vitality.</p><p></p><p></p><p>Anti-Inflammatory: It possesses natural anti-inflammatory properties that may alleviate joint discomfort and support overall wellness.</p><p></p><p></p><p>Digestive Wellness: Moringa&#8217;s fiber content promotes digestive regularity and gut health, potentially alleviating discomfort.</p><p></p><p></p><p>Energy and Vitality: Moringa is celebrated for its potential to boost energy levels and combat fatigue, making it an excellent addition to your daily routine.</p><div></div>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><span style=\"text-decoration: underline;\"><strong>Enhancing the Flavor Profile:</strong></span></p>\n<p>Moringa Leaf Powder offers a mild, earthy taste with subtle herbal undertones.&nbsp;<span style=\"text-decoration: underline;\"><strong><br></strong></span></p><p><br></p>\n<p></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p dir=\"ltr\"><strong>• Ingredients</strong>: Raw Moringa Leaf.</p>\n<p dir=\"ltr\"><strong>• Parts Used</strong>: Moringa Tree Leaf (only the leaves).</p>\n<p dir=\"ltr\"><strong>• Origin</strong>: Grown and dried in India and packaged with care in Florida, USA.</p>\n<p dir=\"ltr\"><strong>• Certification</strong>: Certified USDA Organic.</p>"
      }
    ]
  },
  {
    "slug": "organic-noni-fruit-powder",
    "title": "S.A.U.M.R.S",
    "image": "/images/Organic-Noni-Fruit-Powder.png",
    "overviewHtml": "<p>  Welcome to the world of Noni, a remarkable fruit with a rich history, numerous health benefits, and a unique flavor profile. Noni, scientifically known as Morinda citrifolia, has been cherished for centuries across various cultures for its potential wellness advantages. From its origins in the Pacific Islands to its recognition worldwide, Noni continues to captivate the culinary and health-conscious alike. Join us as we explore the fascinating journey of Noni, from its historical roots to its potential contributions to your well-being.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p>Noni&#8217;s history is deeply intertwined with the cultures of the Pacific Islands, where it has been used for centuries as both a food source and a traditional remedy. Known by different names in different regions, Noni has earned monikers like &#8220;Indian Mulberry&#8221; and &#8220;Cheese Fruit&#8221; due to its distinctive appearance and flavor. Noni&#8217;s significance in Pacific Island culture is profound. The fruit was not only consumed for its nutritional value but also used in traditional medicine to address various health concerns. Its leaves, bark, and roots were also utilized in herbal preparations, highlighting the diverse range of potential benefits associated with Noni.</p><p><br />Today, Noni has garnered attention beyond the Pacific Islands for its potential health advantages. It has found its way into the global wellness landscape, captivating individuals seeking natural and holistic solutions for well-being.</p>"
      },
      {
        "title": "Health Benefits",
        "html": "<p><span style=\"font-weight: 400;\">Antioxidant Power: Noni is packed with antioxidants that help combat free radicals, protecting cells from oxidative damage and promoting overall well-being.</span></p><p></p><p><span style=\"font-weight: 400;\"></span></p><p><span style=\"font-weight: 400;\">Immune Support: Noni&#8217;s immune-boosting properties contribute to a robust defense against illnesses, helping the body stay resilient.</span></p><p></p><p><span style=\"font-weight: 400;\"></span></p><p><span style=\"font-weight: 400;\">Digestive Harmony: Noni has been traditionally used to support digestive health, aiding in regularity and comfort.</span></p><p></p><p><span style=\"font-weight: 400;\"></span></p><p><span style=\"font-weight: 400;\">Joint Health: Some individuals have reported improved joint comfort and mobility with the regular consumption of Noni.</span></p><p></p><p><span style=\"font-weight: 400;\"></span></p><p><span style=\"font-weight: 400;\">Skin Vitality: The antioxidants in Noni may contribute to healthy and radiant skin, promoting a youthful complexion.</span></p><p></p><p><span style=\"font-weight: 400;\"></span></p><p><span style=\"font-weight: 400;\">Cardiovascular Wellness: Noni&#8217;s potential to support healthy blood pressure and cholesterol levels makes it a heart-friendly choice.</span></p><p></p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><strong><u>Enhancing the Flavor Profile:</u></strong></p>\n<p>Noni&#8217;s flavor profile is a unique fusion of earthy and slightly pungent notes. While the taste may be an acquired one for some, others appreciate its distinctive essence. Noni&#8217;s flavor is often described as earthy, with hints of cheese and citrus. Its flavor profile is a testament to its uniqueness in the world of fruits and natural ingredients.<strong><u><br></u></strong></p><p><br></p>\n<p></p>\n<p><strong><u>Constituents Include:</u></strong></p>\n<p>• Minerals: Potassium, Sodium, Magnesium, Iron, Calcium, Phosphorus<br>• Vitamins: Ascorbic acid, Thiamin, Riboflavin, Niacin, Beta-carotene<br>• Acids: Acetic, 2-methyl propanoic, Butanoic, 2-methyl butanoic, Hexanoic, 3-methyliopropanoic, Benzoic, Glucuronic, Caproic, Caprylic, Heptanoic, Okadaic, Octanoic, Hexanedioic, Nonanoic, Decanoic, Undecanoic, Lauric, Myristic, Palmitic, Linoleic, Elaidic, Oleic, (Z, Z, Z)-8,11,14-eicosatrienoic<br>• Alcohols: 1-Butanol, 3-Methyl-3-buten-1-ol, 3-Methyl-2-buten-1-ol, 1-Hexanol, Benzyl alcohol, Eugenol, (Z, Z)-2-5-Undecadien-1-ol<br>• Esters: Methyl hexanoate, Methyl 3-methylthio-propanoate, Ethyl hexanoate, Methyl octanoate, Ethyl octanoate, Methyl decanoate, Ethyl decanoate, Methyl palmitate, Ethyl palmitate, Methyl elaidate, Methyl oleate<br>• Ketones: 3-Hydroxy-2-butanone, 2-Heptanone<br>• Lactones: (E)-6-Dodecano-y – lactone, (Z)-6-Dodeceno-y – lactone<br>• Miscellaneous compounds: Hexanamide, Proxeronine, Limonene, (Ethylthiomethyl) benzene, Scopoletin, Vomifoliol, Aucubin, Asperuloside.</p>\n<p></p>\n<p><br></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Parts Used:</strong>&nbsp;Whole, Noni fruit.</p>\n<p><strong>Ingredients</strong>:&nbsp;Raw Noni Fruit.</p>\n<p><strong>Origin</strong>: Grown and dried in India and packaged with care in Florida, USA.<br><strong>Certifications</strong>: Certified USDA Organic.</p>"
      }
    ]
  },
  {
    "slug": "organic-papaya-juice-powder",
    "title": "S.A.U.M.R.S",
    "image": "/images/Papaya-Juice-Powder-Organic-Fruit-Powders.png",
    "overviewHtml": "<p>  Crafted from the finest papayas, this natural powder is a nutrient-packed superfood, rich in essential vitamins and minerals, supporting your overall well-being. From aiding digestion to enhancing your skin&#8217;s radiance, papaya juice powder offers a multitude of health benefits. Transform the flavor profile with the tropical paradise in every serving with Papaya Juice Powder.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p>Papayas have been cherished for centuries in tropical regions, celebrated for their exotic taste and a wealth of health benefits. The history of papaya juice powder is rooted in the desire to make the vibrant flavors and nutrients of papayas accessible to people worldwide. The ingenious process of transforming ripe papayas into powder has revolutionized how we can enjoy this tropical fruit. Today, our products honor this history while making papaya juice powder a versatile and convenient addition to your culinary creations.</p>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Nutrient-Packed Superfood: Papaya juice powder is a nutrient-packed superfood, offering a cornucopia of essential vitamins and minerals, such as vitamin C, vitamin A, and folate, promoting overall well-being.</p><p></p><p>Digestive Health Support: Rich in enzymes like papain, papaya juice powder supports healthy digestion and may aid in easing digestive discomfort.</p><p></p><p>Immune System Boost: The abundance of vitamin C in papaya juice powder helps bolster the immune system, enhancing your body&#8217;s natural defenses.</p><p></p><p>Skin Health: Papaya is known for its skin-nourishing properties, and our powder captures these benefits, contributing to a radiant complexion.</p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><span style=\"text-decoration: underline;\"><strong>Enhancing the Flavor Profile:</strong></span></p>\n<p>Papaya juice powder is a culinary gem that enhances the flavor profile of various dishes. Its natural sweetness and tropical aroma infuse each recipe with a delightful essence. Papaya juice powder adds a unique and irresistible flavor that transports your taste buds to a tropical paradise. It&#8217;s the secret ingredient to bring the taste of fresh papayas, making it even more delightful and memorable.&nbsp;<span style=\"text-decoration: underline;\"><strong><br></strong></span></p>\n<p><span style=\"text-decoration: underline;\"><strong>&nbsp;</strong></span></p>\n<p><span style=\"text-decoration: underline;\"><strong>Constituents Include:</strong></span></p>\n<p>• Minerals: Calcium, Iron, Magnesium, Phosphorus, Potassium, Zinc, Copper, Manganese, Selenium<br>• Vitamins: Vitamin C, Thiamin, Riboflavin, Niacin, Pantothenic Acid, Vitamin B-6, Folate, Choline, Vitamin A (RAE), Beta carotene, Vitamin A (IU), Lutein &amp; Zeaxanthin, Vitamin E, Beta Tocopherol, Gamma Tocopherol, Vitamin K<br>• Amino Acids: Tryptophan, Threonine, Isoleucine, Leucine, Lysine, Methionine, Cystine, Phenylalanine, Tyrosine, Valine, Arginine, Histidine, Alanine, Aspartic Acid, Glutamic Acid, Proline, Serine, Glycine<br>• Anthocyanidins: Cyanidin<br>• Flavan-3-ols: Catechin<br>• Flavonols: Myricetin<br>• Proanthocyanidins: Proanthocyanidin Monomers, Proanthocyanidin Dimers, Proanthocyanidin Trimers, Proanthocyanidin 4-6mers</p><p><br></p>\n<p></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Ingredients</strong>: Organic Papaya Juice, Organic Maltodextrin</p>\n<p><strong>Parts Used</strong>: Whole, Papaya (No seed or rind)</p>\n<p><strong>Origin</strong>: Grown and Dried in China. Packaged with care in Florida, USA.</p>\n<p><strong>Certifications</strong>: Certified USDA Organic.</p>"
      }
    ]
  },
  {
    "slug": "organic-pineapple-juice-powder",
    "title": "S.A.U.M.R.S",
    "image": "/images/Pineapple-Juice-Powder-Organic-Fruit-Powders.png",
    "overviewHtml": "<p>  Pineapples are much more than just a delicious tropical fruit; they are a symbol of hospitality and a treasure trove of health benefits. Known for their sweet and tangy flavor, pineapples have been enjoyed by cultures around the world for centuries. Pineapples are not just a fruit; they are a tropical delight loaded with flavor and health benefits.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p>Pineapples are native to South America, where indigenous people cultivated them for generations. Spanish explorers encountered this exotic fruit during their voyages and introduced it to Europe. Over time, pineapples became associated with warm hospitality, and their image often graced colonial homes as a symbol of welcome.</p>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Digestive Health: Pineapple is rich in bromelain, an enzyme that aids digestion and may reduce inflammation in the digestive tract.</p><p></p><p>Immune System Support: The high vitamin C content in Pineapple Juice Powder boosts your immune system, helping your body defend against illnesses.</p><p></p><p>Anti-Inflammatory: Bromelain in pineapple has natural anti-inflammatory properties, potentially relieving joint pain and muscle soreness.</p><p></p><p>Heart Health: The bromelain and vitamin C in pineapples may promote cardiovascular health by reducing the risk of blood clots and maintaining healthy blood pressure.</p><p></p><p>Skin Health: Vitamin C is essential for collagen production, contributing to healthy and radiant skin.</p><p></p><p>Eye Health: Pineapple&#8217;s beta-carotene and vitamin A content support good vision and overall eye health.</p><p></p><p>Bone Health: The manganese in pineapples is crucial for bone health and may help prevent osteoporosis.</p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><span style=\"text-decoration: underline;\"><strong>Enhancing the Flavor Profile:</strong></span></p>\n<p>Pineapple Juice Powder elevates the flavor profile of your dishes, infusing them with natural sweetness and tangy aroma. It adds an irresistible tropical twist.<span style=\"text-decoration: underline;\"><strong><br></strong></span></p>\n<p><span style=\"text-decoration: underline;\"><strong><br></strong></span></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Ingredients</strong>: Organic Pineapple Juice, Organic Maltodextrin.</p>\n<p><strong>Certifications</strong>: Certified USDA Organic.</p>\n<p><strong>Parts used</strong>: Raw Ripe fruit.</p>\n<p><strong>Origin</strong>: Grown and dried in China and packaged with care in Florida, USA.</p>"
      }
    ]
  },
  {
    "slug": "organic-pomegranate-juice-powder",
    "title": "S.A.U.M.R.S",
    "image": "/images/Organic-Pomegranate-Juice-Powder.png",
    "overviewHtml": "<p>  Pomegranate, scientifically known as Punica granatum, has captivated cultures across the globe for centuries. With its jewel-like arils and sweet-tart flavor, it&#8217;s no wonder that pomegranate has earned its place as a symbol of fertility, abundance, and vitality.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<div><p>Pomegranate&#8217;s history is steeped in ancient legends and mythologies. It has been revered in various cultures, including those of the Mediterranean, Middle East, and India. In Greek mythology, the pomegranate is associated with the story of Persephone, symbolizing fertility and renewal. Throughout history, pomegranate has been a symbol of prosperity, good fortune, and abundance. In many cultures, it plays a central role in traditional rituals, celebrations, and cuisine. Pomegranates have graced the tables of royalty and been featured in art, literature, and religious texts.</p></div>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Antioxidant Powerhouse: Pomegranates are rich in antioxidants, particularly punicalagins and anthocyanins, which help combat free radicals and protect cells from oxidative stress.</p><p></p><p>Heart Health: Regular consumption of pomegranates may support cardiovascular wellness by reducing blood pressure, improving cholesterol profiles, and enhancing overall heart function.</p><p></p><p>Immune Support: Pomegranates&#8217; vitamin C content strengthens the immune system, aiding in the body&#8217;s defense against illnesses.</p><p></p><p>Anti-Inflammatory: The fruit&#8217;s polyphenols exhibit anti-inflammatory properties, potentially reducing the risk of chronic diseases and promoting overall well-being.</p><p></p><p>Digestive Health: Pomegranates are a good source of dietary fiber, which supports digestive regularity and gut health.</p><p></p><p>Skin Vitality: The antioxidants in pomegranates contribute to healthy skin by protecting it from UV damage and promoting a youthful complexion.</p><div></div>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><span style=\"text-decoration: underline;\"><strong>Enhancing the Flavor Profile:</strong></span></p>\n<p>Pomegranate&#8217;s flavor profile is an exquisite balance of sweet and tart notes. The jewel-like arils burst with a juicy, refreshing, and slightly tangy essence. Pomegranate&#8217;s unique taste makes it a versatile addition to both sweet and savory dishes, lending its distinct character to culinary creations.<br></p><div><br></div>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Certifications</strong>: USDA Certified Organic.</p>\n<p><strong>Ingredients</strong>: Organic Raw Pomegranate Juice and Organic non-GMO corn maltodextrin*.</p>\n<p><strong>Parts Used</strong>: Whole Raw, Pomegranate fruit (No seeds or rind).</p>\n<p><strong>Origin</strong>: Grown and dried in China. Packaged with care in Florida, USA.</p>\n<p><br></p>\n<p></p>"
      }
    ]
  },
  {
    "slug": "organic-premium-freeze-dried-acai-powder",
    "title": "Organic Premium Freeze Dried Açaí Powder",
    "image": "/images/Acai-Berry-Powder-Premium-Organic-Freeze-Dried-Fruit-Powders.png",
    "overviewHtml": "<p>  Acai Berry Powder is your ticket to an exotic flavor adventure and a wellness journey. Rich in antioxidants, heart-healthy fats, and essential nutrients, it enhances your health while infusing the flavor with the enticing taste of the Amazon. Embrace the vibrant and nutritious world of Acai Berry Powder—it&#8217;s more than a superfruit; it&#8217;s a lifestyle choice.</p>",
    "sections": [
      {
        "title": "Health Benefits",
        "html": "<p>Antioxidant Defense: The potent antioxidants in Acai Berry Powder combat free radicals, contributing to overall well-being.</p><p></p><p>Heart-Friendly: Monounsaturated fats support a healthy heart, and fiber aids in maintaining normal cholesterol levels.</p><p></p><p>Immune Support: Acai&#8217;s vitamin C content strengthens your immune system, helping your body fend off illnesses.</p><p></p><p>Anti-Inflammatory: Acai Berry Powder&#8217;s natural anti-inflammatory properties can help reduce inflammation in the body, potentially alleviating joint pain and muscle soreness.</p><p></p><p>Brain Health: Acai berries are rich in antioxidants, which may support cognitive function and protect brain cells from oxidative damage, potentially benefiting brain health.</p><p></p><p>Weight Management: The high fiber content in Acai Berry Powder can promote a feeling of fullness, aiding in weight management and appetite control.</p><p></p><p>Skin Radiance: Acai&#8217;s antioxidants contribute to healthy, glowing skin by fighting off free radicals and supporting collagen production.</p><p></p><p>Vision Support: Acai berries contain beta-carotene and vitamin A, which are beneficial for maintaining good vision and overall eye health.</p><p></p><p>Energy Boost: Acai Berry Powder provides a natural energy boost, making it a great addition to your pre-workout smoothies or snacks.</p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body)); letter-spacing: 1.2px;\"><span style=\"text-decoration-line: underline;\"><span style=\"font-weight: bold;\"><strong>Enhancing the Flavor Profile:</strong></span></span></p>\n<p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body));\">Acai Berry Powder&#8217;s flavor profile is a harmony of sweet and tart, with a delightful berry essence that tingles your taste buds. Acai Berry Powder transports your palate to the lush Amazon rainforest.<br></p>\n<p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body));\"><br></p>\n<p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body)); letter-spacing: 1.2px;\"><span style=\"text-decoration-line: underline;\"><span style=\"font-weight: bold;\"><strong>Constituents Include:</strong></span></span></p>\n<p><strong>Protein</strong> <br><strong>Dietary fiber</strong><br><strong>Polyphenolic</strong> <strong>Anthocyanins:</strong> resveratrol, cyanidin-3-galactoside, ferulic acid, delphinidin, petunidin <br><strong>Proanthocyanidin Tannins:</strong> epicatechin, protocatechuic acid, and ellagic acid <br><strong>Vitamins:</strong> A, B1, B2, B3, B6, B12, C, D, E, K <br><strong>Nutrients:</strong> Biotin, Boron, Calcium, Chromium, Copper, Folic Acid, Inositol, Iron, Iodine, Magnesium, Manganese, Molybdenum, Pantothenic Acid, Potassium, Selenium, Sodium, Zinc <br><strong>Essential Amino Acids:</strong> Lysine, Leucine, Tryptophan, Threonine, Phenylalanine, Isoleucine, Methionine, Valine, Cystine <br><strong>Non-Essential Amino Acids:</strong> Histidine, Glycine, Arginine, Alanine, Serine, Tyrosine, Aspartate, Glutamate, Proline, Hydroxyproline</p>\n<p></p>\n<p><span style=\"text-decoration: underline;\"><strong><br></strong></span></p><p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p dir=\"ltr\"><strong>Certifications</strong>:&nbsp;Certified&nbsp;USDA Organic.&nbsp;</p>\n<p dir=\"ltr\"><strong>Ingredients</strong>: Organic Raw Freeze Dried Acai Pulp.</p>\n<p dir=\"ltr\"><strong>Parts Used:&nbsp;</strong>Whole Acai Pulp.</p>\n<p dir=\"ltr\"><strong>Origin</strong>:&nbsp;Grown and freeze-dried in Brazil and packaged with care in Florida, USA.&nbsp;</p>"
      }
    ]
  },
  {
    "slug": "organic-sea-buckthorn-juice-powder",
    "title": "S.A.U.M.R.S",
    "image": "/images/Sea-Buckthorn-Juice-Powder-Organic-Fruit-Powders.png",
    "overviewHtml": "<p><span style=\"font-weight: 400;\">  Welcome to the world of Sea Buckthorn Juice Powder—an extraordinary ingredient celebrated for its vibrant flavor and a treasure trove of health benefits. Bursting with antioxidants, vitamin C, and beneficial fatty acids, it elevates your health while adding a burst of zest to culinary creations. Embrace the revitalizing taste and well-being benefits of Sea Buckthorn Juice Powder—it&#8217;s your journey to the heart of wellness and the irresistible taste of sea buckthorn.</span></p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p>Sea buckthorn, scientifically known as Hippophae rhamnoides, is a resilient shrub that bears tart orange berries. Indigenous to Europe, Asia, and the Himalayas, this remarkable shrub has a storied history, having been utilized for millennia. It has been cherished as a source of food in diverse culinary traditions, earning it the moniker &#8220;the king of berries&#8221; in traditional Chinese medicine.</p><p></p><p>In certain regions, sea buckthorn juice is affectionately referred to as &#8220;the golden drink.&#8221; This recent surge in popularity can be attributed to both its tangy, invigorating taste and its well-documented nutritional benefits.</p>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Immune Fortification: Thanks to its high vitamin C content, Sea Buckthorn Juice Powder is a natural immune booster, fortifying your body&#8217;s defenses against illnesses.</p><p></p><p>Heart Health: The unique combination of antioxidants, carotenoids, and phenolic compounds may support cardiovascular well-being by promoting healthy cholesterol levels and reducing the risk of heart-related issues.</p><p></p><p>Skin Nourishment: Sea buckthorn&#8217;s antioxidants and vitamins contribute to healthy, radiant skin by protecting against free radical damage and supporting collagen production.<br /><br /></p><p>Eye Health: Sea Buckthorn Juice Powder contains a substantial amount of beta-carotene, a precursor to vitamin A, which is essential for maintaining good vision and overall eye health. Including this powder in your diet may help protect against age-related vision issues and dry eye syndrome.</p><p></p><p>Digestive Wellness: The dietary fiber found in sea buckthorn berries can promote a healthy digestive system by supporting regular bowel movements and preventing constipation. It also helps maintain a balanced gut microbiome, contributing to overall gastrointestinal well-being.</p><p></p><p>Anti-Inflammatory Properties: Sea buckthorn&#8217;s natural anti-inflammatory compounds, including flavonoids and quercetin, may reduce inflammation throughout the body. This property can potentially alleviate symptoms of inflammatory conditions like arthritis and improve overall joint comfort.</p><p></p><p>Blood Sugar Management: Some research suggests that Sea Buckthorn Juice Powder may assist in regulating blood sugar levels. Its rich nutrient profile, particularly the presence of polyphenols, may help improve insulin sensitivity and reduce the risk of type 2 diabetes.</p><p></p><p>Liver Support: Sea buckthorn is believed to have hepatoprotective properties, meaning it may support liver health. Regular consumption of Sea</p><p>Buckthorn Juice Powder might aid in detoxification processes and protect the liver from damage caused by toxins.</p><p></p><p>Antimicrobial Benefits: Studies have shown that sea buckthorn extracts exhibit antimicrobial properties, potentially inhibiting the growth of harmful bacteria and pathogens in the body. This effect can contribute to a stronger immune system.</p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><span style=\"text-decoration: underline;\"><strong>Enhancing the Flavor Profile:</strong></span></p>\n<p><br></p>\n<p>Sea Buckthorn Juice Powder&#8217;s flavor profile is a symphony of zesty and slightly tart notes. Its bright, tangy flavor elevates both the taste and nutritional value of your culinary creations.<span style=\"text-decoration: underline;\"><strong><br></strong></span></p>\n<p><br></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Botanical Name</strong>: Hippophae Rhamnoides.</p>\n<p>*This product contains a small amount of maltodextrin, which acts as a drying agent and is necessary to keep this powder from clumping into hard chunks or one solid brick.&nbsp; For more information about tapioca starch derived from cassava root (yuca root), click here: http://en.wikipedia.org/wiki/Cassava</p>\n<p><strong>Parts Used</strong>: Whole Sea Buckthorn fruit (No Seed).</p>\n<p><strong>Ingredients</strong>: Organic Sea Buckthorn Fruit Juice Powder and Organic non-GMO maltodextrin.*</p>\n<p><strong>Origin</strong>: Grown and dried in China and packaged with care in Florida, USA.<br><strong>Certifications</strong>: Certified USDA Organic.</p>"
      }
    ]
  },
  {
    "slug": "organic-shiitake-mushroom-powder",
    "title": "S.A.U.M.R.S",
    "image": "/images/Organic-Shiitake-Mushroom-Powder.png",
    "overviewHtml": "<p>  Welcome to the intriguing world of Shiitake, a revered and versatile mushroom celebrated for its rich history, potential health benefits, and distinctive flavor profile. Scientifically known as Lentinula edodes, this remarkable fungi has been cherished in Asian cultures for centuries. With its origins rooted in traditional medicine and its remarkable properties, Shiitake invites you to delve into its historical significance, holistic wellness potential, and the captivating taste it imparts—a journey that promises both vitality and culinary delight.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<div class=\"pdp_main_dec\"><p>Shiitake&#8217;s history is deeply embedded in traditional Asian medicine, where it has been cherished for its potential to promote well-being. The mushroom&#8217;s name, derived from the Japanese words &#8220;shii&#8221; (a type of tree) and &#8220;take&#8221; (mushroom), reflects its natural habitat and historical significance. In Asian cultures, particularly in Japan and China, Shiitake mushrooms have a special place in culinary traditions and traditional medicine. They are highly regarded for their unique taste and potential health benefits. Shiitake has a long history of use in traditional Asian medicine to address various health concerns, from immune support to vitality and overall wellness.</p><div></div></div>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Immune Support: Shiitake is believed to bolster the immune system, enhancing the body&#8217;s defenses against illnesses.</p><p></p><p>Heart Health: Regular consumption of Shiitake may contribute to cardiovascular wellness by helping to maintain healthy cholesterol levels.</p><p></p><p>Digestive Harmony: The mushroom promotes digestive wellness and gut health, potentially alleviating discomfort.</p><p></p><p>Vitamin D Source: Shiitake is one of the few plant-based sources of vitamin D, essential for bone health and overall well-being.</p><div></div>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><strong><u>Enhancing the Flavor Profile:</u></strong></p>\n<p>Shiitake&#8217;s flavor profile is a delightful combination of umami, earthy, and slightly smoky notes. Its tender texture and rich taste make it a versatile ingredient that enhances the flavor of various culinary creations, adding depth and complexity.<br></p>\n<p><br></p>\n<p><strong><u>Constituents Include:</u></strong></p>\n<p>• Minerals: calcium, iron, magnesium, phosphorus, potassium, zinc, copper, manganese, selenium.<br>• Vitamins: thiamin, riboflavin, niacin, pantothenic acid, vitamin b-6, folate, vitamin D, d2, d3.<br>• Amino acids: tryptophan, threonine, isoleucine, leucine lysine, methionine, cystine, phenylalanine, tyrosine, valine, arginine, histidine, alanine, aspartic acid, glutamic acid, glycine, proline, serine.<br>• Polysaccharides: lentinan.</p>\n<p><br></p>\n<p></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Parts Used:</strong>&nbsp;Whole Shiitake Mushroom.</p>\n<p><strong>Ingredients</strong>: Organic Shiitake Mushroom.</p>\n<p><strong>Origin</strong>: Grown and dried in China and packaged with care in Florida, USA.<br><strong>Certifications</strong>: Certified USDA Organic.</p>"
      }
    ]
  },
  {
    "slug": "organic-spirulina-powder",
    "title": "Organic Spirulina Powder",
    "image": "/images/Organic-Spirulina-Powder.png",
    "overviewHtml": "<p>  Welcome to the vibrant world of Spirulina, a superfood renowned for its rich history, exceptional health benefits, and sustainable potential. Scientifically known as Arthrospira platensis, spirulina has captivated the attention of health enthusiasts worldwide. With origins rooted in ancient civilizations and a remarkable nutrient profile, Spirulina invites you to explore its historical significance, holistic wellness potential, and the unique qualities that make it a nutritional powerhouse—a journey that promises both vitality and environmental stewardship.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<div class=\"pdp_main_dec\"><p>Spirulina&#8217;s history can be traced back to ancient civilizations, particularly the Aztecs and other Mesoamerican cultures, where it was harvested from natural lakes. Over time, spirulina has evolved from a traditional food source to a global health phenomenon. Spirulina&#8217;s prominence in various cultures has elevated its status to that of a revered superfood. It has been celebrated for its unique nutritional qualities and potential health benefits. Spirulina&#8217;s journey through history reflects its adaptability and enduring popularity. Once a traditional dietary staple, it has become a symbol of holistic well-being.</p></div>"
      },
      {
        "title": "Nutrition",
        "html": "<p>• Spirulina is the most nutrient-dense product in the world, with more nutrition per gram than any other.<br />• A small 3-gram serving of Spirulina contains the same amount of phytonutrients as five servings of fruits and vegetables put together.<br />• Spirulina is a great source of calcium, containing 300% more than whole milk.<br />• Spirulina is especially helpful for bone health, pediatric development, and those following a vegan diet.<br />• Spirulina is a powerful antioxidant, containing 3900% more beta carotene than carrots, which helps support a healthy immune system and eyesight.<br />• Spirulina contains 375% more protein than tofu, which is important for muscle tissue and growth.<br />• There have been over 200 scientific studies conducted to show the potential health benefits of Spirulina.</p>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Nutrient Density: Spirulina is a nutritional powerhouse, providing an abundance of essential vitamins, minerals, and antioxidants that promote overall well-being.</p><p></p><p>Protein Prowess: It is an excellent plant-based source of protein, making it a valuable addition to vegetarian and vegan diets.</p><p></p><p>Immune Support: Spirulina may bolster the immune system, enhancing the body&#8217;s defenses against illnesses.</p><p></p><p>Antioxidant Defense: The potent antioxidants in spirulina combat free radicals, contributing to cellular health and longevity.</p><p></p><p>Detoxification: Spirulina&#8217;s chlorophyll content supports natural detoxification processes, aiding in the removal of toxins from the body.</p><div></div>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><span style=\"text-decoration: underline;\"><strong>Enhancing the Flavor Profile:</strong></span></p>\n<p>Spirulina&#8217;s flavor profile is characterized by earthy and slightly nutty notes. While its taste is mild, its versatility in various culinary creations, adds both nutrition and vibrancy to dishes.<span style=\"text-decoration: underline;\"><strong><br></strong></span></p>\n<p><br></p>\n<p><span style=\"text-decoration: underline;\"><strong>Constituents Include:</strong></span></p>\n<p><strong>• Minerals</strong>: Calcium, Iron, Magnesium, Phosphorus, Potassium, Zinc, Copper, Manganese, Selenium</p>\n<p><strong>• Vitamins</strong>: Vitamin C, Thiamin, Riboflavin, Niacin, Pantothenic Acid, Vitamin B-6, Folate, Choline, Vitamin B12, Vitamin A (RAE), Beta carotene, Vitamin A (IU), Vitamin E, Vitamin K</p>\n<p><strong>• Amino Acids</strong>: Tryptophan, Threonine, Isoleucine, Leucine, Lysine, Methionine, Cystine, Phenylalanine, Tyrosine, Valine, Arginine, Histidine, Alanine, Aspartic Acid, Glutamic Acid, Glycine, Proline, Serine</p>\n<p><strong>• Fatty Acids:</strong>&nbsp;Palmitic acid, Linoleic acid, Alpha-linolenic acid, stearidonic acid (SDA), Eicosapentaenoic acid (EPA), oic Docosahexaenoic acid (DHA), Arachidonic acid (AA)</p>\n<p><strong>• Phytochemicals</strong>: Chlorophyll, Phycocyanin, Chlorophyll-a, Xanthophyll, Echinenone, Myxoxanthophyll, Canthaxanthin, Diatoxanthin, 3&#8242;-hydroxy echinenone, Beta-cryptoxanthin, Oscilla Xanthine, Phycobiliproteins(c-phycocyanin and allophycocyanin)</p>\n<p style=\"line-height: var(--wp--typography--line-height, var(--global--line-height-body)); letter-spacing: 1.2px;\"><br></p>\n<p></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>• Origin</strong>: Grown and dried in South Korea and packaged with care in Florida, USA.</p>"
      }
    ]
  },
  {
    "slug": "organic-sunflower-lecithin",
    "title": "Organic Sunflower Lecithin",
    "image": "/images/Sunflower-Lecithin.png",
    "overviewHtml": "<p>  Sunflower Lecithin, a naturally sourced emulsifier, boasts a history rooted in innovation and sustainability. Celebrated for its role in brain health, liver support, and potential contribution to cardiovascular wellness, it is renowned for its culinary versatility and sustainability. Sunflower Lecithin represents modern nutrition and mindful living, offering versatility and holistic well-being. Derived from sunflower seeds, this lipid mixture has earned its place as a cherished ingredient in both the culinary and wellness realms. With a history rooted in innovation and sustainability, Sunflower Lecithin invites you to explore its significance, holistic wellness potential, and the unique ways it enhances both culinary creations and overall well-being—a journey that promises versatility and nourishment.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<div class=\"pdp_main_dec\"><p>Sunflower Lecithin&#8217;s history is closely tied to the development of modern emulsifiers, driven by the need for healthier and more sustainable alternatives to traditional sources of lecithin. Sunflower Lecithin&#8217;s prominence in modern health-conscious and environmentally aware lifestyles has elevated its status to that of a revered ingredient. It is celebrated for its diverse applications and potential health benefits. Sunflower Lecithin&#8217;s journey through history reflects its role in addressing the demand for sustainable and plant-based emulsifiers. It has become a symbol of innovation and environmental responsibility.</p></div>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Brain Health: Lecithin is a source of choline, an essential nutrient that plays a role in brain function and cognitive health.</p><p></p><p>Liver Support: Choline also supports liver health by aiding in fat metabolism and preventing the accumulation of liver fat.</p><p></p><p>Cardiovascular Wellness: Some studies suggest that lecithin may contribute to healthy cholesterol levels, supporting heart health.</p><p></p><p>Digestive Aid: Lecithin can act as an emulsifier in the digestive tract, helping to break down fats for better absorption.</p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><span style=\"text-decoration: underline;\"><strong>Enhancing the Flavor Profile:</strong></span></p>\n<p>Sunflower Lecithin is prized for its ability to emulsify and blend ingredients in various culinary creations, including baked goods, sauces, dressings, and beverages. Its neutral flavor and natural origin make it a popular choice for health-conscious and sustainable cooking.<span style=\"text-decoration: underline;\"><strong><br></strong></span></p>\n<p><br></p>\n<p><span style=\"text-decoration: underline;\"><strong>Constituents Include:</strong></span></p>\n<p><strong>• Minerals</strong>: Calcium, Iron, Magnesium, Phosphorus, Potassium, Zinc, Copper, Manganese</p>\n<p><strong>• Vitamins</strong>: Vitamin C, Thiamin, Riboflavin, Niacin, Pantothenic Acid, Vitamin B-6, Folate, Choline, Betaine, Vitamin A (RAE), Beta &amp;, Vitamin A (IU), Lutein &amp; Zeaxanthin, Lycopene, Vitamin E, Beta Tocopherol, Gamma Tocopherol, Delta Tocopherol, Vitamin K</p>\n<p><strong>• Amino Acids</strong>: Tryptophan, Threonine, Isoleucine, Leucine, Lysine, Methionine, Cystine, Phenylalanine, Tyrosine, Valine, Arginine, Histidine, Alanine, Aspartic Acid, Glutamic Acid, Proline, Serine</p>\n<p><strong>• Flavanones</strong>: Naringenin</p>\n<p><strong>• Flavonols</strong>: Kaempferol, Myricetin, Quercetin.</p>\n<p><br></p>\n<p></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Parts Used</strong>: Whole Tomato (including seeds and skin).<br><strong>Ingredients</strong>: Organic Tomato Powder.<br><strong>Origin</strong>: Grown and dried in the USA and packaged with care in Florida, USA.<br><strong>Certifications</strong>: Certified USDA Organic.</p>"
      }
    ]
  },
  {
    "slug": "organic-tart-cherry-juice-powder",
    "title": "S.A.U.M.R.S",
    "image": "/images/Organic-Tart-Cherry-Juice-Powder.png",
    "overviewHtml": "<p>  Tart Cherry Juice Powder is more than a fruit; it&#8217;s a flavorful and wellness-boosting choice that complements your lifestyle. Rich in antioxidants, melatonin, and anti-inflammatory compounds, it enhances your health while adding a burst of tangy elegance. Embrace the revitalizing taste and well-being benefits of Tart Cherry Juice Powder—it&#8217;s your journey to the heart of wellness and the irresistible taste of cherries.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p>Tart cherries have been cherished for centuries, particularly in regions like Eastern Europe and North America. Native Americans were among the first to recognize their medicinal properties, using tart cherries to support a variety of ailments. In the early 20th century, tart cherry juice began to be produced and sold commercially in the United States, gaining popularity for its unique flavor and health benefits. By the 1980s, tart cherry juice powder was developed, making it easier to transport and store, and thus more accessible to people worldwide.</p>"
      },
      {
        "title": "Health Benefits",
        "html": "<p><span style=\"font-weight: 400;\">Joint and Muscle Support: The anti-inflammatory compounds in tart cherries may reduce discomfort and support joint and muscle health.</span></p><p></p><p><span style=\"font-weight: 400;\">Heart Health: Antioxidants and phytonutrients in tart cherries support cardiovascular well-being, potentially lowering the risk of heart-related issues.</span></p><p></p><p><span style=\"font-weight: 400;\">Improved Sleep Quality: The melatonin content may help regulate sleep patterns and promote better sleep quality.</span></p><p></p><p><span style=\"font-weight: 400;\">Oxidative Stress Reduction: The antioxidants in tart cherries, such as anthocyanins and quercetin, play a vital role in reducing oxidative stress. By neutralizing free radicals, these antioxidants contribute to overall well-being and may reduce the risk of chronic diseases.</span></p><p></p><p><span style=\"font-weight: 400;\">Gut Health Support: Emerging research suggests that tart cherries may have a positive impact on gut health. The fiber and polyphenols in tart cherries can promote a balanced gut microbiome, potentially benefiting digestion and overall gastrointestinal wellness.</span></p><p></p><p><span style=\"font-weight: 400;\">Brain Function: Some studies indicate that the antioxidants and anti-inflammatory compounds in tart cherries may support cognitive function and brain health. Regular consumption may help protect brain cells from oxidative damage and inflammation.</span></p><p></p><p><span style=\"font-weight: 400;\">Weight Management: Tart cherries are relatively low in calories and offer dietary fiber, which can promote a feeling of fullness. Including Tart Cherry Juice Powder in your diet may aid in weight management by curbing appetite and reducing overall calorie intake</span></p><p><br style=\"font-weight: 400;\" /><br style=\"font-weight: 400;\" /></p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><strong><u>Enhancing the Flavor Profile:</u></strong></p>\n<p>Tart Cherry Juice Powder&#8217;s flavor profile is a symphony of tangy and slightly sweet notes. It brings the essence of cherries to your palate and its bold and tangy flavor elevates both the taste and nutritional value of your culinary creations.<strong><u><br></u></strong></p>\n<p><br></p>\n<p><strong><u>Constituents Include:</u></strong></p>\n<p>• Minerals: Calcium, Iron, Magnesium, Phosphorus, Potassium, Zinc, Copper, Manganese,<br>• Vitamins: Vitamin C, Thiamin, Riboflavin, Niacin, Pantothenic Acid, Vitamin B-6, Folate, Choline, Vitamin A (RAE), Beta carotene, Vitamin A (IU), Lutein &amp; Zeaxanthin, Vitamin E (Alpha), Vitamin K<br>• Anthocyanidins: Peonidin, Cyanidin<br>• Flavan-3-ols: Catechin, Epicatechin<br>• Flavonols: Kaempferol, Quercetin, Isorhamnetin</p><p><br></p>\n<p></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Parts Used</strong>: Tart Cherry Juice (no seeds, no skin).</p>\n<p><strong>Certifications</strong>: Certified USDA Organic.</p>\n<p><strong>Ingredients</strong>: Organic Tart Cherry juice, Organic Maltodextrin.*</p>"
      }
    ]
  },
  {
    "slug": "organic-tomato-powder",
    "title": "Organic Tomato Powder",
    "image": "/images/Organic-Tomato-Powder.png",
    "overviewHtml": "<p>  Tomatoes have been a cherished ingredient in kitchens around the world for centuries. Tomato Powder is more than just a kitchen staple; it&#8217;s a flavorful and nutritious choice that complements culinary endeavors. Bursting with intense tomato flavor, vitamins, and antioxidants, it elevates culinary creations to new heights.</p>",
    "sections": [
      {
        "title": "Description",
        "html": "<p>Tomatoes have a rich culinary legacy that dates back centuries. Originally cultivated by indigenous peoples in Mesoamerica, particularly in regions that are now part of Mexico, tomatoes were one of the staples of their diet. The ancient Aztecs and Mayans are believed to have been among the first to cultivate and consume tomatoes, appreciating both their flavor and nutritional value.</p><p></p><p>Tomatoes made their way to Europe through explorers and travelers, particularly after Christopher Columbus&#8217;s voyages to the Americas. The first recorded tomato seeds in Europe were brought back to Spain in the late 15th century. Initially, tomatoes were met with curiosity and skepticism in Europe, with some regarding them as ornamental plants rather than food.</p><p></p><p>Today, the tomato is a global culinary superstar, enjoyed in countless forms and dishes worldwide. From classic Italian pasta sauces to refreshing salsa in Mexico, and from ketchup on American hamburgers to sun-dried tomatoes in Mediterranean salads, tomatoes have transcended borders and become an integral part of diverse cuisines.</p>"
      },
      {
        "title": "Health Benefits",
        "html": "<p>Heart Health: Tomato Powder is renowned for its heart-healthy attributes. It contains lycopene, a powerful antioxidant that may help reduce the risk of cardiovascular diseases. Lycopene has been linked to improved blood vessel function and a lower risk of high blood pressure, contributing to overall heart well-being.</p><p></p><p>Cancer Prevention: The high lycopene content in Tomato Powder is associated with a reduced risk of certain types of cancer, particularly prostate cancer. Lycopene&#8217;s potent antioxidant properties may help protect cells from damage and inhibit the growth of cancerous cells.</p><p></p><p>Eye Health: Tomatoes are rich in vitamin A and beta-carotene, both of which are essential for maintaining good vision and eye health. Consuming Tomato Powder may help reduce the risk of age-related macular degeneration and promote healthy eyes.</p><p></p><p>Bone Health: Tomato Powder provides a noteworthy amount of vitamin K, a nutrient crucial for bone health. Vitamin K plays a role in bone mineralization and may help prevent osteoporosis by enhancing calcium absorption.</p><p></p><p>Digestive Wellness: The dietary fiber content in Tomato Powder can promote a healthy digestive system by supporting regular bowel movements and preventing constipation. A fiber-rich diet is also associated with a lower risk of digestive disorders, such as diverticulitis and colorectal cancer.</p><p></p><p>Weight Management: Tomato Powder is low in calories and fat, making it a valuable ingredient for those seeking to manage their weight. Its natural flavor enhancement can help reduce the need for additional high-calorie seasonings, promoting healthier eating habits.</p><p></p><p>Skin Health: The vitamins and antioxidants in Tomato Powder, including vitamin C, can contribute to healthy and radiant skin. These nutrients protect the skin from oxidative damage, support collagen production, and may help prevent premature aging.</p><p></p><p>Immune Support: The vitamin C content in Tomato Powder enhances your immune system, helping your body defend against illnesses. It also aids in wound healing and the body&#8217;s natural defense mechanisms.</p>"
      },
      {
        "title": "Miscellaneous",
        "html": "<p><b><u>Enhancing the Flavor Profile:</u></b></p>\n<p>Tomato Powder&#8217;s flavor profile is a symphony of sun-ripened tomatoes—vibrant, savory, and slightly sweet. Embrace the savory taste and culinary advantages of Tomato Powder—it&#8217;s your journey to a world of delicious possibilities.<b><u><br></u></b></p><p><br></p>\n<p></p>\n<p><span style=\"text-decoration: underline;\"><strong>Constituents Include:</strong></span></p>\n<p><strong>• Minerals</strong>: Calcium, Iron, Magnesium, Phosphorus, Potassium, Zinc, Copper, Manganese</p>\n<p><strong>• Vitamins</strong>: Vitamin C, Thiamin, Riboflavin, Niacin, Pantothenic Acid, Vitamin B-6, Folate, Choline, Betaine, Vitamin A (RAE), Beta &amp;, Vitamin A (IU), Lutein &amp; Zeaxanthin, Lycopene, Vitamin E, Beta Tocopherol, Gamma Tocopherol, Delta Tocopherol, Vitamin K</p>\n<p><strong>• Amino Acids</strong>: Tryptophan, Threonine, Isoleucine, Leucine, Lysine, Methionine, Cystine, Phenylalanine, Tyrosine, Valine, Arginine, Histidine, Alanine, Aspartic Acid, Glutamic Acid, Proline, Serine</p>\n<p><strong>• Flavanones</strong>: Naringenin</p>\n<p><strong>• Flavonols</strong>: Kaempferol, Myricetin, Quercetin.</p>\n<p><br></p>\n<p><span style=\"text-decoration: underline;\"><strong>Additional Information:</strong></span></p>\n<p><strong>Parts Used</strong>: Whole Tomato (including seeds and skin).<br><strong>Ingredients</strong>: Organic Tomato Powder.<br><strong>Origin</strong>: Grown and dried in the USA and packaged with care in Florida, USA.<br><strong>Certifications</strong>: Certified USDA Organic.</p>"
      }
    ]
  }
];

export const ingredientDetailsBySlug: Record<string, IngredientDetail> = ingredientDetails.reduce(
  (acc, detail) => {
    acc[detail.slug] = detail;
    return acc;
  },
  {} as Record<string, IngredientDetail>
);
