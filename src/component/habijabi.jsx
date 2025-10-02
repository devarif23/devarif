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

const EnhancedNavbar = () => {
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
      {/* Main Navigation - Professional Blue Theme */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-gradient-to-r from-blue-700 to-blue-800 shadow-lg" 
          : "bg-gradient-to-r from-blue-600 to-blue-700"
      }`}>
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-xl backdrop-blur-sm">
                <span className="text-lg font-bold text-white">AJ</span>
              </div>
              <span className="text-2xl font-bold text-white">arifjahan</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="items-center hidden space-x-2 lg:flex">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => handleTabClick(item.path)}
                    className={`relative flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "text-white bg-white/20 backdrop-blur-sm shadow-lg" 
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-semibold">{item.label}</span>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute w-2 h-2 transform -translate-x-1/2 bg-white rounded-full bottom-2 left-1/2 animate-pulse"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Side - Desktop */}
            <div className="items-center hidden space-x-3 lg:flex">
              <button className="p-3 transition-all duration-300 text-white/90 rounded-xl hover:text-white hover:bg-white/10 hover:scale-110">
                <HiSearch className="w-6 h-6" />
              </button>
              <button className="p-3 transition-all duration-300 text-white/90 rounded-xl hover:text-white hover:bg-white/10 hover:scale-110">
                <HiBell className="w-6 h-6" />
              </button>
              <button className="flex items-center p-2 space-x-2 transition-all duration-300 rounded-xl hover:bg-white/10 hover:scale-105">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                  <span className="text-lg font-bold text-white">A</span>
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 transition-all duration-300 text-white/90 rounded-xl lg:hidden hover:text-white hover:bg-white/10 hover:scale-110"
            >
              {isMobileMenuOpen ? (
                <HiX className="w-7 h-7" />
              ) : (
                <HiMenuAlt3 className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          ref={mobileMenuRef}
          className={`lg:hidden bg-gradient-to-b from-blue-700 to-blue-800 backdrop-blur-lg transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeTab === item.path;
              return (
                <div
                  key={item.path}
                  className={`transition-all duration-500 ${
                    isMobileMenuOpen 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms' }}
                >
                  <Link
                    to={item.path}
                    onClick={() => handleTabClick(item.path)}
                    className={`flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-300 border-2 ${
                      isActive 
                        ? "text-white bg-white/20 border-white/30 shadow-lg transform scale-105" 
                        : "text-white/90 hover:text-white hover:bg-white/10 border-transparent"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-lg font-semibold">{item.label}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - Without Blur */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="border-t shadow-2xl bg-gradient-to-r from-blue-700 to-blue-800 border-white/20">
          <div className="flex items-center justify-around py-3">
            {navItems.slice(0, 5).map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleTabClick(item.path)}
                  className={`relative flex flex-col items-center justify-center w-20 py-2 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? "text-white bg-white/20 transform scale-110" 
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <div className="p-2">
                    <Icon className={`w-6 h-6 transition-transform duration-300 ${
                      isActive ? "scale-110" : ""
                    }`} />
                  </div>
                  <span className={`mt-1 text-sm font-semibold transition-all duration-300 ${
                    isActive ? "text-white" : "text-white/90"
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Active Dot Indicator */}
                  {isActive && (
                    <div className="absolute w-2 h-2 bg-white rounded-full top-1 animate-pulse"></div>
                  )}
                </Link>
              );
            })}
          </div>
          
          {/* Safe Area Spacer */}
          <div className="h-4 bg-gradient-to-r from-blue-700 to-blue-800"></div>
        </div>
      </div>

      {/* Content Padding */}
      <div className="pt-16 pb-24 lg:pb-0 lg:pt-16">
        {/* Your content here */}
      </div>
    </>
  );
};

export default EnhancedNavbar;