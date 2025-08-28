import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const EVENT_DATE = new Date("2025-08-30T17:00:00");

const CountdownToast: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [eventPassed, setEventPassed] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime();
      const diff = EVENT_DATE.getTime() - now;

      if (diff <= 0) {
        setEventPassed(true);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white shadow-md rounded-2xl px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-8 mb-8 md:mb-0">
      <div className="flex items-center space-x-2">
        <Clock className="w-5 h-5 text-rose-600" />
        <span className="text-sm sm:text-base font-medium text-gray-700">
          Anniversary Event · Aug 30 · 5:00 PM
        </span>
      </div>

      {eventPassed ? (
        <div className="text-center text-gray-700 font-semibold text-sm sm:text-base">
          🎉 Thank you for attending our anniversary celebration!
        </div>
      ) : (
        <div className="flex space-x-4 text-gray-800 font-semibold tabular-nums text-sm sm:text-base">
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-2xl">{timeLeft.days}</span>
            <span className="text-xs text-gray-500">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-2xl">{timeLeft.hours}</span>
            <span className="text-xs text-gray-500">Hrs</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-2xl">{timeLeft.minutes}</span>
            <span className="text-xs text-gray-500">Min</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-2xl">{timeLeft.seconds}</span>
            <span className="text-xs text-gray-500">Sec</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownToast;
