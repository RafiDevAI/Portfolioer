import Bookshelf from '@/components/Bookshelf'

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#f5ebe0] selection:bg-[#4a4136] selection:text-white overflow-y-auto flex flex-col items-center justify-start py-6 relative">
      
      {/* High-Fidelity Room Wallpaper: Premium vertical beadboard wood paneling */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #f5ebe0, #f5ebe0 30px, #ebdcd0 30px, #ebdcd0 32px)'
        }}
      />

      {/* Cozy Vignette & Ambient Warm Spotlight Glow behind the bookshelf */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.45) 0%, rgba(74,65,54,0.15) 100%)'
        }}
      />

      {/* Natural paper microtexture layer */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />
      
      {/* Bookshelf Container */}
      <div className="relative z-20 w-full flex flex-col items-center justify-start">
        <Bookshelf />
      </div>
    </main>
  )
}
