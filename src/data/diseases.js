export const diseases = [
  {
    id: 0,
    slug: 'bacterial_spot',
    name: 'Bacterial Spot',
    symptoms:
      'Small water-soaked dark brown spots appear on the leaves. These spots become black and eventually, the affected tissue falls off, leaving holes in the leaves. Black spots resembling freckles appear simultaneously on the fruit.',
    cause: 'Bacterium Xanthomonas Perforans',
    prevention: [
      'Use only certified disease-free seeds and plants.',
      'Avoid planting peppers or tomatoes in the same area for at least a year.',
      'Avoid overhead watering; use drip irrigation instead.',
      'Prune plants to improve air circulation.',
      'Practice good sanitation, such as plowing straw.',
      'Control weeds.',
    ],
    treatment: [
      'Spraying with copper-based fungicides provides effective control of bacterial diseases.',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 1,
    slug: 'early_blight',
    name: 'Early Blight',
    symptoms:
      'Irregularly shaped large dark black spots, death of tissue surrounded by larger yellow areas. Leaf spots have a distinctive concentric ring appearance.',
    cause: 'Fungus Alternaria Linariae (A. solani)',
    prevention: [
      'Use tomato cultivars that are resistant or tolerant.',
      'Use pathogen-free seeds.',
      'Do not plant diseased plants in the field.',
      'Practice crop rotation; control tomato plant weeds.',
      'Fertilize plants properly.',
      'Avoid wetting tomato leaves during irrigation.',
      'Test garden soil annually and maintain adequate potassium levels.',
    ],
    treatment: [
      'Spraying with chlorothalonil, mancozeb, or copper-based fungicides can control this disease.',
      'Prune and remove infected branches and lower leaves.',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 2,
    slug: 'late_blight',
    name: 'Late Blight',
    symptoms:
      'Mostly wet, soggy areas appear on the leaves, which eventually turn brown and thin. Large irregular greenish-brown spots appear on the fruit with a rough, oily appearance. Stems show irregular green to black spots.',
    cause: 'Pathogen Phytophthora Infestans',
    prevention: [
      'Keep leaves dry; place plants in areas that receive morning sunlight.',
      'Provide extra space between plants and avoid overhead watering, especially in the afternoon.',
      'Buy certified disease-free seeds and plants.',
      'Control weeds.',
      'Avoid creating rotting compost.',
    ],
    treatment: [
      'Spraying with chlorothalonil, mancozeb, or copper-based fungicides can control this disease.',
      'Prune and remove infected branches and lower leaves.',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 3,
    slug: 'leaf_mold',
    name: 'Leaf Mold',
    symptoms:
      'Appears as light green spots on the upper surface of older leaves. Underneath the leaves in this area, purple or olive green spots from fungal growth are visible. Infected leaves turn yellow and drop from the plant.',
    cause: 'Fungus Passalora Fulva',
    prevention: [
      'Dispose of old plant residues.',
      'Check and prune plants to improve air circulation.',
      'Place tomato plants further apart for better air circulation between plants.',
      'Avoid wetting leaves while watering.',
      'Rotate with vegetables other than tomatoes.',
    ],
    treatment: [
      'Spraying with chlorothalonil, mancozeb, or copper-based fungicides can control this disease.',
      'Prune and remove infected branches and lower leaves.',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 4,
    slug: 'septoria_leaf_spot',
    name: 'Septoria Leaf Spot',
    symptoms:
      'Circular, water-soaked lesions occur first on older leaves. These spots then turn brown with a gray center and if the infection is severe, the entire leaf will die.',
    cause: 'Fungus Septoria Lycopersici',
    prevention: [
      'Do not plant tomato cultivars as most current ones are susceptible to Septoria leaf spot.',
      'Rotate/plant tomatoes every 3 years and practice sanitation (discard plant residues).',
      'Avoid overhead irrigation.',
    ],
    treatment: [
      'Spraying with chlorothalonil, mancozeb, or copper-based fungicides can control this disease.',
      'Prune and remove infected branches and lower leaves.',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 5,
    slug: 'spider_mites/two_spotted_spider_mite',
    name: 'Spider Mites / Two-Spotted Spider Mite',
    symptoms:
      'Leaves turn yellowish-white and speckled. Red spider mites can be found on both sides of the leaves but prefer the underside near leaf veins. Small web-like structures are present, especially on the lower leaf surface.',
    cause: 'Tetranychus evansi',
    prevention: [
      'Maintain good land cleanliness.',
      'Regularly remove weeds.',
      'Regularly monitor your plants.',
      'Keep records related to the onset of diseases for future preparation.',
    ],
    treatment: [
      'Care for, remove, or quarantine affected plants to prevent spreading.',
      'There are currently no miticides to combat this pest.',
    ],
    ref: [
      {
        name_ref: 'DPI NSW',
        link: 'https://www.dpi.nsw.gov.au/biosecurity/plant/insect-pests-and-plant-diseases/Tomato-red-spider-mite',
      },
    ],
  },
  {
    id: 6,
    slug: 'target_spot',
    name: 'Target Spot',
    symptoms:
      'Early symptoms on leaves are small water-soaked spots on the upper leaf surface. Spots develop into small necrotic lesions with a light brown center and dark edges.',
    cause: 'Pathogen Corynespora Cassiicola',
    prevention: [
      'Improve airflow through the canopy with wider planting spacing.',
      'Avoid excessive nitrogen fertilization, which can lead to overly dense canopy formation. Pruning shoots and old leaves in the lower canopy can also increase airflow and reduce leaf wetness.',
      'Avoid planting tomatoes near old plants.',
      'Check seedlings for target spot symptoms before transplanting.',
      'Manage weeds, which can serve as alternative hosts.',
      'Avoid overhead irrigation.',
      'Destroy plant residues immediately after the last harvest.',
      'Move away from tomatoes and other known hosts for at least three years.',
    ],
    treatment: [
      'Spraying with chlorothalonil, mancozeb, or copper-based fungicides can control this disease.',
      'Prune and remove infected branches and lower leaves.',
    ],
    ref: [
      {
        name_ref: 'Vegetables Bayer',
        link: 'https://www.vegetables.bayer.com/ca/en-ca/resources/agronomic-spotlights/target-spot-of-tomato.html',
      },
    ],
  },
  {
    id: 7,
    slug: 'yellow_leaf_curl_virus',
    name: 'Tomato Yellow Leaf Curl Virus',
    symptoms:
      'Leaves curl upwards, leaf edges turn yellow (chlorosis), leaves are smaller than usual, plants are dwarfed, and flowers drop. If tomato plants are infected early in their growth, no fruit may form. Infected plants can appear randomly throughout the garden.',
    cause: 'Whitefly',
    prevention: [
      'Removing plants with early symptoms can slow disease spread.',
      'Infected plants that are pulled out should be bagged immediately to prevent spread.',
      'Control weeds in and around the garden, as they may serve as alternative hosts for whiteflies.',
    ],
    treatment: [
      'Creating a horticultural oil or low-concentration canola oil spray will act as a pest deterrent.',
      'At the end of the season, discard all vulnerable plants and burn or dispose of them.',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 8,
    slug: 'mosaic_virus',
    name: 'Tomato Mosaic Virus',
    symptoms:
      'Virus-infected plants become dwarfed, often with poorly developed leaves. Plants appear stunted. Leaves may be spotted and often have a "shoestring" appearance. Fruits are small and misshapen.',
    cause: 'Tobacco Mosaic Virus',
    prevention: [
      'Remove and destroy infected plants immediately.',
      'Wash hands thoroughly after smoking (Tobacco Mosaic Virus may be present in certain tobacco types) and before working in the garden.',
      'Eliminate weeds and remove infected plants from the site as soon as they are noticed.',
      'Control insects (thrips and whiteflies) that carry the virus (see HGIC 2218, Tomato Insect Pests).',
    ],
    treatment: [
      'Use reflective mulch.',
      'Use tomato cultivars resistant to the virus.',
      'Many cultivars have Tobacco Mosaic Virus (TMV) resistance (the letter T follows the cultivar name), such as Bush Celebrity, Bush Early Girl, Jetsetter, Big Beef, Celebrity, Sweet Cluster, Sweet Million (cherry), and Super Marzano (paste).',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 9,
    slug: 'healthy',
    name: 'Healthy',
    symptoms: 'Plants appear healthy with no signs of disease.',
    cause: 'Diligent farmers cleaning and caring for plants.',
    prevention: ['Continuing these habits is the best prevention.'],
    treatment: ['No treatment is required.'],
    ref: [
      {
        name_ref: '',
        link: '',
      },
    ],
  },
];
