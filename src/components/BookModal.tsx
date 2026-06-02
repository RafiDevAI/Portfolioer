'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { BookItem } from '@/types/book'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { CATEGORY_COLORS } from '@/constants/categories'

interface BookModalProps {
  book: BookItem | null;
  onClose: () => void;
}

export function BookModal({ book, onClose }: BookModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  if (!book) return null;

  const color = CATEGORY_COLORS[book.categoryId] || '#475569';

  // Sample pages if none provided
  const pages = book.pages || [
    {
      front: (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center" style={{ backgroundColor: color }}>
           <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/leather.png")' }} />
           <h2 className="font-serif text-5xl text-white mb-6 text-glow">{book.title}</h2>
           <div className="w-16 h-1 bg-white/20 mb-8" />
           <p className="text-white/60 uppercase tracking-widest text-xs animate-pulse">Click to Open</p>
        </div>
      ),
      back: (
        <div className="absolute inset-0 bg-[#fdfbf7] p-12 flex flex-col justify-center border-l border-black/5">
           <span className="text-black/30 text-[10px] uppercase tracking-[0.3em] mb-4">Introduction</span>
           <h3 className="font-serif text-3xl text-black/80 mb-6">{book.title}</h3>
           <p className="text-black/60 text-sm leading-relaxed italic">
             "A story about passion, dedication, and the pursuit of excellence in the field of {book.categoryId}."
           </p>
        </div>
      )
    },
    {
      front: (
        <div className="absolute inset-0 bg-[#fdfbf7] p-12 flex flex-col justify-center border-r border-black/5">
           <div className="aspect-video w-full bg-black/5 rounded-lg mb-6 overflow-hidden">
             {book.image ? (
               <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
             ) : (
               <div className="w-full h-full flex items-center justify-center text-black/10 font-serif italic">Photo of {book.title}</div>
             )}
           </div>
           <div className="flex items-center gap-4 mb-4">
              <div className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-white" style={{ backgroundColor: color }}>
                {book.categoryId}
              </div>
              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>{i < (book.rating || 0) ? '★' : '☆'}</span>
                ))}
              </div>
           </div>
           <p className="text-black/60 text-sm leading-relaxed">
             {book.description || `This entry explores the significance of ${book.title} in my personal library. It represents a milestone in my journey through ${book.categoryId}.`}
           </p>
        </div>
      ),
      back: (
        <div className="absolute inset-0 bg-[#fdfbf7] p-12 flex flex-col items-center justify-center text-center">
           <h3 className="font-serif text-2xl text-black/80 mb-4">Final Thoughts</h3>
           <p className="text-black/50 text-sm mb-8">Ready to explore more?</p>
           <button 
             onClick={onClose}
             className="px-6 py-2 border border-black/10 text-black/60 hover:bg-black/5 rounded-lg text-xs uppercase tracking-widest transition-all"
           >
             Return to Shelf
           </button>
        </div>
      )
    }
  ];

  const totalPages = pages.length;

  const flipNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const flipPrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Dimmed Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
      />

      {/* Book Container */}
      <motion.div
        layoutId={`book-${book.id}`}
        className="relative z-10 w-[400px] h-[550px] preserve-3d pointer-events-auto"
        initial={{ scale: 0.8, y: 100, rotateY: 0 }}
        animate={{ 
          scale: 1, 
          y: 0,
          rotateY: isOpen ? 0 : 0, // Logic for rotating base
          x: isOpen ? '25%' : 0 // Shift to center spread when open
        }}
        exit={{ scale: 0.8, opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
      >
        <div className="relative w-full h-full perspective-[2500px] preserve-3d">
          
          {/* Base Back Cover (Only visible when open) */}
          <div className="absolute inset-0 bg-[#1a1a1a] rounded-r-xl border border-white/10 shadow-2xl preserve-3d">
             <div className="absolute inset-0 bg-gradient-to-l from-white/5 to-transparent rounded-r-xl" />
             {/* Final page content */}
             <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 font-serif italic">
               Fin
             </div>
          </div>

          {/* Flipping Pages */}
          {pages.map((page, index) => {
            const isFlipped = currentPage > index;
            const zIndex = isFlipped ? index : pages.length - index;

            return (
              <motion.div
                key={index}
                className="absolute inset-0 origin-left preserve-3d cursor-pointer"
                style={{ zIndex }}
                animate={{ rotateY: isFlipped ? -180 : 0 }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isOpen) {
                    setIsOpen(true);
                    setCurrentPage(1);
                  } else {
                    if (isFlipped) flipPrev();
                    else flipNext();
                  }
                }}
              >
                {/* Front of Page */}
                <div className="absolute inset-0 rounded-r-xl overflow-hidden backface-hidden shadow-[inset_20px_0_40px_rgba(0,0,0,0.5)]">
                  {page.front}
                </div>

                {/* Back of Page */}
                <div className="absolute inset-0 rounded-l-xl overflow-hidden backface-hidden [transform:rotateY(180deg)] shadow-[inset_-20px_0_40px_rgba(0,0,0,0.5)]">
                  {page.back}
                </div>
              </motion.div>
            );
          })}

          {/* UI Controls (Only when open) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -top-16 left-0 right-0 flex justify-between items-center px-4"
              >
                <button 
                  onClick={onClose}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white/80 transition-all backdrop-blur-md border border-white/10"
                >
                  <XMarkIcon className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest">Close</span>
                </button>

                <div className="flex gap-4">
                   <button 
                    onClick={(e) => { e.stopPropagation(); flipPrev(); }}
                    disabled={currentPage <= 1}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white/80 disabled:opacity-20 transition-all"
                   >
                     <ChevronLeftIcon className="w-5 h-5" />
                   </button>
                   <button 
                    onClick={(e) => { e.stopPropagation(); flipNext(); }}
                    disabled={currentPage >= totalPages}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white/80 disabled:opacity-20 transition-all"
                   >
                     <ChevronRightIcon className="w-5 h-5" />
                   </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Page Counter */}
          {isOpen && (
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-[10px] uppercase tracking-widest">
              Page {currentPage} of {totalPages}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
