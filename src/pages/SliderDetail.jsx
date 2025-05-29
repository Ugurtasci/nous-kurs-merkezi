import React, { useEffect, useState } from 'react'
import { sliders } from "../utilis/helper";
import { Link, useParams } from 'react-router-dom';
const SliderDetail = () => {

    const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const founded = sliders.find(item => item.id === Number(id));
    setData(founded);
  }, [id]);

  
  return (
    <main className='mt-20'>
        <section className='w-full py-4 shadow-lg border-b border-slate-200 px-5 lg:px-20 bg-[#f8f8f8] flex items-center text-sm text-slate-500'>
        <Link to={"/"}>Ana Sayfa/Haberler</Link>
        <p> / {data?.title}</p>
      </section>
      <section className='lg:my-20 my-10 flex flex-col gap-5 lg:px-20 md:px-10 px-5'>
        {/* başlık kısmı */}
        <div className='flex items-center gap-5'>
            <div className='flex flex-col items-center justify-center w-20 h-20 p-4 rounded-full bg-[#f5f6f7] shadow-lg'>
                <b className='lg:text-2xl mg:text-xl'>{data?.date}</b>
                <p className='text-[#fab303] font-semibold'>{data?.month}</p>
            </div>
            <h3 className='lg:text-4xl md:text-2xl text-xl'>{data?.title}</h3>
        </div>
        {/* resim */}
        <div>
            <img src={data?.image} alt="news" className=' w-full object-contain' />
        </div>
       
              {/* detail varsa onu dön */}
          {data?.detail && (
            <div className="space-y-3">
              {data?.detail.map((item, index) => {
                if (item.p) {
                  return <p key={index} className="text-gray-500">{item.p}</p>;
                } else if (item.b) {
                  return <p key={index} className="font-semibold text-gray-800">{item.b}</p>;
                }else if(item.li) {
                    return <li key={index} className="font-semibold text-gray-800">{item.li}</li>
                }
                return null;""
              })}
            </div>
          )}

      </section>
    </main>
  )
}

export default SliderDetail