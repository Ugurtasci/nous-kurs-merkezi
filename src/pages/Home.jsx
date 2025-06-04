import React from "react";
import Slider from "../components/Slider";
import Features from "../components/Features";
import bannerClub from "../assets/bannerClub.png"
import bgGecis from "../assets/bgGecis.png"
import CountdownTimer from "../components/CountdownTimer";
import Courses from "../components/Courses";

import EducationSystem from "../components/EducationSystem";
import Articles from "../components/Articles";
import Comments from "../components/Comments";



const Home = () => {
  const yksDate = '2025-06-22T10:00:00';

  const handleWhatsappRedirect = () => {
    // Whatsapp numarası ve mesaj
    const phoneNumber = '+90 543 223 7900'; // Örnek bir numara
    const message = 'Merhaba, bilgi almak istiyorum.';

    // Whatsapp uygulamasına yönlendirme URL'i
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Yönlendirme işlemi
    window.location.href = whatsappUrl;
};
  return (
    <main className="w-full mt-14 md:mt-20  ">
      <Slider />
     <Features/>
     <section onClick={handleWhatsappRedirect} className="md:m-20" >
      <img  src={bannerClub} className="w-full object-contain cursor-pointer"/>
     </section>

     <CountdownTimer targetDate={yksDate} />
     <img src={bgGecis} alt="" className="w-full" />
     <Courses/>
     <EducationSystem/>
     <Articles/>
     <Comments/>
     <img src={bgGecis} alt="" className="w-full h-36" />
    
    </main>
  );
};

export default Home;
