const Constants = {
  env: {
    MAX_CONNECTION_TIMEOUT: 20000, // twenty second
    APP_DOMAIN: process.env?.REACT_APP_API_BASE,
    isDevelopment: process.env?.NODE_ENV === "development",
  },
  keys: {
    session: "_t",
  },
  apiEndpoint: {
    login: "/auth/login",
    register: "/user/register",
    // auth: {
    //   verifyOTP: "/customers/verify-code",
    // },
    forgotPassword: "/auth/forgetpassword",
    admin: {
      dashboard: "/a-control/dashboard",
    },
    franchise: {
      dashboard: "/a-control/dashboard",
    },
    user: {
      allUser: "/user",
    },
  },
  roles: {
    Admin: "admin",
    NormalUser: "User",
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
  session: {
    userInfo: {
      userId: "b0c89310-196c-4b74-86d2-9ce679888c20",
      email: "ab9@yopmail.com",
      role: "customer",
      createdAt: "2022-01-29T17:16:08.000Z",
      updatedAt: "2022-01-29T17:16:08.000Z",
    },
    profile: {
      customerId: "0c2ba7ec-46a9-4755-b0d1-f3983b57afaa",
      name: "Aashish Sunuwar",
      mobileNumber: null,
      phoneNumber: "9823413241",
      userId: "b0c89310-196c-4b74-86d2-9ce679888c20",
      verified: true,
      createdAt: "2022-01-29T17:16:08.000Z",
      updatedAt: "2022-01-29T17:16:26.000Z",
    },
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXJyZW50VXNlciI6eyJ1c2VySWQiOiJiMGM4OTMxMC0xOTZjLTRiNzQtODZkMi05Y2U2Nzk4ODhjMjAiLCJlbWFpbCI6ImFiOUB5b3BtYWlsLmNvbSIsInJvbGUiOiJjdXN0b21lciIsImNyZWF0ZWRBdCI6IjIwMjItMDEtMjlUMTc6MTY6MDguMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjItMDEtMjlUMTc6MTY6MDguMDAwWiJ9LCJpYXQiOjE2NDM0NzY2MzIsImV4cCI6MTY0MzUxOTgzMn0.6ELhcjVauTNWa1DrpOb9sfdH_NU_c1tSHFE_vQ_rV_I",
  },
};

export default Constants;
