import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} width="200" />

      <h3>{product.title}</h3>

      <p>₹ {product.price}</p>

      <p>⭐ {product.rating}</p>

      {/* Open PDP */}
      <Link to={`/product/${product._id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
