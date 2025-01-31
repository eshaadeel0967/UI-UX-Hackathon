import React from 'react';

interface ButtonProps {
  text: string;
  classNames: string;
  onClick?: Function;
}

const Button: React.FC<ButtonProps> = ({ text, classNames, onClick }) => {
  return (
    <div className={`bg-black mb-4 px-4 text-white text-center cursor-pointer hover:bg-transparent border-2 border-black hover:text-black transition-all duration-300 ease-in-out ${classNames}`}>
      <button>
      {text}
      </button>
    </div>
  );
};

export default Button;