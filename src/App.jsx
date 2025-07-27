import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-primaryText">
      <Navbar />

      <main className="flex-grow flex p-6">
        {/* Left Side: 3 Links */}
        <div className="w-2/5 flex flex-col justify-between space-y-4">
          {['Portraits', 'Landscapes', 'Street'].map((label, index) => (
            <a
              key={index}
              href={`/${label.toLowerCase()}`}
              className="flex-1 bg-white hover:bg-highlight text-center flex items-center justify-center text-xl font-semibold rounded shadow transition duration-200 text-accent"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right Side: About Me */}
        <div className="w-3/5 pl-8 text-secondaryText">
          <h2 className="text-3xl font-bold mb-4 text-primaryText">About Me</h2>
          <p className="text-lg leading-relaxed">
            I'm a passionate photographer who captures unique moments through the lens. From serene landscapes to raw urban life, I strive to tell stories in every frame.
          </p>
          <p className="mt-4">
            This portfolio showcases my style across various photography categories. Browse through the gallery to explore.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
