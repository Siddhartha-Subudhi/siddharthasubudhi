import Link from "next/link";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
export default function Header(){
  const [dark, setDark] = useState(true);
  const toggle = () => {
    const root = document.documentElement;
    if(dark){ root.classList.remove("light"); root.classList.add("dark"); }
    else { root.classList.remove("dark"); root.classList.add("light"); }
    setDark(!dark);
  };
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brandNavy/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brandTeal to-brandGold grid place-items-center text-slate-900 font-bold">S</div>
          <span className="font-semibold">Siddhartha Subudhi</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200/90">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Case Studies</a>
          <a href="#learn" className="hover:text-white">Learn</a>
          <a href="#blogs" className="hover:text-white">Blogs</a>
          <a href="#testimonials" className="hover:text-white">Praise</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={toggle} className="hidden sm:inline-flex items-center gap-2 rounded-xl px-3 py-1 border border-white/10">
            {dark ? <Sun size={14}/> : <Moon size={14}/>} Theme
          </button>
          <a href="#contact" className="inline-flex"><button className="rounded-xl bg-brandGold px-4 py-2 text-slate-900 font-medium">Let’s Talk</button></a>
        </div>
      </div>
    </header>
  );
}
