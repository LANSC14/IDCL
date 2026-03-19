import homeHero from '../assets/index-img-2.png'; // 假設你的背景圖檔名
import { Link } from 'react-router-dom';

//導出Home函數組件
export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 背景圖片層 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homeHero})` }}
      >
        {/* 黑色遮罩，讓文字更好讀 */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 內容層 */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
          1956 · 不該看的書
        </h1>
        <p className="text-xl md:text-2xl mb-8 tracking-widest font-light">
          VR 歷史體驗遊戲
        </p>
        
        <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 shadow-xl">
          <Link to="/Introduction">
            欲知詳情
          </Link>
        </button>
      </div>
    </div>
    );
}