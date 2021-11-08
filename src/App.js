import './App.css';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import Header from './components/Header';
import Overview from './components/Overview';
import Team from './components/Team';
import Technologies from './components/Technologies';
import Login from './dashboard/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom';
import AdminPanel from './dashboard/AdminPanel';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/react-admin" exact element={<Login />} />
          <Route path="/dashboard" exact element={<AdminPanel />} />
          <Route path="/" element={
            <>
              <Overview />
              <Technologies />
              <Team />
              <Faqs />
            </>
          } />
        </Routes>
      </Router>
      <Footer />
    </div >
  );
}

export default App;
