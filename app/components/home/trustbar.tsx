// components/TrustBar.tsx
const TrustBar = () => {
  // Array of placeholder client logos (5-6 items as per wireframe)
  const clientLogos = Array(6).fill(null);

  return (
    <section className="bg-[#f8f9fa] py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Trust text */}
          <p className="text-xs uppercase tracking-widest text-[#999] mb-6">
            Trusted by Industry Leaders
          </p>
          
          {/* Logo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full max-w-4xl">
            {clientLogos.map((_, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-2"
              >
                {/* Placeholder for client logo */}
                <div className="w-full h-10 bg-gray-300 opacity-70 filter grayscale rounded-md flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-gray-500" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;