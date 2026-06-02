'use client'

import { motion } from 'framer-motion'
import { BookItem } from '@/types/book'
import { CATEGORY_COLORS } from '@/constants/categories'

interface BookSpineProps {
  book: BookItem;
  onClick: (book: BookItem) => void;
}

export function BookSpine({ book, onClick }: BookSpineProps) {
  // Custom or category color
  const spineColor = book.spineStyle?.color || CATEGORY_COLORS[book.categoryId] || '#475569';
  
  const isStacked = book.spineStyle?.stacked;
  const lean = book.spineStyle?.lean || 'none';
  // Reduced lean angles to prevent books from clipping "inside another book"
  const leanAngle = book.spineStyle?.leanAngle || (lean === 'left' ? -4 : lean === 'right' ? 4 : 0);
  
  // Optimized sizes for a realistic shelf, scaled to prevent breaking the bookshelf columns
  const baseScale = 0.55;
  const height = book.spineStyle?.height ? Math.round(book.spineStyle.height * baseScale) : (80 + (book.title.length % 4) * 4);
  const width = book.spineStyle?.width ? Math.round(book.spineStyle.width * baseScale) : (12 + (book.title.length % 5) * 1.5);
  const yOffset = book.spineStyle?.yOffset ? Math.round(book.spineStyle.yOffset * baseScale) : 0;
  
  // Percentage-based dynamic heights to perfectly scale within any shelf size without overflow
  const heightPercent = book.spineStyle?.height 
    ? Math.min(88, Math.max(70, Math.round(book.spineStyle.height * 0.65)))
    : (76 + (book.title.length % 4) * 3); 

  const ribsCount = book.spineStyle?.ribsCount ?? (width > 15 ? 4 : 2);
  const emblem = book.spineStyle?.emblem || 'none';
  const fontFamily = book.spineStyle?.fontFamily || 'serif';
  const paperTone = book.spineStyle?.paperTone || 'cream';

  const paperColor = paperTone === 'cream' ? '#fbf8eb' : paperTone === 'aged' ? '#e2d6b5' : '#ffffff';

  // Gold Foil SVG Emblems
  const renderEmblem = () => {
    if (emblem === 'none') return null;
    return (
      <div className="my-1.5 opacity-85 text-yellow-400 drop-shadow-sm flex justify-center scale-90 origin-center">
        {emblem === 'crown' && (
          <svg className="w-3 h-2.5" viewBox="0 0 100 80" fill="currentColor">
            <path d="M10,80 L90,80 L100,20 L75,50 L50,10 L25,50 L0,20 Z" />
          </svg>
        )}
        {emblem === 'star' && (
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" />
          </svg>
        )}
        {emblem === 'crest' && (
          <svg className="w-3 h-3" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50,0 Q80,10 80,40 Q80,80 50,100 Q20,80 20,40 Q20,10 50,0 Z" />
          </svg>
        )}
        {emblem === 'flower' && (
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5zm.5-5.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1z" />
          </svg>
        )}
        {emblem === 'circle' && (
          <svg className="w-3 h-3" viewBox="0 0 10 10" fill="currentColor">
            <circle cx="5" cy="5" r="3.5" className="fill-yellow-400" />
          </svg>
        )}
      </div>
    );
  };

  // Render horizontal stacked book spine
  if (isStacked) {
    return (
      <motion.div
        className="relative flex-shrink-0 cursor-pointer preserve-3d group hover:z-50"
        style={{ 
          width: `${height}px`,
          maxWidth: '94%', // Prevents horizontal overflow ("in selfs wall") which breaks the bookshelf layout
          height: `${width}px`,
          marginBottom: `${yOffset}px`
        }}
        whileHover={{ 
          scale: 1.15,
          z: 50,
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => onClick(book)}
      >
        {/* Flat Spine body */}
        <div 
          className="absolute inset-0 rounded-sm border-t border-white/20 overflow-hidden"
          style={{ 
            backgroundColor: spineColor,
            backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.08), transparent 30%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0.45))',
            boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.15), inset 0 -1px 3px rgba(0,0,0,0.4)'
          }}
        >
          {/* Leather/Canvas Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.14] pointer-events-none" 
               style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/leather.png")' }} />

          {/* Spine Labels & Text Layout */}
          <div className="absolute inset-0 flex items-center justify-between px-2.5 overflow-hidden">
            <span className={`text-[6.5px] font-sans text-white/95 tracking-wide truncate max-w-[75%] uppercase font-bold drop-shadow-sm ${
              fontFamily === 'serif' ? 'font-serif' : 'font-sans'
            }`}>
              {book.title}
            </span>
            {book.author && (
              <span className="text-[5.5px] font-sans text-white/50 uppercase tracking-tighter truncate">
                {book.author}
              </span>
            )}
          </div>

          {/* Ribbed raised bands for horizontal books */}
          {Array.from({ length: ribsCount }).map((_, i) => (
            <div 
              key={i} 
              className="absolute top-0 bottom-0 w-[1.5px] bg-black/30 border-r border-white/10 shadow-sm"
              style={{ left: `${12 + i * (height / (ribsCount + 1))}px` }}
            />
          ))}
        </div>

        {/* 3D Depth (Top edge showing realistic cream-colored pages stacked) */}
        <div 
          className="absolute inset-x-0 top-0 h-[2.5px] origin-top border-b border-black/10" 
          style={{ 
            transform: 'rotateX(90deg)',
            backgroundColor: paperColor,
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0,0,0,0.08) 1px, rgba(0,0,0,0.08) 2px)'
          }}
        />

        {/* Elegant Frosted Glass Tooltip Overlay (Concept 2) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[100] flex flex-col items-center drop-shadow-lg preserve-3d">
          <div className="bg-white/70 backdrop-blur-md text-[#3e3529] px-3 py-2 rounded-md shadow-xl border border-white/40 whitespace-nowrap min-w-[max-content] flex flex-col items-center" style={{ transform: 'translateZ(30px)' }}>
            <span className="block text-[11px] font-serif font-black tracking-tight">{book.title}</span>
            {book.author && <span className="block text-[8px] font-sans text-[#655a4d] font-bold uppercase tracking-widest mt-0.5">{book.author}</span>}
          </div>
          {/* Tooltip Arrow */}
          <div className="w-2 h-2 bg-white/70 backdrop-blur-md rotate-45 -mt-1 border-b border-r border-white/40 shadow-sm" style={{ transform: 'translateZ(30px) rotate(45deg)' }}></div>
        </div>
      </motion.div>
    );
  }

  // Render vertical leaning or straight book spine
  const transformOrigin = lean === 'left' ? 'bottom left' : lean === 'right' ? 'bottom right' : 'bottom center';

  return (
    <motion.div
      className="relative flex-shrink-0 cursor-pointer preserve-3d group hover:z-50"
      style={{ 
        width: `${width}px`, 
        maxWidth: '100%', // Safety for very narrow columns
        height: `${heightPercent}%`,
        transformOrigin,
        rotate: leanAngle,
      }}
      whileHover={{ 
        scale: 1.15,
        rotateY: leanAngle ? leanAngle * 0.7 : -8,
        z: 50,
        boxShadow: "0 15px 30px rgba(0,0,0,0.4)"
      }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      onClick={() => onClick(book)}
    >
      {/* The main book spine */}
      <div 
        className="absolute inset-0 rounded-sm border-l border-white/15 overflow-hidden"
        style={{ 
          backgroundColor: spineColor,
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1), transparent 25%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.45))',
          boxShadow: 'inset 1px 0 2px rgba(255,255,255,0.15), inset -1px 0 3px rgba(0,0,0,0.4)'
        }}
      >
        {/* Fabric/Canvas Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.14] pointer-events-none" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/canvas-paper.png")' }} />

        {/* Vintage Ribbed Bands (Raised physical bands on spine) */}
        {Array.from({ length: ribsCount }).map((_, i) => (
          <div 
            key={i} 
            className="absolute left-0 right-0 h-[2px] bg-black/25 border-y border-white/5 shadow-sm"
            style={{ top: `${15 + i * (height / (ribsCount + 1))}px` }}
          />
        ))}

        {/* Gold Emblem */}
        <div className="absolute top-4 left-0 right-0 flex justify-center">
          {renderEmblem()}
        </div>

        {/* Dynamic Title layout based on width and font style (Highly legible with cream paper labels or sideways rotation) */}
        <div className="absolute inset-x-0 top-[15%] bottom-[12%] flex flex-col items-center justify-center py-1 px-0.5 overflow-hidden">
          {width > 15 ? (
            /* Classic Paper Label block pasted on spine (Extremely legible dark-on-light carbon text!) */
            <div className="w-[90%] bg-[#fdfbf7] border border-[#8c7e6d]/45 py-1.5 px-0.5 rounded-sm shadow-sm flex flex-col items-center justify-center opacity-95">
              <span className={`text-[6.5px] font-extrabold text-center text-neutral-900 tracking-tight leading-[1.1] ${
                fontFamily === 'serif' ? 'font-serif' : 'font-sans'
              }`}>
                {book.title}
              </span>
            </div>
          ) : (
            /* Sideways vertical foil typography (Infinitely more legible than stacked vertical letters!) */
            <span 
              className={`text-[7px] text-white/95 font-bold tracking-wider uppercase drop-shadow-sm select-none whitespace-nowrap leading-none ${
                fontFamily === 'serif' ? 'font-serif' : 'font-sans'
              }`}
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              {book.title}
            </span>
          )}
        </div>

        {/* Author / Date horizontally printed at the bottom edge */}
        {book.author && (
          <div className="absolute bottom-[5%] left-0 right-0 text-center">
            <span className="text-[5px] font-sans text-white/50 uppercase tracking-tighter select-none truncate px-0.5 block font-semibold">
              {book.author}
            </span>
          </div>
        )}

        {/* Classic library vintage gold foil stripes at top & bottom */}
        <div className="absolute top-1.5 left-0.5 right-0.5 h-[0.5px] bg-yellow-400/35" />
        <div className="absolute top-2 left-0.5 right-0.5 h-[0.5px] bg-yellow-400/35" />
        <div className="absolute bottom-1.5 left-0.5 right-0.5 h-[0.5px] bg-yellow-400/35" />
      </div>

      {/* Leaning Top edge showing realistic cream paper pages (Visible when tilting) */}
      <div 
        className="absolute inset-x-0 top-0 h-[3px] origin-top border-b border-black/10" 
        style={{ 
          transform: 'rotateX(90deg)',
          backgroundColor: paperColor,
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0,0,0,0.06) 1px, rgba(0,0,0,0.06) 2px)'
        }}
      />

      {/* 3D Depth (Side edge of vertical spine block) */}
      <div 
        className="absolute inset-y-0 right-0 w-[3px] bg-black/30 origin-right" 
        style={{ transform: 'rotateY(90deg)' }}
      />

      {/* Elegant Frosted Glass Tooltip Overlay (Concept 2) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[100] flex flex-col items-center drop-shadow-lg preserve-3d" style={{ transform: `translateX(-50%) rotate(${-leanAngle}deg)` }}>
        <div className="bg-white/70 backdrop-blur-md text-[#3e3529] px-3 py-2 rounded-md shadow-xl border border-white/40 whitespace-nowrap min-w-[max-content] flex flex-col items-center" style={{ transform: 'translateZ(30px)' }}>
          <span className="block text-[11px] font-serif font-black tracking-tight">{book.title}</span>
          {book.author && <span className="block text-[8px] font-sans text-[#655a4d] font-bold uppercase tracking-widest mt-0.5">{book.author}</span>}
        </div>
        {/* Tooltip Arrow */}
        <div className="w-2 h-2 bg-white/70 backdrop-blur-md rotate-45 -mt-1 border-b border-r border-white/40 shadow-sm" style={{ transform: 'translateZ(30px) rotate(45deg)' }}></div>
      </div>
    </motion.div>
  )
}
