export default function Footer() {
  return (
    <footer style={{ background: "#0b0b12", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "32px 0" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-black text-base tracking-widest text-white">BERGIA</p>
        <p className="text-xs" style={{ color: "#4b5563" }}>© 2024 Bergia Career Draft Platform. All rights reserved.</p>
        <nav className="flex gap-5 text-xs" style={{ color: "#6b7280" }}>
          {["Privacy Policy","Terms of Service","Contact Us","Careers"].map((l) => (
            <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
