// components/HeroSection.tsx
"use client";
import Link from "next/link";
import AnimateIn from "../common/animate-in";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-12 h-screen md:py-16 lg:py-24 flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="/hero-poster.jpg" // optional: fallback image while video loads
      >
        <source src="/hero1.mp4" type="video/mp4" />
        {/* Add additional formats if needed */}
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <AnimateIn yOffset={50} duration={0.8} delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Drive Growth & Dominate Your Market.
          </h1>
        </AnimateIn>

        <AnimateIn yOffset={40} duration={0.8} delay={0.2}>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            MetaBoostMedia is your all-in-one partner for results-driven SEO, social media, and web design strategies.
          </p>
        </AnimateIn>

        {/* CTA Buttons */}
        <AnimateIn yOffset={30} duration={0.8} delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-[#00d4ff] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium hover:bg-[#00b8e0] transition-colors shadow-md text-center"
            >
              View Our Services
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium hover:bg-white hover:text-[#0a2540] transition-colors text-center"
            >
              See Case Studies
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default HeroSection;
// // components/HeroSection.tsx
// "use client";
// import Link from "next/link";
// import AnimateIn from "../common/animate-in";

// const HeroSection = () => {
//   return (
//     <section className="py-12 md:py-16 lg:py-24 flex items-center justify-center bg-gradient-to-b from-[#f0f5ff] to-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//           {/* Text Content */}
//           <div className="lg:w-1/2 text-center lg:text-left">
//             <AnimateIn yOffset={50} duration={0.8} delay={0.1}>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a2540] leading-tight mb-6">
//                 Drive Growth & Dominate Your Market.
//               </h1>
//             </AnimateIn>
            
//             <AnimateIn yOffset={40} duration={0.8} delay={0.2}>
//               <p className="text-lg md:text-xl text-[#666] mb-8">
//                 MetaBoostMedia is your all-in-one partner for results-driven SEO, social media, and web design strategies.
//               </p>
//             </AnimateIn>

//             {/* CTA Buttons */}
//             <AnimateIn yOffset={30} duration={0.8} delay={0.3}>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <Link
//                   href="/services"
//                   className="bg-[#00d4ff] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium hover:bg-[#00b8e0] transition-colors shadow-md text-center"
//                 >
//                   View Our Services
//                 </Link>
//                 <Link
//                   href="/blog"
//                   className="border-2 border-[#0a2540] text-[#0a2540] px-6 py-3 md:px-8 md:py-4 rounded-full font-medium hover:bg-[#0a2540] hover:text-white transition-colors text-center"
//                 >
//                   See Case Studies
//                 </Link>
//               </div>
//             </AnimateIn>
//           </div>

//           {/* Enhanced Graphic */}
//           <AnimateIn 
//             yOffset={0} 
//             xOffset={50} 
//             duration={1} 
//             delay={0.4}
//             className="lg:w-1/2 flex justify-center mt-8 lg:mt-0"
//           >
//             <div className="relative w-full max-w-md lg:max-w-lg">
//               {/* Modern digital growth visualization */}
//               <svg viewBox="0 0 600 500" className="w-full h-auto">
//                 {/* Background elements */}
//                 <defs>
//                   <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#0a2540" stopOpacity="0.1" />
//                     <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.1" />
//                   </linearGradient>
//                   <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#0a2540" />
//                     <stop offset="100%" stopColor="#00d4ff" />
//                   </linearGradient>
//                   <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//                     <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
//                     <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="glow" />
//                     <feComposite in="SourceGraphic" in2="glow" operator="over" />
//                   </filter>
//                 </defs>

//                 {/* Main growth curve */}
//                 <path
//                   d="M100,400 C200,300 300,150 450,100"
//                   stroke="url(#gradient1)"
//                   strokeWidth="8"
//                   fill="none"
//                   strokeLinecap="round"
//                 />

//                 {/* Secondary curves */}
//                 <path
//                   d="M150,380 C220,300 320,200 400,150"
//                   stroke="#0a2540"
//                   strokeWidth="3"
//                   fill="none"
//                   strokeOpacity="0.6"
//                   strokeDasharray="5,5"
//                 />
//                 <path
//                   d="M80,350 C180,250 280,100 420,80"
//                   stroke="#00d4ff"
//                   strokeWidth="3"
//                   fill="none"
//                   strokeOpacity="0.6"
//                 />

//                 {/* Data nodes with gradient and glow */}
//                 <circle cx="100" cy="400" r="15" fill="url(#nodeGradient)" filter="url(#glow)" />
//                 <circle cx="200" cy="300" r="12" fill="url(#nodeGradient)" filter="url(#glow)" />
//                 <circle cx="300" cy="150" r="18" fill="url(#nodeGradient)" filter="url(#glow)" />
//                 <circle cx="450" cy="100" r="22" fill="url(#nodeGradient)" filter="url(#glow)" />

//                 {/* Floating elements */}
//                 <circle cx="350" cy="250" r="8" fill="#00d4ff" opacity="0.7">
//                   <animate attributeName="cy" values="250;230;250" dur="3s" repeatCount="indefinite" />
//                 </circle>
//                 <circle cx="250" cy="350" r="6" fill="#0a2540" opacity="0.7">
//                   <animate attributeName="cx" values="250;270;250" dur="4s" repeatCount="indefinite" />
//                 </circle>

//                 {/* Growth indicators */}
//                 <g transform="translate(450, 100)">
//                   <path
//                     d="M0,-25 L15,0 L0,15 L-15,0 Z"
//                     fill="#ff6b6b"
//                   />
//                   <text x="0" y="35" textAnchor="middle" fill="#ff6b6b" fontSize="14" fontWeight="bold">
//                     +87% Growth
//                   </text>
//                 </g>

//                 {/* Digital elements */}
//                 <g transform="translate(200, 200)" opacity="0.8">
//                   <rect x="-15" y="-10" width="30" height="20" rx="3" fill="#0a2540" opacity="0.2" />
//                   <line x1="-10" y1="-5" x2="5" y2="-5" stroke="#0a2540" strokeWidth="2" />
//                   <line x1="-10" y1="0" x2="10" y2="0" stroke="#0a2540" strokeWidth="2" />
//                   <line x1="-10" y1="5" x2="0" y2="5" stroke="#0a2540" strokeWidth="2" />
//                 </g>

//                 <g transform="translate(350, 300)" opacity="0.8">
//                   <circle cx="0" cy="0" r="15" fill="#00d4ff" opacity="0.2" />
//                   <path d="M-8,-8 L8,8 M8,-8 L-8,8" stroke="#00d4ff" strokeWidth="2" />
//                 </g>
//               </svg>
//             </div>
//           </AnimateIn>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;