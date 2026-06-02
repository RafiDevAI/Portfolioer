'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CATEGORIES } from '@/constants/categories'
import { Shelf } from './Shelf'
import { BookSpine } from './BookSpine'
import { BookModal } from './BookModal'
import { BookItem } from '@/types/book'

export default function Bookshelf() {
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'modular' | 'grand'>('modular');

  // --- BOOKSHELF 1: COZY 3-COLUMN modular BILLY LAYOUT ---
  const leftColCategoryIndices = [0, 3, 6, 9, 12, null, 15];
  const leftFlexes = [0.9, 0.8, 1.1, 0.8, 1.1, 1.2, 0.9];

  const midColIndices = [1, 4, 7, 10, 13, 16];
  const midFlexes = [1.4, 0.7, 1.2, 1.0, 1.0, 1.5];

  const rightColIndices = [2, 5, 8, 11, 14, 17];
  const rightFlexes = [1.1, 1.3, 1.1, 1.6, 0.7, 1.2];

  // --- BOOKSHELF 2: GRAND 6-COLUMN WALL BILLY LAYOUT (Matching Reference Photo) ---
  // We have 6 columns, each has exactly 7 vertical shelf compartments.
  // We map the 18 categories evenly (3 active shelves per column, with realistic spaced empty compartments!)
  const grandCol1Indices = [0, null, 1, null, 2, null, null]; // Movies, Games, Books
  const grandCol2Indices = [3, null, 4, null, 5, null, null]; // Places, Food, Music
  const grandCol3Indices = [6, null, 7, null, 8, null, null]; // Art, Hobbies, Collections
  const grandCol4Indices = [9, null, 10, null, 11, null, null]; // Social, Apps, Wishlist
  const grandCol5Indices = [12, null, 13, null, 14, null, null]; // Memories, Awards, Quotes
  const grandCol6Indices = [15, null, 16, null, 17, null, null]; // Links, Papers, Work

  // Flex sizes: Column 1, 3, 4, 6 are Wide BILLYs (1.1). Column 2, 5 are Skinny BILLYs (0.55).
  const grandColFlexes = [1.1, 0.55, 1.1, 1.1, 0.55, 1.1];

  // Uniform shelf sizes for the beautiful structured wall-to-wall grid in the photo
  const grandShelfFlexes = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0];

  // Clean display name translator to prevent clipping inside narrow BILLY shelf compartments
  const getShortCategoryName = (name: string) => {
    const mapping: Record<string, string> = {
      "Movies & Shows": "Movies",
      "Places Visited": "Places",
      "Art Portfolio": "Art",
      "Social Links": "Social",
      "Memories & Logs": "Memories",
      "Connections": "Links",
      "Games & Play": "Games",
      "Food & Taste": "Food",
      "Hobbies & Craft": "Hobbies",
      "Apps & Tools": "Apps",
      "Achievements": "Awards",
      "Papers & Essays": "Papers",
      "Books & Reading": "Books",
      "Music & Sound": "Music",
      "Collections": "Items",
      "Wishlist & Wants": "Wishes",
      "Quotes & Lyrics": "Quotes",
      "Projects & Code": "Work"
    };
    return mapping[name] || name;
  };

  const getFilteredCategory = (index: number) => {
    const cat = CATEGORIES[index];
    if (!cat) return null;
    return {
      ...cat,
      items: cat.items.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    };
  };

  return (
    <div className={`w-full mx-auto px-4 select-none overflow-visible flex flex-col justify-start transition-all duration-500 ease-in-out ${
      activeTab === 'grand' ? 'max-w-[1400px]' : 'max-w-[750px]'
    }`}>
      
      {/* Header controls (Slightly adjusted layout with high-contrast text) */}
      <header className="flex flex-row items-center justify-between gap-4 mb-5 bg-[#fefae0]/50 backdrop-blur-md px-5 py-3.5 rounded-xl border border-[#8c7e6d]/20 shadow-md shrink-0 relative z-30">
        <div className="text-left space-y-0.5">
          <h1 className="text-2xl font-serif text-[#3e3529] font-black tracking-tight drop-shadow-sm select-none">
            Kazi's Library
          </h1>
          <p className="text-[#655a4d] font-sans uppercase tracking-[0.2em] text-[8px] font-bold">
            A curated interactive archive of life and craft
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <div className="relative w-36 md:w-48">
            <input 
              type="text" 
              placeholder="Search library..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#fdfbf7] border border-[#8c7e6d]/30 rounded-full py-1.5 px-4 pl-8 font-sans text-[10px] focus:outline-none focus:ring-1 focus:ring-[#8c7e6d]/20 transition-all text-[#4a4136] placeholder:text-[#8c7e6d]/60 font-semibold"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#8c7e6d]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <button 
            onClick={() => setIsEditMode(!isEditMode)}
            className={`px-4 py-1.5 rounded-full font-sans text-[9px] uppercase tracking-widest font-bold transition-all shrink-0 shadow-sm ${
              isEditMode 
                ? 'bg-[#3e3529] text-white' 
                : 'bg-[#fdfbf7] text-[#3e3529] border border-[#8c7e6d]/30 hover:bg-[#fbf9f4]'
            }`}
          >
            {isEditMode ? 'Exit Edit' : 'Edit Shelf'}
          </button>
        </div>
      </header>

      {/* High-Fidelity Tab Selector (Cozy pill tab) */}
      <div className="flex justify-center mb-6 shrink-0 z-30 relative">
        <div className="bg-[#8c7e6d]/10 border border-[#8c7e6d]/15 p-1 rounded-full flex gap-1.5 backdrop-blur-sm shadow-inner">
          <button 
            onClick={() => setActiveTab('modular')}
            className={`px-4 py-1.5 rounded-full font-sans text-[9px] uppercase tracking-widest font-bold transition-all ${
              activeTab === 'modular' 
                ? 'bg-[#3e3529] text-white shadow' 
                : 'text-[#655a4d] hover:bg-[#8c7e6d]/5'
            }`}
          >
            Modular Billy (3-Column)
          </button>
          <button 
            onClick={() => setActiveTab('grand')}
            className={`px-4 py-1.5 rounded-full font-sans text-[9px] uppercase tracking-widest font-bold transition-all ${
              activeTab === 'grand' 
                ? 'bg-[#3e3529] text-white shadow' 
                : 'text-[#655a4d] hover:bg-[#8c7e6d]/5'
            }`}
          >
            Grand Wall (6-Column)
          </button>
        </div>
      </div>

      {/* Decorative shelf top (Sitting on the physical bookcase frame, matching the photo's vase & tin ornaments) */}
      <div className="relative w-full h-10 flex justify-between items-end px-8 md:px-12 z-20 pointer-events-none shrink-0 mb-0.5">
        {/* Top Left: Ceramic flower vase with dried eucalyptus branches */}
        <div className="relative w-10 h-10 flex items-end justify-center">
          <svg className="w-5.5 h-8 text-[#cca87c] drop-shadow" viewBox="0 0 100 150" fill="currentColor">
            <path d="M50,10 C65,10 75,30 75,70 C75,110 65,140 50,140 C35,140 25,110 25,70 C25,30 35,10 50,10 Z" />
            <path d="M40,10 L60,10 L55,0 L45,0 Z" fill="#9e7b55" />
          </svg>
          {/* Eucalyptus branches */}
          <div className="absolute bottom-6 w-10 h-12 origin-bottom scale-85">
            <svg className="w-full h-full text-[#705e49]" viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
              <path d="M50,200 Q50,120 20,80 Q10,60 22,30" />
              <path d="M50,150 Q75,110 82,60 Q85,40 70,20" />
              <circle cx="22" cy="30" r="10" fill="#8b3e2f" />
              <circle cx="70" cy="20" r="10" fill="#8b3e2f" />
            </svg>
          </div>
        </div>

        {/* Top Center: Figurine & Yellow BAICOLI box */}
        <div className="flex items-end gap-4 md:gap-8">
          <svg className="w-8.5 h-5 text-[#fca5a5] drop-shadow-sm" viewBox="0 0 120 60" fill="currentColor">
            <path d="M10,30 Q30,10 60,30 Q90,10 110,30 Q95,50 60,40 Q25,50 10,30 Z" />
            <path d="M15,31 Q35,28 60,32 Q85,28 105,31 Q85,38 60,34 Q35,38 15,31 Z" fill="#f43f5e" opacity="0.3" />
          </svg>
          <div className="w-10 h-5 bg-[#eab308] border border-[#ca8a04] rounded shadow flex items-center justify-center p-0.5 relative">
            <div className="absolute inset-0.5 border border-white/20 rounded-sm flex items-center justify-center">
              <span className="text-[4px] font-serif tracking-widest text-white font-bold">BAICOLI</span>
            </div>
          </div>
        </div>

        {/* Top Right: Glass perfume container */}
        <svg className="w-4.5 h-8 text-white/70 drop-shadow-sm opacity-90" viewBox="0 0 50 120" fill="currentColor">
          <rect x="15" y="0" width="20" height="20" rx="3" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="22" y="20" width="6" height="15" fill="#cbd5e1" />
          <path d="M5,35 L45,35 L40,115 L10,115 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
        </svg>
      </div>

      {/* The main physical wood bookshelf cabinet frame */}
      <motion.div 
        layout
        className="w-full bg-[#fbfaf8] p-3 rounded-md shadow-2xl border-2 border-[#eae6dc] flex flex-col h-[760px] shrink-0 relative overflow-visible"
        style={{
          backgroundImage: 'linear-gradient(to bottom, #fdfdfc, #fbfaf8)',
          boxShadow: '0 25px 60px -15px rgba(54, 48, 40, 0.28), 0 0 35px rgba(140, 126, 109, 0.08)'
        }}
      >
        <AnimatePresence mode="wait">
          {activeTab === 'modular' ? (
            // --- VIEW 1: COZY 3-COLUMN BOOKSHELF ---
            <motion.div 
              key="modular-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex flex-row gap-2 md:gap-3 bg-[#eae6dc] min-h-0"
            >
              {/* Left Column (Skinny: flex-[0.55]) */}
              <div className="flex-[0.55] flex flex-col gap-2 bg-[#eae6dc] min-h-0">
                {leftColCategoryIndices.map((idx, index) => {
                  const flexVal = leftFlexes[index] || 1;

                  if (idx === null) {
                    return (
                      <Shelf 
                        key="left-gallery" 
                        name="Gallery" 
                        className="flex-1 min-h-0"
                        style={{ flex: flexVal }}
                      >
                        {!searchQuery && (
                          <div className="absolute right-3.5 bottom-2 w-7 h-9 bg-[#7c2d12] border border-[#f5ebe0] rounded shadow-sm flex items-center justify-center">
                            <div className="w-5.5 h-7.5 bg-black/15 rounded flex items-center justify-center">
                              <svg className="w-3.5 h-3.5 text-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </Shelf>
                    );
                  }

                  const category = getFilteredCategory(idx);
                  if (!category) return null;

                  return (
                    <Shelf 
                      key={category.id} 
                      name={getShortCategoryName(category.name)} 
                      className="flex-1 min-h-0"
                      style={{ flex: flexVal }}
                    >
                      <div className="flex items-end gap-[1.5px] h-full w-full overflow-visible">
                        {index === 4 && !searchQuery && (
                          <div className="w-8 h-12 flex-shrink-0 bg-[#1f2937] border border-black rounded shadow flex flex-col justify-around items-center p-0.5 mr-1 mb-1 relative z-25">
                            <div className="w-3.5 h-3.5 rounded-full bg-black/50 border border-white/5 flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-black" />
                            </div>
                            <div className="w-5.5 h-5.5 rounded-full bg-black/50 border border-white/5 flex items-center justify-center">
                              <div className="w-3.5 h-3.5 rounded-full bg-black" />
                            </div>
                          </div>
                        )}

                        {category.items.filter(b => !b.spineStyle?.stacked).map(book => (
                          <BookSpine key={book.id} book={book} onClick={setSelectedBook} />
                        ))}
                        {category.items.some(b => b.spineStyle?.stacked) && (
                          <div className="flex flex-col-reverse justify-start gap-[1px] mb-[2px] ml-1">
                            {category.items.filter(b => b.spineStyle?.stacked).map(book => (
                              <BookSpine key={book.id} book={book} onClick={setSelectedBook} />
                            ))}
                          </div>
                        )}

                        {index === 3 && !searchQuery && (
                          <div className="flex flex-col gap-[1px] ml-1.5 mb-1.5 flex-shrink-0 relative z-25">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div key={i} className="w-7 h-[2px] bg-[#fdfdfb] border border-black/5 shadow-sm rounded-sm" />
                            ))}
                          </div>
                        )}
                      </div>
                    </Shelf>
                  );
                })}
              </div>

              {/* Middle Column (Wide: flex-[1.1]) */}
              <div className="flex-[1.1] flex flex-col gap-2 bg-[#eae6dc] border-x border-[#f0ede4] min-h-0">
                {midColIndices.map((idx, index) => {
                  const flexVal = midFlexes[index] || 1;
                  const category = getFilteredCategory(idx);
                  if (!category) return null;

                  return (
                    <Shelf 
                      key={category.id} 
                      name={getShortCategoryName(category.name)} 
                      className="flex-1 min-h-0"
                      style={{ flex: flexVal }}
                    >
                      <div className="flex items-end gap-[1.5px] h-full w-full overflow-visible">
                        {category.items.filter(b => !b.spineStyle?.stacked).map(book => (
                          <BookSpine key={book.id} book={book} onClick={setSelectedBook} />
                        ))}
                        {category.items.some(b => b.spineStyle?.stacked) && (
                          <div className="flex flex-col-reverse justify-start gap-[1px] mb-[2px] ml-1">
                            {category.items.filter(b => b.spineStyle?.stacked).map(book => (
                              <BookSpine key={book.id} book={book} onClick={setSelectedBook} />
                            ))}
                          </div>
                        )}

                        {index === 0 && !searchQuery && (
                          <div className="w-7 h-9 flex-shrink-0 opacity-95 drop-shadow ml-2 self-end mb-1 relative z-25">
                            <svg viewBox="0 0 100 120" className="w-full h-full text-white" fill="currentColor">
                              <ellipse cx="50" cy="80" rx="35" ry="30" />
                              <circle cx="50" cy="45" r="22" />
                              <polygon points="30,30 35,10 45,28" />
                              <polygon points="70,30 65,10 55,28" />
                              <path d="M20,65 Q10,45 15,35 Q22,35 25,50" fill="#fca5a5" />
                              <circle cx="50" cy="65" r="6" fill="#fbbf24" />
                            </svg>
                          </div>
                        )}

                        {index === 2 && !searchQuery && (
                          <div className="flex items-end gap-1.5 ml-2 mb-1 flex-shrink-0 relative z-25">
                            <div className="w-7 h-9 opacity-95 drop-shadow">
                              <svg viewBox="0 0 100 120" className="w-full h-full text-white" fill="currentColor">
                                <circle cx="50" cy="80" r="30" />
                                <circle cx="50" cy="45" r="20" />
                                <ellipse cx="42" cy="20" rx="6" ry="18" />
                                <ellipse cx="58" cy="20" rx="6" ry="18" />
                                <circle cx="50" cy="80" r="10" fill="#fca5a5" opacity="0.4" />
                              </svg>
                            </div>
                            <div 
                              className="w-11 h-15 bg-[#2d6a4f] border border-[#8c7e6d]/30 rounded shadow-md origin-bottom -rotate-6 flex flex-col justify-between p-1 overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                              style={{ transform: 'perspective(1000px) rotateY(-8deg) rotateX(4deg)' }}
                            >
                              <span className="text-[3px] uppercase tracking-wider text-white/50 font-serif">Story</span>
                              <div className="w-full h-9 bg-[#eae6dc] rounded border border-black/5 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=150" alt="Squirrel" className="w-full h-full object-cover" />
                              </div>
                              <span className="text-[4px] font-bold text-center text-white/95 truncate">Der Hase...</span>
                            </div>
                          </div>
                        )}

                        {index === 5 && !searchQuery && (
                          <div className="w-18 h-9 flex-shrink-0 bg-[#fdfbf7] border border-[#8c7e6d]/30 rounded shadow-sm flex items-center justify-center overflow-hidden ml-2 mb-1 relative z-25">
                            <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=150" alt="Egon Schiele" className="w-full h-full object-cover opacity-85" />
                          </div>
                        )}
                      </div>
                    </Shelf>
                  );
                })}
              </div>

              {/* Right Column (Wide: flex-[1.1]) */}
              <div className="flex-[1.1] flex flex-col gap-2 bg-[#eae6dc] min-h-0">
                {rightColIndices.map((idx, index) => {
                  const flexVal = rightFlexes[index] || 1;
                  const category = getFilteredCategory(idx);
                  if (!category) return null;

                  return (
                    <Shelf 
                      key={category.id} 
                      name={getShortCategoryName(category.name)} 
                      className="flex-1 min-h-0"
                      style={{ flex: flexVal }}
                    >
                      <div className="flex items-end gap-[1.5px] h-full w-full overflow-visible">
                        {category.items.filter(b => !b.spineStyle?.stacked).map(book => (
                          <BookSpine key={book.id} book={book} onClick={setSelectedBook} />
                        ))}
                        {category.items.some(b => b.spineStyle?.stacked) && (
                          <div className="flex flex-col-reverse justify-start gap-[1px] mb-[2px] ml-1">
                            {category.items.filter(b => b.spineStyle?.stacked).map(book => (
                              <BookSpine key={book.id} book={book} onClick={setSelectedBook} />
                            ))}
                          </div>
                        )}

                        {index === 1 && !searchQuery && (
                          <div className="flex flex-col gap-[1px] ml-2 mb-1.5 flex-shrink-0 relative z-25">
                            <div className="w-9 h-2 bg-[#8b2635] rounded-sm shadow-sm" />
                            <div className="w-8.5 h-2 bg-[#f7f4eb] rounded-sm shadow-sm" />
                            <div className="w-9 h-1.5 bg-[#1d3557] rounded-sm shadow-sm" />
                          </div>
                        )}

                        {index === 2 && !searchQuery && (
                          <div className="w-7 h-9 flex-shrink-0 opacity-95 drop-shadow ml-2 self-end mb-1 relative z-25">
                            <svg viewBox="0 0 100 130" className="w-full h-full text-[#fcd34d]" fill="currentColor">
                              <path d="M20,50 L10,35 L30,35 L20,20 L40,25 L35,5 L50,15 L65,5 L60,25 L80,20 L70,35 L90,35 L80,50 Z" />
                              <circle cx="50" cy="65" r="18" />
                              <ellipse cx="43" cy="60" rx="4" ry="6" fill="white" />
                              <ellipse cx="57" cy="60" rx="4" ry="6" fill="white" />
                              <circle cx="43" cy="60" r="1.5" fill="black" />
                              <circle cx="57" cy="60" r="1.5" fill="black" />
                              <path d="M35,80 L20,110 L80,110 L65,80 Z" fill="#f97316" />
                            </svg>
                          </div>
                        )}

                        {index === 3 && !searchQuery && (
                          <div className="w-8 h-10 ml-2 mb-0.5 flex-shrink-0 relative flex items-end justify-center z-25">
                            <svg className="w-5 h-7 text-white/50 stroke-white/20 stroke-1 drop-shadow" viewBox="0 0 60 80" fill="currentColor">
                              <ellipse cx="30" cy="50" rx="20" ry="25" />
                              <rect x="25" y="10" width="10" height="20" />
                            </svg>
                            <div className="absolute bottom-4 w-8 h-8">
                              <svg className="w-full h-full" viewBox="0 0 100 100">
                                <path d="M50,80 Q40,50 30,30" stroke="#15803d" strokeWidth="2.5" fill="none" />
                                <path d="M50,80 Q60,50 70,35" stroke="#15803d" strokeWidth="2.5" fill="none" />
                                <circle cx="30" cy="30" r="11" fill="#f43f5e" />
                                <circle cx="70" cy="35" r="11" fill="#a855f7" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    </Shelf>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            // --- VIEW 2: GRAND 6-COLUMN WALL BOOKSHELF (Matching reference photo exactly!) ---
            <motion.div 
              key="grand-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex flex-row gap-1.5 bg-[#eae6dc] min-h-0 overflow-x-auto md:overflow-x-visible md:gap-2"
            >
              {[
                { indices: grandCol1Indices, flex: grandColFlexes[0] },
                { indices: grandCol2Indices, flex: grandColFlexes[1] },
                { indices: grandCol3Indices, flex: grandColFlexes[2] },
                { indices: grandCol4Indices, flex: grandColFlexes[3] },
                { indices: grandCol5Indices, flex: grandColFlexes[4] },
                { indices: grandCol6Indices, flex: grandColFlexes[5] }
              ].map((col, colIdx) => (
                <div 
                  key={colIdx} 
                  className={`flex flex-col gap-1.5 bg-[#eae6dc] min-h-0 shrink-0 md:shrink ${
                    colIdx > 0 ? 'border-l border-[#f0ede4]' : ''
                  }`}
                  style={{ flex: col.flex, minWidth: col.flex === 0.55 ? '55px' : '95px' }}
                >
                  {col.indices.map((idx, shelfIdx) => {
                    const shelfFlex = grandShelfFlexes[shelfIdx] || 1;

                    // If index is null, render a beautiful structured empty shelf compartment (with ornaments spaced realistically!)
                    if (idx === null) {
                      return (
                        <Shelf 
                          key={`empty-c${colIdx}-s${shelfIdx}`}
                          name="Gallery"
                          className="flex-1 min-h-0"
                          style={{ flex: shelfFlex }}
                          hasLight={false} // Soft ambient natural shade
                        >
                          {!searchQuery && (
                            <div className="w-full h-full flex items-center justify-center opacity-85">
                              {/* Spaced cozy ornaments exactly matching the custom styled BILLY bookcases */}
                              {colIdx === 0 && shelfIdx === 4 && (
                                <div className="w-5.5 h-7.5 bg-[#7c2d12] border border-[#f5ebe0] rounded shadow flex items-center justify-center pointer-events-none">
                                  <div className="w-4 h-6 bg-black/10 rounded flex items-center justify-center">
                                    <svg className="w-2.5 h-2.5 text-black/20" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16" />
                                    </svg>
                                  </div>
                                </div>
                              )}
                              
                              {colIdx === 1 && shelfIdx === 5 && (
                                <div className="w-8 h-11 bg-[#1f2937] border border-black rounded shadow flex flex-col justify-around items-center p-0.5 pointer-events-none">
                                  <div className="w-2.5 h-2.5 rounded-full bg-black/50 flex items-center justify-center">
                                    <div className="w-1 h-1 rounded-full bg-black" />
                                  </div>
                                  <div className="w-4 h-4 rounded-full bg-black/50 flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-black" />
                                  </div>
                                </div>
                              )}

                              {colIdx === 2 && shelfIdx === 3 && (
                                <div className="flex items-end gap-1 pointer-events-none scale-90 origin-bottom">
                                  <div className="w-5.5 h-7.5 opacity-90 text-white">
                                    <svg viewBox="0 0 100 120" fill="currentColor">
                                      <circle cx="50" cy="80" r="30" />
                                      <circle cx="50" cy="45" r="20" />
                                    </svg>
                                  </div>
                                  <div className="w-9 h-12 bg-[#2d6a4f] rounded shadow-sm flex items-center justify-center">
                                    <span className="text-[2.5px] text-white/95 font-bold font-serif">Der Hase</span>
                                  </div>
                                </div>
                              )}

                              {colIdx === 3 && shelfIdx === 6 && (
                                <div className="w-16 h-8 bg-[#fdfbf7] border border-[#8c7e6d]/30 rounded shadow-sm overflow-hidden flex items-center justify-center pointer-events-none scale-90">
                                  <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=100" alt="Art" className="w-full h-full object-cover opacity-80" />
                                </div>
                              )}

                              {colIdx === 5 && shelfIdx === 4 && (
                                <div className="w-7 h-9 relative flex items-end justify-center pointer-events-none scale-90">
                                  <svg className="w-4 h-6 text-white/40 stroke-white/20 stroke-1" viewBox="0 0 60 80" fill="currentColor">
                                    <ellipse cx="30" cy="50" rx="20" ry="25" />
                                  </svg>
                                </div>
                              )}
                            </div>
                          )}
                        </Shelf>
                      );
                    }

                    const category = getFilteredCategory(idx);
                    if (!category) return null;

                    return (
                      <Shelf 
                        key={category.id} 
                        name={getShortCategoryName(category.name)} 
                        className="flex-1 min-h-0"
                        style={{ flex: shelfFlex }}
                      >
                        <div className="flex items-end gap-[1px] h-full w-full overflow-visible">
                          
                          {/* Col 2 Row 2: Add inline lucky cat next to Food category */}
                          {colIdx === 1 && shelfIdx === 2 && !searchQuery && (
                            <div className="w-5.5 h-7 flex-shrink-0 opacity-90 text-white ml-1 self-end mb-0.5 relative z-25">
                              <svg viewBox="0 0 100 120" fill="currentColor">
                                <ellipse cx="50" cy="80" rx="35" ry="30" />
                                <circle cx="50" cy="45" r="22" />
                              </svg>
                            </div>
                          )}

                          {category.items.filter(b => !b.spineStyle?.stacked).map(book => (
                            <BookSpine key={book.id} book={book} onClick={setSelectedBook} />
                          ))}
                          {category.items.some(b => b.spineStyle?.stacked) && (
                            <div className="flex flex-col-reverse justify-start gap-[1px] mb-[2px] ml-1">
                              {category.items.filter(b => b.spineStyle?.stacked).map(book => (
                                <BookSpine key={book.id} book={book} onClick={setSelectedBook} />
                              ))}
                            </div>
                          )}

                          {/* Col 3 Row 4: Add stacked books inside Hobbies/Collections */}
                          {colIdx === 2 && shelfIdx === 4 && !searchQuery && (
                            <div className="flex flex-col gap-[1px] ml-1 mb-1 flex-shrink-0 relative z-25 scale-90">
                              <div className="w-7 h-1.5 bg-[#8b2635] rounded-sm" />
                              <div className="w-6.5 h-1.5 bg-[#f7f4eb] rounded-sm" />
                            </div>
                          )}

                          {/* Col 6 Row 2: Lisa Simpson upright in Papers category */}
                          {colIdx === 5 && shelfIdx === 2 && !searchQuery && (
                            <div className="w-5.5 h-7.5 flex-shrink-0 opacity-90 text-[#fcd34d] ml-1 self-end mb-0.5 relative z-25">
                              <svg viewBox="0 0 100 130" fill="currentColor">
                                <circle cx="50" cy="65" r="18" />
                                <path d="M35,80 L20,110 L80,110 L65,80 Z" fill="#f97316" />
                              </svg>
                            </div>
                          )}

                        </div>
                      </Shelf>
                    );
                  })}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Cozy wood parquet floor section (Brings back premium room feel!) */}
      <div 
        className="relative w-full h-10 bg-gradient-to-b from-[#c08a4e] to-[#97642f] rounded-b-md shadow-inner flex justify-between items-center px-8 overflow-visible pointer-events-none mt-0.5 shrink-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,0,0,0.06) 40px, rgba(0,0,0,0.06) 42px), linear-gradient(to bottom, rgba(255,255,255,0.08), transparent)',
          boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.2), 0 4px 10px rgba(0,0,0,0.1)'
        }}
      >
        {/* Left potted plant */}
        <div className="relative w-12 h-16 -mt-10 flex items-end justify-center">
          <svg className="w-8 h-12" viewBox="0 0 120 200" fill="currentColor">
            <path d="M35,140 L85,140 L75,190 L45,190 Z" fill="#9a3412" stroke="#7c2d12" strokeWidth="1.5" />
            <path d="M60,140 Q40,100 20,80 Q10,70 30,60 Q50,50 60,140" fill="#14532d" />
            <path d="M60,140 Q70,90 90,70 Q110,50 100,40 Q90,30 60,140" fill="#166534" />
            <path d="M60,140 Q50,70 60,30 Q70,20 80,45 Q90,70 60,140" fill="#15803d" />
          </svg>
        </div>

        {/* Right potted plant */}
        <div className="relative w-14 h-18 -mt-12 flex items-end justify-center">
          <svg className="w-10 h-14" viewBox="0 0 140 220" fill="currentColor">
            <path d="M40,150 L100,150 L90,210 L50,210 Z" fill="#6b7280" stroke="#4b5563" strokeWidth="1.5" />
            <path d="M70,150 Q50,90 20,80 Q5,75 15,50 Q30,30 70,150" fill="#0f5132" />
            <path d="M70,150 Q90,100 120,90 Q135,85 130,60 Q120,40 70,150" fill="#198754" />
            <path d="M70,150 Q60,80 70,20 Q80,10 95,30 Q110,50 70,150" fill="#14532d" />
          </svg>
        </div>
      </div>

      {/* Immersive Book Modal */}
      <AnimatePresence>
        {selectedBook && (
          <BookModal 
            book={selectedBook} 
            onClose={() => setSelectedBook(null)} 
          />
        )}
      </AnimatePresence>

      {/* Footer Info (Highly Compact) */}
      <footer className="mt-4 text-center text-[#8c7e6d]/60 text-[8px] uppercase tracking-widest shrink-0">
        <p>© 2026 Portfolioer • Inspired by Rafi's cozy library</p>
      </footer>
    </div>
  )
}
