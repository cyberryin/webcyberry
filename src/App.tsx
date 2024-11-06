import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import '@fontsource/montserrat';
import '@fontsource/roboto';
import './styles/globals.css';

function App() {
  useEffect(() => {
    document.title = 'Digital Transformation Partner';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;