import React from 'react'
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Pricing from './components/Pricing/Pricing';
import PaymentGateway from './components/paymentGateway/PaymentGateway';
import ScanToPay from './components/ScanToPay/ScanToPay';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/payment-gateway' element={<PaymentGateway />} />
          <Route path='/scan-to-pay' element={<ScanToPay />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
