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
          background: "var(--glow-yellow)",
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
          background: "var(--glow-green)",
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
          background: "var(--glow-pink)",
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
          background: "var(--glow-yellow)",
          filter: "blur(100px)",
          animation: "glow-pulse 5s ease-in-out infinite",
          willChange: "transform, opacity",
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
