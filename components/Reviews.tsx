import React, { useEffect } from 'react';

const Reviews: React.FC = () => {
  useEffect(() => {
    // Check if script already exists
    const scriptId = 'featurable-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://featurable.com/assets/v2/masonry_default.min.js";
      script.defer = true;
      script.charset = "UTF-8";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="reviews" className="py-12 bg-white scroll-mt-20" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 400px' }}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="text-tango-red font-semibold tracking-wider uppercase text-sm mb-2 block">
            Le voci della community
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-tango-dark tracking-tight leading-tight">
            Dicono di noi
          </h2>
          <p className="mt-4 text-tango-gray text-lg font-light max-w-2xl mx-auto">
            Recensioni dei nostri allievi su Google
          </p>
        </div>

        <div className="bg-white">
          <div 
            id="featurable-2a4aeaa8-bc8f-4e49-b5ed-3034bf160d3a" 
            data-featurable-async 
            data-location-code="it"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
