// for questions with their options

var questions = [
  {
    num: 1,
    question: "Grand Central Terminal, Park Avenue, New York is the world's:",
    answer: "a) largest railway station",
    options: [
      "a) largest railway station",
      "b) highest railway station",
      "c) longest railway station",
      "d) None of the above",
    ],
  },

  {
    num: 2,
    question: "Entomology is the science that studies",
    answer: "b) Insects",
    options: [
      "a) Behavior of human beings",
      "b) Insects",
      "c) The origin and history of technical and scientific terms",
      "d) The formation of rocks",
    ],
  },

  {
    num: 3,
    question: "For which of the following disciplines is Nobel Prize awarded?",
    answer: "d) All of the above",
    options: [
      "a) Physics and Chemistry",
      "b) Physiology or Medicine",
      "c) Literature, Peace and Economics",
      "d) All of the above",
    ],
  },

  {
    num: 4,
    question: " Name the person who was also known as Deshbandhu.",
    answer: "c) Chittaranjan Das",
    options: [
      "a)  S. Radhakrishnan",
      "b) G.K. Gokhale",
      "c) Chittaranjan Das",
      "d) Madan Mohan Malviya",
    ],
  },

  {
    num: 5,
    question: "The capital of Uttarakhand is",
    answer: "b) Dehra Dun",
    options: [
      "a) Mussoorie",
      "b) Dehra Dun",
      "c) Nainital",
      "d) None of these",
    ],
  },

  {
    num: 6,
    question: "How many languages are there in Indian currency notes?",
    answer: "b) 17",
    options: ["a) 14", "b) 17", "c) 15", "d) 16"],
  },

  {
    num: 7,
    question: "Who was the first Muslim President of the Indian National Congress?",
    answer: "d) Badruddin Tyabji",
    options: [
      "a) Hakim Azmal Khan",
      "b) Abul Kalam Azad",
      "c) Rafi Ahmad Kidwai",
      "d) Badruddin Tyabji",
    ],
  },

  {
    num: 8,
    question: "First University in India was founded in which of the following city?",
    answer: "c) Calcutta",
    options: [
      "a) Bombay",
      "b) Chennai",
      "c) Calcutta",
      "d) Delhi",
    ],
  },

  {
    num: 9,
    question: "The largest gland in the human body is-",
    answer: "a) Liver",
    options: [
      "a) Liver",
      "b) Adrenal",
      "c) Pituitary",
      "d) Pineal",
    ],
  },

  {
    num: 10,
    question: "Punjab is famous for its which type of textile?",
    answer: "c) Woolen textile",
    options: [
      "a) Nylon textile",
      "b) Silk textile",
      "c) Woolen textile",
      "d) Cotton textile",
    ],
  },

  {
    num: 11,
    question: "Which among the following is the hottest planet in the solar system?",
    answer: "b) Venus",
    options: [
      "a) Earth",
      "b) Venus",
      "c) Mars",
      "d) Jupiter",
    ],
  },

  {
    num: 12,
    question: "Who among the following appoints the Prime Minister of India?",
    answer: "b) Presidents",
    options: [
      "a) Chief Justice of India",
      "b) Presidents",
      "c) Rajya Sabha",
      "d) Lok Sabha",
    ],
  },

  {
    num: 13,
    question: "Which gas is used for the preparation of Soda water?",
    answer: "b) Carbon Dioxide",
    options: [
      "a) Oxygen",
      "b) Carbon Dioxide",
      "c) Ammonia",
      "d) Hydrogen",
    ],
  },

  {
    num: 14,
    question: "Gir National Park is situated in which of the following state?",
    answer: "d) Gujarat",
    options: [
      "a) Bihar",
      "b) Haryana",
      "c) West Bengal",
      "d) Gujarat",
    ],
  },

  {
    num: 15,
    question: "Which of the following is the largest river in India?",
    answer: "a) Ganges",
    options: [
      "a) Ganges",
      "b) Godavari",
      "c) Yamuna",
      "d) Brahmaputrat",
    ],
  },

  {
    num: 16,
    question: "Who among the following got the Bharat Ratna Award before becoming the president of India?",
    answer: "b) Dr. Zakir Hussian",
    options: [
      "a) R Venkataraman",
      "b) Dr. Zakir Hussian",
      "c) Dr. Rajendra Prasad",
      "d) V.V. Giri",
    ],
  },

  {
    num: 17,
    question: "Which of the following is the World’s Largest desert?",
    answer: "c) Sahara",
    options: [
      "a) Thar",
      "b) Kalahari",
      "c) Sahara",
      "d) Gobi",
    ],
  },

  {
    num: 18,
    question: "What is the name of the elephant which serves as the mount of Lord Indra?",
    answer: "a) Airavata",
    options: [
      "a) Airavata",
      "b) Iranian",
      "c) Vasirahu",
      "d) lndrayer",
    ],
  },

  {
    num: 19,
    question: "Fathometer is used to measure-",
    answer: "c) Ocean depth",
    options: [
      "a) Earthquakes",
      "b) Rainfall",
      "c) Ocean depth",
      "d) Sound intensity",
    ],
  },

  {
    num: 20,
    question: "Ctrl, Shift, and Alt are called ________ keys.",
    answer: "c) Ocean depth",
    options: [
      "a) Modifier",
      "b) Function",
      "c) Alphanumeric",
      "d) Adjustment",
    ],
  },

  // {
  //   num: 21,
  //   question: "Who among the following composed the Gayatri Mantra?",
  //   answer: "d) Vishvamitra",
  //   options: [
  //     "a) Parikshit",
  //     "b) Vasishtha",
  //     "c) Indra",
  //     "d) Vishvamitra",
  //   ],
  // },

  // {
  //   num: 22,
  //   question: "Which acid is used in eyewash?",
  //   answer: "b) Boric Acid",
  //   options: [
  //     "a) Oxalic Acid",
  //     "b) Boric Acid",
  //     "c) Nitric Acid",
  //     "d) None of the Above",
  //   ],
  // },

  // {
  //   num: 23,
  //   question: "Who among these is the founder of WhatsApp?",
  //   answer: "c) Jan Koum",
  //   options: [
  //     "a) Larry Page",
  //     "b) Mark Zuckerberg",
  //     "c) Jan Koum",
  //     "d) Jack Dorsey",
  //   ],
  // },

  // {
  //   num: 24,
  //   question: "Who among these is the founder of WhatsApp?",
  //   answer: "d) Jack Dorsey",
  //   options: [
  //     "a) Larry Page",
  //     "b) Mark Zuckerberg",
  //     "c) Jan Koum",
  //     "d) Jack Dorsey",
  //   ],
  // },

  // {
  //   num: 25,
  //   question: "Which chemical is used to stop bleeding?",
  //   answer: "c) Ferric Chloride",
  //   options: [
  //     "a) Vinegar",
  //     "b) Barium",
  //     "c) Ferric Chloride",
  //     "d) Acetylene",
  //   ],
  // },

  // {
  //   num: 26,
  //   question: "When was the Hindu Mahasabha founded?",
  //   answer: "c) 1915",
  //   options: [
  //     "a) 1910",
  //     "b) 1912",
  //     "c) 1915",
  //     "d) 1920",
  //   ],
  // },

  // {
  //   num: 27,
  //   question: "When was the Civil Disobedience Movement launched?",
  //   answer: "a) April 6, 1930",
  //   options: [
  //     "a) April 6, 1930",
  //     "b) July 10, 1929",
  //     "c) April 8, 1926",
  //     "d) June 10, 1928",
  //   ],
  // },

  // {
  //   num: 28,
  //   question: "Which of these elements is the hardest form of carbon?",
  //   answer: "d) Diamond",
  //   options: [
  //     "a) Graphite",
  //     "b) Bituminous",
  //     "c) Coke",
  //     "d) Diamond",
  //   ],
  // },

  // {
  //   num: 29,
  //   question: "How many times an adult breathes approximately in one minute?",
  //   answer: "b) 16-18",
  //   options: [
  //     "a) 71-78",
  //     "b) 16-18",
  //     "c) 100-110",
  //     "d) 30-35",
  //   ],
  // },

  // {
  //   num: 30,
  //   question: "Where was the 1st computer installed in India?",
  //   answer: "a) Indian Statistical Institute, Kolkata",
  //   options: [
  //     "a) Indian Statistical Institute, Kolkata",
  //     "b) IIT Bombay",
  //     "c) CSIR, New Delhi",
  //     "d) None of the Above",
  //   ],
  // },

  // {
  //   num: 31,
  //   question: "How many times the President of India can seek re-election to his post?",
  //   answer: "d) Any number of times",
  //   options: [
  //     "a) Once",
  //     "b) Two times",
  //     "c) Three times",
  //     "d) Any number of times",
  //   ],
  // },

  // {
  //   num: 32,
  //   question: "To whom does the Public Accounts Committee submit its report?",
  //   answer: "b) Parliament",
  //   options: [
  //     "a) Prime minister",
  //     "b) Parliament",
  //     "c) President of India",
  //     "d) Union Finance Ministe",
  //   ],
  // },

  // {
  //   num: 33,
  //   question: "What is the no. of chromosomes in each human cell?",
  //   answer: "c) 46",
  //   options: [
  //     "a) 23",
  //     "b) 22",
  //     "c) 46",
  //     "d) 44",
  //   ],
  // },

  // {
  //   num: 34,
  //   question: "Who is known as the Father of Indian Unrest?",
  //   answer: "d) Bal Gangadhar Tilak",
  //   options: [
  //     "a) Aurobindo Ghosh",
  //     "b) Lala Lajpat Rai",
  //     "c) Bhagat Singh",
  //     "d) Bal Gangadhar Tilak",
  //   ],
  // },

  // {
  //   num: 35,
  //   question: "Who was elected as the permanent President of the Muslim League in 1908?",
  //   answer: "d) Aga Khan",
  //   options: [
  //     "a) Syed Ahmad Khan",
  //     "b) Syed Amir Ali",
  //     "c) Nawab Salimullah",
  //     "d) Aga Khan",
  //   ],
  // },

  // {
  //   num: 36,
  //   question: "Panipat is located in-",
  //   answer: "b) Haryana",
  //   options: [
  //     "a) Rajasthan",
  //     "b) Haryana",
  //     "c) Uttarakhand",
  //     "d) Punjab",
  //   ],
  // },

  // {
  //   num: 37,
  //   question: "Which of the following is an anti-diabetic drug?",
  //   answer: "a) Insulin",
  //   options: [
  //     "a) Insulin",
  //     "b) Aspirin",
  //     "c) Penicillin",
  //     "d) None of the Above",
  //   ],
  // },

  // {
  //   num: 38,
  //   question: "What is the chemical formula of Acetic Acid?",
  //   answer: "a) CH3COOH",
  //   options: [
  //     "a) CH3COOH",
  //     "b) C2H5COOH",
  //     "c) CH2COOH",
  //     "d) CH3COCH3",
  //   ],
  // },

  // {
  //   num: 39,
  //   question: "Where is RAM located?",
  //   answer: "b) Motherboard",
  //   options: [
  //     "a) Expansion Board",
  //     "b) Motherboard",
  //     "c) External Drive",
  //     "d) None of the Above",
  //   ],
  // },

  // {
  //   num: 40,
  //   question: "The Second Generation Computers consisted of-",
  //   answer: "b) Transistors",
  //   options: [
  //     "a) VLSI Microprocessors",
  //     "b) Transistors",
  //     "c) Vacuum tubes",
  //     "d) Diodes",
  //   ],
  // },

  // {
  //   num: 41,
  //   question: "JPEG and MPG are file extensions of which type of files?",
  //   answer: "d) Image and Video",
  //   options: [
  //     "a) Both Audio",
  //     "b) Both Image",
  //     "c) Image and Audio",
  //     "d) Image and Video",
  //   ],
  // },

  // {
  //   num: 42,
  //   question: "Which was the largest site of the Indus Valley Civilization?",
  //   answer: "a) Mohenjo Daro",
  //   options: [
  //     "a) Mohenjo Daro",
  //     "b) Lothal",
  //     "c) Chanhudaro",
  //     "d) Dholavira",
  //   ],
  // },

  // {
  //   num: 43,
  //   question: "Who is known as the Metro Man of India?",
  //   answer: "c) E. Sreedharan",
  //   options: [
  //     "a) V. Kurien",
  //     "b) Satish Dhawan",
  //     "c) E. Sreedharan",
  //     "d) Dr. Mangu Singh",
  //   ],
  // },

  // {
  //   num: 44,
  //   question: "Which country is the leading egg producer in the world?",
  //   answer: "b) China",
  //   options: [
  //     "a) Brazil",
  //     "b) China",
  //     "c) India",
  //     "d) Mexico",
  //   ],
  // },

  // {
  //   num: 45,
  //   question: "What are the intersecting lines drawn on maps and globes called?",
  //   answer: "a) Geographic Grids",
  //   options: [
  //     "a) Geographic Grids",
  //     "b) Longitudes",
  //     "c) Latitudes",
  //     "d) None of the Above",
  //   ],
  // },

  // {
  //   num: 46,
  //   question: "Which among the following was the first bank fully managed by Indians?",
  //   answer: "b) Punjab National Bank",
  //   options: [
  //     "a) Oudh Commercial Bank",
  //     "b) Punjab National Bank",
  //     "c) Bank of India",
  //     "d) Bank of Baroda",
  //   ],
  // },

  // {
  //   num: 47,
  //   question: "Which day is celebrated as “World Ozone Day?",
  //   answer: "b) 16 September",
  //   options: [
  //     "a) 10 October",
  //     "b) 16 September",
  //     "c) 16 October",
  //     "d) 15 February",
  //   ],
  // },

  // {
  //   num: 48,
  //   question: "What is the color of the sky to an astronaut in outer space?",
  //   answer: "b) Black",
  //   options: [
  //     "a) Blue",
  //     "b) Black",
  //     "c) Violet",
  //     "d) None of the Above",
  //   ],
  // },

  // {
  //   num: 49,
  //   question: "The Panchayat Raj form of rural government was first adopted by which Indian states?",
  //   answer: "c) Rajasthan and Andhra Pradesh",
  //   options: [
  //     "a) Rajasthan and Madhya Pradesh",
  //     "b) Rajasthan and West Bengal",
  //     "c) Rajasthan and Andhra Pradesh",
  //     "d) Rajasthan and Uttar Pradesh",
  //   ],
  // },

  // {
  //   num: 50,
  //   question: "Name the three species most commonly used in social forestry-",
  //   answer: "d) Eucalyptus",
  //   options: [
  //     "a) Peepal",
  //     "b) Mango",
  //     "c) Gulmohar",
  //     "d) Eucalyptus",
  //   ],
  // },

  // {
  //   num: 51,
  //   question: "The first woman president of the Indian National Congress was?",
  //   answer: "b) Annie Besant",
  //   options: [
  //     "a) Sarojini Naidu",
  //     "b) Annie Besant",
  //     "c) Vijay Lakshmi Pandit",
  //     "d) None of the Above",
  //   ],
  // },

  // {
  //   num: 52,
  //   question: "Where do the western and Eastern Ghats meet?",
  //   answer: "a) Nilgiri Hills",
  //   options: [
  //     "a) Nilgiri Hills",
  //     "b) Aravalli Hills",
  //     "c) Cardamom Hills",
  //     "d) Annamalai Hills",
  //   ],
  // },

  // {
  //   num: 53,
  //   question: "Who among the following is popularly known as “Blade Runner",
  //   answer: "c) Oscar Carl Pistorius",
  //   options: [
  //     "a) Usain Bolt",
  //     "b) Carl Lewis",
  //     "c) Oscar Carl Pistorius",
  //     "d) None of the Above",
  //   ],
  // },

  // {
  //   num: 54,
  //   question: "The Right to Privacy comes under-",
  //   answer: "d) Article 21",
  //   options: [
  //     "a) Article 18",
  //     "b) Article 19",
  //     "c) Article 20",
  //     "d) Article 21",
  //   ],
  // },

  // {
  //   num: 55,
  //   question: "Which Indian bank manages Indian Visa Application Centre (IVAC) in Bangladesh?",
  //   answer: "c) State Bank of India",
  //   options: [
  //     "a) HDFC Bank",
  //     "b) ICICI Bank",
  //     "c) State Bank of India",
  //     "d) Canara Bank",
  //   ],
  // },

  // {
  //   num: 56,
  //   question: "‘Dahi-Handi’ has been announced as the official sport of which state?",
  //   answer: "d) Maharashtra",
  //   options: [
  //     "a) Gujarat",
  //     "b) Uttar Pradesh",
  //     "c) Madhya Pradesh",
  //     "d) Maharashtra",
  //   ],
  // },

  // {
  //   num: 57,
  //   question: "Which healthcare institution co-created India’s first prototype of drone transportation of human organs?",
  //   answer: "b) MGM Healthcare",
  //   options: [
  //     "a) Apollo",
  //     "b) MGM Healthcare",
  //     "c) Medanta",
  //     "d) Max Healthcare",
  //   ],
  // },

  // {
  //   num: 58,
  //   question: "What is the name of the common portal for recommendations and nominations of all official awards?",
  //   answer: "b) Rashtriya Portal",
  //   options: [
  //     "a) Bharat Portal",
  //     "b) Rashtriya Portal",
  //     "c) Atmanirbhar Portal",
  //     "d) India Awards Portal",
  //   ],
  // },

  // {
  //   num: 59,
  //   question: "Which Indian state famous for its ‘King Chilli’, organised a ‘Mirchi Festival’ (Chlli Festival)?",
  //   answer: "b) Nagaland",
  //   options: [
  //     "a) Assam",
  //     "b) Nagaland",
  //     "c) Arunachal Pradesh",
  //     "d) Haryana",
  //   ],
  // },

  // {
  //   num: 60,
  //   question: "Which e-commerce platform has partnered with the Spice Board of India for training programme for spice farmers?",
  //   answer: "b) Flipkart",
  //   options: [
  //     "a) Amazon",
  //     "b) Flipkart",
  //     "c) Jiomart",
  //     "d) e-Bay",
  //   ],
  // },

  // {
  //   num: 61,
  //   question: "As per the Amendment in Aadhar Rules, supporting documents need to be updated once in how many years?",
  //   answer: "b) 10",
  //   options: [
  //     "a) 5",
  //     "b) 10",
  //     "c) 20",
  //     "d) 25",
  //   ],
  // },

  // {
  //   num: 62,
  //   question: "South India’s first Vande Bharat Express train connects Mysuru and which city?",
  //   answer: "a) Chennai",
  //   options: [
  //     "a) Chennai",
  //     "b) 1Hyderabad",
  //     "c) Kochi",
  //     "d) Vijayawada",
  //   ],
  // },

  // {
  //   num: 63,
  //   question: "India’s sixth Vande Bharat train was inaugurated between Nagpur and which city?",
  //   answer: "c) Bilaspur",
  //   options: [
  //     "a) Raipur",
  //     "b) Bhopal",
  //     "c) Bilaspur",
  //     "d) Bengaluru",
  //   ],
  // },

  // {
  //   num: 64,
  //   question: "As of 2022, what is the minimum wage fixed for labourers in India?",
  //   answer: "b) Rs 178 per dayr",
  //   options: [
  //     "a) Rs 148 per day",
  //     "b) Rs 178 per day",
  //     "c) Rs 202 per day",
  //     "d) Rs 308 per day",
  //   ],
  // },

  // {
  //   num: 65,
  //   question: "Which state is undertaking the Caste-Based Survey (CBS) in India?",
  //   answer: "c) Bihar",
  //   options: [
  //     "a) Jharkhand",
  //     "b) Madhya Pradesh",
  //     "c) Bihar",
  //     "d) Arunachal Pradesh",
  //   ],
  // },

  // {
  //   num: 66,
  //   question: "What is the name of the first cruise ship manufactured in India?",
  //   answer: "a) Ganga Vilasr",
  //   options: [
  //     "a) Ganga Vilas",
  //     "b) Bharat Vilas",
  //     "c) Histo Brustro",
  //     "d) Bharat Café",
  //   ],
  // },

  // {
  //   num: 67,
  //   question: "In the Later Vedic period, who was the god of Shudras",
  //   answer: "a) Pushan",
  //   options: [
  //     "a) Pushan",
  //     "b) Prajapati",
  //     "c) Agni",
  //     "d) Indra",
  //   ],
  // },

  // {
  //   num: 68,
  //   question: "Buddhism from India was introduced to which current region by Kasyapa Matanga?",
  //   answer: "a) China",
  //   options: [
  //     "a) China",
  //     "b) South East Asia",
  //     "c) Sri Lanka",
  //     "d) Africa",
  //   ],
  // },

  // {
  //   num: 69,
  //   question: "What is the theme of the book Arthashastra, written by Kautilya",
  //   answer: "c) Book on principles of government",
  //   options: [
  //     "a) Biography of Kautilya",
  //     "b) Biography of Chandragupta Maurya",
  //     "c) Book on principles of government",
  //     "d) Play about life of Chandragupta Maurya",
  //   ],
  // },

  // {
  //   num: 70,
  //   question: "Ibn Batuta came from which of the following places?",
  //   answer: "b) Morocco",
  //   options: [
  //     "a) Spain",
  //     "b) Morocco",
  //     "c) Portugal",
  //     "d) None of the above",
  //   ],
  // },

  // {
  //   num: 71,
  //   question: "Which of the following gas was during Bhopal Gas Tragedy?",
  //   answer: "a) Methyle isocynate",
  //   options: [
  //     "a) Methyle isocynate",
  //     "b) Carbon Monoxide",
  //     "c) Ethyle Isocynate",
  //     "d) Ethyle Ethyle",
  //   ],
  // },

  // {
  //   num: 72,
  //   question: "Where is the Forest Research Institute located?",
  //   answer: "c) Dehradun",
  //   options: [
  //     "a) Raipur",
  //     "b) Jodhpur",
  //     "c) Dehradun",
  //     "d) Chennai",
  //   ],
  // },

  // {
  //   num: 73,
  //   question: "‘Hallmarking of Gold jewellery’ is associated with which Ministry?",
  //   answer: "b) Ministry of Consumer Affairs, Food and Public Distribution",
  //   options: [
  //     "a) Ministry of Mines",
  //     "b) Ministry of Consumer Affairs, Food and Public Distribution",
  //     "c) Ministry of Commerce and Industry",
  //     "d) Ministry of Home Affairs",
  //   ],
  // },

  // {
  //   num: 74,
  //   question: "Ministry of Culture launched an initiative ‘India ki Udaan’ along with which company?",
  //   answer: "b) Google",
  //   options: [
  //     "a) Microsoft",
  //     "b) Google",
  //     "c) Meta",
  //     "d) Amazon",
  //   ],
  // },

  // {
  //   num: 75,
  //   question: "The International Mobile Equipment Identity (IMEI) number comprises of how many digits?",
  //   answer: "c) 15",
  //   options: [
  //     "a) 12",
  //     "b) 14",
  //     "c) 15",
  //     "d) 17",
  //   ],
  // },

  // {
  //   num: 76,
  //   question: "Madai festival is a tribal festival of which among the following states?",
  //   answer: "c) Chattisgarh",
  //   options: [
  //     "a) Assam",
  //     "b) Bihar",
  //     "c) Chattisgarh",
  //     "d) Manipur",
  //   ],
  // },

  // {
  //   num: 77,
  //   question: "Dhenka is a well-known musical instrument of which one of the following Indian state?",
  //   answer: "c) Odisha",
  //   options: [
  //     "a) Goa",
  //     "b) Kerala",
  //     "c) Odisha",
  //     "d) Maharashtra",
  //   ],
  // },

  // {
  //   num: 78,
  //   question: "The idols of Khajuraho temple were made by which dynasty?",
  //   answer: "b) Chandel dynasty",
  //   options: [
  //     "a) Hoysala dynasty",
  //     "b) Chandel dynasty",
  //     "c) Ganga dynasty",
  //     "d) None of these",
  //   ],
  // },

  // {
  //   num: 79,
  //   question: "What are the characteristics of Ashoka’s Pillar?",
  //   answer: "b) The pillars are monolithic",
  //   options: [
  //     "a) The Pillars have the same width from bottom to top",
  //     "b) The pillars are monolithic",
  //     "c) The pillars are fixed on the post",
  //     "d) The Pillars were erected in large buildings",
  //   ],
  // },

  // {
  //   num: 80,
  //   question: "Which temple is an example of rock-cut architecture?",
  //   answer: "d) Kailasa Temple, Ellora",
  //   options: [
  //     "a) Jagannatha Temple, Puri",
  //     "b) Rajarajeshwara Temple, Thanjavur",
  //     "c) Shore Temple, Mamallapuram",
  //     "d) Kailasa Temple, Ellora",
  //   ],
  // },

  // {
  //   num: 81,
  //   question: "In which period of Delhi Sultanate only tombs were built?",
  //   answer: "a) Lodi Dynasty",
  //   options: [
  //     "a) Lodi Dynasty",
  //     "b) Tughlaq Dynasty",
  //     "c) Khilji Dynasty",
  //     "d) Sayyaid Dynasty",
  //   ],
  // },

  // {
  //   num: 82,
  //   question: "Vitamin A, D & C are respectively called as ____________ ?",
  //   answer: "b) Retinol, Calciferol, Ascorbic Acid",
  //   options: [
  //     "a) Retinol, Ascorbic Acid, Calcifero",
  //     "b) Retinol, Calciferol, Ascorbic Acid",
  //     "c) Pyridoxal. Calciferol. Ascorbic Acid",
  //     "d) Ascorbic Acid, Pyridoxal. Calciferol",
  //   ],
  // },

  // {
  //   num: 83,
  //   question: "‘Ophiology’ is the study of which of the following animals",
  //   answer: "b) Snakes",
  //   options: [
  //     "a) Moths and Butterflies",
  //     "b) Snakes",
  //     "c) Whales",
  //     "d) Ants",
  //   ],
  // },

  // {
  //   num: 84,
  //   question: "Who is the father of Genetics?",
  //   answer: "a) Gregor Mendel",
  //   options: [
  //     "a) Gregor Mendel",
  //     "b) Thomas Hunt Morgan",
  //     "c) Francis Galton",
  //     "d) Krateuas",
  //   ],
  // },

  // {
  //   num: 85,
  //   question: "Which muscles are found on the front of your thighs?",
  //   answer: "a) Quadriceps",
  //   options: [
  //     "a) Quadriceps",
  //     "b) Biceps",
  //     "c) Pectorals",
  //     "d) Deltoids",
  //   ],
  // },

  // {
  //   num: 86,
  //   question: "How many chambers are there in the human heart?",
  //   answer: "c) Four",
  //   options: [
  //     "a) Two",
  //     "b) Three",
  //     "c) Four",
  //     "d) None of these",
  //   ],
  // },

  // {
  //   num: 87,
  //   question: "Name the Glands associated with the Human Digestive System?",
  //   answer: "d) Salivary Glands, Liver & Pancreas",
  //   options: [
  //     "a) Salivary Glands and Pancreas",
  //     "b) Salivary Glands and Liver",
  //     "c) Liver and Pancreas",
  //     "d) Salivary Glands, Liver & Pancreas",
  //   ],
  // },

  // {
  //   num: 88,
  //   question: "Which of the following is an example of starch crops biomass feedstocks?",
  //   answer: "a) Sugar cane",
  //   options: [
  //     "a) Sugar cane",
  //     "b) Wheat straw",
  //     "c) Corn stover",
  //     "d) Orchard prunings",
  //   ],
  // },

  // {
  //   num: 89,
  //   question: "Night blindness results from the deficiency of-",
  //   answer: "b) Vitamin-A",
  //   options: [
  //     "a) Vitamin-E",
  //     "b) Vitamin-A",
  //     "c) Vitamin-B2",
  //     "d) Glucose",
  //   ],
  // },

  // {
  //   num: 90,
  //   question: "The element involved with blood clotting is-",
  //   answer: "b) Calcium",
  //   options: [
  //     "a) Iron",
  //     "b) Calcium",
  //     "c) Phosphorus",
  //     "d) Sodium",
  //   ],
  // },

  // {
  //   num: 91,
  //   question: "A new born breathes nearly-",
  //   answer: "b) 30 to 60 times a minute",
  //   options: [
  //     "a) 15 to 25 times a minute",
  //     "b) 30 to 60 times a minute",
  //     "c) 60 to 75 times a minute",
  //     "d) 0 to 90 times a minute",
  //   ],
  // },

  // {
  //   num: 92,
  //   question: "Which of the following is the highest source of protein?",
  //   answer: "a) Soybean",
  //   options: [
  //     "a) Soybean",
  //     "b) Grams",
  //     "c) Sunflower",
  //     "d) Wheat",
  //   ],
  // },

  // {
  //   num: 93,
  //   question: "Gustation refers to the sense of which of the following?",
  //   answer: "d) Taste",
  //   options: [
  //     "a) Smell",
  //     "b) Hearing",
  //     "c) Tactiler",
  //     "d) Taste",
  //   ],
  // },

  // {
  //   num: 94,
  //   question: "The bricks in a building are similar to ___ in the living organisms-",
  //   answer: "a) Cells",
  //   options: [
  //     "a) Cells",
  //     "b) Tissues",
  //     "c) Organs",
  //     "d) Glands",
  //   ],
  // },

  // {
  //   num: 95,
  //   question: "Which among the following temperature scale is based upon absolute zero?",
  //   answer: "c) Kelvin",
  //   options: [
  //     "a) Celsius",
  //     "b) Fahrenheit",
  //     "c) Kelvin",
  //     "d) Rankine",
  //   ],
  // },

  // {
  //   num: 96,
  //   question: "Which of the following viruses is not linked to human cancer?",
  //   answer: "c) Varicella-Zoster virus",
  //   options: [
  //     "a) Hepatitis C virus",
  //     "b) Hepatitis B virus",
  //     "c) Varicella-Zoster virus",
  //     "d) Herpes simplex virus type 2",
  //   ],
  // },

  // {
  //   num: 97,
  //   question: "Deficiency of ____ causes rickets disease-",
  //   answer: "d) Vitamin D",
  //   options: [
  //     "a) Vitamin A",
  //     "b) Vitamin B",
  //     "c) Vitamin C",
  //     "d) Vitamin D",
  //   ],
  // },

  // {
  //   num: 98,
  //   question: "Which of the following is also known as the Biochemical Laboratory of the Human Body?",
  //   answer: "d) Liver",
  //   options: [
  //     "a) Small Intestine",
  //     "b) Pancreas",
  //     "c) Brain",
  //     "d) Liver",
  //   ],
  // },

  // {
  //   num: 99,
  //   question: "Mission Indradhanush Campaign in India is associated with-",
  //   answer: "d) Vaccination of children",
  //   options: [
  //     "a) Nutrition to Pregnant Women",
  //     "b) Awareness of Diabetes",
  //     "c) Eradication of blindness",
  //     "d) Vaccination of children",
  //   ],
  // },

  // {
  //   num: 100,
  //   question: "A battery converts which energy to electrical energy?",
  //   answer: "b) Chemical",
  //   options: [
  //     "a) Mechanical",
  //     "b) Chemical",
  //     "c) Light",
  //     "d) Heat",
  //   ],
  // },


];
