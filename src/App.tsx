import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

// tes imports...
import Navbar from './components/Navbar';
import HeroSlider from './components/Hero';
import ServicesSection from './components/service';
import NosRealisations from './components/realisation';
import KoyomaDetail from './components/realisations/koyoma';
import SolaireDetail from "./components/realisations/Solaire";
import StagiairesDetail from "./components/realisations/Stagiaires";
import CollecteDetail from "./components/realisations/Collecte";
import SIGDetail from "./components/realisations/Sig";
import ImpactEnChiffres from "./components/Satisfaction";
import ScrollToTop from './components/ScrollToTop';
import ContactSection from './components/Contactsection';
import MapSection from './components/map';
import Footer from './components/footer';

const Home = () => (
  <>
    <Navbar />
    <HeroSlider />
    <ServicesSection />
    <NosRealisations />
    <ImpactEnChiffres />
    <ContactSection />
    <MapSection />
    <Footer />
  </>
);

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />

      {!loading && (
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/realisations/koyoma" element={<KoyomaDetail />} />
            <Route path="/realisations/stages" element={<StagiairesDetail />} />
            <Route path="/realisations/collecte" element={<CollecteDetail />} />
            <Route path="/realisations/solaire" element={<SolaireDetail />} />
            <Route path="/realisations/cartographie" element={<SIGDetail />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
