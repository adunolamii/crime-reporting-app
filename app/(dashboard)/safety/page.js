"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHeart, FiShare2 } from "react-icons/fi";
import Confetti from "react-confetti";
import { useSwipeable } from "react-swipeable";

const tipsData = [
  { id: 1, category: "Home Safety", title: "Lock your doors", description: "Always lock your doors and windows before leaving home." },
  { id: 2, category: "Travel Safety", title: "Avoid isolated areas", description: "Stick to well-lit, populated areas while traveling." },
  { id: 3, category: "Online Safety", title: "Use strong passwords", description: "Use a combination of letters, numbers, and symbols." },
  { id: 4, category: "Self Defense", title: "Learn basic self-defense", description: "Take a short course on self-defense techniques." },
  { id: 5, category: "Emergency Preparedness", title: "Keep emergency numbers handy", description: "Save emergency numbers in your phone for quick access." },
];

const categories = ["All", ...new Set(tipsData.map((tip) => tip.category))];

export default function SafetyTips() {
  const [tips, setTips] = useState(tipsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("favorites") || "{}");
    }
    return {};
  });
  const [tipOfTheDay, setTipOfTheDay] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselInterval = useRef(null);

  // Filter tips by category & search
  useEffect(() => {
    let filtered = tipsData;
    if (selectedCategory !== "All") filtered = filtered.filter((tip) => tip.category === selectedCategory);
    if (search) filtered = filtered.filter(
      (tip) => tip.title.toLowerCase().includes(search.toLowerCase()) || tip.description.toLowerCase().includes(search.toLowerCase())
    );
    setTips(filtered);
    setCurrentSlide(0); // Reset carousel when filter/search changes
  }, [selectedCategory, search]);

  // Tip of the Day
  useEffect(() => {
    const today = new Date().getDate();
    const tipIndex = today % tipsData.length;
    setTipOfTheDay(tipsData[tipIndex]);
  }, []);

  // Carousel auto-slide
  useEffect(() => {
    carouselInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % tips.length);
    }, 5000);
    return () => clearInterval(carouselInterval.current);
  }, [tips]);

  const toggleFavorite = (id) => {
    const updated = { ...favorites, [id]: !favorites[id] };
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
    if (!favorites[id]) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  };

  const shareTip = (tip) => {
    if (navigator.share) {
      navigator.share({ title: tip.title, text: tip.description });
    } else {
      alert("Share manually: " + tip.title);
    }
  };

  const favoritesCount = Object.values(favorites).filter(Boolean).length;
  const progressPercent = (favoritesCount / tipsData.length) * 100;

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % tips.length),
    onSwipedRight: () => setCurrentSlide((prev) => (prev - 1 + tips.length) % tips.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="min-h-screen p-6 bg-gray-800 text-gray-100">
      {showConfetti && <Confetti numberOfPieces={100} recycle={false} />}
      <h1 className="text-4xl font-extrabold mb-8 text-center">🛡️ Safety Tips</h1>

      {/* Tip of the Day */}
      {tipOfTheDay && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-gray-700 rounded-xl mb-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-2">💡 Tip of the Day</h2>
          <p className="mb-2">{tipOfTheDay.description}</p>
          <span className="text-sm text-gray-300">{tipOfTheDay.category}</span>
        </motion.div>
      )}

      {/* Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-4 mb-6">
        <motion.div
          className="bg-green-500 h-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition ${selectedCategory === cat ? "bg-gray-100 text-gray-800" : "bg-gray-700 hover:bg-gray-600"}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex justify-center mb-6">
        <input type="text" placeholder="Search tips..." value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg w-96 text-gray-900"
        />
      </div>

      {/* Carousel / Tips */}
      <div {...handlers} className="relative">
        <AnimatePresence>
          {tips.length > 0 && (
            <motion.div key={tips[currentSlide].id}
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="p-5 border rounded-xl bg-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300 relative max-w-xl mx-auto"
            >
              <h3 className="text-2xl font-semibold mb-2">{tips[currentSlide].title}</h3>
              <p className="mb-2 text-gray-200">{tips[currentSlide].description}</p>
              <span className="text-sm text-gray-400">{tips[currentSlide].category}</span>
              <div className="absolute top-4 right-4 flex gap-2">
                <button onClick={() => toggleFavorite(tips[currentSlide].id)}>
                  <FiHeart className={`w-6 h-6 transition-colors ${favorites[tips[currentSlide].id] ? "text-red-500" : "text-gray-400"}`} />
                </button>
                <button onClick={() => shareTip(tips[currentSlide])}>
                  <FiShare2 className="w-6 h-6 text-gray-400 hover:text-white transition" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
