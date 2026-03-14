const BackgroundEffects = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute rounded-full"
        style={{
          width: "480px",
          height: "480px",
          top: "-80px",
          right: "-100px",
          background:
            "radial-gradient(circle at 40% 40%, rgba(255,207,25,0.22) 0%, rgba(255,160,50,0.12) 50%, transparent 80%)",
          filter: "blur(90px)",
          animation: "drift 22s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      <div
        className="absolute rounded-full"
        style={{
          width: "360px",
          height: "360px",
          top: "30%",
          left: "-80px",
          background:
            "radial-gradient(circle at 55% 45%, rgba(110,231,183,0.18) 0%, rgba(52,211,153,0.09) 50%, transparent 80%)",
          filter: "blur(80px)",
          animation: "drift 28s ease-in-out infinite 4s",
          willChange: "transform",
        }}
      />

      <div
        className="absolute rounded-full"
        style={{
          width: "300px",
          height: "300px",
          top: "50%",
          right: "5%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(244,114,182,0.18) 0%, rgba(192,38,211,0.09) 55%, transparent 80%)",
          filter: "blur(80px)",
          animation: "drift 32s ease-in-out infinite 8s",
          willChange: "transform",
        }}
      />

      <div
        className="absolute rounded-full"
        style={{
          width: "400px",
          height: "400px",
          bottom: "5%",
          left: "10%",
          background:
            "radial-gradient(circle at 45% 55%, rgba(255,207,25,0.18) 0%, rgba(250,170,30,0.08) 55%, transparent 80%)",
          filter: "blur(100px)",
          animation: "glow-pulse 5s ease-in-out infinite",
          willChange: "transform, opacity",
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
