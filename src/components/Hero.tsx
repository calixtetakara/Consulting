import { useState, useEffect } from "react";

const slides = [
  {
    backgroundImage: "url('/informatiqueG.png')",
    title: "Technologies informatiques générales",
    description:
      "Formations en informatique, bureautique, réseaux et infographie pour maîtriser les outils du quotidien et professionnels.",
    link: "#services",
    btnText: "Découvrir nos services",
  },
  {
    backgroundImage: "url('/Stat.png')",
    title: "Analyse statistique et visualisation des données",
    description:
      "Analysez et visualisez vos données pour prendre des décisions fiables et précises.",
    link: "#contact",
    btnText: "Nous contacter",
  },
  {
    backgroundImage: "url('/planisphèreAcc.png')",
    title: "Cartographie, SIG et projets intelligents",
    description:
      "Analysez vos données spatiales et profitez de croquis et cartes sur mesure conçus par le cabinet pour vos projets.",
    link: "#services",
    btnText: "Découvrir nos services",
  },
  {
    backgroundImage: "url('Dep.jfif')",
    title: "Énergies solaires et solutions innovantes",
    description:
      "Apprenez l'installation solaire, les réseaux WIFI et les systèmes de surveillance modernes pour un futur technologique durable.",
    link: "#contact",
    btnText: "Nous contacter",
  },
  {
    backgroundImage: "url('/IA_Accu.jpg')",
    title: "Maîtrisez l'Intelligence Artificielle",
    description:
      "Découvrez les concepts fondamentaux et les applications de l'IA dans le monde moderne",
    link: "#services",
    btnText: "Découvrir nos services",
  },
];

/* Seul ce keyframe ne peut pas être exprimé en classe Tailwind pure */
const globalStyles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .hero-animate {
    animation: fadeIn 1s ease-in;
  }
`;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{globalStyles}</style>

      {/* Slider — colle directement sous la navbar fixed grâce à mt-0 */}
      <section
        id="accueil"
        className="relative w-full h-screen overflow-hidden mt-0"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`
            absolute inset-0
            flex items-center
            bg-cover bg-center
            transition-opacity duration-1000
            ${i === activeIndex ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}

            style={{
              /* Le dégradé + image ne peuvent pas être combinés en Tailwind pur */
              background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), ${slide.backgroundImage} no-repeat center center / cover`,
            }}
          >
            {/* Contenu du slide — responsive via breakpoints Tailwind */}
            <div className="container hero-animate w-full max-w-3xl mx-auto text-center text-white px-5 sm:px-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-tight mb-5">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8">
                {slide.description}
              </p>

              {/* Bouton : bleu → noir au hover */}
              <a
                href={slide.link}
                className="
                  inline-block
                  px-6 py-3
                  rounded
                  font-medium
                  text-sm sm:text-base
                  no-underline
                 bg-[#335299] text-white
                  transition-colors duration-300
                  hover:bg-[#918123] hover:text-white
                "
              >
                {slide.btnText}
              </a>
            </div>
          </div>
        ))}

        {/* Dots de navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
          {slides.map((_, i) => (
            <div
              key={i}
              data-slide={i}
              onClick={() => setActiveIndex(i)}
              className={`
                w-3 h-3 rounded-full cursor-pointer
                transition-colors duration-300
                ${i === activeIndex ? "bg-white" : "bg-white/40"}
              `}
            />
          ))}
        </div>
      </section>
    </>
  );
}