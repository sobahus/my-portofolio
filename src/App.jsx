import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
