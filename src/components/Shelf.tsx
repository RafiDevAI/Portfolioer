'use client'

import { ReactNode } from 'react'

interface ShelfProps {
  name: string;
  children: ReactNode;
  className?: string;
  hasLight?: boolean;
  style?: React.CSSProperties;
}

export function Shelf({ name, children, className, hasLight = true, style }: ShelfProps) {
  return (
    <div
      className={`relative w-full flex flex-col items-center justify-between overflow-visible min-h-0 h-full bg-[#eae6dc] transition-all duration-300 ${className || ''}`}
      style={{
        boxShadow: 'inset 0 6px 12px rgba(0,0,0,0.05), inset 6px 0 10px rgba(0,0,0,0.02), inset -6px 0 10px rgba(0,0,0,0.02)',
        ...style
      }}
    >
      {/* Soft golden overhead lighting beam */}
      {hasLight && (
        <>
          {/* Physical golden bulb cap */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-[#d8d3c5] rounded-b-full z-20" />
          {/* Beam Glow */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: 'radial-gradient(90% 100% at 50% 0%, rgba(255,255,220,0.4) 0%, rgba(255,255,220,0.06) 50%, transparent 80%)',
            }}
          />
        </>
      )}

      {/* Books row (leaves a clean gap at the bottom for the shelf board divider lip) */}
      <div className="relative z-40 w-full flex-1 flex items-end justify-start gap-[1.5px] px-2 pb-0.5 overflow-visible">
        {children}
        
        {/* Placeholder if empty */}
        {(!children || (Array.isArray(children) && children.length === 0)) && (
          <div className="absolute inset-x-0 bottom-2.5 flex items-center justify-center pointer-events-none opacity-25 italic text-[8.5px] font-serif text-[#7c7569]">
            Empty Shelf
          </div>
        )}
      </div>

      {/* Beautiful Physical Wood Shelf Board Lip (Renders at the front edge of the shelf, never obscured by books!) */}
      <div 
        className="w-full h-4 bg-[#f0ede4] border-t border-b border-[#eae6dc] shadow-sm relative flex items-center justify-between px-2.5 shrink-0 select-none z-30"
        style={{
          backgroundImage: 'linear-gradient(to bottom, #f5f2e9, #ebe6da)'
        }}
      >
        {/* Category Label (Engraved dark walnut font on the wood board front, 100% legible!) */}
        <span className="text-[7.5px] uppercase tracking-[0.2em] font-serif text-[#4a4136] font-black leading-none drop-shadow-sm">
          {name}
        </span>
        {/* Elegant brass screw cap decorative detail on the right */}
        <div 
          className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#cca87c] to-[#9c7b55] border border-[#8c7e6d]/30 shadow-inner shrink-0" 
          title="Brass Shelf Fitting"
        />
      </div>
    </div>
  )
}
