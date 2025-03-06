import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppWrapper from "./components/AppWrapper";
import CustomerReview from "./components/CustomerReview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppWrapper />}>
          <Route index element={<Home />} />
          <Route path="/customer-review" element={<CustomerReview />} />
        </Route>
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
