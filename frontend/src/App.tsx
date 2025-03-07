import { useState, useEffect } from "react";
import { Info, Film, Sparkles, Atom } from "lucide-react";
import { useVideoPreview } from "./hooks/useVideoPreview";
import VideoInput from "./components/VideoInput";
import VideoPreview from "./components/VideoPreview";

const Index = () => {
  const { videoUrl, isLoading, previewVideo } = useVideoPreview();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="cosmic-container min-h-screen relative overflow-hidden transition-all duration-1000">
      {/* Smooth gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-primary/5 z-0"></div>

      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-30 animate-gradient-shift z-0"></div>

      <div className="floating-orbs">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="orb absolute rounded-full blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              background: `radial-gradient(circle, hsl(${
                Math.random() * 360
              }, 70%, 70%), transparent)`,
              opacity: 0.1 + Math.random() * 0.1,
              animationDuration: `${Math.random() * 30 + 20}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center w-full min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div
          className={`w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ${
            mounted ? "animate-reveal" : "opacity-0"
          }`}
        >
          <div className="flex flex-col order-2 lg:order-1">
            <div className="prism-card p-7 sm:p-8 rounded-3xl backdrop-blur-md border border-white/10 shadow-neon relative overflow-hidden">
              {/* Subtle glow accent */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-purple-500/10 to-blue-500/20 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 animate-gradient-shift"></div>

              {/* Content */}
              <div className="relative">
                <div className="flex items-center mb-6">
                  <Atom
                    className="text-primary mr-2 animate-pulse-slow"
                    size={20}
                  />
                  <div className="text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 tracking-widest uppercase">
                    GenVox AI – Turn URLs into Videos
                  </div>
                </div>

                <h1 className="text-4xl font-bold tracking-tight mb-2 animate-entrance-reveal bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/90 to-white">
                  Preview Your Videos
                </h1>

                <p
                  className="text-muted-foreground/80 animate-entrance-reveal"
                  style={{ animationDelay: "0.2s" }}
                >
                  Enter a video URL and experience an immersive preview with our
                  cinematic player
                </p>

                <div className="mt-8">
                  <VideoInput
                    onSubmit={previewVideo}
                    isLoading={isLoading}
                    className="animate-entrance-up"
                    style={{ animationDelay: "0.3s" }}
                  />
                </div>

                <div
                  className="mt-6 flex justify-between items-center animate-entrance-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <button
                    onClick={() => previewVideo("example")}
                    className="text-sm group hover:text-primary transition-colors flex items-center gap-1.5 relative"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <Info size={14} className="group-hover:animate-ping-once" />
                    <span className="relative z-10">Try with example</span>
                  </button>

                  <button
                    className="text-xs relative overflow-hidden group"
                    onClick={() => window.location.reload()}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative z-10">Reset</span>
                  </button>
                </div>
              </div>
            </div>

            <div
              className="mt-8 p-5 glass-card rounded-2xl border border-white/10 backdrop-blur-md animate-entrance-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-primary animate-twinkle" />
                <h3 className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                  Quick Tips
                </h3>
              </div>

              <ul className="text-sm text-muted-foreground/90 space-y-3">
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Paste a direct video URL (MP4, WebM, etc.)</span>
                </li>
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Type "example" to see a demo video</span>
                </li>
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <span className="text-primary mt-0.5">•</span>
                  <span>For best results, use direct video file links</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex animate-float-slow">
            <div className="w-full relative">
              {/* Video preview container - adjusting for vertical videos */}
              <div className="aspect-[9/16] md:aspect-auto md:h-full relative">
                {/* Video frame embellishments with softer glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/10 to-blue-500/20 rounded-2xl blur-md opacity-30 animate-pulse-slow"></div>
                <div className="absolute -inset-0.5 border border-white/10 rounded-2xl"></div>

                <div className="relative frame-corners h-full">
                  <VideoPreview
                    url={videoUrl}
                    isLoading={isLoading}
                    className="video-neo shadow-2xl rounded-2xl h-full"
                  />

                  {/* Corner accents with softer appearance */}
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary/40 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary/40 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary/40 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary/40 rounded-br-lg"></div>

                  {/* Film animation overlay only when no video */}
                  {!videoUrl && !isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Film
                        size={40}
                        className="text-white/20 animate-bounce-slow"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
