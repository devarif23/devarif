import { useEffect } from "react";

const Blog = () => {
  /* ============================================================= */
   useEffect(() => {
      // 👉 রাইট ক্লিক বন্ধ
      const handleContextMenu = (e) => {
        e.preventDefault();
      };
      document.addEventListener("contextmenu", handleContextMenu);
  
      // 👉 Ctrl+C, Ctrl+U, Ctrl+S ইত্যাদি বন্ধ
      const handleKeyDown = (e) => {
        if (
          e.ctrlKey &&
          ["c", "u", "s", "a"].includes(e.key.toLowerCase())
        ) {
          e.preventDefault();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
  
      return () => {
        document.removeEventListener("contextmenu", handleContextMenu);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, []);
  /* =============================================================================== */
  return (
    <section className="py-12 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Latest <span className="text-purple-500">Blog</span> Posts
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Card 1 */}
          <div className="bg-teal-950 rounded-lg overflow-hidden  transition-all duration-300 transform  group">
            <div className="overflow-hidden h-48">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="/public/blog/blog.png"
                alt="Programming habits"
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-purple-400 bg-purple-900 bg-opacity-50 px-3 py-1 rounded-full">
                  Career Development
                </span>
                <span className="text-xs text-gray-400">5 min read</span>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-purple-400 transition-colors">
                যে অভ্যাসগুলো আপনাকে ভালো প্রোগ্রামার বানাবে
              </h2>
              
              <p className="text-sm text-purple-400 mb-4">
                Arif Jahan / December 11, 2024
              </p>
              
              <p className="text-gray-300 text-base mb-4 line-clamp-3">
                আপনার কি কখনো এমন হয়েছে যে কোডিং শেখার পরেও মনে রাখতে পারছেন
                না? হয়তো কোনো একটা ফাংশন লিখতে গিয়ে ভুলে যাচ্ছেন—কোনটা
                কোথায় লিখবেন সেটা নিয়েই দ্বিধায় আছেন, এমন যদি হয় আপনার
                অবস্থা তাহলে এই লেখা আপনার জন্য।
              </p>
              
              <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center transition-colors">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Blog Card 2 - Example of another card */}
         
   <div className="bg-teal-950 rounded-lg overflow-hidden  transition-all duration-300 transform  group">
            <div className="overflow-hidden h-48">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="/blog/Screenshot 2025-06-02 170120.png"
                alt="Programming habits"
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-purple-400 bg-purple-900 bg-opacity-50 px-3 py-1 rounded-full">
                  Career Development
                </span>
                <span className="text-xs text-gray-400">5 min read</span>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-purple-400 transition-colors">
                যে অভ্যাসগুলো আপনাকে ভালো প্রোগ্রামার বানাবে
              </h2>
              
              <p className="text-sm text-purple-400 mb-4">
                Arif Jahan / December 11, 2024
              </p>
              
              <p className="text-gray-300 text-base mb-4 line-clamp-3">
                আপনার কি কখনো এমন হয়েছে যে কোডিং শেখার পরেও মনে রাখতে পারছেন
                না? হয়তো কোনো একটা ফাংশন লিখতে গিয়ে ভুলে যাচ্ছেন—কোনটা
                কোথায় লিখবেন সেটা নিয়েই দ্বিধায় আছেন, এমন যদি হয় আপনার
                অবস্থা তাহলে এই লেখা আপনার জন্য।
              </p>
              
              <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center transition-colors">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          {/* Blog Card 3 - Another example */}
            <div className="bg-teal-950 rounded-lg overflow-hidden  transition-all duration-300 transform  group">
            <div className="overflow-hidden h-48">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="/blog/blog 3.png"
                alt="Programming habits"
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-purple-400 bg-purple-900 bg-opacity-50 px-3 py-1 rounded-full">
                  Career Development
                </span>
                <span className="text-xs text-gray-400">5 min read</span>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-purple-400 transition-colors">
                যে অভ্যাসগুলো আপনাকে ভালো প্রোগ্রামার বানাবে
              </h2>
              
              <p className="text-sm text-purple-400 mb-4">
                Arif Jahan / December 11, 2024
              </p>
              
              <p className="text-gray-300 text-base mb-4 line-clamp-3">
                আপনার কি কখনো এমন হয়েছে যে কোডিং শেখার পরেও মনে রাখতে পারছেন
                না? হয়তো কোনো একটা ফাংশন লিখতে গিয়ে ভুলে যাচ্ছেন—কোনটা
                কোথায় লিখবেন সেটা নিয়েই দ্বিধায় আছেন, এমন যদি হয় আপনার
                অবস্থা তাহলে এই লেখা আপনার জন্য।
              </p>
              <a href="/SinggelBlog-page">
                
              <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center transition-colors">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-colors duration-300 shadow-lg hover:shadow-purple-500/30">
            View All Blog Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;