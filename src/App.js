import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import CriarAcc from "./pages/criarconta/CriarAcc";
import Produtos from "./pages/produtos/Produtos";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { useEffect } from "react";
import mongoose from "mongoose";

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

mongoose.connect(
  `mongodb+srv://rodolfo-admin:31ijIcDy82Mz7TiO@cluster0.mfuhnkh.mongodb.net/vikingStoreDB?retryWrites=true&w=majority`
);

// mongoose
//   .connect(
//     `mongodb+srv://rodolfo-admin:31ijIcDy82Mz7TiO@cluster0.mfuhnkh.mongodb.net/vikingStoreDB?retryWrites=true&w=majority`,
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => console.log("MongoDB Atlas Connected"))
//   .catch((error) => console.log(error));

function App() {
  useEffect(() => {}, []);

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
