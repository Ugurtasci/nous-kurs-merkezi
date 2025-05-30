import React from 'react'
import bgDuyurular from "../assets/bgDuyurular.png"
import { Link } from 'react-router-dom'
import { announcements } from '../utilis/helper'

const Announcements = () => {
  return (
    <main className='mt-14 md:mt-20 '>
         <section className='w-full '>
        <img src={bgDuyurular} alt="logo"
        className='w-full object-fit-contain' />
      </section> 
      <section className='w-full py-4 shadow-lg border-b border-slate-200  px-5 lg:px-20 bg-[#f8f8f8] flex items-center
       text-sm text-slate-500'>
        <Link to={"/"}>Ana Sayfa </Link>
        <p> / Duyurular</p>
      </section> 
      <section className='w-full px-5 lg:px-20 py-10'>
        <h1 className='text-2xl font-semibold text-slate-700 mb-5'>Duyurular</h1>
        <p className='text-slate-500 text-sm'>Duyurular sayfası, kurumumuzun önemli haberlerini ve güncellemelerini takip edebileceğiniz bir platformdur. Burada, eğitim programlarımız, etkinliklerimiz ve diğer duyurular hakkında bilgi alabilirsiniz.</p>
        <p className='text-slate-500 text-sm mt-4'>Duyurularımızı düzenli olarak takip ederek, kurumumuzun sunduğu fırsatları kaçırmayın!</p>
        <div className="flex flex-col gap-4 mt-6 px-4">
  {announcements.map((item) => (
    <div
      key={item.id}
      className="flex items-start gap-4 bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-md transition duration-300"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-14 h-14 rounded-md object-cover flex-shrink-0"
      />
      <div className="flex-1">
        <h2 className="text-base font-semibold text-slate-800">{item.title}</h2>
        <p className="text-slate-600 text-sm mt-1">{item.description}</p>
        <p className="text-slate-400 text-xs mt-2">{item.date}</p>
      </div>
    </div>
  ))}
</div>


      </section>

    </main>
  )
}

export default Announcements