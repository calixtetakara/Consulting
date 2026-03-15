import { useState, useEffect } from "react";

interface Lien {
  label: string;
  href: string;
}

const NAV_LINKS: Lien[] = [
  { label: "Accueil", href: "#accueil" },
  { label: "Nos formations", href: "#formations" },
  { label: "Nos services", href: "#services" },
  { label: "Nos réalisations", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

function NavLink({ lien, onClick }: { lien: Lien; onClick: (href: string) => void }) {
  return (
    <button
      onClick={() => onClick(lien.href)}
      className="relative bg-transparent border-none cursor-pointer text-white text-sm sm:text-base font-medium tracking-wide py-1 px-0 whitespace-nowrap transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:rounded-sm after:transition-all after:duration-200 hover:text-yellow-400 hover:after:w-full"
    >
      {lien.label}
    </button>
  );
}

function MobileNavLink({ lien, onClick }: { lien: Lien; onClick: (href: string) => void }) {
  return (
    <button
      onClick={() => onClick(lien.href)}
      className="bg-transparent border-none cursor-pointer text-white text-sm font-medium tracking-wide py-2 px-4 w-full text-center border-b border-white/10 transition-colors duration-200 hover:text-yellow-400"
    >
      {lien.label}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOuvert, setMenuOuvert] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    document
      .getElementById(href.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOuvert(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a2463]/95 backdrop-blur-md shadow-lg"
          : "bg-[#335299] backdrop-blur-none"
      }`}
    >
      {/* Barre principale */}
      <div className="max-w-275 mx-auto flex justify-between items-center h-17.5 px-10">
        {/* Logo */}
        <div className="shrink-0 cursor-pointer" onClick={() => handleNav("#accueil")}>
          <img
            src="/Logo2.png"
            alt="2SP Consulting"
            className="h-12.5 w-auto rounded-[50px]"
          />
        </div>

        {/* Liens desktop */}
        <nav className="hidden md:flex gap-9 items-center">
          {NAV_LINKS.map((lien) => (
            <NavLink key={lien.label} lien={lien} onClick={handleNav} />
          ))}
        </nav>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMenuOuvert(!menuOuvert)}
          aria-label="Ouvrir le menu"
          className="flex flex-col gap-1.5 md:hidden bg-transparent border-none cursor-pointer p-1"
        >
          <span className="block w-5 h-0.5 bg-white rounded-sm" />
          <span className="block w-5 h-0.5 bg-white rounded-sm" />
          <span className="block w-5 h-0.5 bg-white rounded-sm" />
        </button>
      </div>

      {/* Menu mobile */}
      {menuOuvert && (
        <div className="flex flex-col gap-4 items-center bg-[#0a2463] border-t border-yellow-400/20 py-5 px-10 md:hidden">
          {NAV_LINKS.map((lien) => (
            <MobileNavLink key={lien.label} lien={lien} onClick={handleNav} />
          ))}
        </div>
      )}
    </header>
  );
}
