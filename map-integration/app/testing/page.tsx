'use client';
import React, { useState } from 'react';
import GoogleMapEmbed from '../../components/GoogleMapEmbed';

export default function MapTestingPage() {
  const [mapSettings, setMapSettings] = useState({
    height: '400',
    allowFullScreen: true,
    loading: 'lazy'
  });

  const testUrls = [
    {
      name: 'Valid URL - Hà Nội',
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0965308309943!2d105.85051837603207!3d21.028806687454054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abe454decbb1%3A0xa9e5b80b6740e4c!2zSOG7kyBIb8OgbiBLaeG6v20sIEhvw6BuIEtp4bq_bSwgSGFub2ksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1703684400000!5m2!1sen!2s',
      isValid: true
    },
    {
      name: 'Invalid URL - Empty',
      url: '',
      isValid: false
    },
    {
      name: 'Invalid URL - Not Google Maps',
      url: 'https://example.com/fake-map',
      isValid: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Google Maps Iframe Testing Page
        </h1>

        {/* Settings Panel */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Map Configuration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height (px)
              </label>
              <input
                type="number"
                value={mapSettings.height}
                onChange={(e) => setMapSettings({...mapSettings, height: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-lg"
                min="200"
                max="800"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Allow Full Screen
              </label>
              <select
                value={mapSettings.allowFullScreen.toString()}
                onChange={(e) => setMapSettings({...mapSettings, allowFullScreen: e.target.value === 'true'})}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loading Strategy
              </label>
              <select
                value={mapSettings.loading}
                onChange={(e) => setMapSettings({...mapSettings, loading: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="lazy">Lazy</option>
                <option value="eager">Eager</option>
              </select>
            </div>
          </div>
        </div>

        {/* Test Cases */}
        <div className="space-y-8">
          {testUrls.map((test, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b bg-gray-50">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Test {index + 1}: {test.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    test.isValid 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {test.isValid ? 'Valid' : 'Invalid'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1 break-all">
                  URL: {test.url || 'Empty URL'}
                </p>
              </div>
              
              <div className="p-6">
                <GoogleMapEmbed
                  src={test.url}
                  height={mapSettings.height}
                  allowFullScreen={mapSettings.allowFullScreen}
                  loading={mapSettings.loading}
                  title={test.name}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Test */}
        <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">
              Responsive Test
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Test how the map behaves on different screen sizes
            </p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Mobile (320px)</h4>
                <div className="w-80 mx-auto">
                  <GoogleMapEmbed
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0965308309943!2d105.85051837603207!3d21.028806687454054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abe454decbb1%3A0xa9e5b80b6740e4c!2zSOG7kyBIb8OgbiBLaeG6v20sIEhvw6BuIEtp4bq_bSwgSGFub2ksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1703684400000!5m2!1sen!2s"
                    height="200"
                    title="Mobile View"
                  />
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Tablet (768px)</h4>
                <div className="w-full max-w-md mx-auto">
                  <GoogleMapEmbed
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0965308309943!2d105.85051837603207!3d21.028806687454054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abe454decbb1%3A0xa9e5b80b6740e4c!2zSOG7kyBIb8OgbiBLaeG6v20sIEhvw6BuIEtp4bq_bSwgSGFub2ksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1703684400000!5m2!1sen!2s"
                    height="250"
                    title="Tablet View"
                  />
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Desktop (1024px+)</h4>
                <div className="w-full">
                  <GoogleMapEmbed
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0965308309943!2d105.85051837603207!3d21.028806687454054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abe454decbb1%3A0xa9e5b80b6740e4c!2zSOG7kyBIb8OgbiBLaeG6v20sIEhvw6BuIEtp4bq_bSwgSGFub2ksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1703684400000!5m2!1sen!2s"
                    height="300"
                    title="Desktop View"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
