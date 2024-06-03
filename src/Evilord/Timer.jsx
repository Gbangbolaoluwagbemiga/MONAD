import { useState, useEffect } from "react";

const Timer = () => {
  const calculateTimeLeft = () => {
    const targetTime = new Date(Date.UTC(2024, 5, 6, 15, 0, 0)); // 6th June 2024, 3 PM UTC
    const now = new Date();
    const difference = targetTime - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      <div className="flex">
        <h2 className=" text-xl font-bold md:text-3xl">EvilOrd</h2>
        <img
          src="https://cdn.prod.website-files.com/6241bcd9e666c1514401461d/665b14554cc4ee882ce7549a_evilord-bitcoin-nfts-buy-crypto-art-nft-trading-bitcoin-drops.jpg"
          alt="Loader Image"
          className=" spinner ms-2 h-8 w-8 cursor-pointer rounded-full"
        />
      </div>

      <div className="flex justify-center text-xl font-bold md:text-3xl">
        <div>
          <h1 className="my-3 text-center">Countdown Timer</h1>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
      </div>
    </div>
  );
};

export default Timer;
