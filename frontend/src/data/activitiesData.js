// const activitiesData = [
//   {
//     id: 1,
//     title: "उत्तर प्रदेश शासन मंत्री दानिश आजाद अंसारी को सम्मानित किया गया",
//     image: "https://images.unsplash.com/photo-1581091012184-5c3c1c1dcd2d",
//   },
//   {
//     id: 2,
//     title: "नेहा प्रकाश जिलाधिकारी औरैया को सम्मानित किया गया",
//     image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
//   },
//   {
//     id: 3,
//     title: "पत्रकारों के साथ बैठक एवं संगठन विस्तार पर चर्चा",
//     image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
//   },
//   {
//     id: 4,
//     title: "समाज के प्रमुख व्यक्तियों को सम्मानित किया गया",
//     image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
//   },
//   {
//     id: 5,
//     title: "पत्रकार सुरक्षा और अधिकारों पर विशेष बैठक आयोजित",
//     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
//   },
// ];

// export default activitiesData;

// src/data/activitiesData.js

const activitiesData = [
  {
    id: 1,
    title: "पत्रकार सुरक्षा पर राष्ट्रीय सेमिनार",
    description: "पत्रकारों की सुरक्षा और उनके अधिकारों पर दिल्ली में दो दिवसीय राष्ट्रीय सेमिनार का आयोजन किया गया। इसमें देशभर से 200 से अधिक पत्रकारों ने भाग लिया।",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=400&fit=crop",
    date: "2024-03-15",
    category: "सेमिनार",
    readTime: 5,
    views: 1250,
    likes: 89,
    location: "नई दिल्ली"
  },
  {
    id: 2,
    title: "पत्रकार एकता रैली लखनऊ में",
    description: "ऑल इंडिया पत्रकार एकता संघ की ओर से लखनऊ में विशाल रैली का आयोजन, पत्रकारों के अधिकारों के लिए जागरूकता अभियान।",
    image: "https://images.unsplash.com/photo-1595164715422-d1c876b9c81f?w=600&h=400&fit=crop",
    date: "2024-03-10",
    category: "रैली",
    readTime: 4,
    views: 890,
    likes: 67,
    location: "लखनऊ, उत्तर प्रदेश"
  },
  {
    id: 3,
    title: "महिला पत्रकार सम्मान समारोह",
    description: "अंतर्राष्ट्रीय महिला दिवस के अवसर पर महिला पत्रकारों को सम्मानित किया गया। 25 से अधिक महिला पत्रकारों को उनके योगदान के लिए सम्मानित किया गया।",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop",
    date: "2024-03-08",
    category: "सम्मान समारोह",
    readTime: 6,
    views: 2100,
    likes: 156,
    location: "मुंबई, महाराष्ट्र"
  },
  {
    id: 4,
    title: "डिजिटल पत्रकारिता कार्यशाला",
    description: "युवा पत्रकारों के लिए डिजिटल मीडिया और सोशल मीडिया हैंडलिंग पर तीन दिवसीय कार्यशाला का आयोजन।",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    date: "2024-02-28",
    category: "कार्यशाला",
    readTime: 7,
    views: 560,
    likes: 34,
    location: "बेंगलुरु, कर्नाटक"
  },
  {
    id: 5,
    title: "पत्रकार कल्याण कोष की स्थापना",
    description: "पत्रकारों के आर्थिक सहायता के लिए कल्याण कोष की स्थापना की गई। मुख्यमंत्री जी के करकमलों से हुआ शुभारंभ।",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
    date: "2024-02-20",
    category: "महत्वपूर्ण घोषणा",
    readTime: 4,
    views: 3450,
    likes: 234,
    location: "जयपुर, राजस्थान"
  },
  {
    id: 6,
    title: "पर्यावरण संरक्षण अभियान",
    description: "पत्रकारों की ओर से पर्यावरण संरक्षण और वृक्षारोपण अभियान का आयोजन। 500 से अधिक पौधे लगाए गए।",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
    date: "2024-02-15",
    category: "सामाजिक पहल",
    readTime: 3,
    views: 980,
    likes: 78,
    location: "चंडीगढ़"
  },
  {
    id: 7,
    title: "पत्रकार अधिकार विधेयक पर चर्चा",
    description: "संसद भवन में पत्रकार अधिकार विधेयक पर विशेष चर्चा का आयोजन। केंद्रीय मंत्री और वरिष्ठ पत्रकार शामिल हुए।",
    image: "https://images.unsplash.com/photo-1529101091764-c3526daf6e28?w=600&h=400&fit=crop",
    date: "2024-02-10",
    category: "संसदीय कार्य",
    readTime: 8,
    views: 4300,
    likes: 312,
    location: "नई दिल्ली"
  },
  {
    id: 8,
    title: "पत्रकार पेंशन योजना लॉन्च",
    description: "वरिष्ठ पत्रकारों के लिए पेंशन योजना की शुरुआत। इस योजना से 1000+ पत्रकारों को लाभ मिलेगा।",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=600&h=400&fit=crop",
    date: "2024-02-05",
    category: "कल्याणकारी योजना",
    readTime: 5,
    views: 2870,
    likes: 189,
    location: "गांधीनगर, गुजरात"
  },
  {
    id: 9,
    title: "साइबर सुरक्षा प्रशिक्षण कार्यक्रम",
    description: "पत्रकारों को साइबर अपराधों से बचाव और डिजिटल सुरक्षा के लिए विशेष प्रशिक्षण।",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    date: "2024-01-28",
    category: "प्रशिक्षण",
    readTime: 6,
    views: 740,
    likes: 45,
    location: "हैदराबाद, तेलंगाना"
  },
  {
    id: 10,
    title: "राष्ट्रीय पत्रकार सम्मेलन",
    description: "वाराणसी में तीन दिवसीय राष्ट्रीय पत्रकार सम्मेलन का आयोजन। देशभर के 500+ पत्रकारों ने भाग लिया।",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&h=400&fit=crop",
    date: "2024-01-20",
    category: "सम्मेलन",
    readTime: 10,
    views: 5600,
    likes: 423,
    location: "वाराणसी, उत्तर प्रदेश"
  },
  {
    id: 11,
    title: "प्रेस स्वतंत्रता दिवस समारोह",
    description: "प्रेस स्वतंत्रता दिवस के अवसर पर विशेष समारोह और पुरस्कार वितरण समारोह का आयोजन।",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
    date: "2024-01-10",
    category: "समारोह",
    readTime: 4,
    views: 1890,
    likes: 134,
    location: "कोलकाता, पश्चिम बंगाल"
  },
  {
    id: 12,
    title: "पत्रकार स्वास्थ्य शिविर",
    description: "पत्रकारों के लिए मुफ्त स्वास्थ्य जांच शिविर का आयोजन। 300 से अधिक पत्रकारों ने स्वास्थ्य जांच करवाई।",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&h=400&fit=crop",
    date: "2024-01-05",
    category: "स्वास्थ्य सेवा",
    readTime: 3,
    views: 670,
    likes: 56,
    location: "पटना, बिहार"
  }
];

export default activitiesData;