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
import { useEffect, useState } from 'react';
import { auth } from './Firebase';
import Workshops from './components/Workshops';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Overview />
              <Workshops />
              <Technologies />
              <Team />
              <Faqs />
              <Footer />
            </>
          } />
          <Route path="/dashboard" exact element={user ? <AdminPanel /> : <Login />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
