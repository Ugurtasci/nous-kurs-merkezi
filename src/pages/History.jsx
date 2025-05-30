import React from 'react'
import history from "../assets/history.png"
import tarihcemiz from "../assets/tarihcemiz.jpg"
import AnimatedStatSection from "../components/AnimatedStatSection";
import bgGecis from "../assets/bgGecis.png"
import tarihImage from "../assets/tarih.jpg"
import { Link } from 'react-router-dom'
const History = () => {
  return (
     <main className='mt-14 md:mt-20  min-h-screen'>
      <section className='w-full relative '>
        <img src={history} alt="logo"
        className='w-full object-fit-contain' />
      </section> 
      <section className='w-full py-4 shadow-lg border-b border-slate-200  px-5 lg:px-20 bg-[#f8f8f8] flex items-center
       text-sm text-slate-500'>
        <Link to={"/"}>Ana Sayfa </Link>
        <p> / Tarihçemiz</p>
      </section> 
      <section className="flex flex-col md:flex-row  items-center justify-center gap-10 px-6 md:px-20 lg:px-32 py-12 bg-white">
      {/* Left Section */}
      <div className="relative w-full md:w-1/2">
        <img
          src={tarihcemiz}
          alt="Ofis"
          className="w-full lg:h-[600px] md:h-[500px] h-[350px] rounded-lg shadow-2xl border-2 border-white object-fit-contain"
        />

        {/* Üst sol köşedeki etiket */}
        <div className="absolute top-4 left-4 bg-[#fab303] text-white font-semibold px-4 py-1 rounded-tl-xl rounded-br-xl shadow">
          2009'dan beri
        </div>

        {/* Alttaki küçük fotoğraf */}
         <img
          src={tarihImage}
          alt="Öğrenciler"
          className="absolute bottom-[-20px] left-4 md:w-64 w-50 object-cover rounded-lg shadow-lg"
        /> 

      
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 space-y-5">
      <div className="relative h-12  overflow-hidden">
      {/* Arka plan metni - daha büyük ve opak olmayan */}
      <h1 className="absolute left-0 text-5xl font-bold text-gray-300 opacity-50 z-0 select-none tracking-[20px]">
        Tarihçemiz
      </h1>


      {/* Ön plan metni - daha küçük ve belirgin */}
      <h2 className="relative text-2xl mt-4 font-bold text-[#fab303] z-10 tracking-[5px]">
        TARİHÇEMİZ
      </h2>
      </div>
        <h2 className="text-4xl font-bold text-gray-800">Nous Vip Kurs Merkezi</h2>

        <p className="text-gray-700">
      Nous Vip Kurs Merkezi, alanında uzman ve tecrübeli öğretmenlerin bir araya gelerek oluşturduğu, öğrenci merkezli eğitim anlayışını benimseyen bir kurum olarak eğitim yolculuğuna başlamıştır. Kuruluşumuzun temelinde her öğrencinin farklı potansiyellere sahip olduğu inancı ve bu potansiyelin doğru yönlendirme, kaliteli eğitim ve yüksek motivasyonla başarıya dönüşeceği fikri yer almaktadır.
        </p>

        <p className="text-gray-700">
          Kurs merkezimiz, kuruluşundan itibaren öğrencilere bireysel farklılıklarını gözeten eğitim imkanları sunmayı hedeflemiş; ortalama 8-10 kişilik sınıflarda, seviyeye uygun eğitim modeliyle öğretim faaliyetlerini sürdürmüştür. Öğrencilerin hazır bulunuşluk durumları dikkate alınarak, onların öğrenme süreçlerine en verimli şekilde katkı sağlayacak programlar geliştirilmiştir.
        </p>

        <p>
           Zaman içinde yalnızca öğretim değil, rehberlik ve öğrenci koçluğu sistemlerini de bünyesine katan kurumumuz, öğrencilere hedef belirleme, planlı çalışma, deneme analizleri ve bireysel rehberlik gibi alanlarda destek sağlayarak onları sınav sürecine çok yönlü bir şekilde hazırlamaktadır.
        </p>

         <p>
           Nous Vip Kurs Merkezi, eğitimde teknolojik dönüşümün önemini erkenden kavramış; online ve yüz yüze eğitim süreçlerinde gelişmiş öğrenci takip sistemlerini devreye almıştır. Bu sayede öğrencilerin motivasyon durumları, öğrenme açıkları ve gelişim süreçleri anlık olarak takip edilerek gereken her durumda hızlı müdahale sağlanmıştır.
        </p>
        <p>
           Bugün Nous Vip Kurs Merkezi, öğrenci başarısını sadece akademik ölçütlerle değil; özgüven, hedef farkındalığı ve sürdürülebilir çalışma alışkanlıklarıyla bir bütün olarak ele alan modern ve güçlü bir eğitim kurumu olarak yoluna emin adımlarla devam etmektedir.


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

export default History
