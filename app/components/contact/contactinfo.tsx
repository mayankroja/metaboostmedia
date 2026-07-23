// components/ContactInfo.tsx
"use client";
import AnimateIn from "../common/animate-in";

const ContactInfo = () => {
  const contactItems = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      mainInfo: "jayroja@metaboostmedia.com",
      secondaryInfo: "We'll respond within 24 hours"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      mainInfo: "+91 (965) 054-4306",
      secondaryInfo: "Mon-Fri from 9am to 5pm"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Office",
      mainInfo: "E-BLOCK, DDA Market, Vikaspuri",
      secondaryInfo: "New Delhi, Delhi, 110018"
    }
  ];

  return (
    <div className="bg-[#f8f9fa] p-6 rounded-lg">
      <AnimateIn yOffset={30} duration={0.6}>
        <h2 className="text-2xl font-bold text-[#0a2540] mb-6">Contact Information</h2>
      </AnimateIn>

      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <AnimateIn
            key={index}
            yOffset={20}
            duration={0.5}
            delay={0.1 * index}
          >
            <div className="flex items-start">
              <div className="bg-[#00d4ff] rounded-full p-3 mr-4 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-[#0a2540]">{item.title}</h3>
                <p className="text-[#666]">{item.mainInfo}</p>
                <p className="text-sm text-[#666]">{item.secondaryInfo}</p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      {/* Map - commented out but animated if you enable it */}
      {/* <AnimateIn yOffset={30} duration={0.6} delay={0.4}>
        <div className="mt-8">
          <h3 className="font-semibold text-[#0a2540] mb-4">Find us on the map</h3>
          <div className="bg-gray-200 h-64 rounded-lg overflow-hidden filter grayscale">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-[#0a2540] to-[#00d4ff] opacity-50">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </AnimateIn> */}
    </div>
  );
};

export default ContactInfo;