import { useEffect, useState } from 'react';
import CountdownCircle from './CountdownCircle';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-[#5492b6] p-6 my-10 text-white text-center">
      <h2 className="text-xl font-semibold mb-4">YKS'ye Kaç Gün Kaldı?</h2>
      <div className="flex justify-center">
        <CountdownCircle label="Gün" value={timeLeft.days} max={365} />
        <CountdownCircle label="Saat" value={timeLeft.hours} max={24} />
        <CountdownCircle label="Dakika" value={timeLeft.minutes} max={60} />
        <CountdownCircle label="Saniye" value={timeLeft.seconds} max={60} />
      </div>
    </div>
  );
};

export default CountdownTimer;
