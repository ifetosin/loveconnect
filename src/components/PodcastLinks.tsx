import React from 'react';
import { ExternalLink, Play, Music, Camera } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/content';

const PodcastLinks = () => {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'youtube':
        return Play;
      case 'spotify':
        return Music;
      case 'instagram':
        return Camera;
      default:
        return ExternalLink;
    }
  };

  const getGradient = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'youtube':
        return 'from-red-500 to-red-600';
      case 'spotify':
        return 'from-green-500 to-green-600';
      case 'instagram':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="listen" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Listen & <span className="text-rose-500">Connect</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Join our growing community across all platforms. New episodes every week 
          filled with wisdom, stories, and practical advice for your relationship journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {SOCIAL_LINKS.map((link, index) => {
            const Icon = getIcon(link.platform);
            const gradient = getGradient(link.platform);
            
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${gradient} rounded-full mb-6 group-hover:animate-pulse`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{link.platform}</h3>
                  <p className="text-gray-600 mb-4">
                    {link.platform === 'YouTube' && 'Watch full video episodes with visual content'}
                    {link.platform === 'Spotify' && 'Listen to audio episodes on the go'}
                    {link.platform === 'Instagram' && 'Inspiring posts and community updates'}
                  </p>
                <div className="inline-flex items-center text-rose-500 font-semibold group-hover:text-rose-600">
  {link.platform === 'Instagram' ? 'Connect Now' : 'Listen Now'}
  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
</div>

                </div>
              </a>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Never Miss an Episode</h3>
          <p className="text-gray-600 mb-6">
            Subscribe on your favorite platform to get notified when new episodes drop. 
            Join thousands of listeners growing in love and faith together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">
              Weekly Episodes
            </span>
            <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
              Expert Guests
            </span>
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              Real Stories
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastLinks;