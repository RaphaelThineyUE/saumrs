import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Order } from './pages/Order';
import { FivePillars, Ingredients, Subscriptions, NotFound } from './pages/index';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/five-pillars" element={<FivePillars />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
