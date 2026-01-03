import type { ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "loading"> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * OptimizedImage component with lazy loading and modern format support
 * Automatically adds loading="lazy" unless priority is true
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  ...props
}: OptimizedImageProps) {
  // Extract base name and extension
  const baseName = src.replace(/\.[^/.]+$/, "");
  const extension = src.split(".").pop()?.toLowerCase();

  // Generate srcset for WebP if available (you can add WebP versions later)
  // For now, we'll use the original image with lazy loading
  const imageSrc = src;

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...props}
    />
  );
}

