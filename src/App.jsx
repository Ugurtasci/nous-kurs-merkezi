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
import MissionVision from "./pages/MissionVision";
import History from "./pages/History";
import WhatsApp from "./components/WhatsApp";
import GoUpButton from "./components/GoUpButton";
import SliderDetail from "./pages/SliderDetail";

import OurCourses from "./pages/OurCourses";


function App() {
  return (
    <>
      <BrowserRouter>
        <TopHeader />
        <Header />
        <Routes >
         <Route path="/" element={<Home/>} />  
           <Route path="/hakkimizda" element={<About />} />
            <Route path="/misyon-vizyon" element={<MissionVision />} />
            <Route path="/tarihce" element={<History />} />
            <Route path="/haberler/:id" element={<SliderDetail />} />
            <Route path="/kurslarimiz" element={<OurCourses />} />

            
        </Routes>
        <WhatsApp/>
        <GoUpButton/>
        <Footer/>
        <BottomFooter/>
      </BrowserRouter>
    </>
  );
}

export default App;
