import React from 'react'
import { Link } from 'react-router-dom'

import hakkimizda from "../assets/hakkimizda.jpg"

const About = () => {
  return (
    <main>
      <section className='w-full py-4 shadow-lg border-b border-slate-200  px-5 lg:px-20 bg-[#f8f8f8] flex items-center text-sm text-slate-500'>
        <Link to={"/"}>Ana Sayfa </Link>
        <p> / Hakkımızda</p>
      </section> 
      <h2 className='text-center text-3xl mt-5 lg:mb-20 mb-10 font-poppins relative before:content-[""] before:absolute
      before:w-44 before:rounded-4xl before:-bottom-2 before:left-[50%] before:-translate-x-[50%] before:h-1 
      before:bg-[#fab301] '>Hakkımızda</h2>
      <section className='flex flex-col lg:flex-row items-start justify-center gap-10 px-10 md:px-20'>
        <article>
            <img src={hakkimizda} alt="asm" className='w-[500px] rounded-lg shadow-lg object-contain' />
        </article>
        <article className='flex flex-col gap-5 lg:w-1/3 w-full'>
          <h3 className='text-xl font-poppins font-semibold'>Nous Kurs Merkezi </h3>
          <p className='font-light text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam officiis molestias. Molestiae ea aperiam, ipsam rem laboriosam perferendis praesentium, nemo, qui exercitationem fugit debitis adipisci id recusandae modi iure dolores fuga eligendi quaerat iusto.</p>
          

          <p className='text-slate-500'>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum voluptatibus velit, illum iusto fugit tempore ullam ducimus doloremque possimus neque iste nesciunt aliquam, dolorem amet?
          </p>
          <p className='text-slate-500 mb-10'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quas aliquid debitis doloremque eligendi illo modi! Illo eos ea distinctio?
          </p>

        </article>

      </section>
    </main>
  )
}

export default About