import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <Routes>
      {/* Parent Route it become outlet */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

        {/* Dynamic Route */}
        <Route path="product/:id" element={<ProductDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
