// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//     <div>
// <section className="bg-gray-800 text-white">
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


"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiAlertTriangle, FiTrendingUp, FiShield } from "react-icons/fi";
import Link from "next/link";
import { assets } from "@/Assets/assets";

const backgroundImages = [
  assets.fire,
  assets.crime,
  
];



export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-200 flex flex-col items-center justify-center text-center px-6 py-20">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Crime Report Application
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A safe and secure way to report crimes, track progress, and raise
          awareness in your community. Together, we can build a safer society.
        </motion.p>

        {/* Sign In & Sign Up Buttons */}
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link href={"/signup"} className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-2xl shadow-lg font-semibold">
            Sign Up
          </Link>
          <Link href={"/signin"}  className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl shadow-lg font-semibold">
            Sign In
          </Link>
        </motion.div>

        <div className="mt-10">
          <Image
            src={assets.crime}
            alt="Crime Awareness"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* About / Info Section */}
      <section className="py-16 px-6 bg-gray-100 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Use Crime Report App?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Crime often goes unreported because people don’t know how or where to
          report it. Our platform makes it simple: with just a few clicks, you
          can file a report, attach evidence, and track its status.  
          <br />
          <br />
          Authorities can respond faster, communities can stay informed, and
          together we can make our neighborhoods safer for everyone.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FiAlertTriangle className="text-red-600 text-4xl" />,
              title: "Quick Reporting",
              desc: "Submit crime details with location and evidence in minutes.",
            },
            {
              icon: <FiTrendingUp className="text-blue-600 text-4xl" />,
              title: "Crime Statistics",
              desc: "View trends and hotspots to understand crime in your area.",
            },
            {
              icon: <FiShield className="text-green-600 text-4xl" />,
              title: "Safe & Secure",
              desc: "All reports are encrypted and shared only with the right authorities.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Be Part of the Solution</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Sign up today to start reporting crimes and help your community stay
          safe. 
        </p>
       
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-6">
        <p>© {new Date().getFullYear()} Crime Report App. All Rights Reserved.</p>
      </footer>
    </div>
  );
}




