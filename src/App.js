import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import Category from "./components/Category";
import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./Styles/app.scss"
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:id" element={<Category/>}/>
      <Route path="/product/:id" element={<Product/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
