export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,0.05),transparent_70%)]" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div>
            <div className="text-2xl font-black tracking-widest gradient-text mb-1">BERGIA</div>
            <p className="text-white/30 text-xs">君の挑戦に、スポットライトを。</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/60 transition-colors">Contact Us</a>
            <a href="#" className="hover:text-white/60 transition-colors">Careers</a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs">
            © 2024 Bergia Career Draft Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
