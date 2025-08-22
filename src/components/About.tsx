import { Users, BookOpen, Heart } from 'lucide-react';
import { MISSION_STATEMENT } from '../data/content';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'For Singles',
      description: 'Guidance on making godly relationship choices and preparing for marriage'
    },
    {
      icon: Users,
      title: 'For Couples',
      description: 'Tools and wisdom to build strong, Christ-centered marriages'
    },
    {
      icon: BookOpen,
      title: 'Biblical Foundation',
      description: 'All advice rooted in scripture and Christian principles'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-rose-500">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {MISSION_STATEMENT}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              Meet Your Hosts
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Two passionate women dedicated to helping others build meaningful, 
              God-centered relationships. Through personal experience, biblical wisdom, 
              and heartfelt conversations, we create a safe space for growth and healing.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're single and seeking, dating with purpose, or married and 
              growing, we're here to walk alongside you on your journey toward 
              deeper love and stronger faith.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-4 shadow-lg flex flex-col sm:flex-row justify-center gap-6">
              {/* Host 1 Image */}
              <div className="p-2 flex flex-col items-center">
                <img
                  src={img1}
                  alt="Host 1"
                 className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-cover rounded-full shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                <p className="text-center text-sm font-medium text-gray-700 mt-2">Tosin</p>
              </div>
              {/* Host 2 Image */}
              <div className="p-2 flex flex-col items-center">
                <img
                  src={img2}
                  alt="Host 2"
                  className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-cover rounded-full shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                <p className="text-center text-sm font-medium text-gray-700 mt-2">Ife</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
