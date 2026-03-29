import homeHero from '../assets/introduction-img-1.png'; 
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Introduction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 讓手機版載入後 150ms 自動浮現，體感最順
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-sans">
      
      {/* 背景層 */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1200 ease-out
          ${isVisible ? 'blur-xs scale-105 opacity-60' : 'blur-0 scale-100 opacity-100'}`}
        style={{ backgroundImage: `url(${homeHero})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/90"></div>
      </div>

      {/* 內容層 */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-8 md:px-10">
        
        {/* 標題 */}
        <h1 className={`text-4xl md:text-5xl font-bold mb-8 md:mb-12 tracking-[0.2em] transition-all duration-1000
          ${isVisible 
            ? 'text-white opacity-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] translate-y-0' 
            : 'text-white/0 opacity-0 -translate-y-4'}`}
        >
          簡介
        </h1>

        {/* 內文 */}
        <div className={`max-w-4xl transition-all duration-1000 delay-300 transform
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-base md:text-xl tracking-[0.15em] md:tracking-[0.2em] font-light text-gray-100 leading-[1.8] md:leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            1956年，一段人倫悲劇由一本不該看的書開始，然而結局的真相，卻是無辜的人永不見天日。白色恐怖時期的臺灣留下多少悲傷與苦痛，本作透過虛擬實境，回到當天的時空，聆聽她們的心聲，體驗那段不被人們知曉的歷史故事。
          </p>
        </div>
          
        {/* 按鈕 */}
        <div className={`mt-12 md:mt-16 transition-all duration-1000 delay-700 transform
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Link to="/Making" className="inline-block active:scale-90 transition-all">
            <button className="px-10 md:px-14 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-base md:text-lg font-bold text-white hover:bg-white hover:text-black transition-all">
              製作歷程
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_30%,black_100%)] opacity-80"></div>
    </div>
  );
}