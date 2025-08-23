import {useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
  const timer = setInterval(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
    );
  }, 20000); 

  return () => clearInterval(timer);
}, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? TESTIMONIALS.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === TESTIMONIALS.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Lives <span className="text-rose-500">Transformed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from our community members who have experienced growth through Love Connect.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6">
                <Quote className="w-8 h-8 text-rose-500" />
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8">
                "{TESTIMONIALS[currentIndex].quote}"
              </blockquote>
              
              <div className="space-y-2">
                <p className="text-lg font-bold text-gray-800">
                  {TESTIMONIALS[currentIndex].name}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-rose-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">10K+</div>
            <div className="text-gray-600">Monthly Listeners</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">100+</div>
            <div className="text-gray-600">Episodes</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">3</div>
            <div className="text-gray-600">Years Strong</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;