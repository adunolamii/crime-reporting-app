// "use client";

// import { useEffect, useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiHeart, FiShare2 } from "react-icons/fi";
// import Confetti from "react-confetti";
// import { useSwipeable } from "react-swipeable";
// import Header from "../Header";

// const tipsData = [
//   { id: 1, category: "Home Safety", title: "Lock your doors", description: "Always lock your doors and windows before leaving home." },
//   { id: 2, category: "Travel Safety", title: "Avoid isolated areas", description: "Stick to well-lit, populated areas while traveling." },
//   { id: 3, category: "Online Safety", title: "Use strong passwords", description: "Use a combination of letters, numbers, and symbols." },
//   { id: 4, category: "Self Defense", title: "Learn basic self-defense", description: "Take a short course on self-defense techniques." },
//   { id: 5, category: "Emergency Preparedness", title: "Keep emergency numbers handy", description: "Save emergency numbers in your phone for quick access." },
// ];

// const categories = ["All", ...new Set(tipsData.map((tip) => tip.category))];

// export default function SafetyTips() {
//   const [tips, setTips] = useState(tipsData);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [search, setSearch] = useState("");
//   const [favorites, setFavorites] = useState(() => {
//     if (typeof window !== "undefined") {
//       return JSON.parse(localStorage.getItem("favorites") || "{}");
//     }
//     return {};
//   });
//   const [tipOfTheDay, setTipOfTheDay] = useState(null);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const carouselInterval = useRef(null);

//   // Filter tips by category & search
//   useEffect(() => {
//     let filtered = tipsData;
//     if (selectedCategory !== "All") filtered = filtered.filter((tip) => tip.category === selectedCategory);
//     if (search) filtered = filtered.filter(
//       (tip) => tip.title.toLowerCase().includes(search.toLowerCase()) || tip.description.toLowerCase().includes(search.toLowerCase())
//     );
//     setTips(filtered);
//     setCurrentSlide(0); // Reset carousel when filter/search changes
//   }, [selectedCategory, search]);

//   // Tip of the Day
//   useEffect(() => {
//     const today = new Date().getDate();
//     const tipIndex = today % tipsData.length;
//     setTipOfTheDay(tipsData[tipIndex]);
//   }, []);

//   // Carousel auto-slide
//   useEffect(() => {
//     carouselInterval.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % tips.length);
//     }, 5000);
//     return () => clearInterval(carouselInterval.current);
//   }, [tips]);

//   const toggleFavorite = (id) => {
//     const updated = { ...favorites, [id]: !favorites[id] };
//     setFavorites(updated);
//     localStorage.setItem("favorites", JSON.stringify(updated));
//     if (!favorites[id]) {
//       setShowConfetti(true);
//       setTimeout(() => setShowConfetti(false), 2000);
//     }
//   };

//   const shareTip = (tip) => {
//     if (navigator.share) {
//       navigator.share({ title: tip.title, text: tip.description });
//     } else {
//       alert("Share manually: " + tip.title);
//     }
//   };

//   const favoritesCount = Object.values(favorites).filter(Boolean).length;
//   const progressPercent = (favoritesCount / tipsData.length) * 100;

//   // Swipe handlers
//   const handlers = useSwipeable({
//     onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % tips.length),
//     onSwipedRight: () => setCurrentSlide((prev) => (prev - 1 + tips.length) % tips.length),
//     preventDefaultTouchmoveEvent: true,
//     trackMouse: true,
//   });

//   return (

//     <div className=" bg-gray-800">
//        <Header/>

//       {showConfetti && <Confetti numberOfPieces={100} recycle={false} />}

//       <h1 className="text-4xl font-extrabold mb-8 text-center">🛡️ Safety Tips</h1>

//       {/* Tip of the Day */}
//       {tipOfTheDay && (
//         <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
//           className="p-6 bg-gray-700 rounded-xl mb-8 shadow-lg">
//           <h2 className="text-2xl font-bold mb-2">💡 Tip of the Day</h2>
//           <p className="mb-2">{tipOfTheDay.description}</p>
//           <span className="text-sm text-gray-300">{tipOfTheDay.category}</span>
//         </motion.div>
//       )}

//       {/* Progress Bar */}
//       <div className="w-full bg-gray-700 rounded-full h-4 mb-6">
//         <motion.div
//           className="bg-green-500 h-4 rounded-full"
//           initial={{ width: 0 }}
//           animate={{ width: `${progressPercent}%` }}
//           transition={{ duration: 0.5 }}
//         />
//       </div>

//       {/* Filters */}
//       <div className="flex flex-wrap justify-center gap-3 mb-6">
//         {categories.map((cat) => (
//           <button key={cat} onClick={() => setSelectedCategory(cat)}
//             className={`px-4 py-2 rounded-full font-medium transition ${selectedCategory === cat ? "bg-gray-100 text-gray-800" : "bg-gray-700 hover:bg-gray-600"}`}>
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Search */}
//       <div className="flex justify-center mb-6">
//         <input type="text" placeholder="Search tips..." value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="px-4 py-2 rounded-lg w-96 text-gray-900"
//         />
//       </div>

//       {/* Carousel / Tips */}
//       <div {...handlers} className="relative">
//         <AnimatePresence>
//           {tips.length > 0 && (
//             <motion.div key={tips[currentSlide].id}
//               initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -50 }}
//               className="p-5 border rounded-xl bg-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300 relative max-w-xl mx-auto"
//             >
//               <h3 className="text-2xl font-semibold mb-2">{tips[currentSlide].title}</h3>
//               <p className="mb-2 text-gray-200">{tips[currentSlide].description}</p>
//               <span className="text-sm text-gray-400">{tips[currentSlide].category}</span>
//               <div className="absolute top-4 right-4 flex gap-2">
//                 <button onClick={() => toggleFavorite(tips[currentSlide].id)}>
//                   <FiHeart className={`w-6 h-6 transition-colors ${favorites[tips[currentSlide].id] ? "text-red-500" : "text-gray-400"}`} />
//                 </button>
//                 <button onClick={() => shareTip(tips[currentSlide])}>
//                   <FiShare2 className="w-6 h-6 text-gray-400 hover:text-white transition" />
//                 </button>
//               </div>t
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { FiHeart, FiShare2 } from "react-icons/fi";
import Header from "../Header";

const tipsData = [
  {
    id: 1,
    category: "Home Safety",
    title: "Lock your doors",
    description: "Always lock your doors and windows before leaving home.",
  },
  {
    id: 2,
    category: "Online Safety",
    title: "Strong Passwords",
    description: "Use unique, strong passwords and enable 2FA.",
  },
  {
    id: 3,
    category: "Travel Safety",
    title: "Stay alert",
    description: "Keep your belongings secure when traveling.",
  },
  {
    id: 4,
    category: "Personal Safety",
    title: "Share your location",
    description: "Let trusted friends know your whereabouts.",
  },
];

export default function SafetyTipsPage() {
  const [index, setIndex] = useState(0);
  const [celebrate, setCelebrate] = useState(false);

  // Swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((i) => (i + 1) % tipsData.length),
    onSwipedRight: () =>
      setIndex((i) => (i - 1 + tipsData.length) % tipsData.length),
    trackMouse: true,
  });

  // Current tip
  const currentTip = tipsData[index];

  return (
    <div>
      <Header />
      <div className="relative min-h-screen bg-gray-800 flex flex-col items-center justify-center text-white p-6">
        <h1 className="text-4xl font-extrabold mb-8 text-center">
          🛡️ Safety Tips
        </h1>

        {/* Confetti celebration */}
        {celebrate && (
          <Confetti
            width={typeof window !== "undefined" ? window.innerWidth : 300}
            height={typeof window !== "undefined" ? window.innerHeight : 300}
            recycle={false}
            numberOfPieces={300}
          />
        )}

        <div
          {...handlers}
          className="w-full max-w-lg h-[350px] flex items-center justify-center mb-36"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTip.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white text-gray-900 rounded-2xl shadow-xl w-full h-full flex flex-col justify-between"
            >
              <div>
                <span className="text-sm font-semibold text-indigo-600 uppercase">
                  {currentTip.category}
                </span>
                <h2 className="text-2xl font-bold mt-2">{currentTip.title}</h2>
                <p className="mt-4 text-gray-700">{currentTip.description}</p>
              </div>

              {/* Actions */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setCelebrate(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition"
                >
                  <FiHeart /> Like
                </button>
                <button
                  onClick={() => alert("Shared!")}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
                >
                  <FiShare2 /> Share
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Swipe instructions */}
        <p className="mt-6 text-gray-300">
          👆 Swipe left or right to see more tips
        </p>
      </div>
    </div>
  );
}
