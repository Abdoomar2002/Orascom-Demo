'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

// Optimized Image Component with RTL support and better loading
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  style = {},
  fallbackSrc = '/placeholder.jpg',
  ...props
}) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { language } = useLanguage();

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(fallbackSrc);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Enhanced styles for RTL support
  const enhancedStyle = {
    ...style,
    ...(language === 'ar' && {
      transform: 'scaleX(-1)', // Flip image horizontally for RTL
    }),
  };

  return (
    <div className={`optimized-image-container ${className}`} style={{ position: 'relative' }}>
      {isLoading && (
        <div 
          className="image-skeleton"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            borderRadius: '4px',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        />
      )}
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        style={enhancedStyle}
        onError={handleError}
        onLoad={handleLoad}
        className={`optimized-image ${isLoading ? 'loading' : 'loaded'}`}
        {...props}
      />
      <style jsx>{`
        .optimized-image-container {
          position: relative;
          overflow: hidden;
        }
        
        .optimized-image.loading {
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        
        .optimized-image.loaded {
          opacity: 1;
        }
        
        .image-skeleton {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
} 