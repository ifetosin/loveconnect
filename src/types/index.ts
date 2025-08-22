export interface RegistrationData {
  name: string;
  email: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  relationship: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}