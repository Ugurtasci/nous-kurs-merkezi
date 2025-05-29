import React from 'react'
import mission from "../assets/mission.png"
import misyonKurs from "../assets/misyonKurs.png"
import AnimatedStatSection from "../components/AnimatedStatSection";
import bgGecis from "../assets/bgGecis.png"
import { Link } from 'react-router-dom'



const MissionVision = () => {
  return (
   <main className='mt-20 min-h-screen'>
      <section className='w-full relative '>
        <img src={mission} alt="logo"
        className='w-full object-fit-contain' />
      </section> 
      <section className='w-full py-4 shadow-lg border-b border-slate-200  px-5 lg:px-20 bg-[#f8f8f8] flex items-center
       text-sm text-slate-500'>
        <Link to={"/"}>Ana Sayfa </Link>
        <p> / Misyonumuz ve Vizyonumuz</p>
      </section> 
      <section className="flex flex-col md:flex-row  items-center justify-center gap-10 px-6 md:px-20 lg:px-32 py-12 bg-white">
      {/* Left Section */}
      <div className="relative w-full md:w-1/2">
        <img
          src={misyonKurs}
          alt="Ofis"
          className="w-full lg:h-[600px] md:h-[500px] h-[350px] rounded-lg shadow-2xl border-2 border-white object-fit-contain"
        />

        {/* Üst sol köşedeki etiket */}
        <div className="absolute top-4 left-4 bg-[#fab303] text-white font-semibold px-4 py-1 rounded-tl-xl rounded-br-xl shadow">
          2009'dan beri
        </div>

        {/* Alttaki küçük fotoğraf */}
        {/* <img
          src={studentsImage}
          alt="Öğrenciler"
          className="absolute bottom-[-20px] left-4 md:w-64 w-50 object-cover rounded-lg shadow-lg"
        /> */}

      
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 space-y-5">
      <div className="relative flex items-center justify-center  overflow-hidden">
      {/* Arka plan metni - daha büyük ve opak olmayan */}
      <h1 className="absolute text-4xl  font-bold text-gray-300 opacity-50 z-0 select-none">
        Missyonumuz ve Vizyonumuz
      </h1>

      {/* Ön plan metni - daha küçük ve belirgin */}
      <h2 className="relative text-2xl m-6 font-bold text-[#fab303] z-10">
        MİSYONUMUZ ve VİZYONUMUZ
      </h2>
      </div>
        <h2 className="text-4xl font-bold text-gray-800">Nous Vip Kurs Merkezi</h2>

       <span className='text-md font-bold text-gray-800'>Misyonumuz:</span> <p className="text-gray-700">
      Nous Vip Kurs Merkezi olarak, her öğrencinin bireysel potansiyeline ulaşabileceğine inanıyoruz. Alanında uzman ve tecrübeli öğretmen kadromuzla, öğrenci merkezli öğretim programları sunarak başarı odaklı, motive edici ve destekleyici bir öğrenme ortamı oluşturuyoruz
        </p>

        <p className="text-gray-700">
          Öğrenci koçluğu sistemi ve gelişmiş takip mekanizmaları ile öğrencilerimizin akademik, kişisel ve sosyal gelişimlerini yakından izliyor; eksiksiz ve planlı bir şekilde başarıya ulaşmalarını sağlıyoruz. Teknolojinin tüm imkanlarını eğitimle bütünleştirerek çağdaş, yenilikçi ve etkili bir öğrenme deneyimi sunuyoruz.
        </p>

        <span className='text-md font-bold text-gray-800'>Vizyonumuz:</span><p>
           Öğrenci başarısını yalnızca sınav puanları ile değil, hedef belirleme, özgüven kazanımı ve öğrenme sorumluluğu bilinciyle değerlendiren, bireye özel yaklaşımlarla eğitimde fark yaratan lider bir kurs merkezi olmak. Hem yüz yüze hem de online eğitim süreçlerinde etkin, dinamik ve sürdürülebilir öğretim yöntemleri ile Türkiye’nin en güvenilir ve tercih edilen kurs merkezlerinden biri haline gelmeyi hedefliyoruz.
        </p>

        
      </div>
    </section>
    <div>
      <img src={bgGecis} alt="" className="w-full h-36" />
    </div>
    <AnimatedStatSection /> 
     
    </main>
  )
}

export default MissionVision
