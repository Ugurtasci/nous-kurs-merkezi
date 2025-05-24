import React from "react";
import Slider from "../components/Slider";
import Features from "../components/Features";
import bannerClub from "../assets/bannerClub.png"


const Home = () => {
  return (
    <main>
      <Slider />
     <Features/>
     <section className="m-20" >
      <img  src={bannerClub} className="w-full object-contain cursor-pointer"/>
     </section>
    
    </main>
  );
};

export default Home;
