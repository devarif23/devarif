import React, { useEffect, useState } from "react";
import { RiHeadphoneFill, RiMailFill, RiChat1Fill, RiArrowRightLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
// import DotGrid from "../component/DotGrid";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        massage: ""
    });
    
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // "success" or "error"

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY");
    }, []);

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            // Validate form
            if (!formData.name.trim() || !formData.email.trim() || !formData.massage.trim()) {
                setMessage("Please fill in all required fields");
                setMessageType("error");
                setLoading(false);
                return;
            }

            // 1. Save to Google Sheets
            const googleSheetResponse = await fetch(
                import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || "YOUR_GOOGLE_APPS_SCRIPT_URL",
                {
                    method: "POST",
                    body: JSON.stringify(formData),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            if (!googleSheetResponse.ok) {
                throw new Error("Failed to save to Google Sheets");
            }

            // 2. Send email to user
            const emailResponse = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
                {
                    to_email: formData.email,
                    from_name: "Your Name",
                    user_name: formData.name,
                    user_email: formData.email,
                    user_phone: formData.phone,
                    user_subject: formData.subject,
                    user_message: formData.massage,
                    reply_to: formData.email
                }
            );

            if (emailResponse.status === 200) {
                setMessage("Message sent successfully! We will get back to you soon.");
                setMessageType("success");
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    subject: "",
                    massage: ""
                });
                
                // Clear message after 5 seconds
                setTimeout(() => setMessage(""), 5000);
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("Error sending message. Please try again.");
            setMessageType("error");
        } finally {
            setLoading(false);
        }
    };

    // 👉 রাইট ক্লিক বন্ধ এবং কী প্রেস নিয়ন্ত্রণ
    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
        };

        const handleKeyDown = (e) => {
            if (
                e.ctrlKey &&
                ["c", "u", "s", "a"].includes(e.key.toLowerCase())
            ) {
                e.preventDefault();
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    /* ========================================= */
    return (
<>
        <div className="mt-20 md:mb-10 flex flex-col justify-center items-center">
        <div className="relative px-4 py-4 mb-4 mt-6">
          <h1 className="text-sm font-normal font-mont text-primary">My Contact Information</h1>
      
         {/*  <!-- Top-left corner --> */}
          <div className="absolute top-2 left-0 w-3 h-3 border-t-2 border-l-2 border-border"></div>
          {/* <!-- Top-right corner --> */}
          <div className="absolute top-2 right-0 w-3 h-3 border-t-2 border-r-2 border-border"></div>
         {/*  <!-- Bottom-left corner --> */}
          <div className="absolute bottom-2 left-0 w-3 h-3 border-b-2 border-l-2 border-border"></div>
       {/*    <!-- Bottom-right corner --> */}
          <div className="absolute bottom-2 right-0 w-3 h-3 border-b-2 border-r-2 border-border"></div>
        </div>
        <h1 className="md:text-5xl text-3xl text-white font-mont font-bold text-center">Contact With Me</h1>
      </div>


{/* animetion */}
<div >



</div>
{/* animetion */}
      

        <div id="contact" className="max-w-[1200px] mx-auto flex flex-wrap gap-6 lg:gap-8 mb-12 mt-12 md:mb-16 lg:mb-20 px-4 sm:px-5"
        
        // 
       
        
        
        
        >
            {/* Form Box */}
            <div className="bg-[#1b1e3818] border border-[#2c2e4a] hover:shadow-soft hover:shadow-bg-color  p-6 sm:p-8 md:p-10 rounded-xl flex-1 min-w-full md:min-w-[500px]">
                <h2 className="mb-4 md:mb-5 text-xl sm:text-2xl text-primary">Send me a message</h2>

                {/* Success/Error Message */}
                {message && (
                    <div className={`mb-4 p-3 rounded-lg text-sm ${
                        messageType === "success" 
                            ? "bg-green-500/20 text-green-300 border border-green-500" 
                            : "bg-red-500/20 text-red-300 border border-red-500"
                    }`}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
            
                 {/* <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"/> */}

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full p-2 sm:p-3 border border-[#2c2e4a] bg-transparent text-white rounded-lg outline-none"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            disabled={loading}
                        />
                        <input 
                            type="text" 
                            placeholder="Phone Number" 
                            className="w-full p-2 sm:p-3 border border-[#2c2e4a] bg-transparent text-white rounded-lg outline-none"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            disabled={loading}
                        />
                    </div>
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full p-2 sm:p-3 border border-[#2c2e4a] bg-transparent text-white rounded-lg outline-none mb-3 sm:mb-4"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={loading}
                    />
                    <input 
                        type="text" 
                        placeholder="Your Subject" 
                        className="w-full p-2 sm:p-3 border border-[#2c2e4a] bg-transparent text-white rounded-lg outline-none mb-3 sm:mb-4"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        disabled={loading}
                    />
                    <textarea 
                        placeholder="Your Message" 
                        className="w-full p-2 sm:p-3 border border-[#2c2e4a] bg-transparent text-white rounded-lg outline-none resize-y h-28 sm:h-36"
                        name="massage"
                        value={formData.massage}
                        onChange={handleInputChange}
                        disabled={loading}
                    />
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="mt-3 sm:mt-4 py-2 sm:py-3 px-4 sm:px-5 bg-cyan-400 text-black border-none rounded-3xl cursor-pointer font-bold inline-flex items-center gap-2 hover:bg-cyan-300 transition-colors text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Sending..." : "Send Message"} <RiArrowRightLine className="text-sm" />
                    </button>
                </form>
            </div>

            {/* Info Box */}
            <div className="bg-[#1b1e3818]  border border-[#2c2e4a]  hover:shadow-soft hover:shadow-bg-color  p-6 sm:p-8 md:p-10 rounded-xl flex-1 min-w-full md:min-w-[500px]">
                <div className="mb-3 md:mb-4 mt-4 md:mt-5">
                    <div className="inline-flex items-center justify-center bg-cyan-400 w-8 h-8 rounded-full mr-3">
                        <RiHeadphoneFill className="text-black text-sm" />
                    </div>
                    <h3 className="my-2 md:my-3 text-lg text-primary">Get Support</h3>
                    <p className="text-xs sm:text-sm  text-secondary">If you want to communicate with live support, Skype online contact me.</p>
                    <span className="text-xs sm:text-sm text-gray-300 block mt-1 text-gray">Phone Number: 01720415286</span>
                    <span className="text-xs sm:text-sm text-gray-300 block mt-1 text-gray ">Phone Number: 01568552746</span>
                </div>

                <div className="mb-3 md:mb-4 mt-4 md:mt-5">
                    <div className="inline-flex items-center justify-center bg-cyan-400 w-8 h-8 rounded-full mr-3">
                        <RiMailFill className="text-black text-sm" />
                    </div>
                    <h3 className="my-2 md:my-3 text-lg text-primary">Communication With Mail</h3>
                    <p className="text-xs sm:text-sm text-gray-300 text-secondary">Please submit your email in my email and please as soon as possible.</p>
                    <span className="text-xs sm:text-sm text-gray-300 block mt-1 text-gray">Email Address 01: mdarifjahan138@gmail.com</span>
                    <span className="text-xs sm:text-sm text-gray-300 block mt-1 text-gray">Email Address 02: mdarifjahan2004@gmail.com</span>
                </div>

                <div className="mb-3 md:mb-4 mt-4 md:mt-5">
                    <div className="inline-flex items-center justify-center bg-cyan-400 w-8 h-8 rounded-full mr-3">
                        <RiChat1Fill className="text-black text-sm" />
                    </div>
                    <h3 className="my-2 md:my-3 text-lg text-primary">Want to Chat Now?</h3>
                    <p className="text-xs sm:text-sm text-gray-300 text-secondary">Chat with me to find more answers or find out more and more informative.</p>
                    <button className="py-2 sm:py-3 px-4 sm:px-5 bg-cyan-400 text-black border-none rounded-3xl cursor-pointer font-bold inline-flex items-center gap-2 hover:bg-cyan-300 transition-colors mt-2 sm:mt-3 text-sm sm:text-base">
                        Open Chat With Me <RiArrowRightLine className="text-sm" />
                    </button>
                </div>
            </div>
        </div>

</>
       
    );
};

export default Contact;