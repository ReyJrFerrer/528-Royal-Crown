import { memo, useState, useCallback } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

const LazyImage = memo(function LazyImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  style,
  ...rest
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => setLoaded(true), []);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      onLoad={handleLoad}
      className={className}
      style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
        ...style,
      }}
      {...rest}
    />
  );
});

export default LazyImage;
