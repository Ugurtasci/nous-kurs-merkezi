import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import About from "./components/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopHeader />
        <Header />
        <Routes>
         <Route path="/" element={<Home/>} />  
           <Route path="/hakkimizda" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
