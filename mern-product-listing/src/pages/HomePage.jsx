import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../features/products/productSlice";

import ProductCard from "../components/ProductCard";

const HomePage = () => {
  // fetchProducts stored in dispatch
  const dispatch = useDispatch();

  // Access Redux state
  const { products, loading } = useSelector((state) => state.products);

  // page load
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>All Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
