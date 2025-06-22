import { useEffect } from "react";

const SinggelBlog = () => {

  /* ===================================================================================== */
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
        ["c", "u", "s", "a" , "m"].includes(e.key.toLowerCase())
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

  /* ===================================================================================== */
  return (
    <>
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:mt-20">
        {/* Main Blog Content - Left Side */}
        <div className="md:w-2/3 bg-green-900 p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4"> যে অভ্যাসগুলো আপনাকে ভালো প্রোগ্রামার বানাবে</h1>

          <p className="text-sm text-purple-400 mb-4">
            Arif Jahan / December 11, 2024
          </p>

          <div className="overflow-hidden mb-6">
            <img
              className="w-full h-auto object-cover"
              src="/public/blog/rtr.png"
              alt="Programming habits"
            />
          </div>
            
          <div className="space-y-4">
            <p>সরকারি একটি সংস্থার পরিচালনা পর্ষদে ছিলেন সরকারের বিভিন্ন মন্ত্রণালয়ের সচিবেরা। তাঁরা পর্ষদে সিদ্ধান্ত নিয়ে সরকারি টাকায় অধিগ্রহণ করা জমিতে ফ্ল্যাট নির্মাণ করছেন। ব্যয় করা হচ্ছে প্রকল্পের টাকা। সেই ফ্ল্যাট আবার নিজেদের নামে খুবই কম দামে বরাদ্দ নিয়েছেন সচিবেরা।</p>
            <p>সরকারি একটি সংস্থার পরিচালনা পর্ষদে ছিলেন সরকারের বিভিন্ন মন্ত্রণালয়ের সচিবেরা। তাঁরা পর্ষদে সিদ্ধান্ত নিয়ে সরকারি টাকায় অধিগ্রহণ করা জমিতে ফ্ল্যাট নির্মাণ করছেন। ব্যয় করা হচ্ছে প্রকল্পের টাকা। সেই ফ্ল্যাট আবার নিজেদের নামে খুবই কম দামে বরাদ্দ নিয়েছেন সচিবেরা।</p>
          </div>
        </div>

        {/* Related Blog Cards - Right Side */}
        <div className="md:w-1/3 space-y-8">
          {/* Blog Card 1 */}
          <div className="bg-teal-950 rounded-lg overflow-hidden transition-all duration-300 transform group">
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

          {/* Blog Card 2 */}
          <div className="bg-teal-950 rounded-lg overflow-hidden transition-all duration-300 transform group">
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

          {/* Blog Card 3 */}
          <div className="bg-teal-950 rounded-lg overflow-hidden transition-all duration-300 transform group">
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
      </section>
    </>
  );
};

export default SinggelBlog;