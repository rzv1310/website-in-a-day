import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Play } from "lucide-react";

const VIDEOS = [
  { id: "v1", src: "https://pub-7f35c0e19c404b49927a663db02e4dd9.r2.dev/av_doc.mp4", name: "Bogdan L.", caption: "Site-ul meu e senzațional!" },
  { id: "v2", src: "https://pub-7f35c0e19c404b49927a663db02e4dd9.r2.dev/rentea.mp4", name: "Andreea R.", caption: "Am primit exact ce mi-am dorit!" },
];

function PhoneVideo({ video }: { video: (typeof VIDEOS)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.muted = false;
      el.play().catch(() => {});
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  }, []);

  return (
    <div className="relative rounded-[2.5rem] md:rounded-[3rem] bg-gray-900 p-2 md:p-3 shadow-2xl shadow-black/30 w-fit mx-auto">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-5 md:h-7 bg-gray-900 rounded-b-2xl z-20" />

      {/* Screen */}
      <div
        className="relative rounded-[2rem] md:rounded-[2.4rem] overflow-hidden bg-black aspect-[9/16]"
        style={{ height: "min(70vh, 600px)" }}
      >
        <video
          ref={videoRef}
          src={`${video.src}#t=0.001`}
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          onClick={togglePlay}
        />

        {/* Big play button overlay — visible when paused */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300"
          style={{
            opacity: playing ? 0 : 1,
            pointerEvents: playing ? "none" : "auto",
          }}
          aria-label="Play video"
        >
          <div className="bg-black/50 backdrop-blur-sm rounded-full p-6 md:p-8 transition-transform hover:scale-110 active:scale-95">
            <Play className="w-12 h-12 md:w-14 md:h-14 text-white fill-white" />
          </div>
        </button>

        {/* Tap-to-pause overlay — visible when playing */}
        {playing && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 z-10"
            aria-label="Pause video"
          />
        )}

        {/* Bottom overlay with name/caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 pt-20 z-10 pointer-events-none">
          <p className="font-display text-white text-base font-semibold">
            {video.name}
          </p>
          <p className="font-body text-white/80 text-sm mt-1">
            {video.caption}
          </p>
        </div>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center mt-1.5 md:mt-2">
        <div className="w-20 md:w-28 h-1 bg-gray-600 rounded-full" />
      </div>
    </div>
  );
}

const VideoFeedSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[19px] tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Testimoniale Video
          </p>
          <div className="divider-gold w-16 mx-auto mt-6" />
        </motion.div>

        {/* Grid: 1 col on mobile, 2 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-12 justify-items-center">
          {VIDEOS.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <PhoneVideo video={video} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoFeedSection;
