'use client';
import React, { useState } from 'react';
import GoogleMapEmbed from '../components/GoogleMapEmbed';

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [customUrl, setCustomUrl] = useState('');
  const [showCustom, setShowCustom] = useState(false);

  // Sample locations with proper Google Maps embed URLs
  const locations = [
    {
      name: 'Hà Nội - Hồ Hoàn Kiếm',
      description: 'Trung tâm thủ đô Hà Nội',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0965308309943!2d105.85051837603207!3d21.028806687454054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abe454decbb1%3A0xa9e5b80b6740e4c!2zSOG7kyBIb8OgbiBLaeG6v20sIEhvw6BuIEtp4bq_bSwgSGFub2ksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1703684400000!5m2!1sen!2s',
      coordinates: '21.0285°N, 105.8542°E'
    },
    {
      name: 'TP.HCM - Chợ Bến Thành',
      description: 'Trung tâm thành phố Hồ Chí Minh',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.319439183599!2d106.69775067591677!3d10.772777859253216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2zQsOqbiBUaMOgbmggTWFya2V0LCBMw6ogTOG7o2ksIERpc3RyaWN0IDEsIEjhu5MgQ2jDrSBNaW5oIENpdHksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1703684500000!5m2!1sen!2s',
      coordinates: '10.7728°N, 106.6998°E'
    },
    {
      name: 'Đà Nẵng - Cầu Rồng',
      description: 'Biểu tượng của thành phố Đà Nẵng',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0188086904813!2d108.22252477583477!3d16.061938584611397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ca7b0e80e9%3A0x31b2cc84ab0b65e6!2zQ-G6p3UgUuG7k25nLMSQw6AgTuG6tW5nLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1703684600000!5m2!1sen!2s',
      coordinates: '16.0619°N, 108.2251°E'
    },
    {
      name: 'Nha Trang - Bãi biển',
      description: 'Bãi biển nổi tiếng của Nha Trang',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.0791071978444!2d109.19432957595384!3d12.248904187887835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31706787e576c5e5%3A0x3fdc00e9c2a5aa5b!2zTmhhIFRyYW5nIEJlYWNoLCBMw7RjIFRo4buNLCBOaGEgVHJhbmcsIEto4bCMbmggSMOyw6AsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1703684700000!5m2!1sen!2s',
      coordinates: '12.2489°N, 109.1968°E'
    }
  ];

  const handleCustomUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrl.trim()) {
      setShowCustom(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Google Maps Iframe Testing
          </h1>
          <p className="mt-2 text-gray-600">
            Test different Google Maps embed configurations and locations
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar - Location Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Select Location
              </h2>
              
              {/* Predefined Locations */}
              <div className="space-y-2 mb-6">
                {locations.map((location, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedLocation(index);
                      setShowCustom(false);
                    }}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      selectedLocation === index && !showCustom
                        ? 'bg-blue-50 border-blue-200 text-blue-800'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-medium">{location.name}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {location.description}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {location.coordinates}
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom URL Input */}
              <div className="border-t pt-4">
                <h3 className="font-medium text-gray-900 mb-3">
                  Custom Google Maps URL
                </h3>
                <form onSubmit={handleCustomUrlSubmit} className="space-y-3">
                  <textarea
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    placeholder="Paste Google Maps embed URL here..."
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none h-20 text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Load Custom Map
                  </button>
                </form>
              </div>

              {/* Instructions */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">
                  How to get embed URL:
                </h4>
                <ol className="text-sm text-blue-800 space-y-1">
                  <li>1. Go to Google Maps</li>
                  <li>2. Search for location</li>
                  <li>3. Click "Share" button</li>
                  <li>4. Select "Embed a map"</li>
                  <li>5. Copy the iframe src URL</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Main Content - Map Display */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {/* Map Header */}
              <div className="px-6 py-4 border-b bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-900">
                  {showCustom ? 'Custom Location' : locations[selectedLocation].name}
                </h2>
                {!showCustom && (
                  <p className="text-gray-600 mt-1">
                    {locations[selectedLocation].description}
                  </p>
                )}
              </div>

              {/* Map Container */}
              <div className="p-6">
                <GoogleMapEmbed
                  src={showCustom ? customUrl : locations[selectedLocation].src}
                  height="500"
                  title={showCustom ? 'Custom Location' : locations[selectedLocation].name}
                  className="w-full"
                />
              </div>

              {/* Map Info */}
              <div className="px-6 py-4 border-t bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Coordinates:</span>
                    <p className="text-gray-600">
                      {showCustom ? 'Custom location' : locations[selectedLocation].coordinates}
                    </p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Map Type:</span>
                    <p className="text-gray-600">Google Maps Embed</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Loading:</span>
                    <p className="text-gray-600">Lazy Loading</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Multiple Maps Grid */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                All Locations Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {locations.map((location, index) => (
                  <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="p-4 border-b">
                      <h3 className="font-semibold text-gray-900">{location.name}</h3>
                      <p className="text-sm text-gray-600">{location.description}</p>
                    </div>
                    <div className="p-4">
                      <GoogleMapEmbed
                        src={location.src}
                        height="250"
                        title={location.name}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
