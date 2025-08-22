
import { Heart, Mail, ExternalLink, Play, Music, Camera } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_EMAIL } from '../data/content';

const Footer = () => {
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

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
              <h3 className="text-2xl font-bold">Love Connect</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Championing godly relationships and Christ-centered marriages through 
              faith, wisdom, and community. Join us on this beautiful journey of love.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <p className="text-gray-400 text-sm">
                We'd love to hear from you! Send us your questions, prayer requests, 
                or just say hello.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="space-y-3">
              {SOCIAL_LINKS.map((link, index) => {
                const Icon = getIcon(link.platform);
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{link.platform}</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Love Connect Podcast. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ for the Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;