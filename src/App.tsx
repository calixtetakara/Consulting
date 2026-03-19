import { BrowserRouter, Routes, Route } from 'react-router-dom';
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


// Page d'accueil regroupant tous les composants principaux
const Home = () => (
  <>
    <Navbar />
    <HeroSlider />
    <ServicesSection />
    <NosRealisations />
    <ImpactEnChiffres/>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page principale */}
        <Route path="/" element={<Home />} />

        {/* Page de détail Koyoma */}
        <Route path="/realisations/koyoma" element={<KoyomaDetail />} />
        <Route path="/realisations/stages" element={<StagiairesDetail />} />
        <Route path="/realisations/collecte" element={<CollecteDetail />} />
        <Route path="/realisations/solaire" element={<SolaireDetail />} />
        <Route path="/realisations/cartographie" element={<SIGDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;