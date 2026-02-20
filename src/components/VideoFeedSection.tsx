import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const VIDEOS = [
  { id: "v1", src: "https://pub-7f35c0e19c404b49927a663db02e4dd9.r2.dev/av_doc.mp4", name: "Bogdan L.", caption: "Site-ul meu e senzațional!" },
  { id: "v2", src: "https://pub-7f35c0e19c404b49927a663db02e4dd9.r2.dev/rentea.mp4", name: "Andreea R.", caption: "Am primit exact ce mi-am dorit!" },
];

function VideoItem({
  video,
  isActive,
  isMuted,
  onToggleMute,
}: {
  video: (typeof VIDEOS)[number];
  isActive: boolean;
  isMuted: boolean;
  onToggleMute: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (isActive) {
      el.play().catch(() => {});
      setPaused(false);
    } else {
      el.pause();
      el.currentTime = 0;
      setPaused(true);
    }
  }, [isActive]);

  const togglePlay = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play().catch(() => {});
      setPaused(false);
    } else {
      el.pause();
      setPaused(true);
    }
  }, []);

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        src={video.src}
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        onClick={togglePlay}
      />

      {/* Play/Pause center overlay */}
      <button
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-300"
        style={{
          opacity: paused ? 1 : 0,
          pointerEvents: paused ? "auto" : "none",
        }}
        aria-label={paused ? "Play" : "Pause"}
      >
        <div className="bg-black/40 backdrop-blur-sm rounded-full p-5">
          {paused ? (
            <Play className="w-10 h-10 text-white fill-white" />
          ) : (
            <Pause className="w-10 h-10 text-white fill-white" />
          )}
        </div>
      </button>

      {/* Mute/Unmute button — top right */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleMute();
        }}
        className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-sm rounded-full p-2.5 transition-transform active:scale-90"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-white" />
        ) : (
          <Volume2 className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 pt-20">
        <p className="font-display text-white text-base font-semibold">
          {video.name}
        </p>
        <p className="font-body text-white/80 text-sm mt-1">
          {video.caption}
        </p>
      </div>
    </div>
  );
}

const VideoFeedSection = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const activeIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);

  // Keep ref in sync for use in touch handlers
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Scroll position drives active video index (desktop)
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleScroll = () => {
      // Skip scroll-driven updates while a programmatic scroll is in progress
      if (isAnimatingRef.current) return;

      const rect = wrapper.getBoundingClientRect();
      const scrolled = -rect.top;
      const segmentHeight = window.innerHeight;

      if (scrolled < 0) {
        setActiveIndex(0);
        return;
      }

      const idx = Math.min(
        VIDEOS.length - 1,
        Math.floor(scrolled / segmentHeight)
      );
      setActiveIndex(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Touch swipe handling on the phone screen
  useEffect(() => {
    const screen = screenRef.current;
    if (!screen) return;

    let touchStartY = 0;
    let touchStartTime = 0;
    let isSwiping = false;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
      isSwiping = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isSwiping) return;
      // Prevent page scroll while swiping on the video
      e.preventDefault();
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!isSwiping) return;
      isSwiping = false;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      const elapsed = Date.now() - touchStartTime;

      // Need at least 40px swipe or fast flick
      const isSwipe = Math.abs(deltaY) > 40 || (Math.abs(deltaY) > 20 && elapsed < 300);
      if (!isSwipe) return;

      const current = activeIndexRef.current;

      if (deltaY > 0 && current < VIDEOS.length - 1) {
        // Swipe up → next video
        setActiveIndex(current + 1);
        // Also scroll the page so the sticky wrapper stays in sync
        scrollWrapperToIndex(current + 1);
      } else if (deltaY < 0 && current > 0) {
        // Swipe down → previous video
        setActiveIndex(current - 1);
        scrollWrapperToIndex(current - 1);
      } else if (deltaY > 0 && current === VIDEOS.length - 1) {
        // At last video swiping up — scroll page past the section
        const wrapper = wrapperRef.current;
        if (wrapper) {
          const wrapperBottom = wrapper.getBoundingClientRect().bottom + window.scrollY;
          window.scrollTo({ top: wrapperBottom, behavior: "smooth" });
        }
      } else if (deltaY < 0 && current === 0) {
        // At first video swiping down — scroll page above the section
        const wrapper = wrapperRef.current;
        if (wrapper) {
          const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: wrapperTop - window.innerHeight, behavior: "smooth" });
        }
      }
    };

    screen.addEventListener("touchstart", onTouchStart, { passive: true });
    screen.addEventListener("touchmove", onTouchMove, { passive: false });
    screen.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      screen.removeEventListener("touchstart", onTouchStart);
      screen.removeEventListener("touchmove", onTouchMove);
      screen.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const scrollWrapperToIndex = (idx: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    isAnimatingRef.current = true;
    const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
    // +10 offset to land solidly inside the target segment, not on the boundary
    const target = wrapperTop + idx * window.innerHeight + 10;
    window.scrollTo({ top: target, behavior: "smooth" });
    // Release after smooth scroll likely finishes
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 700);
  };

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  // Tall wrapper: 1 viewport per video + 1 extra to scroll out
  const wrapperHeight = `${(VIDEOS.length + 1) * 100}vh`;

  return (
    <section className="bg-background">
      {/* Header — scrolls normally above the sticky area */}
      <div className="px-6 pt-24 md:pt-32 pb-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[19px] tracking-[0.3em] uppercase text-primary mb-4 font-body">
              Testimoniale Video
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Ascultă poveștile clienților
            </h2>
            <div className="divider-gold w-16 mx-auto mt-6" />
          </motion.div>
        </div>
      </div>

      {/* Tall scroll wrapper — page scroll drives video transitions */}
      <div ref={wrapperRef} style={{ height: wrapperHeight }}>
        {/* Sticky container — stays pinned while scrolling through wrapper */}
        <div className="sticky top-0 h-screen flex items-center justify-center px-4">
          {/* Phone frame — always visible */}
          <div className="relative rounded-[2.5rem] md:rounded-[3rem] bg-gray-900 p-2 md:p-3 shadow-2xl shadow-black/30 w-fit">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-5 md:h-7 bg-gray-900 rounded-b-2xl z-20" />

            {/* Screen */}
            <div
              ref={screenRef}
              className="relative rounded-[2rem] md:rounded-[2.4rem] overflow-hidden bg-black aspect-[9/16]"
              style={{ height: "min(80vh, 720px)" }}
            >
              {/* Only render active video + neighbors to avoid flicker */}
              {VIDEOS.map((video, idx) => {
                const isNear = Math.abs(idx - activeIndex) <= 1;
                if (!isNear) return null;

                return (
                  <div
                    key={video.id}
                    className="absolute inset-0 transition-opacity duration-400"
                    style={{
                      opacity: activeIndex === idx ? 1 : 0,
                      pointerEvents: activeIndex === idx ? "auto" : "none",
                    }}
                  >
                    <VideoItem
                      video={video}
                      isActive={activeIndex === idx}
                      isMuted={isMuted}
                      onToggleMute={toggleMute}
                    />
                  </div>
                );
              })}

              {/* Pagination dots */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-20">
                {VIDEOS.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx
                        ? "bg-primary scale-125"
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

              {/* Scroll hint — only on first video */}
              <div
                className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 transition-opacity duration-500"
                style={{ opacity: activeIndex === 0 ? 0.7 : 0 }}
              >
                <div className="w-5 h-8 rounded-full border-2 border-white/60 flex items-start justify-center p-1">
                  <div className="w-1 h-2 bg-white/80 rounded-full animate-bounce" />
                </div>
              </div>
            </div>

            {/* Home indicator */}
            <div className="flex justify-center mt-1.5 md:mt-2">
              <div className="w-20 md:w-28 h-1 bg-gray-600 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoFeedSection;
