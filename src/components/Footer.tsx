export default function Footer() {
  return (
    <footer className="bg-[#0b0b12] border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white font-black text-lg tracking-widest">BERGIA</p>
        <p className="text-gray-600 text-xs">© 2024 Bergia Career Draft Platform. All rights reserved.</p>
        <nav className="flex gap-5 text-xs text-gray-500">
          {["Privacy Policy","Terms of Service","Contact Us","Careers"].map((l) => (
            <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
