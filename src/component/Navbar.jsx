import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  HiHome, 
  HiUser, 
  HiBriefcase, 
  HiBell,
  HiMenuAlt3,
  HiSearch,
  HiMail,
  HiViewGrid,
  HiX
} from "react-icons/hi";
import { HiAcademicCap } from "react-icons/hi2";

const GradientNavbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  const navItems = [
    { path: "/", label: "Home", icon: HiHome },
    { path: "/Service-page", label: "Services", icon: HiBriefcase },
    { path: "/Protfolio-page", label: "Portfolio", icon: HiViewGrid },
    { path: "/About-page", label: "About", icon: HiUser },
    { path: "/Contatc-page", label: "Contact", icon: HiMail },
    // { path: "/Test-page", label: "Test", icon: HiBell },
  ];

  const handleTabClick = (path) => {
    setActiveTab(path);
    setIsMobileMenuOpen(false);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Navigation with Dark Blue Gradient */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-gradient-to-b from-[#080C20] to-[#0F475D] shadow-2xl shadow-[#0F475D]/20" 
          : "bg-gradient-to-b from-[#080C20] to-[#0F475D]"
      }`}>
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo with Animation */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 transition-all duration-500 hover:scale-105"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#0F475D] to-[#080C20] rounded-lg flex items-center justify-center shadow-lg shadow-[#0F475D]/30 transition-all duration-500 hover:rotate-12">
                <span className="text-lg font-bold text-white">AJ</span>
              </div>
              <span className="text-2xl font-bold text-white transition-all duration-500 hover:text-[#0F475D]">
                arifjahan
              </span>
            </Link>

            {/* Desktop Navigation with Icons & Animation */}
            <div className="items-center hidden space-x-6 lg:flex">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => handleTabClick(item.path)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-500 group ${
                      isActive 
                        ? "text-white bg-[#0F475D]/20 backdrop-blur-sm border border-[#0F475D]/50 transform scale-105 shadow-lg shadow-[#0F475D]/30" 
                        : "text-white/80 hover:text-white hover:bg-[#0F475D]/10 hover:border hover:border-[#0F475D]/30"
                    }`}
                  >
                    <Icon className={`w-5 h-5 transition-all duration-500 ${
                      isActive ? "scale-110 text-[#0F475D]" : "group-hover:scale-110 group-hover:text-[#0F475D]"
                    }`} />
                    <span className={`font-medium transition-all duration-500 ${
                      isActive ? "text-white" : "group-hover:text-white"
                    }`}>
                      {item.label}
                    </span>
                    
                    {/* Active Indicator Animation */}
                    {isActive && (
                      <div className="absolute -bottom-1 w-2 h-2 bg-[#0F475D] rounded-full left-1/2 transform -translate-x-1/2 animate-ping"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Side with Icons & Animation */}
            {/* <div className="items-center hidden space-x-3 lg:flex">
              <button className="p-2 text-white/80 hover:text-[#0F475D] transition-all duration-500 hover:scale-110 hover:bg-[#0F475D]/10 rounded-lg border border-transparent hover:border-[#0F475D]/30">
                <HiSearch className="w-5 h-5 transition-transform duration-500 hover:scale-110" />
              </button>
              <button className="p-2 text-white/80 hover:text-[#0F475D] transition-all duration-500 hover:scale-110 hover:bg-[#0F475D]/10 rounded-lg border border-transparent hover:border-[#0F475D]/30">
                <HiBell className="w-5 h-5 transition-transform duration-500 hover:scale-110" />
              </button>
              <button className="flex items-center p-1 transition-all duration-500 hover:scale-105 hover:bg-[#0F475D]/10 rounded-lg border border-transparent hover:border-[#0F475D]/30">
                <div className="w-8 h-8 bg-gradient-to-br from-[#0F475D] to-[#080C20] rounded-full flex items-center justify-center shadow-lg shadow-[#0F475D]/30 transition-all duration-500 hover:rotate-12">
                  <span className="text-sm font-semibold text-white">we</span>
                </div>
              </button>
            </div> */}

            {/* Mobile Menu Button with Animation */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-[#0F475D] transition-all duration-500 hover:scale-110 hover:bg-[#0F475D]/10 rounded-lg border border-transparent hover:border-[#0F475D]/30"
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6 transition-transform duration-500 rotate-90" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6 transition-transform duration-500" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <div 
          ref={mobileMenuRef}
          className={`lg:hidden bg-gradient-to-b from-[#080C20] to-[#0F475D] border-b border-[#0F475D]/30 transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeTab === item.path;
              return (
                <div
                  key={item.path}
                  className={`transition-all duration-500 ${
                    isMobileMenuOpen 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms' }}
                >
                  <Link
                    to={item.path}
                    onClick={() => handleTabClick(item.path)}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-500 border ${
                      isActive 
                        ? "text-white bg-[#0F475D]/20 border-[#0F475D]/50 transform scale-105 shadow-lg shadow-[#0F475D]/30" 
                        : "text-white/80 hover:text-white hover:bg-[#0F475D]/10 hover:border-[#0F475D]/30"
                    }`}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-500 hover:scale-110" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Bottom Navigation with Animation */}
        <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-gradient-to-b from-[#080C20] to-[#0F475D] border-t border-[#0F475D]/30 shadow-2xl shadow-[#0F475D]/20">
          <div className="flex items-center justify-around py-2">
            {navItems.slice(0, 5).map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleTabClick(item.path)}
                  className={`relative flex flex-col items-center justify-center w-16 py-1 transition-all duration-500 group ${
                    isActive 
                      ? "text-white transform scale-110" 
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <div className={`p-1 rounded-lg transition-all duration-500 ${
                    isActive 
                      ? "bg-[#0F475D]/20 border border-[#0F475D]/50 shadow-lg shadow-[#0F475D]/30" 
                      : "group-hover:bg-[#0F475D]/10 group-hover:border group-hover:border-[#0F475D]/30"
                  }`}>
                    <Icon className={`w-5 h-5 transition-transform duration-500 ${
                      isActive ? "scale-110 text-[#0F475D]" : "group-hover:scale-110"
                    }`} />
                  </div>
                  <span className={`mt-0.5 text-xs font-medium transition-all duration-500 ${
                    isActive ? "text-white" : "group-hover:text-white"
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Active Dot Indicator */}
                  {isActive && (
                    <div className="absolute w-2 h-2 bg-[#0F475D] rounded-full -top-1 animate-ping"></div>
                  )}
                </Link>
              );
            })}
          </div>
          <div className=" bg-gradient-to-b from-[#080C20] to-[#0F475D]"></div>
        </div>
      </nav>

      {/* Content Padding */}
      <div className="pt-16 pb-20 lg:pb-0">
        {/* Your content here */}
      </div>
    </>
  );
};

export default GradientNavbar;