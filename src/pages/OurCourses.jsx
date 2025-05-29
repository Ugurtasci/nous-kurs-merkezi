import React from 'react'
import Courses from '../components/Courses'
import bgGecis from "../assets/bgGecis.png"

const OurCourses = () => {
  return (
    <main className='w-full mt-44'>
         <img src={bgGecis} alt="" className="w-full" />
         <Courses/>

    </main>
  )
}

export default OurCourses