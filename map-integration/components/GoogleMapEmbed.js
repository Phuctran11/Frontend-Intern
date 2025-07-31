import React from 'react';

const GoogleMapEmbed = ({ 
  src, 
  width = '100%', 
  height = '450', 
  title = 'Google Maps',
  className = '',
  allowFullScreen = true,
  loading = 'lazy'
}) => {
  if (!src) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-200 rounded-lg ${className}`}
        style={{ width, height: `${height}px` }}
      >
        <p className="text-gray-500">No map source provided</p>
      </div>
    );
  }

  return (
    <div className={`map-responsive rounded-lg overflow-hidden shadow-lg ${className}`}>
      <iframe
        src={src}
        width="100%"
        height={height}
        style={{ border: 0, display: 'block' }}
        allowFullScreen={allowFullScreen}
        loading={loading}
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="w-full"
      />
    </div>
  );
};

export default GoogleMapEmbed;
