import React from 'react';
import bgImg from '../assets/images/more/15.jpg';
import logo from '../assets/images/more/logo1.png';

const Header = () => {
  return (
    <div
      className="h-16 flex items-center justify-center gap-3"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
      <h1 className="playfair text-2xl text-white">Espresso Emporium</h1>
    </div>
  );
};

export default Header;
