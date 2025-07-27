import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
  <div className="page-container">
    <Navbar />
    <main className="main-layout">
      <div className="left-panel">
        <a className='category cat-1' href="#"></a>
        <a className='category cat-2' href="#"></a>
        <a className='category cat-3' href="#"></a> 
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
