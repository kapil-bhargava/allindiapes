import pic1 from "../assets/activities/pic1.jpeg";
import pic2 from "../assets/activities/pic2.jpeg";
import pic3 from "../assets/activities/pic3.jpeg";
import pic4 from "../assets/activities/pic4.jpeg";
import pic5 from "../assets/activities/pic5.jpeg";
import pic6 from "../assets/activities/pic6.jpeg";
import pic7 from "../assets/activities/pic7.jpeg";
import pic8 from "../assets/activities/pic8.jpeg";
import pic9 from "../assets/activities/pic9.jpeg";
// import pic10 from "../assets/activities/pic10.jpeg";
// import pic11 from "../assets/activities/pic11.jpeg";
// import pic12 from "../assets/activities/pic12.jpeg";
import { Calendar } from "lucide-react";
const activitiesData = [
  {
    id: 1,
    title: "उत्तर प्रदेश शासन मंत्री दानिश आजाद अंसारी को सम्मानित किया गया",
    description: "उत्तर प्रदेश शासन मंत्री दानिश आजाद अंसारी को सम्मानित किया गया",
    image: pic1,
    date: "2024-03-15",
    category: "सेमिनार",
    readTime: 5,
    views: 1250,
    likes: 89,
    location: "नई दिल्ली"
  },
  {
    id: 2,
    title: "नेहा प्रकाश जिलाधिकारी औरैया को सम्मानित किया गया",
    description: "ऑल इंडिया पत्रकार एकता संघ की ओर से लखनऊ में विशाल रैली का आयोजन, पत्रकारों के अधिकारों के लिए जागरूकता अभियान।",
    image: pic2,
    date: "2024-03-10",
    category: "रैली",
    readTime: 4,
    views: 890,
    likes: 67,
    location: "लखनऊ, उत्तर प्रदेश"
  },
  {
    id: 3,
    title: "महाभारत के सुपर स्टार व दर्जनों मूवी के एक्टर अर्जुन से लखनऊ में मुलाकात",
    description: "अंतर्राष्ट्रीय महिला दिवस के अवसर पर महिला पत्रकारों को सम्मानित किया गया। 25 से अधिक महिला पत्रकारों को उनके योगदान के लिए सम्मानित किया गया।",
    image: pic3,
    date: "2024-03-08",
    category: "सम्मान समारोह",
    readTime: 6,
    views: 2100,
    likes: 156,
    location: "मुंबई, महाराष्ट्र"
  },
  {
    id: 4,
    title: "महाभारत के सुपर स्टार व दर्जनों मूवी के एक्टर अर्जुन से लखनऊ में मुलाकात",
    description: "युवा पत्रकारों के लिए डिजिटल मीडिया और सोशल मीडिया हैंडलिंग पर तीन दिवसीय कार्यशाला का आयोजन।",
    image: pic4,
    date: "2024-02-28",
    category: "कार्यशाला",
    readTime: 7,
    views: 560,
    likes: 34,
    location: "बेंगलुरु, कर्नाटक"
  },
  {
    id: 5,
    title: "डा एमपी सिंह एसपी क्राइम यूपी पुलिस मुख्यालय को सम्मानित किया गया राष्ट्रीय अध्यक्ष केडी सिंह संस्थापक दिनेश दीक्षित",
    description: "पत्रकारों के आर्थिक सहायता के लिए कल्याण कोष की स्थापना की गई। मुख्यमंत्री जी के करकमलों से हुआ शुभारंभ।",
    image: pic5,
    date: "2024-02-20",
    category: "महत्वपूर्ण घोषणा",
    readTime: 4,
    views: 3450,
    likes: 234,
    location: "जयपुर, राजस्थान"
  },
  {
    id: 6,
    title: "लखनऊ कार्यालय पर बहराइच पदाधिकारी का सम्मान करते राष्ट्रीय अध्यक्ष केडी सिंह संस्थापक दिनेश दीक्षित",
    description: "पत्रकारों की ओर से पर्यावरण संरक्षण और वृक्षारोपण अभियान का आयोजन। 500 से अधिक पौधे लगाए गए।",
    image: pic6,
    date: "2024-02-15",
    category: "सामाजिक पहल",
    readTime: 3,
    views: 980,
    likes: 78,
    location: "चंडीगढ़"
  },
  {
    id: 7,
    title: "जनपद हरदोई संगठन कार्यालय का उद्घाटन",
    description: "संसद भवन में पत्रकार अधिकार विधेयक पर विशेष चर्चा का आयोजन। केंद्रीय मंत्री और वरिष्ठ पत्रकार शामिल हुए।",
    image: pic7,
    date: "2024-02-10",
    category: "संसदीय कार्य",
    readTime: 8,
    views: 4300,
    likes: 312,
    location: "नई दिल्ली"
  },
  {
    id: 8,
    title: "दयाशंकर सिंह परिवहन राज्यमंत्री को सम्मानित किया गया",
    description: "वरिष्ठ पत्रकारों के लिए पेंशन योजना की शुरुआत। इस योजना से 1000+ पत्रकारों को लाभ मिलेगा।",
    image: pic8,
    date: "2024-02-05",
    category: "कल्याणकारी योजना",
    readTime: 5,
    views: 2870,
    likes: 189,
    location: "गांधीनगर, गुजरात"
  },
  {
    id: 9,
    // title: "साइबर सुरक्षा प्रशिक्षण कार्यक्रम",
    description: "पत्रकारों को साइबर अपराधों से बचाव और डिजिटल सुरक्षा के लिए विशेष प्रशिक्षण।",
    image: pic9,
    date: "2024-01-28",
    category: "प्रशिक्षण",
    readTime: 6,
    views: 740,
    likes: 45,
    location: "हैदराबाद, तेलंगाना"
  },
];

export default activitiesData;