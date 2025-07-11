

const Service = () => {

const services = [
  {
    icon: "/service/Frame.png",
    title: "general consultation",
    description: "Our online logo maker lets you generate designs perfectly suited to your business from a.",
  },
  {
    icon: "/service/Vector-(4).png",
    title: "Mobail app degine",
    description: "Figma is the leading collaborative design tool for building meaningful products. Seamlessly.",
  },
  {
    icon: "/service/smart_light_bulb.png",
    title: "Accessibility Design",
    description: "Try it free, no obligation! Millions of customers love our logo maker. Premium logo designs created.",
  },
  {
    icon: "/service/Frame.png",
    title: "Website Design",
    description: "Our online logo maker lets you generate designs perfectly suited to your business from a.",
  },
  {
    icon: "/service/Vector-(4).png",
    title: "User Experience Audit",
    description: "Figma is the leading collaborative design tool for building meaningful products. Seamlessly.",
  },
  {
    icon: "/service/smart_light_bulb.png",
    title: "Interactive Prototypes",
    description: "Try it free, no obligation! Millions of customers love our logo maker. Premium logo designs created.",
  }
];


    return (
        <>

<div id="service">
  
  <div id="" className="mt-3 md:mb-10 flex flex-col justify-center items-center px-8">
        <div className="relative px-4 py-4 mb-4 mt-6">
          <h1 className="text-sm font-normal font-mont text-primary">My Specializations Services</h1>
      
         {/*  <!-- Top-left corner --> */}
          <div className="absolute top-2 left-0 w-3 h-3 border-t-2 border-l-2 border-border"></div>
          {/* <!-- Top-right corner --> */}
          <div className="absolute top-2 right-0 w-3 h-3 border-t-2 border-r-2 border-border"></div>
         {/*  <!-- Bottom-left corner --> */}
          <div className="absolute bottom-2 left-0 w-3 h-3 border-b-2 border-l-2 border-border"></div>
       {/*    <!-- Bottom-right corner --> */}
          <div className="absolute bottom-2 right-0 w-3 h-3 border-b-2 border-r-2 border-border"></div>
        </div>
        <h1 className="md:text-5xl text-3xl text-white font-mont font-bold text-center">What I Do</h1>

        <p className="text-gray mt-3  text-center font-montserrat ">
          Develop comprehensive content strategies tailored to your unique goals <br />
d and target audience, ensuring that every piece of content.
        </p>
      </div>





<div className="w-full max-w-[1320px] mx-auto md:mt-11 mt-10 px-4">

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
  {services.map((service, index) => (
    <div
      key={index}
      className="w-full min-h-[309px] bg-gradient-to-br from-[#1f1f47] to-[#1a1a38] rounded-xl p-8 shadow-lg transition-all duration-300 relative hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#29395e] hover:to-[#1d4442]"
    >
      <div className="icon mt-4 ">
        <img src={service.icon} alt="" className="w-10 " />
      </div>
      <h3 className="text-xl mb-3 text-secondary  mt-3">{service.title}</h3>
      <p className="text-sm text-gray mb-5 leading-relaxed">{service.description}</p>
      <div className="text-[#00d4ff] text-lg transition-transform duration-300 group-hover:translate-x-1">→</div>
    </div>
  ))}
</div>

</div>  



  </div> 
        </>
    );
};

export default Service;