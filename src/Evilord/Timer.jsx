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
    <div className="flex justify-center text-xl font-bold md:text-3xl">
      <div>
        <h1 className="my-3 text-center">Countdown Timer</h1>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
};

export default Timer;
