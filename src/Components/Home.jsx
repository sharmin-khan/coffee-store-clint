import React from 'react';
import bgImg from '../assets/images/more/3.png';

const Home = () => {
  return (
    <div
      className="h-[calc(100vh-4rem)] "
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className='space-y-4 h-full max-w-2xl text-left pt-72 ml-[680px]  rounded'>
  <h1 className="text-white text-3xl playfair custom_slant mx-auto">
    Would you like a Cup of Delicious Coffee?
  </h1>
  <p className="text-white mx-auto font-light">
    It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia
    back!! Your companion of every moment!!! Enjoy the beautiful moments and
    make them memorable.
  </p>
  <button className="bg-[#E3B577] playfair text-white px-6 py-2 rounded hover:bg-[#d1a45f]">
    Learn More
  </button>
</div>

    </div>
  );
};

export default Home;
