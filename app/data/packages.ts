export type Package = {
  id: number;
  title: string;
  subtitle: string;
  destination: string;
  dates: string;
  duration: string; // e.g. "12 days"
  slotsLeft: number;
  priceFrom: number; // USD per person
  image: string;
};

export const packages: Package[] = [
  {
    id: 1,
    title: 'December Trip',
    subtitle:
      'A special year‑end Umrah package featuring balanced schedules, guided spiritual sessions, and seamless travel support for families and individuals.',
    destination: 'Mecca & Medina, Saudi Arabia',
    dates: 'December 10, 2025 – December 21, 2025',
    duration: '12 days',
    slotsLeft: 8,
    priceFrom: 1890,
    image: '/u1.jpeg',
  },
  {
    id: 2,
    title: 'February Trip',
    subtitle:
      'A perfect winter Umrah package offering affordable prices, group guidance, and seamless travel arrangements for a peaceful pilgrimage.',
    destination: 'Mecca & Medina, Saudi Arabia',
    dates: 'October 30, 2025 – February 12, 2026',
    duration: '9 days',
    slotsLeft: 14,
    priceFrom: 1490,
    image: '/u2.jpg',
  },
];