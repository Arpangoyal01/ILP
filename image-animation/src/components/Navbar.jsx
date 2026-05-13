import { Link } from "react-router-dom";
import Loader from "../components/Loader";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Animation App</h2>
      <Loader />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
