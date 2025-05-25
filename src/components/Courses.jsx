import React from 'react'
import course1 from "../assets/course1.jpg"
import course2 from "../assets/course2.jpg"
import course3 from "../assets/course3.jpg"
import { Link } from 'react-router-dom'

const Courses = () => {
    const courses = [
        {
            id: 1,
            title: "Bire Bir İlginin Zirvesindeyiz",
            desc: "12. Sınıf ve Mezun Kursu koçluk destekli YKS hazırlığı sunar. YKS kursu kapsamında öğrenciler bire bir koçluk ve ödevlendirme seanslarıyla kendi seviyelerine ve yetkinliklerine uygun bir yks hazırlık süreci izlerler.",
            image: course1,
            href: "/kurs-mezun"
        },
        {
            id: 2,
            title: "YKS Maratonuna Erken Başla",
            desc: "11. Sınıf Kursu ile öğrencilerimiz yazılılara en iyi şekilde hazırlanır, tüm TYT ve AYT deneme sınavlarına katılarak sınav tecrübesi edinme şansı yakalarlar. Ödevlendirme ve koçluk sistemine dahil olarak YKS serüveni için disiplinli çalışma alışkanlığı kazanırlar.",
            image: course2,
            href: "/kurs-11"
        },
        {
            id: 3,
            title: "Temellerini Sağlam At",
            desc: "0. sınıf kursu TYT sınavına yönelik konuların pekiştirilmesini, konuların temellerinin en iyi şekilde oluşturulmasını sağlarken okula destek seanslarıyla yazılılarda öğrencilerin en iyi sonuçları elde edebilmesini hedefler.",
            image: course3,
            href: "/kurs-10"
        },
    ]

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
