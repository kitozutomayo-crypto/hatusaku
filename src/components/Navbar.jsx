import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Wenkang Chen
      </div>

      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#self-pr">自己PR</a></li>
        <li><a href="#gakuchika">ガクチカ</a></li>
        <li><a href="#study">Study</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar