import { Category } from "@/types/book";

export const CATEGORIES: Category[] = [
  // ROW 1: Movies, Games, Books
  {
    id: 'movies',
    name: 'Movies & Shows',
    color: '#8B2635',
    items: [
      { id: 'm1', title: 'The Matrix', categoryId: 'movies', author: 'Wachowskis', rating: 5, spineStyle: { width: 28, height: 165, color: '#1f2937', emblem: 'star', ribsCount: 4 } },
      { id: 'm2', title: 'Inception', categoryId: 'movies', author: 'Nolan', rating: 5, spineStyle: { width: 26, height: 162, color: '#8b2635', emblem: 'crest', ribsCount: 3 } },
      { id: 'm3', title: 'Interstellar', categoryId: 'movies', author: 'Nolan', rating: 5, spineStyle: { width: 28, height: 170, color: '#1d3557', emblem: 'crown', ribsCount: 4 } },
      { id: 'm4', title: 'Blade Runner', categoryId: 'movies', author: 'Scott', rating: 5, spineStyle: { width: 24, height: 158, color: '#b05b3b', emblem: 'none', ribsCount: 3 } },
      { id: 'm5', title: 'Arrival', categoryId: 'movies', author: 'Villeneuve', rating: 5, spineStyle: { width: 25, height: 160, color: '#2d6a4f', emblem: 'circle', ribsCount: 2 } },
      { id: 'm6', title: 'Gladiator', categoryId: 'movies', author: 'Scott', rating: 5, spineStyle: { width: 27, height: 164, color: '#1f2937', emblem: 'star', ribsCount: 4 } }
    ]
  },
  {
    id: 'games',
    name: 'Games',
    color: '#0EA5E9',
    items: [
      { id: 'g1', title: 'Elden Ring', categoryId: 'games', author: 'FromSoft', rating: 5, spineStyle: { width: 28, height: 165, color: '#d9a036', emblem: 'crown', ribsCount: 4 } },
      { id: 'g2', title: 'Witcher 3', categoryId: 'games', author: 'CDPR', rating: 5, spineStyle: { width: 28, height: 162, color: '#1f2937', emblem: 'crest', ribsCount: 3 } },
      { id: 'g3', title: 'Cyberpunk', categoryId: 'games', author: 'CDPR', rating: 4, spineStyle: { width: 26, height: 160, color: '#457b9d', emblem: 'star', ribsCount: 2 } },
      { id: 'g4', title: 'Zelda TotK', categoryId: 'games', author: 'Nintendo', rating: 5, spineStyle: { width: 27, height: 164, color: '#2d6a4f', emblem: 'flower', ribsCount: 3 } },
      { id: 'g5', title: 'Red Dead 2', categoryId: 'games', author: 'Rockstar', rating: 5, spineStyle: { width: 30, height: 168, color: '#8b2635', emblem: 'crown', ribsCount: 4 } }
    ]
  },
  {
    id: 'books',
    name: 'Books',
    color: '#2D6A4F',
    items: [
      { id: 'b1', title: 'Dune', categoryId: 'books', author: 'Herbert', rating: 5, spineStyle: { width: 30, height: 172, color: '#2d6a4f', emblem: 'crown', ribsCount: 5 } },
      { id: 'b2', title: 'Hail Mary', categoryId: 'books', author: 'Weir', rating: 5, spineStyle: { width: 28, height: 165, color: '#b05b3b', emblem: 'star', ribsCount: 3 } },
      { id: 'b3', title: 'Foundation', categoryId: 'books', author: 'Asimov', rating: 4, spineStyle: { width: 26, height: 160, color: '#1f2937', emblem: 'crest', ribsCount: 2 } },
      { id: 'b4', title: 'Neuromancer', categoryId: 'books', author: 'Gibson', rating: 5, spineStyle: { width: 24, height: 158, color: '#d9a036', emblem: 'none', ribsCount: 3 } },
      { id: 'b5', title: 'Hyperion', categoryId: 'books', author: 'Simmons', rating: 5, spineStyle: { width: 28, height: 166, color: '#1d3557', emblem: 'flower', ribsCount: 4 } }
    ]
  },

  // ROW 2: Places, Food, Music
  {
    id: 'places',
    name: 'Places Visited',
    color: '#F97316',
    items: [
      { id: 'p1', title: 'Kyoto, JP', categoryId: 'places', author: '2023', spineStyle: { stacked: true,  width: 26, height: 160, color: '#f7f4eb', emblem: 'crest', ribsCount: 3 } },
      { id: 'p2', title: 'Swiss Alps', categoryId: 'places', author: '2022', spineStyle: { stacked: true,  width: 28, height: 164, color: '#457b9d', emblem: 'star', ribsCount: 4 } },
      { id: 'p3', title: 'Reykjavik', categoryId: 'places', author: '2021', spineStyle: { stacked: true,  width: 25, height: 158, color: '#1d3557', emblem: 'none', ribsCount: 2 } },
      { id: 'p4', title: 'New York', categoryId: 'places', author: '2019', spineStyle: { stacked: true,  width: 27, height: 162, color: '#8b2635', emblem: 'crown', ribsCount: 3 } },
      { id: 'p5', title: 'Paris', categoryId: 'places', author: '2018', spineStyle: { stacked: true,  width: 26, height: 160, color: '#d9a036', emblem: 'circle', ribsCount: 2 } }
    ]
  },
  {
    id: 'food',
    name: 'Food',
    color: '#FCA5A5',
    items: [
      { id: 'f1', title: 'Ramen Tokyo', categoryId: 'food', author: 'Japan', spineStyle: { stacked: true,  width: 26, height: 158, color: '#fca5a5', ribsCount: 3 } },
      { id: 'f2', title: 'Pizza Naples', categoryId: 'food', author: 'Italy', spineStyle: { stacked: true,  width: 28, height: 160, color: '#f7f4eb', ribsCount: 2 } },
      { id: 'f3', title: 'Sushi Master', categoryId: 'food', author: 'Osaka', spineStyle: { stacked: true,  width: 24, height: 156, color: '#8b2635', ribsCount: 3 } },
      { id: 'f4', title: 'French Pastry', categoryId: 'food', author: 'Paris', spineStyle: { stacked: true,  width: 25, height: 158, color: '#d9a036', ribsCount: 2 } }
    ]
  },
  {
    id: 'music',
    name: 'Music',
    color: '#A855F7',
    items: [
      { id: 'mu1', title: 'Discovery', categoryId: 'music', author: 'Daft Punk', spineStyle: { width: 28, height: 162, color: '#1f2937', emblem: 'star', ribsCount: 4 } },
      { id: 'mu2', title: 'In Rainbows', categoryId: 'music', author: 'Radiohead', spineStyle: { width: 26, height: 160, color: '#8b2635', emblem: 'crest', ribsCount: 2 } },
      { id: 'mu3', title: 'Currents', categoryId: 'music', author: 'Tame Impala', spineStyle: { width: 26, height: 158, color: '#d9a036', emblem: 'none', ribsCount: 3 } },
      { id: 'mu4', title: 'Abbey Road', categoryId: 'music', author: 'Beatles', spineStyle: { width: 27, height: 160, color: '#1d3557', emblem: 'crown', ribsCount: 4 } }
    ]
  },

  // ROW 3: Art, Hobbies, Collections
  {
    id: 'art',
    name: 'Art Portfolio',
    color: '#0891B2',
    items: [
      { id: 'a1', title: 'Digital Sketch', categoryId: 'art', author: '2024', spineStyle: { width: 26, height: 158, color: '#1d3557', emblem: 'crown', ribsCount: 3 } },
      { id: 'a2', title: 'Oil Painting', categoryId: 'art', author: '2023', spineStyle: { width: 28, height: 162, color: '#52796f', emblem: 'star', ribsCount: 4 } },
      { id: 'a3', title: 'Watercolors', categoryId: 'art', author: '2022', spineStyle: { width: 24, height: 156, color: '#b05b3b', emblem: 'none', ribsCount: 2 } },
      { id: 'a4', title: 'Concept Art', categoryId: 'art', author: '2021', spineStyle: { width: 27, height: 160, color: '#1f2937', emblem: 'crest', ribsCount: 3 } }
    ]
  },
  {
    id: 'hobbies',
    name: 'Hobbies',
    color: '#FBBF24',
    items: [
      { id: 'h1', title: 'Star Gazer', categoryId: 'hobbies', spineStyle: { stacked: true,  width: 28, height: 162, color: '#1f2937', emblem: 'crown', ribsCount: 4 } },
      { id: 'h2', title: 'Synthesizers', categoryId: 'hobbies', spineStyle: { stacked: true,  width: 26, height: 158, color: '#d9a036', emblem: 'crest', ribsCount: 3 } },
      { id: 'h3', title: 'Leathercraft', categoryId: 'hobbies', spineStyle: { stacked: true,  width: 25, height: 156, color: '#b05b3b', emblem: 'none', ribsCount: 2 } },
      { id: 'h4', title: 'Bonsai Art', categoryId: 'hobbies', spineStyle: { stacked: true,  width: 26, height: 160, color: '#2d6a4f', emblem: 'flower', ribsCount: 3 } }
    ]
  },
  {
    id: 'collections',
    name: 'Collections',
    color: '#B45309',
    items: [
      { id: 'c1', title: 'Vinyl Records', categoryId: 'collections', spineStyle: { stacked: true,  width: 28, height: 162, color: '#b05b3b', emblem: 'crown', ribsCount: 3 } },
      { id: 'c2', title: 'Rare Coins', categoryId: 'collections', spineStyle: { stacked: true,  width: 25, height: 158, color: '#52796f', emblem: 'none', ribsCount: 2 } },
      { id: 'c3', title: 'Vintage Stamps', categoryId: 'collections', spineStyle: { stacked: true,  width: 24, height: 156, color: '#1f2937', emblem: 'crest', ribsCount: 3 } },
      { id: 'c4', title: 'Old Cameras', categoryId: 'collections', spineStyle: { stacked: true,  width: 27, height: 160, color: '#d9a036', emblem: 'star', ribsCount: 4 } }
    ]
  },

  // ROW 4: Social, Apps, Wishlist
  {
    id: 'social',
    name: 'Social Profiles',
    color: '#EC4899',
    items: [
      { id: 's1', title: 'X / Twitter', categoryId: 'social', spineStyle: { width: 25, height: 158, color: '#1d3557', emblem: 'star', ribsCount: 2 } },
      { id: 's2', title: 'Github Craft', categoryId: 'social', spineStyle: { width: 28, height: 164, color: '#1f2937', emblem: 'crown', ribsCount: 4 } },
      { id: 's3', title: 'LinkedIn', categoryId: 'social', spineStyle: { width: 26, height: 160, color: '#457b9d', emblem: 'crest', ribsCount: 3 } }
    ]
  },
  {
    id: 'apps',
    name: 'Apps Built (Collection)',
    color: '#EAB308',
    items: [
      // Exact matching bright yellow collection files standing side-by-side from the reference photo!
      { id: 'ap1', title: 'Obsidian Custom', categoryId: 'apps', spineStyle: { width: 24, height: 162, color: '#eab308', emblem: 'circle', ribsCount: 3 } },
      { id: 'ap2', title: 'Brainwaves', categoryId: 'apps', spineStyle: { width: 24, height: 162, color: '#eab308', emblem: 'circle', ribsCount: 3 } },
      { id: 'ap3', title: 'Mindmaps', categoryId: 'apps', spineStyle: { width: 24, height: 162, color: '#eab308', emblem: 'circle', ribsCount: 3 } },
      { id: 'ap4', title: 'Tasker Pro', categoryId: 'apps', spineStyle: { width: 24, height: 162, color: '#eab308', emblem: 'circle', ribsCount: 3 } },
      { id: 'ap5', title: 'Cozy Library', categoryId: 'apps', spineStyle: { width: 24, height: 162, color: '#eab308', emblem: 'circle', ribsCount: 3 } },
      { id: 'ap6', title: 'Fit Tracker', categoryId: 'apps', spineStyle: { width: 24, height: 162, color: '#eab308', emblem: 'circle', ribsCount: 3 } },
      { id: 'ap7', title: 'Web Scraper', categoryId: 'apps', spineStyle: { width: 24, height: 162, color: '#eab308', emblem: 'circle', ribsCount: 3 } },
      { id: 'ap8', title: 'Dev Terminal', categoryId: 'apps', spineStyle: { width: 24, height: 162, color: '#eab308', emblem: 'circle', ribsCount: 3 } }
    ]
  },
  {
    id: 'wishlist',
    name: 'Wishlist',
    color: '#F59E0B',
    items: [
      { id: 'w1', title: 'Leica Q3 Camera', categoryId: 'wishlist', spineStyle: { stacked: true,  width: 28, height: 164, color: '#1f2937', emblem: 'crown', ribsCount: 4 } },
      { id: 'w2', title: 'HHKB Keyboard', categoryId: 'wishlist', spineStyle: { stacked: true,  width: 25, height: 158, color: '#b05b3b', emblem: 'none', ribsCount: 2 } },
      { id: 'w3', title: 'OLED Monitor', categoryId: 'wishlist', spineStyle: { stacked: true,  width: 26, height: 160, color: '#52796f', emblem: 'star', ribsCount: 3 } }
    ]
  },

  // ROW 5: Memories, Achievements, Quotes
  {
    id: 'memories',
    name: 'Memories',
    color: '#DB2777',
    items: [
      { id: 'mem1', title: 'Graduation', categoryId: 'memories', spineStyle: { stacked: true,  width: 26, height: 160, color: '#f7f4eb', emblem: 'crest', ribsCount: 3 } },
      { id: 'mem2', title: 'Euro Summer', categoryId: 'memories', spineStyle: { stacked: true,  width: 28, height: 165, color: '#8b2635', emblem: 'crown', ribsCount: 4 } },
      { id: 'mem3', title: 'Japan Trip', categoryId: 'memories', spineStyle: { stacked: true,  width: 25, height: 158, color: '#1d3557', emblem: 'star', ribsCount: 2 } }
    ]
  },
  {
    id: 'achievements',
    name: 'Achievements',
    color: '#D97706',
    items: [
      { id: 'ach1', title: 'First 1k Users', categoryId: 'achievements', spineStyle: { stacked: true,  width: 28, height: 164, color: '#d9a036', emblem: 'star', ribsCount: 3 } },
      { id: 'ach2', title: 'Hackathon Win', categoryId: 'achievements', spineStyle: { stacked: true,  width: 26, height: 158, color: '#1d3557', emblem: 'crest', ribsCount: 2 } },
      { id: 'ach3', title: 'Open Source', categoryId: 'achievements', spineStyle: { stacked: true,  width: 25, height: 160, color: '#2d6a4f', emblem: 'crown', ribsCount: 3 } }
    ]
  },
  {
    id: 'quotes',
    name: 'Quotes I Live By',
    color: '#7C3AED',
    items: [
      { id: 'q1', title: 'Stay Hungry', categoryId: 'quotes', spineStyle: { width: 25, height: 158, color: '#1f2937', emblem: 'none', ribsCount: 3 } },
      { id: 'q2', title: 'No Spoon', categoryId: 'quotes', spineStyle: { width: 27, height: 162, color: '#8b2635', emblem: 'crown', ribsCount: 4 } },
      { id: 'q3', title: 'Carpe Diem', categoryId: 'quotes', spineStyle: { width: 26, height: 160, color: '#d9a036', emblem: 'star', ribsCount: 2 } }
    ]
  },

  // ROW 6: Connections, Papers, Projects
  {
    id: 'connections',
    name: 'Connections',
    color: '#10B981',
    items: [
      { id: 'con1', title: 'Tech Mentors', categoryId: 'connections', spineStyle: { width: 26, height: 158, color: '#2d6a4f', emblem: 'star', ribsCount: 3 } },
      { id: 'con2', title: 'Study Groups', categoryId: 'connections', spineStyle: { width: 25, height: 156, color: '#1f2937', emblem: 'none', ribsCount: 2 } }
    ]
  },
  {
    id: 'papers',
    name: 'Papers Written',
    color: '#4B5563',
    items: [
      { id: 'pa1', title: 'Neural Nets V1', categoryId: 'papers', spineStyle: { width: 28, height: 162, color: '#1f2937', emblem: 'crest', ribsCount: 4 } },
      { id: 'pa2', title: 'Transformers', categoryId: 'papers', spineStyle: { width: 26, height: 160, color: '#8b2635', emblem: 'star', ribsCount: 3 } }
    ]
  },
  {
    id: 'projects',
    name: 'Projects & Skills',
    color: '#06B6D4',
    items: [
      { id: 'pr1', title: 'Portfolioer', categoryId: 'projects', spineStyle: { width: 28, height: 165, color: '#457b9d', emblem: 'crown', ribsCount: 4 } },
      { id: 'sk1', title: 'Next.js Magic', categoryId: 'projects', spineStyle: { width: 26, height: 158, color: '#52796f', emblem: 'star', ribsCount: 3 } },
      { id: 'sk2', title: 'Tailwind CSS', categoryId: 'projects', spineStyle: { width: 24, height: 156, color: '#1f2937', emblem: 'crest', ribsCount: 2 } }
    ]
  }
];

export const CATEGORY_COLORS: Record<string, string> = {
  movies: '#8B2635',
  games: '#0EA5E9',
  books: '#2D6A4F',
  places: '#F97316',
  food: '#FCA5A5',
  music: '#A855F7',
  art: '#0891B2',
  hobbies: '#FBBF24',
  social: '#EC4899',
  apps: '#EAB308',
  wishlist: '#F59E0B',
  memories: '#DB2777',
  achievements: '#D97706',
  quotes: '#7C3AED',
  connections: '#10B981',
  papers: '#4B5563',
  projects: '#06B6D4',
  skills: '#8B5CF6',
  collections: '#B45309',
  writings: '#475569',
};
