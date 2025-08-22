import { Testimonial, SocialLink } from '../types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'YouTube',
    url: 'https://www.youtube.com/@loveconnect-podcast',
    icon: 'youtube'
  },
  {
    platform: 'Spotify',
    url: 'https://open.spotify.com/show/1QmRxquAVMnIWIQ7WhqtJG',
    icon: 'spotify'
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/loveconnect_podcast',
    icon: 'instagram'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    quote: 'Love Connect helped me understand what godly dating looks like. I met my husband shortly after applying their principles!',
    relationship: 'Newlywed'
  },
  {
    id: '2',
    name: 'Michael & Lisa',
    quote: 'This podcast saved our marriage. The biblical wisdom and practical advice transformed how we communicate and love each other.',
    relationship: 'Married 8 years'
  },
  {
    id: '3',
    name: 'Jennifer K.',
    quote: 'As a single woman in my 30s, I was losing hope. Love Connect reminded me of Gods perfect timing and plan for my life.',
    relationship: 'Single & Thriving'
  },
  {
    id: '4',
    name: 'David & Rachel',
    quote: 'The anniversary event was incredible! We learned so much about building a Christ-centered marriage foundation.',
    relationship: 'Engaged'
  }
];

// Set your event date here - currently set to 30 days from now
export const EVENT_DATE = new Date("2025-08-30T17:00:00");

export const MISSION_STATEMENT = "Through storytelling, podcasts, counseling, and ministrations, we bridge knowledge gaps, strengthen relationships, and inspire a Christ-centered community.";

export const CONTACT_EMAIL = "loveconnectpodcast@gmail.com";