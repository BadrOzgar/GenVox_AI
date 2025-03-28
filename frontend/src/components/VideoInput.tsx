import { Play } from "lucide-react";
import React, { useState } from "react";
/* import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Play } from "lucide-react"; */

interface VideoInputProps {
  onSubmit: (url: string) => void;
  isLoading?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const VideoInput: React.FC<VideoInputProps> = ({
  onSubmit,
  isLoading = false,
  style,
}) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    alert(
      "We reached the tokens limit provided by OpenAI. We will update them as soon as possible"
    );
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4" style={style}>
      <div className="space-y-2">
        <label
          htmlFor="video-url"
          className="text-sm font-medium leading-none text-muted-foreground"
        >
          Enter Video URL
        </label>
        <div className="relative input-focus-animation rounded-lg">
          <input
            id="video-url"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/video.mp4"
            className="pr-4 h-12 border-muted/40 rounded-lg w-full"
            disabled={isLoading}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading || !url.trim()}
        className="cursor-pointer w-full h-12 rounded-lg button-hover-effect transition-all duration-300 ease-in-out bg-primary hover:bg-primary/90 font-medium text-primary-foreground"
      >
        <span className="flex items-center justify-center gap-2 text-center transition-transform duration-300 cursor-pointer w-full">
          <Play size={16} className="relative" />
          <span>Preview Video</span>
        </span>
      </button>
    </form>
  );
};

export default VideoInput;
