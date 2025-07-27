export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white border-b shadow-sm">
      <h1 className="text-xl font-bold text-primaryText">MyPortfolio</h1>
      <ul className="flex space-x-6 text-sm text-secondaryText">
        <li><a href="#gallery" className="hover:text-accent">Gallery</a></li>
        <li><a href="#about" className="hover:text-accent">About</a></li>
        <li><a href="#contact" className="hover:text-accent">Contact</a></li>
      </ul>
    </nav>
  );
}
