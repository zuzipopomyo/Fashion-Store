import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppWrapper from "./components/AppWrapper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppWrapper />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
