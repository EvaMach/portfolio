const Footer = () => {
  return (
    <footer
      className="flex flex-wrap justify-between items-center gap-2 px-5 sm:px-10 md:px-[15%] py-6 mt-8"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        color: "var(--text-secondary)",
        fontSize: "0.875rem",
      }}
    >
      <span>©2026 Eva Machová</span>
    </footer>
  );
};

export default Footer;
