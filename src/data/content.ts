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
    name: 'Aderemi Oguntunde',
    quote: 'Love Connect helped me see that love is not just emotions but knowledge-based—rooted in applying God’s principles from His Word. This insights are simple, practical, and enlightening. I am truly blessed to be a part of the podcast'
  },
  {
    id: '2',
    name: 'Dr Toluwanimi Onimisi',
    quote: 'Love connect has been a beacon of light for me, in my marriage. I highly recommend for anyone seeking to have meaningful marriages, families and romantic relationships.'
  },
  // {
  //   id: '3',
  //   name: 'Jennifer K.',
  //   quote: 'As a single woman in my 30s, I was losing hope. Love Connect reminded me of Gods perfect timing and plan for my life.'

  // },
  // {
  //   id: '4',
  //   name: 'David & Rachel',
  //   quote: 'The anniversary event was incredible! We learned so much about building a Christ-centered marriage foundation.'
  // }
];

// Set your event date here - currently set to 30 days from now
export const EVENT_DATE = new Date("2025-08-30T17:00:00");

export const MISSION_STATEMENT = "Through storytelling, podcasts, counseling, and ministrations, we bridge knowledge gaps, strengthen relationships, and inspire a Christ-centered community.";

export const CONTACT_EMAIL = "loveconnectpodcast@gmail.com";