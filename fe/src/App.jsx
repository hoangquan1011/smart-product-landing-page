import './App.css';
import Header from './component/Header/Header';
import HeroSection from './component/HeroSection/HeroSection';
import Collections from './component/Collections/Collections';
import WhyChoose from './component/WhyChoose/WhyChoose';
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Collections />
      <WhyChoose />
    </div>
  );
}

export default App;
