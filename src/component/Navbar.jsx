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
  HiLogout,
  HiCog,
  HiX
} from "react-icons/hi";

const LinkedInStyleNavbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const profileMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Navigation items for different screen sizes
  const mainNavItems = [
    { 
      path: "/", 
      label: "Home", 
      icon: HiHome,
      mobileOnly: false
    },
    { 
      path: "/Service-page", 
      label: "Services", 
      icon: HiBriefcase,
      mobileOnly: false
    },
    { 
      path: "/Protfolio-page", 
      label: "Portfolio", 
      icon: HiViewGrid,
      mobileOnly: false
    },
    { 
      path: "/notifications", 
      label: "Notifications", 
      icon: HiBell,
      mobileOnly: true,
      badge: 3
    },
    { 
      path: "/messages", 
      label: "Messages", 
      icon: HiMail,
      mobileOnly: true,
      badge: 7
    },
  ];

  const profileMenuItems = [
    { path: "/profile", label: "View Profile", icon: HiUser },
    { path: "/settings", label: "Settings", icon: HiCog },
    { path: "/logout", label: "Sign Out", icon: HiLogout },
  ];

  const handleTabClick = (path) => {
    setActiveTab(path);
    setIsMobileMenuOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, isSearchOpen]);

  return (
    <>
      {/* Main Navigation Bar - LinkedIn Style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Left: Logo and Search */}
            <div className="flex items-center space-x-4 lg:space-x-8">
              {/* Logo */}
              <Link 
                to="/" 
                className="flex items-center space-x-2"
                onClick={() => setActiveTab("/")}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-sm bg-gradient-to-r from-blue-600 to-blue-800">
                  <span className="text-sm font-bold text-white">AJ</span>
                </div>
                <span className="hidden text-xl font-bold text-gray-900 sm:block font-helvetica">
                  arifjahan
                </span>
              </Link>

              {/* Search Bar - Desktop */}
              <div className="relative items-center hidden md:flex">
                <div className="relative">
                  <HiSearch className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="py-2 pl-10 pr-4 transition-all duration-300 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Center: Main Navigation - Desktop */}
            <div className="items-center hidden space-x-1 lg:flex">
              {mainNavItems.filter(item => !item.mobileOnly).map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => handleTabClick(item.path)}
                    className={`flex flex-col items-center px-6 py-2 border-b-2 transition-all duration-300 group ${
                      isActive 
                        ? "border-blue-600 text-blue-600" 
                        : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                    }`}
                  >
                    <Icon className={`w-6 h-6 transition-colors duration-300 ${
                      isActive ? "text-blue-600" : "group-hover:text-blue-500"
                    }`} />
                    <span className="mt-1 text-xs font-medium">{item.label}</span>
                    
                    {/* Active indicator animation */}
                    {isActive && (
                      <div className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-blue-600 rounded-full left-1/2 animate-ping"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right: Profile and Mobile Menu */}
            <div className="flex items-center space-x-4">
              
              {/* Search Button - Mobile */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-600 transition-colors duration-300 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100"
              >
                <HiSearch className="w-6 h-6" />
              </button>

              {/* Notifications and Messages - Desktop */}
              <div className="items-center hidden space-x-2 lg:flex">
                <button className="relative p-2 text-gray-600 transition-colors duration-300 rounded-lg hover:text-gray-900 hover:bg-gray-100">
                  <HiBell className="w-6 h-6" />
                  <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-1 animate-bounce">
                    3
                  </span>
                </button>
                <button className="relative p-2 text-gray-600 transition-colors duration-300 rounded-lg hover:text-gray-900 hover:bg-gray-100">
                  <HiMail className="w-6 h-6" />
                  <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-blue-500 rounded-full -top-1 -right-1 animate-bounce">
                    7
                  </span>
                </button>
              </div>

              {/* Profile Menu */}
              <div className="relative" ref={profileMenuRef}>
                <button 
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className={`flex items-center space-x-2 p-1 rounded-lg transition-all duration-300 ${
                    isProfileMenuOpen 
                      ? "bg-blue-50 border border-blue-200" 
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700">
                    <span className="text-sm font-semibold text-white">A</span>
                  </div>
                  <HiMenuAlt3 className={`w-4 h-4 transition-transform duration-300 ${
                    isProfileMenuOpen ? "text-blue-600 rotate-180" : "text-gray-600"
                  }`} />
                </button>

                {/* Profile Dropdown */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 z-50 w-64 py-2 bg-white border border-gray-200 rounded-lg shadow-xl top-12 animate-fadeIn">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">Arif Jahan</p>
                      <p className="text-sm text-gray-500">Full Stack Developer</p>
                    </div>
                    {profileMenuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center px-4 py-3 space-x-3 text-sm text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 group"
                          onClick={() => setIsProfileMenuOpen(false)}
                        >
                          <Icon className="w-5 h-5 text-gray-400 transition-colors group-hover:text-blue-500" />
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? "bg-blue-50 text-blue-600 border border-blue-200" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {isMobileMenuOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenuAlt3 className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Overlay - FIXED TOGGLE */}
        {isSearchOpen && (
          <div className="fixed inset-0 z-50 bg-white lg:hidden animate-slideIn">
            <div className="p-4 bg-white border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 text-gray-600 transition-colors duration-300 rounded-lg hover:text-gray-900 hover:bg-gray-100"
                >
                  <HiX className="w-6 h-6" />
                </button>
                <div className="relative flex-1">
                  <HiSearch className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full py-3 pl-10 pr-4 transition-all duration-300 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus
                  />
                </div>
              </div>
            </div>
            
            {/* Search Suggestions */}
            <div className="p-4">
              <p className="mb-3 text-sm text-gray-500">Recent searches</p>
              <div className="space-y-2">
                {["React Developer", "Portfolio", "Web Design", "JavaScript"].map((item, index) => (
                  <button
                    key={index}
                    className="w-full p-3 text-left text-gray-700 transition-colors duration-200 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Side Menu - FIXED TOGGLE */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Overlay */}
            <div 
              className="absolute inset-0 transition-opacity duration-300 bg-black bg-opacity-50"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            
            {/* Menu Content */}
            <div 
              ref={mobileMenuRef}
              className="absolute top-0 right-0 h-full transition-transform duration-300 ease-in-out transform bg-white shadow-xl w-80 animate-slideInRight"
            >
              {/* Header */}
              <div className="p-4 bg-white border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-600 transition-colors duration-300 rounded-lg hover:text-gray-900 hover:bg-gray-100"
                  >
                    <HiX className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* User Info */}
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700">
                    <span className="text-lg font-bold text-white">A</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Arif Jahan</p>
                    <p className="text-sm text-gray-500">Full Stack Developer</p>
                  </div>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="p-4">
                <nav className="space-y-2">
                  {mainNavItems.filter(item => !item.mobileOnly).map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.path;
                    
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => handleTabClick(item.path)}
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                          isActive 
                            ? "bg-blue-50 text-blue-600 border border-blue-200" 
                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                        {isActive && (
                          <div className="w-2 h-2 ml-auto bg-blue-600 rounded-full animate-pulse"></div>
                        )}
                      </Link>
                    );
                  })}
                </nav>

                {/* Additional Mobile Items */}
                <div className="pt-4 mt-6 border-t border-gray-200">
                  <p className="px-3 mb-3 text-sm text-gray-500">Quick Actions</p>
                  <div className="space-y-2">
                    <button className="flex items-center w-full p-3 space-x-3 text-gray-700 transition-colors duration-300 rounded-lg hover:bg-gray-100">
                      <HiBell className="w-5 h-5" />
                      <span>Notifications</span>
                      <span className="px-2 py-1 ml-auto text-xs text-white bg-red-500 rounded-full">3</span>
                    </button>
                    <button className="flex items-center w-full p-3 space-x-3 text-gray-700 transition-colors duration-300 rounded-lg hover:bg-gray-100">
                      <HiMail className="w-5 h-5" />
                      <span>Messages</span>
                      <span className="px-2 py-1 ml-auto text-xs text-white bg-blue-500 rounded-full">7</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 lg:hidden">
          <div className="flex items-center justify-around py-2">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleTabClick(item.path)}
                  className={`flex flex-col items-center justify-center w-16 py-2 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? "text-blue-600" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <div className="relative">
                    <Icon className="w-6 h-6" />
                    {item.badge && (
                      <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full -top-2 -right-2 animate-pulse">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="mt-1 text-xs font-medium">{item.label}</span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute top-0 w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                  )}
                </Link>
              );
            })}
          </div>
          {/* Safe area for mobile devices */}
          <div className="h-4 bg-transparent safe-area-inset-bottom"></div>
        </div>
      </nav>

      {/* Add padding to main content */}
      <div className="pt-16 pb-20 lg:pb-0">
        {/* Your main content goes here */}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .safe-area-inset-bottom {
          padding-bottom: env(safe-area-inset-bottom);
        }
      `}</style>
    </>
  );
};

export default LinkedInStyleNavbar;