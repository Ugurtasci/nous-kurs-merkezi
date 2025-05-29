import React from "react";
import { teachers } from "../utilis/helper";
import { Link } from "react-router-dom";
import kadromuz from "../assets/kadromuz.png";
import bgGecis from "../assets/bgGecis.png"


const OurTeam = () => {
  const renderTeacher = (data) => (
    <section className="w-full px-32 sm:px-12 md:px-28 lg:px-20 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((item, index) => (
        <article
          key={index}
          className="flex flex-col rounded-2xl  shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
          <div className="h-48 w-48 flex items-center justify-center mx-auto my-4">
            <img
              className="w-full h-full border  rounded-full object-contain"
              src={item.image}
              alt={item.name}
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-xl font-semibold ">{item.name}</p>
            <p className="text-slate-600 mt-1">{item.jop}</p>
          </div>
        </article>
      ))}
    </section>
  );

  const SectionTitle = ({ title }) => (
    <h2 className="text-center text-3xl font-semibold mt-16 mb-12 font-poppins relative">
      {title}
    </h2>
  );

  return (
    <main className="mt-20 min-h-screen ">
      <section className="w-full relative ">
        <img src={kadromuz} alt="logo" className="w-full object-fit-contain" />
      </section>
      {/* Header Section */}
      <section className="w-full py-4 shadow-md border-b border-slate-200 px-5 lg:px-20 bg-[#f8f8f8] flex items-center text-sm text-slate-500">
        <Link to="/" className="hover:underline">
          Ana Sayfa
        </Link>
        <span className="mx-1">/</span>
        <p>Kadromuz</p>
      </section>

      {/* Doctors Section */}
      <SectionTitle title="Ekibimiz" />
      {renderTeacher(teachers)}

      <div>
        <img src={bgGecis} alt="" className="w-full h-36 mt-8" />
      </div>
    </main>
  );
};

export default OurTeam;
