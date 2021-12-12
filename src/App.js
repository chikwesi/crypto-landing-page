import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Hero from './components/hero'
import Feature from './components/feature';
import GetStarted from './components/get-started';
import Security from './components/security';
import Testimonial from './components/testimonial';
import CallToAction from './components/call-to-action';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Hero />
      <Feature />
      <GetStarted />
      <Security />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
