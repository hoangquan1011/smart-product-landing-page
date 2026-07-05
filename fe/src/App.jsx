import './App.css';
import Header from './component/Header/Header';
import HeroSection from './component/HeroSection/HeroSection';
import WhyChoose from './component/WhyChoose/WhyChoose';
import BuySection from './component/BuySection/BuySection';
import FeatureOne from './component/FeatureOne/FeatureOne';
import FeatureTwo from './component/FeatureTwo/FeatureTwo';
import Specifications from './component/Specifications/Specifications';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeatureOne />
      <FeatureTwo />
      <Specifications />
      <WhyChoose />
      <BuySection />
      <Footer />
    </div>
  );
}

export default App;
