import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import logo from './assets/logo.png'; 
import Home from './Pages/Home';
import Introduction from './Pages/Introduction';
import Making from './Pages/Making';
import Video from './Pages/Video';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '簡介', path: '/Introduction' },
    { name: '製作歷程', path: '/Making' },
    { name: '成果影片', path: '/Video' }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-[#0d1117] text-[#e6edf3] font-sans selection:bg-blue-500/30">
        
        {/* Navbar: 維持你最喜歡的 30% 透明度與磨砂感 */}
        <nav className={`
          fixed top-0 left-0 w-full z-[100] border-b transition-all duration-700 ease-in-out
          ${(isScrolled || isOpen) 
            ? 'h-16 bg-[#161b22]/30 backdrop-blur-2xl border-white/5 shadow-2xl' 
            : 'h-20 bg-transparent border-transparent'}
        `}>
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            
            <Link 
              to="/" 
              className={`flex items-center gap-3 z-[110] transition-all duration-500 ${isScrolled ? 'scale-90 opacity-90' : 'scale-100'}`} 
              onClick={() => setIsOpen(false)}
            >
              <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold tracking-tight text-[#f0f6fc]">
                1956 · 不該看的書
              </span>
            </Link>

            {/* 桌面選單 */}
            <div className={`hidden md:flex items-center transition-all duration-500 ${isScrolled ? 'gap-4' : 'gap-7'}`}>
              {navLinks.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className="text-[15.5px] font-bold text-[#e6edf3] hover:text-white transition-colors py-2 px-1"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* 手機版漢堡 */}
            <button className="md:hidden z-[110] p-2 text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <div className="w-6 h-5 relative flex flex-col justify-between items-end">
                <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-full rotate-45 translate-y-2' : 'w-full'}`}></span>
                <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-3/4'}`}></span>
                <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-full -rotate-45 -translate-y-2' : 'w-1/2'}`}></span>
              </div>
            </button>
          </div>
        </nav>

        {/* 手機版選單 */}
        <div className={`
          fixed inset-0 z-[90] bg-[#0d1117]/90 backdrop-blur-3xl transition-all duration-500 md:hidden flex items-center justify-center
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}>
          <div className={`flex flex-col items-center gap-12 transition-all duration-700 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10'}`}>
            {navLinks.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                onClick={() => { setIsOpen(false); window.scrollTo(0,0); }}
                className="text-3xl font-bold tracking-[0.3em] text-white hover:text-blue-400 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <main className="relative pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Introduction" element={<Introduction />} />
            <Route path="/Making" element={<Making />} />
            <Route path="/Video" element={<Video />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;