import './App.css';
import Header from './component/Header/Header';
import HeroSection from './component/HeroSection/HeroSection';
import Collections from './component/Collections/Collections';
import WhyChoose from './component/WhyChoose/WhyChoose';
import BuySection from './component/BuySection/BuySection';
import FeatureOne from './component/FeatureOne/FeatureOne';
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeatureOne />
      <WhyChoose />
      <BuySection />
    </div>
  );
}

export default App;
