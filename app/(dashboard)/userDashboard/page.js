// "use client";
// import { FiAlertTriangle, FiTrendingUp, FiLightbulb, FiShare2 } from "react-icons/fi";

// export default function Dashboard() {
//   const features = [
//     {
//       title: "Report Crime",
//       description: "Report a crime and track its status",
//       icon: <FiAlertTriangle size={28} />,
//     },
//     {
//       title: "Crime Trends",
//       description: "See crime trends in your area",
//       icon: <FiTrendingUp size={28} />,
//     },
//     {
//       title: "Safety Tips",
//       description: "View tips for staying safe",
//       // icon: <FiLightbulb size={28} />,
//     },
//     {
//       title: "Crime Sharing",
//       description: "Share crime reports with the community",
//       icon: <FiShare2 size={28} />,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
//       {/* Header */}
//       <header className="w-full max-w-5xl flex justify-between items-center mb-10">
//         <h1 className="text-2xl font-bold">User Dashboard</h1>
//         <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
//           🔔
//         </button>
//       </header>

//       {/* Title */}
//       <h2 className="text-3xl font-extrabold mb-8 text-center">
//         Crime Reporting Application
//       </h2>

//       {/* Feature Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
//         {features.map((feature, idx) => (
//           <div
//             key={idx}
//             className="bg-gray-800 rounded-2xl p-6 shadow hover:shadow-lg transition"
//           >
//             <div className="mb-4 text-gray-300">{feature.icon}</div>
//             <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//             <p className="text-gray-400 text-sm">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";
import Link from "next/link";
import {
  FiAlertTriangle,
  FiTrendingUp,
  FiLightbulb,
  FiShare2,
} from "react-icons/fi";

export default function Dashboard() {
  const features = [
    {
      title: "Report Crime",
      description: "Report a crime and track its status",
      icon: <FiAlertTriangle size={28} />,
      link: "/report",
    },
    {
      title: "Crime Trends",
      description: "See crime trends in your area",
      icon: <FiTrendingUp size={28} />,
      link: "/trends",
    },
    {
      title: "Safety Tips",
      description: "View tips for staying safe",
      // icon: <FiLightbulb size={28} />,
      link: "/safety",
    },
    {
      title: "Crime Sharing",
      description: "Share crime reports with the community",
      icon: <FiShare2 size={28} />,
      link: "/sharing",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      {/* Header */}
      <header className="w-full max-w-5xl flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
          🔔
        </button>
      </header>

      {/* Title */}
      <h2 className="text-3xl font-extrabold mb-8 text-center">
        Crime Reporting Application
      </h2>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {features.map((feature, idx) => (
          <Link key={idx} href={feature.link}>
            <div className="bg-gray-800 rounded-2xl p-6 shadow hover:shadow-lg hover:bg-gray-700 transition cursor-pointer">
              <div className="mb-4 text-gray-300">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
