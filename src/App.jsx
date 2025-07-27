import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
  <div className="page-container">
    <Navbar />
    <main className="main-layout">
      <div className="left-panel">
        <a href="#">Portraits</a>
        <a href="#">Landscapes</a>
        <a href="#">Street</a>
      </div>
      <div className="right-panel">
        <h2>About Me</h2>
        <p>...</p>
      </div>
    </main>
    <Footer />
  </div>
);
}
