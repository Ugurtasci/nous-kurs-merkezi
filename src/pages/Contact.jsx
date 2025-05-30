import React from 'react'
import { Link } from 'react-router-dom'
import bgGecis from "../assets/bgGecis.png"

const Contact = () => {
  return (
    <main className='mt-14 md:mt-20 w-full '>
             <section className='w-full py-4 shadow-lg border-b border-slate-200  px-5 lg:px-20 bg-[#f8f8f8] flex items-center text-sm text-slate-500'>
        <Link to={"/"}>Ana Sayfa </Link>
        <p> / İletişim</p>
      </section>
      <section className=' px-5 lg:px-20 py-10 flex flex-col lg:flex-row gap-10 items-center justify-center'>
        <article className='w-full lg:w-1/2 flex flex-col gap-5 '>
        <iframe className='object-contain w-full border-gray-400 rounded-lg shadow-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.6362378417225!2d40.49021551168874!3d38.88656364722519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e22fe4d889725f5%3A0x94a7696356c4943e!2sBing%C3%B6l%20Nous%20Vip%20Kurs%20Merkezi!5e0!3m2!1str!2str!4v1748587543504!5m2!1str!2str" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </article>

        <article className=' w-full lg:w-1/2  my-10 flex flex-col gap-5 lg:px-20 md:px-10 px-5'>
            <h2 className='text-3xl font-bold text-center'>İletişim</h2>
            <p className='text-center text-gray-600'>Bize ulaşmak için aşağıdaki formu doldurabilirsiniz.</p>
            
            <form className='flex flex-col gap-4'>
            <input type="text" placeholder="Adınız" className='border border-gray-300 p-2 rounded' required />
            <input type="phone" placeholder="Telefon Numaranız" className='border border-gray-300 p-2 rounded' required />
            <textarea placeholder="Mesajınız" className='border border-gray-300 p-2 rounded h-32' required></textarea>
            <button type="submit" className='bg-[#fab303] text-white px-4 py-2 rounded hover:bg-black transition'>Gönder</button>
            </form>
        </article>
      </section>
     <img src={bgGecis} alt="" className="w-full h-36" />
    </main>
  )
}

export default Contact