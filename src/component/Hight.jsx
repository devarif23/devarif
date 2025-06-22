import { useEffect } from "react";

const Hight = () => {
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 select-none">
        👋 Welcome to My Website
      </h1>
      <p className="mt-4 text-gray-700 text-lg select-none max-w-xl text-center">
        এই ওয়েবসাইট থেকে কনটেন্ট কপি করা বন্ধ করা হয়েছে। আপনি টেক্সট সিলেক্ট বা কপি করতে পারবেন না।
      </p>
    </div>
  );
};

export default Hight;
