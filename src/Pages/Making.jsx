import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/making-img-1.png';
import img2 from '../assets/making-img-2.png';
import img3 from '../assets/making-img-3.png';
import img4 from '../assets/making-img-4.png';
import img5 from '../assets/making-img-5.png';

const makingSteps = [
  { id: 1, cat: '資料蒐集' },
  { id: 2, cat: '內容篩選', desc: '《1956·不該看的書》的劇本選定台灣白色恐怖時期，考量到VR體驗的長度限制並濃縮重點，因此挑選1956年白色恐怖時期的臺南市委會郵電支部案作為主要敘事背景，講述受難者丁窈窕及施水環受刑期間的遭遇。', img: img1 },
  { id: 3, cat: '人物設定', desc: '玩家扮演的角色融合兩名實史人物為主，丁窈窕及施水環，其餘角色服裝則參考史料中受刑人及看守所管理員的服裝。', img: img2 },
  { id: 4, cat: '場景設定', desc: 'VR體驗場景為看守所，主要參考景美看守所及相近時期的室內擺設與家具。', img: img3 },
  { id: 5, cat: '物件設定', desc: '場景內物件包含桌椅、書櫃、縫衣機、盥洗台、兒童玩具、菸盒及日記。', img: img4 },
  { id: 6, cat: '實際成果', desc: '最終整合所有歷史素材，打造出具備沉浸感與教育意義的VR歷史空間。', img: img5 },
]; 

export default function Making() {
  return (
    <div className="min-h-screen bg-white py-16 md:py-24 px-4 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 md:mb-20 tracking-widest">
          製作歷程
        </h1>
        <div className="text-center mb-20 md:mb-32 relative z-10">
          <span className="text-3xl md:text-4xl font-black text-orange-500 italic uppercase tracking-tighter block whitespace-nowrap">
            資料蒐集
          </span>
        </div>

        {/* 3. 時間軸 */}
        <div className="relative">
          
          {/* 中心線 */}
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-orange-200 hidden md:block z-0" />

          <div className="space-y-24 md:space-y-40">
            {makingSteps.map((step, index) => {
              if (step.id === 1) return null;
              const isLast = step.id === 6;

              return (
                <div 
                  key={step.id} 
                  className={`flex flex-col md:flex-row items-center justify-between relative ${index % 2 === 1 ? '' : 'md:flex-row-reverse'}`}
                >
                  
                  {/* 手機版 */}
                  <div className="w-full md:hidden mb-6 text-center z-10">
                    <span className="text-2xl font-bold text-orange-500 italic uppercase tracking-widest block whitespace-nowrap">
                      {step.cat}
                    </span>
                  </div>

                  {/* 內容 */}
                  <div className="w-full md:w-[42%] z-20">
                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-500 border border-gray-50 flex flex-col items-center">
                      {step.img && (
                        <img 
                          src={step.img} 
                          alt={step.cat} 
                          className="w-full h-auto rounded-2xl mb-8 shadow-sm block" 
                        />
                      )}
                      {step.desc && (
                        <p className="text-gray-600 leading-relaxed text-lg font-light whitespace-pre-line text-left self-start">
                          {step.desc}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 中心節點延伸 */}
                  <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 rounded-full items-center justify-center shadow-sm ${isLast ? 'w-16 h-16 border-4 border-orange-300 z-30' : 'w-12 h-12 bg-white border-2 border-orange-300 z-20'}`}>
                    <div className={`${isLast ? 'w-8 h-8' : 'w-4 h-4'} rounded-full bg-orange-400 shadow-inner`}></div>
                    {isLast && (
                      <div className="absolute top-[calc(100%+12px)] w-px h-28 bg-linear-to-b from-orange-400 to-transparent"></div>
                    )}
                  </div>
                  <div className={`hidden md:block md:w-[42%] mt-12 md:mt-0 z-20 ${index % 2 === 1 ? 'md:pl-32 text-left' : 'md:pr-32 md:text-right'}`}>
                    <span className="text-2xl md:text-3xl font-black text-orange-500 italic uppercase tracking-wider block whitespace-nowrap">
                      {step.cat}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-32 mb-20 flex flex-col items-center relative z-10">
          <Link 
  to="/Video"
  className="inline-block group active:scale-95 transition-all cursor-pointer"
>
  <button className="px-14 py-4 bg-[#161b22]/40 backdrop-blur-md border border-white/20 rounded-full text-lg font-bold text-white transition-all duration-300  group-hover:bg-[#30363d]/80 group-hover:border-white/50 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] cursor-pointer">
    成果影片
  </button>
</Link>
        </div>
      </div>
    </div>
  );
}