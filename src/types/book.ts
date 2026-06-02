import { ReactNode } from 'react';

export interface BookSpineStyle {
  width?: number;       // Spine thickness
  height?: number;      // Spine height
  lean?: 'left' | 'right' | 'none'; // Lean direction
  leanAngle?: number;   // Precise lean angle (e.g. -6, 5)
  stacked?: boolean;    // Is stacked horizontally
  yOffset?: number;     // Vertical offset for stacked alignment
  color?: string;       // Dynamic override for multi-colored organic look
  fontFamily?: 'serif' | 'sans' | 'display'; // Font style
  ribsCount?: number;   // Number of physical ribbed ridges (0 to 5)
  emblem?: 'none' | 'crown' | 'star' | 'crest' | 'flower' | 'circle'; // Gold foil emblem
  hasGoldFoil?: boolean; // Gold foil highlights
  paperTone?: 'cream' | 'white' | 'aged'; // Color of pages if visible
}

export interface BookItem {
  id: string;
  title: string;
  categoryId: string;
  author?: string;
  rating?: number;
  spineStyle?: BookSpineStyle;
  image?: string;
  description?: string;
  pages?: Array<{
    front: ReactNode;
    back: ReactNode;
  }>;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  items: BookItem[];
}
