const Constants = {
  env: {
    MAX_CONNECTION_TIMEOUT: 20000, // twenty second
    APP_DOMAIN: process.env?.REACT_APP_API_BASE,
    FIREBASE_API_KEY: process.env?.REACT_APP_FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env?.REACT_APP_FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env?.REACT_APP_FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env?.REACT_APP_FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID:
      process.env?.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env?.REACT_APP_FIREBASE_APP_ID,
    isDevelopment: process.env?.NODE_ENV === "development",
  },
  keys: {
    session: "_msuinfo",
    resetToken: "_msrst",
  },
  apiEndpoint: {
    auth: {
      login: "/auth/login",
      forgotPassword: "/auth/forgetpassword",
      resetPassword: "/auth/resetpassword",
    },
    user: {
      getAllUser: "/user",
      register: "/user/register",
      otpVerified: "/user/verified",
    },
    photo: {
      uploadProfilePic: "/pic",
    },
    admin: {
      dashboard: "/a-control/dashboard",
    },
    franchise: {
      dashboard: "/a-control/dashboard",
    },
  },
  roles: {
    Admin: "admin",
    UnverifiedUser: "Unverified",
    NoProfileUser: "NoProfileUser",
    NormalUser: "User",
    All: "all",
  },
  //   patterns: {
  //     password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //     url: /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/,
  //   },
  errorResponses: {
    profileForError: "Whom this profile is for?",
    genderError: "Please specify gender.",
    nameError: "Please provide full name.",
    noMobileNumberError: "Please provide mobile number.",
    mobileNumberLengthError: "Number must be 10 digit long.",
  },
  religions: [
    "Hindu",
    "Muslim - Shia",
    "Muslim - Sunni",
    "Muslim - Others",
    "Christian",
    "Sikh",
    "Jain - Digambar",
    "Jain - Shwetambar",
    "Jain - Others",
    "Parsi",
    "Buddhist",
    "Inter-Religion",
  ],
  motherTongues: [
    "Bengali",
    "Gujarati",
    "Hindi",
    "Kannada",
    "Malayalam",
    "Marathi",
    "Marwari",
    "Oriya",
    "Punjabi",
    "Sindhi",
    "Tamil",
    "Telugu",
    "Urdu",
    "Arunachali",
    "Assamese",
    "Awadhi",
    "Bhojpuri",
    "Brij",
    "Bihari",
    "Badaga",
    "Chatisgarhi",
    "Dogri",
    "English",
    "French",
    "Garhwali",
    "Garo",
    "Haryanvi",
    "Himachali/Pahari",
    "Kanauji",
    "Kashmiri",
    "Khandesi",
    "Khasi",
    "Konkani",
    "Koshali",
    "Kumaoni",
    "Kutchi",
    "Lepcha",
    "Ladacki",
    "Magahi",
    "Maithili",
    "Manipuri",
    "Miji",
    "Mizo",
    "Monpa",
    "Nicobarese",
    "Nepali",
    "Rajasthani",
    "Sanskrit",
    "Santhali",
    "Sourashtra",
    "Tripuri",
    "Tulu",
    "Angika",
    "Bagri Rajasthani",
    "Dhundhari/Jaipuri",
    "Gujari/Gojari",
    "Harauti",
    "Lambadi",
    "Malvi",
    "Mewari",
    "Mewati/Ahirwati",
    "Nimadi",
    "Shekhawati",
    "Wagdi",
  ],
  caste: [
    "96 Kuli Maratha",
    "Agarwal",
    "Agrahari",
    "Aheriya",
    "Ahirwar",
    "Anjana (Chowdary) Patel",
    "Arakh / Arakvanshiya",
    "Aramari / Gabit",
    "Arora",
    "Asathi",
    "Ayodhyavasi",
    "Bairagi",
    "Bairwa",
    "Balai",
    "Baniya",
    "Baori",
    "Bargi",
    "Bari",
    "Barnwal",
    "Bavaria",
    "Bazigar",
    "Beldar",
    "Bhand",
    "Bhar",
    "Bharbhunja",
    "Bhatt Brahmin",
    "Bhil",
    "Bhoyar",
    "Bhumihar Brahmin",
    "Bind",
    "Bishnoi/Vishnoi",
    "Bondili",
    "Brahmin Jijhotia",
    "Brahmin Malviya",
    "Brahmin - Anaviln Desai",
    "Brahmin - Bagra",
    "Brahmin - Baidhiki/Vaidhiki",
    "Brahmin - Baragaon",
    "Brahmin - Bardai",
    "Brahmin - Bhargav",
    "Brahmin - Bhatt",
    "Brahmin - Bhojak",
    "Brahmin - Bhumihar",
    "Brahmin - Chaubisa",
    "Brahmin - Dakaut",
    "Brahmin - Dhiman",
    "Brahmin - Garhwali",
    "Brahmin - Gaur",
    "Brahmin - Goswami/Gosavi",
    "Brahmin - Gujar Gaur",
    "Brahmin - Jangid",
    "Brahmin - Kanyakubj",
    "Brahmin - Khadayata",
    "Brahmin - Khandelwal",
    "Brahmin - Khedaval",
    "Brahmin - Kumoani",
    "Brahmin - Maithil",
    "Brahmin - Mevada",
    "Brahmin - Narmadiya",
    "Brahmin - Others",
    "Brahmin - Pandit",
    "Brahmin - Pareek",
    "Brahmin - Rajgor",
    "Brahmin - Rarhi/Radhi",
    "Brahmin - Sakaldwipi",
    "Brahmin - Sanadya",
    "Brahmin - Saraswat",
    "Brahmin - Sarua",
    "Brahmin - Saryuparin",
    "Brahmin - Shri Gaud",
    "Brahmin - Tapodhan",
    "Brahmin - Tyagi",
    "Brahmin - Valam",
    "Brahmin - Zalora",
    "Brajastha Maithil",
    "Chandravanshi Kahar",
    "Charan",
    "Chaturth",
    "Chaudary",
    "Chaurasia",
    "Chero",
    "Chhetri",
    "Choudhary",
    "Deshmukh",
    "Devang Koshthi",
    "Dhakad",
    "Dhanak",
    "Dhanka",
    "Dhanuk",
    "Dhiman Brahmin",
    "Dosar / Dusra",
    "Dusadh (Paswan)",
    "Gahoi",
    "Ganda",
    "Gandha Vanika",
    "Gandharb",
    "Garhwali",
    "Garhwali Brahmin",
    "Garo / Garoda",
    "Gaur Brahmin",
    "Gavaria",
    "Goan",
    "Gond",
    "Goswami/Gosavi Brahmin",
    "Gujar Gaur",
    "Gujjar",
    "Gulahre",
    "Gupta",
    "Gurav",
    "Gurjar",
    "Intercaste",
    "Jaiswal",
    "Jangid Brahmin",
    "Jangra - Brahmin",
    "Jat",
    "Jatav",
    "Jhadav",
    "Jijhotia Brahmin",
    "Jingar",
    "Jogi (Nath)",
    "Julaha",
    "Kadava Patel",
    "Kahar",
    "Kalal",
    "Kalar",
    "Kalbelia",
    "Kalwar",
    "Kamboj",
    "Kanakkan Padanna",
    "Kandara",
    "Kandera",
    "Kanjar",
    "Kansyakaar",
    "Kanyakubj Brahmin",
    "Kanykubj Bania",
    "Kasaundhan",
    "Kasera",
    "Kashyap",
    "Katiya",
    "Kayastha",
    "Keshri (Kesarwani)",
    "Khandelwal",
    "Kharwar",
    "Khatik",
    "Khatri",
    "Kirar",
    "Koiri",
    "Kokna",
    "Komti /Arya Vaishya",
    "Kori",
    "Kori/Koli",
    "Kshatriya",
    "Kshatriya Raju",
    "Kumaoni Brahmin",
    "Kumaoni Rajput",
    "Kumhar",
    "Kunbi Lonari",
    "Kunbi Maratha",
    "Kunbi Tirale",
    "Kurmi/Kurmi Kshatriya",
    "Kuruva",
    "Kushwaha (Koiri)",
    "Lad",
    "Leva patel",
    "Lingayath",
    "Lodhi Rajput",
    "Loniya",
    "Madhesiya/Kanu/Halwai",
    "Madivala / Dhobi",
    "Mahajan",
    "Mahar",
    "Maheshwari",
    "Maheshwari / Meshri",
    "Mahor",
    "Mahuri",
    "Mair Rajput Swarnkar",
    "Maithil Brahmin",
    "Mali",
    "Mallah",
    "Malviya Brahmin",
    "Malwani",
    "Mannan / Velan / Vannan",
    "Maratha",
    "Maratha Kshatriya",
    "Mathur",
    "Mathur Vaishya",
    "Maurya / Shakya",
    "Meena",
    "Meghwal",
    "Mehar",
    "Mehra",
    "Modi",
    "Musahar",
    "Nai",
    "Narmadiya Brahmin",
    "Nat",
    "Nath",
    "Nema",
    "Oswal",
    "Padmavati Porwal",
    "Pal",
    "Pallan / Devandra Kula Vellalan",
    "Panan",
    "Pandit Brahmin",
    "Paravan / Bharatar",
    "Parit",
    "Pasi",
    "Paswan",
    "Paswan / Dusadh",
    "Patel",
    "Patil",
    "Patwa",
    "Poddar",
    "Porwal / Porwar",
    "Poundra",
    "Pulaya / Cheruman",
    "Rabari",
    "Raigar",
    "Rajbhar",
    "Rajpurohit",
    "Rajput",
    "Rastogi",
    "Rathi",
    "Rauniar",
    "Ravana Rajput",
    "Rawat",
    "Rohit / Chamar",
    "Ror",
    "SC",
    "ST",
    "Sahariya",
    "Sahu",
    "Saini",
    "Sakaldwipi Brahmin",
    "Salvi",
    "Samagar",
    "Sambava",
    "Sanadya Brahmin",
    "Sansi",
    "Saraswat Brahmin",
    "Sargara",
    "Saryuparin Brahmin",
    "Satnami",
    "Shah",
    "Shaw / Sahu/Teli",
    "Shilpkar",
    "Sirvi / Janwa",
    "Sonar",
    "Sondhia",
    "Sonkar",
    "Teli",
    "Thakur",
    "Thandan",
    "Tiyar/Tiar",
    "Tyagi Brahmin",
    "Ummar / Umre / Bagaria",
    "Vaish",
    "Vaishnav",
    "Vaishnav Kapol",
    "Vaishnav Khadyata",
    "Vaishnav Lad",
    "Vaishnav Modh",
    "Vaishnav Porvad",
    "Vaishnav Shrimali",
    "Vaishnav Sorathaiya",
    "Vaishnav Vania",
    "Vaishya",
    "Vani",
    "Vani / Vaishya",
    "Varshney",
    "Varshney (Barahseni)",
    "Vijayvargia",
    "Vishwakarma",
    "Yadav",
  ],
  manglik: ["No", "Yes", "Don't know"],
  maritalStatus: ["Never married", "Widowed", "Divorced", "Awaiting divorce"],
  noOfChildren: ["None", "1", "2", "3", "4 or more"],
  familyStatus: ["Middle class", "Upper middle class", "Rich", "Affluent"],
  familyType: ["Joint", "Nuclear"],
  familyValues: ["Orthodox", "Traditional", "Moderate", "Liberal"],
  disability: ["No", "Yes"],
  height: [
    "4 ft",
    "4 ft 1 in",
    "4 ft 2 in",
    "4 ft 3 in",
    "4 ft 4 in",
    "4 ft 5 in",
    "4 ft 6 in",
    "4 ft 7 in",
    "4 ft 8 in",
    "4 ft 9 in",
    "4 ft 10 in",
    "4 ft 11 in",
    "5 ft",
    "5 ft 1 in",
    "5 ft 2 in",
    "5 ft 3 in",
    "5 ft 4 in",
    "5 ft 5 in",
    "5 ft 6 in",
    "5 ft 7 in",
    "5 ft 8 in",
    "5 ft 9 in",
    "5 ft 10 in",
    "5 ft 11 in",
    "6 ft",
    "6 ft 1 in",
    "6 ft 2 in",
    "6 ft 3 in",
    "6 ft 4 in",
    "6 ft 5 in",
    "6 ft 6 in",
    "6 ft 7 in",
    "6 ft 8 in",
    "6 ft 9 in",
    "6 ft 10 in",
    "6 ft 11 in",
    "7 ft",
  ],
  education: [
    "No Degree",
    "School Level",
    "+2",
    "Foundation",
    "Diploma",
    "Bachelor",
    "Masters",
    "Doctorate",
  ],
  income: [
    "0 - 1 Lakh",
    "1 - 2 Lakhs",
    "2 - 3 Lakhs",
    "3 - 4 Lakhs",
    "4 - 5 Lakhs",
    "5 - 6 Lakhs",
    "6 - 7 Lakhs",
    "7 - 8 Lakhs",
    "8 - 9 Lakhs",
    "9 - 10 Lakhs",
    "10 - 12 Lakhs",
    "12 - 14 Lakhs",
    "14 - 16 Lakhs",
    "16 - 18 Lakhs",
    "18 - 20 Lakhs",
    "20 - 25 Lakhs",
    "25 - 30 Lakhs",
    "30 - 35 Lakhs",
    "35 - 40 Lakhs",
    "40 - 45 Lakhs",
    "45 - 50 Lakhs",
    "50 - 60 Lakhs",
    "60 - 70 Lakhs",
    "70 - 80 Lakhs",
    "80 - 90 Lakhs",
    "90 - 1 Crore",
    "1 Crore & Above",
  ],
  countryCode: [
    {
      code: "np",
      value: "+977",
    },
    {
      code: "in",
      value: "+91",
    },
    {
      code: "au",
      value: "+61",
    },
  ],
  hobbies: ["Singing", "Dancing", "Acting", "Painting"],
  noOfBrothers: ["None", "1", "2", "3", "4 or more"],
  noOfMarriedBrothers: ["None", "1", "2", "3", "4 or more"],
  noOfSisters: ["None", "1", "2", "3", "4 or more"],
  noOfMarriedSisters: ["None", "1", "2", "3", "4 or more"],
  bodyType: ["Slim", "Average", "Athletic", "Heavy"],
  weight: [
    "41kg",
    "42kg",
    "43kg",
    "44kg",
    "45kg",
    "46kg",
    "47kg",
    "48kg",
    "49kg",
    "50kg",
    "51kg",
    "52kg",
    "53kg",
    "54kg",
    "55kg",
    "56kg",
    "57kg",
    "58kg",
    "59kg",
    "60kg",
    "61kg",
    "62kg",
    "63kg",
    "64kg",
    "65kg",
    "66kg",
    "67kg",
    "68kg",
    "69kg",
    "70kg",
    "71kg",
    "72kg",
    "73kg",
    "74kg",
    "75kg",
    "76kg",
    "77kg",
    "78kg",
    "79kg",
    "80kg",
    "81kg",
    "82kg",
    "83kg",
    "84kg",
    "85kg",
    "86kg",
    "87kg",
    "88kg",
    "89kg",
    "90kg",
    "91kg",
    "92kg",
    "93kg",
    "94kg",
    "95kg",
    "96kg",
    "97kg",
    "98kg",
    "99kg",
  ],
  eatingHabit: ["Vegeterian", "Non-Vegeterian", "Eggetarian"],
  drinkingHabit: ["No", "Drink socially", "Yes"],
  smokingHabit: ["No", "Occasionally", "Yes"],
  star: [
    "Aswini",
    "Bharani",
    "Kruthiga",
    "Rohini",
    "Mrigasira",
    "Arudra",
    "Punarvasu",
    "Pushya",
    "Asilesha",
    "Magha",
    "Poorvaphalguni",
    "Uthiraphalguni",
    "Hastha",
    "Chitra",
    "Swathi",
    "Visaka",
    "Anuradha",
    "Jyeshta",
    "Mula",
    "Poorvashada",
    "Uthrashada",
    "Sravan",
    "Dhanishta",
    "Shatataraka",
    "Poorvabhadra",
    "Uthirabhadra",
    "Revathi",
  ],
  raasi: [
    "मेष",
    "वृष",
    "मिथुन",
    "कर्कट ",
    "सिंह",
    "कन्या",
    "तुला",
    "वृश्चिक",
    "धनु",
    "मकर",
    "कुम्भ",
    "मीन",
  ],
  hrs: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  placeOfBirth: ["Kathmandu", "Bhaktapur", "Lalitpur"],
  fatherStatus: [
    "Employed",
    "Business Man",
    "Professional",
    "Retired",
    "Not Employed",
    "Passed Away",
  ],
  motherStatus: [
    "Homemaker",
    "Employed",
    "Business Woman",
    "Professional",
    "Retired",
    "Passed away",
  ],
  familyLocation: ["Same as my location", "Different Location"],
  provinces: [
    "Province No. 1",
    "Madhesh Province",
    "Bagmati Province",
    "Gandaki Province",
    "Lumbini Province",
    "Karnali Province",
    "Sudurpashchim Province",
  ],

  "Madhesh Province": {
    Bara: [
      "Adarshkotwal",
      "Baragadhi",
      "Bishrampur",
      "Devtal",
      "Jitpur Simara",
      "Kalaiya",
      "Karaiyamai",
      "Kolhabi",
      "Mahagadhimai",
      "Nijgadh",
      "Pacharauta",
      "Parwanipur",
      "Pheta",
      "Prasauni",
      "Simraungadh",
      "Suwarna",
    ],
    Dhanusha: [
      "Aaurahi",
      "Bateshwor",
      "Bideha",
      "Chhireshwornath",
      "Dhanauji",
      "Dhanusadham",
      "Ganeshman Charnath",
      "Hansapur",
      "Janaknandani",
      "Janakpur",
      "Kamala",
      "Lakshminiya",
      "Mithila",
      "Mithila Bihari",
      "Mukhiyapatti Musarmiya",
      "Nagarain",
      "Sabaila",
      "Sahidnagar",
    ],
    Mahottari: [
      "Aurahi",
      "Balwa",
      "Bardibas",
      "Bhangaha",
      "Ekdanra",
      "Gaushala",
      "Jaleswor",
      "Loharpatti",
      "Mahottari",
      "Manra Siswa",
      "Matihani",
      "Pipra",
      "Ramgopalpur",
      "Samsi",
      "Sonama",
    ],
    Parsa: [
      "Bahudaramai",
      "Bindabasini",
      "Birgunj",
      "Chhipaharmai",
      "Dhobini",
      "Jagarnathpur",
      "Jirabhawani",
      "Kalikamai",
      "Pakahamainpur",
      "Parsagadhi",
      "Paterwasugauli",
      "Pokhariya",
      "SakhuwaPrasauni",
      "Thori",
    ],
    Rautahat: [
      "Baudhimai",
      "Brindaban",
      "Chandrapur",
      "Dewahhi Gonahi",
      "Durga Bhagwati",
      "Gadhimai",
      "Garuda",
      "Gaur",
      "Gujara",
      "Ishanath",
      "Katahariya",
      "Madhav Narayan",
      "Maulapur",
      "Paroha",
      "Phatuwa Bijayapur",
      "Rajdevi",
      "Rajpur",
      "Yemunamai",
    ],
    Saptari: [
      "Agnisair Krishna Savaran",
      "Balan Bihul",
      "Belhi Chapena",
      "Bishnupur",
      "Bode Barsain",
      "Chhinnamasta",
      "Dakneshwori",
      "Hanumannagar Kankalini",
      "Kanchanrup",
      "Khadak",
      "Mahadeva",
      "Rajbiraj",
      "Rupani",
      "Saptakoshi",
      "Shambhunath",
      "Surunga",
      "Tilathi Koiladi",
      "Tirahut",
    ],
    Sarlahi: [
      "Bagmati",
      "Balara",
      "Barahathawa",
      "Basbariya",
      "Bishnu",
      "Bramhapuri",
      "Chakraghatta",
      "Chandranagar",
      "Dhankaul",
      "Godaita",
      "Haripur",
      "Haripurwa",
      "Hariwan",
      "Ishworpur",
      "Kabilasi",
      "Kaudena",
      "Lalbandi",
      "Malangawa",
      "Parsa",
      "Ramnagar",
    ],
    Siraha: [
      "Arnama",
      "Aurahi",
      "Bariyarpatti",
      "Bhagawanpur",
      "Bishnupur",
      "Dhangadhimai",
      "Golbazar",
      "Kalyanpur",
      "Karjanha",
      "Lahan",
      "Laxmipur Patari",
      "Mirchaiya",
      "Naraha",
      "Nawarajpur",
      "Sakhuwanankarkatti",
      "Siraha",
      "Sukhipur",
    ],
  },

  "Bagmati Province": {
    Bhaktapur: [
      "Bhaktapur",
      "Changunarayan",
      "Madhyapur Thimi",
      "Suryabinayak",
    ],
    Chitwan: [
      "Bharatpur",
      "Ichchhyakamana",
      "Kalika",
      "Khairahani",
      "Madi",
      "Rapti",
      "Ratnanagar",
    ],
    Dhading: [
      "Benighat Rorang",
      "Dhunibesi",
      "Gajuri",
      "Galchi",
      "Gangajamuna",
      "Jwalamukhi",
      "Khaniyabash",
      "Netrawati",
      "Nilakantha",
      "Rubi Valley",
      "Siddhalek",
      "Thakre",
      "Tripura Sundari",
    ],
    Dolakha: [
      "Baiteshwor",
      "Bhimeshwor",
      "Bigu",
      "Gaurishankar",
      "Jiri",
      "Kalinchok",
      "Melung",
      "Sailung",
      "Tamakoshi",
    ],
    Kathmandu: [
      "Budhanilakantha",
      "Chandragiri",
      "Dakshinkali",
      "Gokarneshwor",
      "Kageshwori Manahara",
      "Kathmandu",
      "Kirtipur",
      "Nagarjun",
      "Shankharapur",
      "Tarkeshwor",
      "Tokha",
    ],
    Kavrepalanchok: [
      "Banepa",
      "Bethanchowk",
      "Bhumlu",
      "Chaurideurali",
      "Dhulikhel",
      "Khanikhola",
      "Mahabharat",
      "Mandandeupar",
      "Namobuddha",
      "Panauti",
      "Panchkhal",
      "Roshi",
      "Temal",
    ],
    Lalitpur: [
      "Bagmati",
      "Godawari",
      "Konjyosom",
      "Lalitpur",
      "Mahalaxmi",
      "Mahankal",
    ],
    Makawanpur: [
      "Bagmati",
      "Bakaiya",
      "Bhimphedi",
      "Hetauda",
      "Indrasarowar",
      "Kailash",
      "Makawanpurgadhi",
      "Manahari",
      "Raksirang",
      "Thaha",
    ],
    Nuwakot: [
      "Belkotgadhi",
      "Bidur",
      "Dupcheshwar",
      "Kakani",
      "Kispang",
      "Likhu",
      "Meghang",
      "Panchakanya",
      "Shivapuri",
      "Suryagadhi",
      "Tadi",
      "Tarkeshwar",
    ],
    Ramechhap: [
      "Doramba",
      "Gokulganga",
      "Khadadevi",
      "Likhu",
      "Manthali",
      "Ramechhap",
      "Sunapati",
      "Umakunda",
    ],
    Rasuwa: ["Gosaikunda", "Kalika", "Naukunda", "Parbati Kunda", "Uttargaya"],
    Sindhuli: [
      "Dudhouli",
      "Ghanglekh",
      "Golanjor",
      "Hariharpurgadhi",
      "Kamalamai",
      "Marin",
      "Phikkal",
      "Sunkoshi",
      "Tinpatan",
    ],
    Sindhupalchowk: [
      "Balefi",
      "Bahrabise",
      "Bhotekoshi",
      "Chautara SangachokGadhi",
      "Helambu",
      "Indrawati",
      "Jugal",
      "Lisangkhu Pakhar",
      "Melamchi",
      "Panchpokhari Thangpal",
      "Sunkoshi",
      "Tripurasundari",
    ],
  },

  "Sudurpashchim Province": {
    Accham: [
      "Bannigadhi Jayagadh",
      "Chaurpati",
      "Dhakari",
      "Kamalbazar",
      "Mangalsen",
      "Mellekh",
      "Panchadewal Binayak",
      "Ramaroshan",
      "Sanphebagar",
      "Turmakhad",
    ],
    Baitadi: [
      "Dasharathchanda",
      "Dilasaini",
      "Dogadakedar",
      "Melauli",
      "Pancheshwar",
      "Patan",
      "Purchaudi",
      "Shivanath",
      "Sigas",
      "Surnaya",
    ],
    Bajhang: [
      "Bithadchir",
      "Bungal",
      "Chabispathivera",
      "Durgathali",
      "JayaPrithivi",
      "Kanda",
      "Kedarseu",
      "Khaptadchhanna",
      "Masta",
      "Surma",
      "Talkot",
      "Thalara",
    ],
    Bajura: [
      "Badimalika",
      "Budhiganga",
      "Budhinanda",
      "Chhededaha",
      "Gaumal",
      "Himali",
      "Pandav Gupha",
      "Swami Kartik",
      "Tribeni",
    ],
    Dadeldhura: [
      "Ajaymeru",
      "Alital",
      "Amargadhi",
      "Bhageshwar",
      "Ganayapdhura",
      "Nawadurga",
      "Parashuram",
    ],
    Darchula: [
      "Apihimal",
      "Byas",
      "Dunhu",
      "Lekam",
      "Mahakali",
      "Malikaarjun",
      "Marma",
      "Naugad",
      "Shailyashikhar",
    ],
    Doti: [
      "Adharsha",
      "Badikedar",
      "Bogtan",
      "Dipayal Silgadi",
      "Jorayal",
      "K I Singh",
      "Purbichauki",
      "Sayal",
      "Shikhar",
    ],
    Kailali: [
      "Bardagoriya",
      "Bhajani",
      "Chure",
      "Dhangadhi",
      "Gauriganga",
      "Ghodaghodi",
      "Godawari",
      "Janaki",
      "Joshipur",
      "Kailari",
      "Lamkichuha",
      "Mohanyal",
      "Tikapur",
    ],
    Kanchanpur: [
      "Bedkot",
      "Belauri",
      "Beldandi",
      "Bhimdatta",
      "Krishnapur",
      "Laljhadi",
      "Mahakali",
      "Punarbas",
      "Shuklaphanta",
    ],
  },
};

export default Constants;
