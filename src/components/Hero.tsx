import React from "react";
import { Heart, Calendar } from "lucide-react";
import CountdownToast from "./CountdownToast";

const EVENT_DATE = new Date("2025-08-30T17:00:00");

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  const eventPassed = new Date().getTime() > EVENT_DATE.getTime();

  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 overflow-hidden pb-20">
      {/* Countdown Toast */}
      <div className="w-full flex justify-center px-4 mt-4 md:mt-6">
        <CountdownToast />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* ...background blobs... */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center mt-8 md:mt-12">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mb-5 shadow-lg">
          <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-current" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-3 leading-snug">
          Love
          <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
            {" "}
            Connect
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl mx-auto leading-relaxed">
          Championing godly relationships and Christ-centered marriages through
          faith, wisdom, and community
        </p>

        {/* CTA Button */}
        <div className="space-y-4">
          {eventPassed ? (
            <button
              disabled
              className="inline-flex items-center px-5 py-3 sm:px-7 sm:py-3.5 bg-gray-300 text-gray-700 text-sm sm:text-lg font-semibold rounded-full shadow-md cursor-default"
            >
              🎉 Thank you for celebrating with us!
            </button>
          ) : (
            <button
              onClick={onRegisterClick}
              className="group inline-flex items-center px-5 py-3 sm:px-7 sm:py-3.5 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-sm sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2 sm:mr-3 group-hover:animate-pulse" />
              Register for Our Anniversary
              <br className="inline md:hidden" /> and Book Launch
            </button>
          )}

          <p className="text-gray-500 text-xs sm:text-sm">
            Join others in building stronger, Christ-centred relationships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
