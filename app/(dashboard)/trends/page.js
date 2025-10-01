"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Header";

// Dynamically import MapContainer to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then(mod => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then(mod => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then(mod => mod.Popup),
  { ssr: false }
);

export default function ReportsDisplay() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReports() {
      try {
        const res = await fetch("/api/report");
        if (!res.ok) throw new Error("Failed to fetch reports");
        const data = await res.json();
        setReports(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchReports();
  }, []);

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
  
    <motion.div
      className="min-h-screen p-6 bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header/>
      <h2 className="text-4xl font-extrabold mb-8 text-center text-white">
        🕵️ Crime Reports
      </h2>

      {loading ? (
        <p className="text-center text-gray-300">Loading reports...</p>
      ) : reports.length === 0 ? (
        <p className="text-center text-gray-400">No reports available.</p>
      ) : (
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {reports.map((report) => (
              <motion.div
                key={report._id}
                className="p-5 border rounded-xl bg-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-semibold mb-2 text-white">{report.title}</h3>
                <p className="text-gray-300 mb-2">{report.description}</p>
                <p className="text-sm text-gray-400 mb-2">Location: {report.location}</p>
                {report.filePath && (
                  <img
                    src={report.filePath}
                    alt={report.title}
                    className="w-full h-48 object-cover rounded-lg mt-2"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
}
