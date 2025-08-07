import React from 'react';

const AreYouABusinessOwnerSection: React.FC = () => {
  return (
    <div className="w-full bg-black py-16 relative z-50">
      <div className="container mx-auto px-4">
        {/* Main title and description */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Are you a business owner or a tech partner?
          </h1>
          <p className="text-lg text-white">
            Create your own <strong>AI Receptionist</strong> in just 3 minutes and start earning up to <strong>$30,000 more per month per location</strong> by ensuring you never miss a customer, even after hours.
          </p>
        </div>

        {/* Business categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Restaurants */}
          <div className="bg-white rounded-lg p-6 flex flex-col min-h-[196px] relative">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-black mb-2">Restaurants</h3>
              <p className="text-gray-600">Get your FREE Restaurant AI Host</p>
            </div>
            <button className="bg-black text-white px-4 py-[7px] rounded-full font-medium hover:bg-white hover:text-black hover:border hover:border-black absolute bottom-4 right-4">
              GET
            </button>
          </div>

          {/* Cleaning Businesses */}
          <div className="bg-white rounded-lg p-6 flex flex-col min-h-[196px] relative">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-black mb-2">Cleaning Businesses</h3>
              <p className="text-gray-600">Get your FREE Cleaning AI Receptionist</p>
            </div>
            <button className="bg-black text-white px-4 py-[7px] rounded-full font-medium hover:bg-white hover:text-black hover:border hover:border-black absolute bottom-4 right-4">
              GET
            </button>
          </div>

          {/* Dental/Orthodontics */}
          <div className="bg-white rounded-lg p-6 flex flex-col min-h-[196px] relative">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-black mb-2">Dental/Orthodontics</h3>
              <p className="text-gray-600">Get your FREE Dental AI Receptionist</p>
            </div>
            <button className="bg-black text-white px-4 py-[7px] rounded-full font-medium hover:bg-white hover:text-black hover:border hover:border-black absolute bottom-4 right-4">
              GET
            </button>
          </div>

          {/* HVAC/Plumbing */}
          <div className="bg-white rounded-lg p-6 flex flex-col min-h-[196px] relative">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-black mb-2">HVAC/Plumbing</h3>
              <p className="text-gray-600">Get your FREE HVAC AI Receptionist</p>
            </div>
            <button className="bg-black text-white px-4 py-[7px] rounded-full font-medium hover:bg-white hover:text-black hover:border hover:border-black absolute bottom-4 right-4">
              GET
            </button>
          </div>

          {/* Technology Business */}
          <div className="bg-white rounded-lg p-6 flex flex-col min-h-[196px] relative">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-black mb-2">Technology Business</h3>
              <p className="text-gray-600">Get your FREE AI Sales/SDK/Support</p>
            </div>
            <button className="bg-black text-white px-4 py-[7px] rounded-full font-medium hover:bg-white hover:text-black hover:border hover:border-black absolute bottom-4 right-4">
              GET
            </button>
          </div>

          {/* Any Industry */}
          <div className="bg-white rounded-lg p-6 flex flex-col min-h-[196px] relative">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-black mb-2">Any Industry</h3>
              <p className="text-gray-600">Get your FREE AI Receptionist/Sales</p>
            </div>
            <button className="bg-black text-white px-4 py-[7px] rounded-full font-medium hover:bg-white hover:text-black hover:border hover:border-black absolute bottom-4 right-4">
              GET
            </button>
          </div>
        </div>

        {/* Bottom sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AI Developer section */}
          <div className="border border-gray-300 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Are you an AI developer? A system integrator?
            </h2>
            <p className="text-white mb-4">
              <strong>Newo</strong> is like <strong>WordPress for AI Agents</strong>. Create an <strong>AI Receptionist</strong> for your business client in just 3 minutes, then continue to enhance and customize it endlessly on the <strong>Newo.ai platform</strong>.
            </p>
            <ul className="text-white mb-6 space-y-2">
              <li>• Create an agent in 3 minutes</li>
              <li>• Documentation and API</li>
              <li>• Free access to the Newo.ai builder</li>
            </ul>
            <button className="border border-white bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black hover:border hover:border-black">
              FREE ACCESS TO BUILDER
            </button>
          </div>

          {/* Channel Partner section */}
          <div className="border border-gray-300 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Are you a channel partner with your own business clients?
            </h2>
            <p className="text-white mb-6">
              Create an <strong>AI Receptionist</strong> for your business client in just 3 minutes, then invite a certified expert to implement the system for them.
            </p>
            <ul className="text-white mb-6 space-y-2">
              <li>• Create an agent in 3 minutes</li>
              <li>• Learn about partner programs here</li>
              <li>• Become a reseller or white-label partner</li>
            </ul>
            <button className="border border-white bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black hover:border hover:border-black">
              BECOME A PARTNER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreYouABusinessOwnerSection;
