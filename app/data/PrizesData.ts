export interface Prize {
  id: number;
  year: number;
  awardName: string;
  category: string;
  description: string;
}

export const prizes: Prize[] = [
  {
    id: 1,
    year: 2023,
    awardName: 'Golden Bean Award',
    category: 'Best Espresso Blend',
    description: 'Recognized for our rich and perfectly balanced espresso blend, a favorite among connoisseurs.',
  },
  {
    id: 2,
    year: 2022,
    awardName: 'Community Choice Cafe',
    category: 'Local Favorite',
    description: 'Voted as the top coffee shop by our beloved community for exceptional service and welcoming atmosphere.',
  },
  {
    id: 3,
    year: 2021,
    awardName: 'Best Coffee Shop ',
    category: 'Environmental Stewardship',
    description: 'Honored for our commitment to sustainable sourcing, eco-friendly practices, and waste reduction.',
  },
];
