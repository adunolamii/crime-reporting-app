// "use client";

// import { useState } from "react";
// import { FiCopy, FiShare2 } from "react-icons/fi";
// import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
// import toast, { Toaster } from "react-hot-toast";
// import { QRCodeCanvas } from "qrcode.react";

// export default function SharePage() {
//   const [link] = useState("https://mycrimeapp.com/report/12345");

//   const copyLink = () => {
//     navigator.clipboard.writeText(link);
//     toast.success("Link copied to clipboard!");
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
//       <Toaster position="top-center" reverseOrder={false} />

//       <h1 className="text-4xl font-extrabold mb-6">🔗 Share This Report</h1>

//       {/* Link box */}
//       <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between w-full max-w-lg mb-6">
//         <span className="truncate">{link}</span>
//         <button
//           onClick={copyLink}
//           className="ml-4 p-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
//         >
//           <FiCopy size={20} />
//         </button>
//       </div>

//       {/* Share buttons */}
//       <div className="flex gap-4 mb-8">
//         <a
//           href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-3 bg-blue-500 rounded-lg hover:bg-blue-600"
//         >
//           <FaTwitter size={24} />
//         </a>
//         <a
//           href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-3 bg-blue-700 rounded-lg hover:bg-blue-800"
//         >
//           <FaFacebook size={24} />
//         </a>
//         <a
//           href={`https://wa.me/?text=${encodeURIComponent(link)}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-3 bg-green-600 rounded-lg hover:bg-green-700"
//         >
//           <FaWhatsapp size={24} />
//         </a>
//       </div>

//       {/* QR Code */}
//       <div className="bg-white p-4 rounded-xl shadow-md">
//         <QRCodeCanvas value={link} size={150} />
//       </div>
//     </div>
//   );
// }


// "use client";
// import { motion } from "framer-motion";
// import { FiCopy } from "react-icons/fi";
// import { FaFacebook, FaTwitter, FaWhatsapp, FaDownload } from "react-icons/fa";
// import toast, { Toaster } from "react-hot-toast";
// import { QRCodeCanvas } from "qrcode.react";

// export default function SharePage() {
//   const link = typeof window !== "undefined" ? window.location.href : "https://example.com";

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(link);
//     toast.success("🔗 Link copied!");
//   };

//   const downloadQRCode = () => {
//     const canvas = document.querySelector("canvas");
//     const pngUrl = canvas
//       .toDataURL("image/png")
//       .replace("image/png", "image/octet-stream");
//     const downloadLink = document.createElement("a");
//     downloadLink.href = pngUrl;
//     downloadLink.download = "qr-code.png";
//     downloadLink.click();
//     toast.success("✅ QR Code downloaded!");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center p-6">
//       <Toaster />

//       {/* Title */}
//       <motion.h1
//         className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         Share This Page
//       </motion.h1>

//       {/* Actions */}
//       <motion.div
//         className="flex flex-col gap-6 items-center bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md"
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         {/* Copy Link */}
//         <button
//           onClick={copyToClipboard}
//           className="flex items-center gap-2 bg-blue-600 px-5 py-3 rounded-xl hover:bg-blue-500 transition-colors duration-200 shadow-lg"
//         >
//           <FiCopy className="text-lg" /> Copy Link
//         </button>

//         {/* Social Media */}
//         <div className="flex gap-6">
//           <motion.a
//             whileHover={{ scale: 1.2 }}
//             href={`https://facebook.com/sharer/sharer.php?u=${link}`}
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaFacebook className="text-3xl text-blue-500 hover:text-blue-400 transition" />
//           </motion.a>
//           <motion.a
//             whileHover={{ scale: 1.2 }}
//             href={`https://twitter.com/intent/tweet?url=${link}`}
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaTwitter className="text-3xl text-sky-400 hover:text-sky-300 transition" />
//           </motion.a>
//           <motion.a
//             whileHover={{ scale: 1.2 }}
//             href={`https://wa.me/?text=${link}`}
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaWhatsapp className="text-3xl text-green-500 hover:text-green-400 transition" />
//           </motion.a>
//         </div>

//         {/* QR Code */}
//         <motion.div
//           className="bg-white p-6 rounded-xl shadow-lg"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//         >
//           <QRCodeCanvas value={link} size={180} />
//         </motion.div>

//         {/* Download QR Code */}
//         <button
//           onClick={downloadQRCode}
//           className="flex items-center gap-2 bg-purple-600 px-5 py-3 rounded-xl hover:bg-purple-500 transition-colors duration-200 shadow-lg"
//         >
//           <FaDownload className="text-lg" /> Download QR Code
//         </button>
//       </motion.div>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import QRCode from "qrcode.react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

// React Icons
import { FaWhatsapp, FaTwitter, FaFacebookF, FaCopy, FaCheck, FaShareAlt } from "react-icons/fa";

export default function SharePage() {
  const shareLink = "https://yourapp.com/invite/12345";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareLink);
    setCopied(true);
    toast.success("Link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform) => {
    let url = "";

    if (platform === "whatsapp") {
      url = `https://wa.me/?text=Join%20me%20here:%20${encodeURIComponent(
        shareLink
      )}`;
    } else if (platform === "twitter") {
      url = `https://twitter.com/intent/tweet?text=Check%20this%20out!%20${encodeURIComponent(
        shareLink
      )}`;
    } else if (platform === "facebook") {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareLink
      )}`;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-10 w-full max-w-md flex flex-col items-center"
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-6 drop-shadow-md"
        >
          Share Your Invite
        </motion.h1>

        {/* QR Code */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white p-4 rounded-xl shadow-lg"
        >
         {/* <QRCodeCanvas value={link} size={180} /> */}
        </motion.div>

        {/* Link with copy button */}
        <div className="flex items-center gap-2 mt-6 bg-white/20 rounded-lg px-4 py-2 text-white w-full justify-between">
          <span className="truncate">{shareLink}</span>
          <button
            onClick={handleCopy}
            className="p-2 rounded-full bg-white/30 hover:bg-white/40 transition"
          >
            {copied ? (
              <FaCheck className="text-green-400" size={20} />
            ) : (
              <FaCopy size={20} />
            )}
          </button>
        </div>

        {/* Social Share */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex gap-4 mt-6"
        >
          <button
            onClick={() => handleShare("whatsapp")}
            className="p-3 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-md transition"
          >
            <FaWhatsapp size={22} />
          </button>
          <button
            onClick={() => handleShare("twitter")}
            className="p-3 rounded-full bg-sky-400 hover:bg-sky-500 text-white shadow-md transition"
          >
            <FaTwitter size={22} />
          </button>
          <button
            onClick={() => handleShare("facebook")}
            className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md transition"
          >
            <FaFacebookF size={22} />
          </button>
          <button
            onClick={handleCopy}
            className="p-3 rounded-full bg-purple-500 hover:bg-purple-600 text-white shadow-md transition"
          >
            <FaShareAlt size={22} />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
