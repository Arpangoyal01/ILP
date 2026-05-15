import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>MERN Shop</h2>

      <div>
        <Link to="/">Home</Link>

        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
