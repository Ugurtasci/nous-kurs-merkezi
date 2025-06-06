import React from "react";

import { Link } from "react-router-dom";
import { courses } from "../utilis/helper";

const Courses = () => {
  return (
    <section className=" flex flex-col items-center   relative z-[1]  ">
      <div className="w-full flex flex-col items-center  gap-2  mt-8">
        
         <h1 className='text-3xl sm:text-4xl text-black font-semibold text-center'>Kurslarımız</h1> 
        <h2 className="text-xl sm:text-2xl text-black text-center">
          10. Sınıf, 11. Sınıf, 12. Sınıf ve Mezunlar
        </h2>
      </div>

      <article className="flex flex-wrap justify-center gap-6 mt-10 w-full max-w-7xl">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col items-center gap-3 bg-[#ffe3b6] p-5 rounded-lg shadow-lg 
                        w-full sm:w-[80%] md:w-[45%] lg:w-[30%] h-auto"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-lg font-semibold text-center">
              {course.title}
            </h3>
            <p className="text-sm text-center">{course.desc}</p>
            <Link
              to={course.href}
              className="mt-auto py-2 px-6 border border-black rounded-full cursor-pointer 
                            hover:bg-black hover:text-white transition-all text-sm"
            >
              Bilgi Al
            </Link>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Courses;
