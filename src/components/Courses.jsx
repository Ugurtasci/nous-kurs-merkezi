import React from 'react'

import { Link } from 'react-router-dom'
import { courses } from '../utilis/helper'

const Courses = () => {
 

    return (
        <section className='w-full flex flex-col items-center gap-4 bg-[#fcad32] relative z-[1] md:-mt-12 -mt-3 py-10 px-4'>
            <h1 className='text-3xl sm:text-4xl text-white font-semibold text-center'>Kurslarımız</h1>
            <h2 className='text-xl sm:text-2xl text-white text-center'>10. Sınıf, 11. Sınıf, 12. Sınıf ve Mezunlar</h2>

            <article className='flex flex-wrap justify-center gap-6 mt-10 w-full max-w-7xl'>
                {courses.map(course => (
                    <div
                        key={course.id}
                        className='flex flex-col items-center gap-3 bg-white p-5 rounded-lg shadow-lg 
                        w-full sm:w-[80%] md:w-[45%] lg:w-[30%] h-auto'
                    >
                        <img
                            src={course.image}
                            alt={course.title}
                            className='w-full h-48 object-cover rounded'
                        />
                        <h3 className='text-lg font-semibold text-center'>{course.title}</h3>
                        <p className='text-sm text-center'>{course.desc}</p>
                        <Link
                            to={course.href}
                            className='mt-auto py-2 px-6 border border-black rounded-full cursor-pointer 
                            hover:bg-black hover:text-white transition-all text-sm'
                        >
                            Bilgi Al
                        </Link>
                    </div>
                ))}
            </article>
        </section>
    )
}

export default Courses
