import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import About from "./pages/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import BottomFooter from "./components/BottomFooter";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopHeader />
        <Header />
        <Routes >
         <Route path="/" element={<Home/>} />  
           <Route path="/hakkimizda" element={<About />} />
        </Routes>
        <Footer/>
        <BottomFooter/>
      </BrowserRouter>
    </>
  );
}

export default App;
