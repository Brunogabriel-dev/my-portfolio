import React from 'react'

const HeroSection = () => {
  return( 
  <section>
    <div className="grid grid-cols-1 lg:grid-cols-12">
   <div className="col-span-7 place-self-center">
    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
      Hello, Dev
      </h1>
    <p className="text-[#ADB7BE] text-lg lg:text-xl">
     
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure fugit numquam incidunt, repudiandae quis quas dignissimos.
    </p>
    </div>
    <div className="col-span-5"></div>
    </div>
    </section>
  );
};

export default HeroSection