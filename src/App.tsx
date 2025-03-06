import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppWrapper from "./components/AppWrapper";
import ProductDetail from "./pages/ProductDetail";
import ProductCategory from "./pages/ProductCategory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppWrapper />}>
          <Route index element={<Home />} />
          <Route path="/product-category/:name" element={<ProductCategory />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
