import React, { useState, useRef, useEffect } from "react";

interface VideoPreviewProps {
  url: string | null;
  isLoading: boolean;
  fallbackImage?: string;
  className?: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({
  url,
  isLoading,
  fallbackImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1920&auto=format&fit=crop",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (url && videoRef.current) {
      setIsVideoLoaded(false);
      setHasError(false);
      videoRef.current.load();
    }
  }, [url]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = () => {
    setHasError(true);
  };

  return (
    <div className="video-container w-full h-full aspect-video rounded-xl overflow-hidden relative transition-all duration-300">
      {!url && !isLoading && (
        <div className="absolute inset-0 bg-secondary/30 flex flex-col items-center justify-center p-6 rounded-xl animate-fade-in">
          <img
            src={fallbackImage}
            alt="Video preview placeholder"
            className="w-full h-full object-cover rounded-lg absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end p-8 text-white">
            <h3 className="text-lg font-medium"> A preview will appear here</h3>
          </div>
        </div>
      )}

      {isLoading && !isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary/30 animate-fade-in">
          <div className="w-full flex flex-col items-center justify-center space-y-4">
            <div className="h-1 w-2/3 max-w-md bg-secondary rounded-full overflow-hidden relative">
              <div className="h-full bg-primary absolute left-0 top-0 w-1/3 animate-pulse"></div>
            </div>
            <p className="text-sm text-muted-foreground animate-pulse">
              Loading preview...
            </p>
          </div>
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-destructive/10 animate-fade-in">
          <div className="text-center p-6">
            <p className="text-sm text-destructive font-medium">
              Unable to load video
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Please check the URL and try again
            </p>
          </div>
        </div>
      )}

      {url && (
        <video
          ref={videoRef}
          className="w-full h-full object-cover transition-opacity duration-300"
          controls
          playsInline
          preload="auto"
          style={{ objectFit: "cover" }}
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
        >
          <source src={url} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPreview;
