// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//     <div>
// <section className="bg-purple-500 text-white">
//   <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
//     <div className="mx-auto max-w-3xl text-center">
//       <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
//         Online Crime Reporting App.
//       </h1>

//       <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
//        Report Crime with us.
//       </p>

//       <div className="mt-8 flex flex-wrap justify-center gap-4">
//         <a
//           className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
//           href="/signup"
//         >
//           SignUp
//         </a>
//         <a
//           className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
//           href="/signin"
//         >
//           SignIn
//         </a>
//       </div>
//     </div>
//   </div>
// </section>

// </div>
// </div>
//   );
// }

// app/dashboard/page.jsx (Next.js 13+ with App Router)
// Or pages/dashboard.js (Next.js 12)
"use client";
import { FiAlertTriangle, FiTrendingUp, FiLightbulb, FiShare2 } from "react-icons/fi";

export default function Dashboard() {
  const features = [
    {
      title: "Report Crime",
      description: "Report a crime and track its status",
      icon: <FiAlertTriangle size={28} />,
    },
    {
      title: "Crime Trends",
      description: "See crime trends in your area",
      icon: <FiTrendingUp size={28} />,
    },
    {
      title: "Safety Tips",
      description: "View tips for staying safe",
      // icon: <FiLightbulb size={28} />,
    },
    {
      title: "Crime Sharing",
      description: "Share crime reports with the community",
      icon: <FiShare2 size={28} />,
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
          <div
            key={idx}
            className="bg-gray-800 rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <div className="mb-4 text-gray-300">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

