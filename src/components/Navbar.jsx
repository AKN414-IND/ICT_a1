import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <Nav className="justify-content-evenly bg-dark py-3">
        <Link to="/">
          <img src="https://logopond.com/logos/211d9c927ce358e20581c624b74aaae1.png" alt="Logo" height="40" width="auto" />
        </Link>
        <Nav.Item>
          <Link to="/" className="nav-link">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/form" className="nav-link">Form</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about" className="nav-link">About</Link>
        </Nav.Item>
        <Nav.Item>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navbar;
