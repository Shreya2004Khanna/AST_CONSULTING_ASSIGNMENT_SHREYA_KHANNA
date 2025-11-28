'use client';

import React, { useState } from 'react';

interface VideoEmbedProps {
  src: string;
  title?: string;
  thumbnail?: string;
  width?: string;
  height?: string;
}

export default function VideoEmbed({
  src,
  title = 'Video',
  thumbnail,
  width = 'w-full',
  height = 'h-64 md:h-96',
}: VideoEmbedProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  if (error) {
    return (
      <div className={`${width} ${height} bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden relative`}>
        <div className="text-center p-4">
          {thumbnail && (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover absolute inset-0"
            />
          )}
          <div className="relative bg-black bg-opacity-50 p-4 rounded">
            <p className="text-white font-semibold mb-2">{title}</p>
            <p className="text-gray-300 text-sm">Video not available</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${width} ${height} relative rounded-lg overflow-hidden`}>
      {loading && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center z-10">
          <span className="text-gray-600">Loading...</span>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        className="w-full h-full border-0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
}
