import { useEffect, useRef, useState } from "react";
import { FaChalkboardTeacher, FaUserGraduate, FaGlobe } from "react-icons/fa";

const stats = [
  { icon: <FaChalkboardTeacher className="text-4xl text-white " />,
     label: "Deneyimli Eğitmen", value: 12, suffix: "+" },
  { icon: <FaUserGraduate className="text-4xl text-white" />,
     label: "Kayıtlı Öğrenci", value: 365, suffix: "+" },
  { icon: <FaGlobe className="text-4xl text-white" />,
     label: "Başarı Hikayesi", value: 44, suffix: "+" },
];

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      {
        threshold: 0.6, // %60 görünür olunca başlasın
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 10);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return (
    <span ref={ref} className="text-2xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <div className="relative bg-[#fda314] overflow-hidden w-full pb-4 ">
      
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            {stat.icon}
            <Counter end={stat.value} suffix={stat.suffix} />
            <p className="text-white font-medium text-xl ">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
