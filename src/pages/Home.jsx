import React from "react";
import Slider from "../components/Slider";
import Features from "../components/Features";
import bannerClub from "../assets/bannerClub.png"
import bgGecis from "../assets/bgGecis.png"
import CountdownTimer from "../components/CountdownTimer";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import EducationSystem from "../components/EducationSystem";
import Articles from "../components/Articles";
import Comments from "../components/Comments";
import BottomFooter from "../components/BottomFooter";


const Home = () => {
  const yksDate = '2025-06-22T10:00:00';
  return (
    <main className="w-full ">
      <Slider />
     <Features/>
     <section className="md:m-20" >
      <img  src={bannerClub} className="w-full object-contain cursor-pointer"/>
     </section>

     <CountdownTimer targetDate={yksDate} />
     <img src={bgGecis} alt="" className="w-full" />
     <Courses/>
     <EducationSystem/>
     <Articles/>
     <Comments/>
     <Footer/>
     <BottomFooter/>
    
    </main>
  );
};

export default Home;
