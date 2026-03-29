import { useState, useEffect } from 'react';
import homeHero from '../assets/index-img-2.png';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        // 手機版
        const timer = setTimeout(() => setIsHovered(true), 300);
        return () => clearTimeout(timer);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-sans">

      {/* 背景層 */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1200 ease-[cubic-bezier(0.33,1,0.68,1)]
          ${isHovered ? 'blur-md scale-110 opacity-60' : 'blur-0 scale-100 opacity-100'}`}
        style={{ backgroundImage: `url(${homeHero})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* 內容層 */}
      <div 
        className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        
        {/* 大標題 */}
        <h1 className={`text-5xl md:text-[10rem] font-black tracking-[-0.08em] transition-all duration-700 cursor-default select-none
          ${isHovered 
            ? 'text-white opacity-100 drop-shadow-[0_0_50px_rgba(255,255,255,0.4)] translate-y-0' 
            : 'text-white/30 translate-y-4'}`}
        >
          1956 · 不該看的書
        </h1>

        <p className={`mt-6 text-lg md:text-2xl tracking-[0.5em] font-light transition-all duration-700 delay-100
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          VR 歷史體驗遊戲
        </p>
        
        {/* 磨砂按鈕 */}
        <div className={`mt-12 transition-all duration-700 delay-200
          ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <Link 
            to="/Introduction"
            className="inline-block group active:scale-95 transition-all cursor-pointer"
          >
            <button className="px-14 py-4 bg-[#161b22]/40 backdrop-blur-md border border-white/20 rounded-full text-base md:text-lg font-bold text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] cursor-pointer">
              欲知詳情
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_50%,black_100%)] opacity-70"></div>
    </div>
  );
}