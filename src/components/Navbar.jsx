export default function Navbar() {
  return (
    <nav className="navbar">
      <a className="logo" href="#home"><h1>MyPortfolio</h1></a>
      <ul className="nav-links">
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
