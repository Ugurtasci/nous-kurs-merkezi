import React from "react";
import Courses from "../components/Courses";
import bgGecis from "../assets/bgGecis.png";
import kurslarımız from "../assets/kurslarımız.png";
import AnimatedStatSection from "../components/AnimatedStatSection";
import { Link } from "react-router-dom";


const OurCourses = () => {
  return (
    <main className="w-full mt-20 ">
      <section className="w-full ">
        <img
          src={kurslarımız}
          alt="logo"
          className="w-full object-fit-contain"
        />
      </section>
       <section className='w-full py-4 shadow-lg border-b border-slate-200  px-5 lg:px-20 bg-[#f8f8f8] flex items-center
       text-sm text-slate-500'>
        <Link to={"/"}>Ana Sayfa </Link>
        <p> / Kurslarımız</p>
      </section> 
      <Courses />
      <img src={bgGecis} alt="" className="w-full" />
      <AnimatedStatSection />
    </main>
  );
};

export default OurCourses;
