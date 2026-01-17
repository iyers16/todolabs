
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Shield, Cpu, Activity, Mail, Info, Menu, X } from 'lucide-react';

interface TerminalLayoutProps {
  children: React.ReactNode;
}

const TerminalLayout: React.FC<TerminalLayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { label: 'ABOUT', path: '/', icon: <Info size={16} /> },
    { label: 'VANTAGE', path: '/vantage', icon: <Activity size={16} /> },
    { label: 'PARALLAX', path: '/parallax', icon: <Shield size={16} /> },
    { label: 'ETCH', path: '/etch', icon: <Cpu size={16} /> },
    { label: 'CONTACT', path: '/contact', icon: <Mail size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-black text-green-500 selection:bg-green-500 selection:text-black flex flex-col p-4 md:p-8">
      <header className="border-b border-green-900/50 pb-4 mb-8 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-green-500 text-black p-1 font-bold rounded-sm px-2">TODO LABS</div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 hover:text-green-300 transition-colors ${
                location.pathname === item.path ? 'text-green-300 font-bold' : 'text-green-700'
              }`}
            >
              {location.pathname === item.path && <span className="text-green-500 animate-pulse">_</span>}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="hidden sm:block px-2 py-1 border border-green-900 rounded">
            SYS_HEALTH: <span className="text-green-400">NOMINAL</span>
          </div>
          <div className="text-green-700">{time}</div>
          <button 
            className="lg:hidden p-1 border border-green-900 rounded text-green-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-black border-b border-green-900 z-50 p-6 flex flex-col gap-4 animate-in slide-in-from-top">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 text-lg border-b border-green-900/30 pb-2"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <main className="flex-1 flex flex-col max-w-6xl mx-auto w-full">
        <div className="flex-1 border border-green-900/30 rounded-lg p-6 bg-[#050505] terminal-glow relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/20 to-transparent opacity-50"></div>
          {children}
        </div>
      </main>

      <footer className="mt-8 border-t border-green-900/50 pt-4 flex flex-col sm:flex-row justify-between items-center text-[10px] text-green-800 uppercase tracking-widest gap-2">
        <div>© {new Date().getFullYear()} TODO LABS INC. // ALL RIGHTS RESERVED</div>
        <div className="flex gap-4">
          <span className="animate-pulse">● CONNECTION SECURE</span>
        </div>
      </footer>
    </div>
  );
};

export default TerminalLayout;
