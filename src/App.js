import './App.css';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import Header from './components/Header';
import Overview from './components/Overview';
import Team from './components/Team';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="App">
      <Header />
      <Overview />
      <Technologies />
      <Team />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
