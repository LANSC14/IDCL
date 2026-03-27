import homeHero from '../assets/index-img-2.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-sans">
      {/* 1. 背景圖片層 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105"
        style={{ backgroundImage: `url(${homeHero})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 2. 內容層 */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white text-center px-6">
        
        {/* 主標題 */}
        <h1 className="text-6xl md:text-8xl font-black mb-5 tracking-tightest drop-shadow-lg">
          1956 · 不該看的書
        </h1>

        {/* 副標題 */}
        <p className="text-2xl md:text-3xl mb-12 tracking-[0.2em] font-light">
          VR 歷史體驗遊戲
        </p>
        
        {/* 3. 優化後的按鈕：直接使用 Link 作為容器 */}
        <Link 
          to="/Introduction"
          className="px-10 py-4 bg-white text-black rounded-full text-lg font-bold 
                     hover:bg-gray-200 active:scale-95 transition-all duration-150 shadow-2xl 
                     inline-block"
        >
          欲知詳情
        </Link>
      </div>
    </div>
  );
}