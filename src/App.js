import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import CriarAcc from "./pages/criarconta/CriarAcc";
import Produtos from "./pages/produtos/Produtos";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criaracc" element={<CriarAcc />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
