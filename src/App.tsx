import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppWrapper from "./components/AppWrapper";
import ProductDetail from "./pages/ProductDetail";
import PurchaseCompletion from "./pages/PurchaseCompletion";
import AboutUs from "./pages/AboutUs";
import PurchaseOrder from "./pages/PurchaseOrder";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppWrapper />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:name" element={<AllProducts />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/purchase-completion" element={<PurchaseCompletion />} />
          <Route path="/purchaseOrder" element={<PurchaseOrder />} />
          <Route path="/aboutUs" element={<AboutUs />} />

        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
