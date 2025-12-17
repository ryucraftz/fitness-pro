import Hero from './components/Hero';
import CoachIntro from './components/CoachIntro';
import ProgramDetails from './components/ProgramDetails';
import Comparison from './components/Comparison';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <CoachIntro />
      <ProgramDetails />
      <Comparison />
      <Benefits />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
