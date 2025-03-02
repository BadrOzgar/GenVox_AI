import { useState } from "react";
/* import { toast } from '@/components/ui/use-toast';
 */
interface UseVideoPreviewProps {
  onSuccess?: (url: string) => void;
  onError?: (message: string) => void;
}

export const useVideoPreview = ({
  onSuccess,
  onError,
}: UseVideoPreviewProps = {}) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Sample video URLs for demonstration
  const exampleVideos = [
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  ];

  const getRandomExampleVideo = () => {
    return exampleVideos[Math.floor(Math.random() * exampleVideos.length)];
  };

  const previewVideo = async (url: string) => {
    setIsLoading(true);

    try {
      // For demo purposes, we'll use a small timeout to simulate loading
      // In a real app, you might validate the URL or check if the video exists
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // If URL is 'example', use a sample video
      const finalUrl =
        url.toLowerCase() === "example" ? getRandomExampleVideo() : url;

      setVideoUrl(finalUrl);

      /*   toast({
        title: "Video loaded successfully",
        description: "Your video is now ready to play",
      }); */

      onSuccess?.(finalUrl);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to load video";

      /*    toast({
        variant: "destructive",
        title: "Error loading video",
        description: message,
      });
       */
      onError?.(message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    videoUrl,
    isLoading,
    previewVideo,
    getRandomExampleVideo,
  };
};
