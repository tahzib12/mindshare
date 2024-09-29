import React, { useEffect, useState } from 'react';

const CursorDisk = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isText, setIsText] = useState(false); // New state for cursor-text

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnterPointer = () => {
    setIsPointer(true);
  };

  const handleMouseLeavePointer = () => {
    setIsPointer(false);
  };

  const handleMouseEnterText = () => {
    setIsText(true);
  };

  const handleMouseLeaveText = () => {
    setIsText(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    const pointerElements = document.querySelectorAll('.cursor-pointer');
    const textElements = document.querySelectorAll('.cursor-text'); // Select elements with cursor-text

    pointerElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterPointer);
      el.addEventListener('mouseleave', handleMouseLeavePointer);
    });

    textElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterText);
      el.addEventListener('mouseleave', handleMouseLeaveText);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      
      pointerElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterPointer);
        el.removeEventListener('mouseleave', handleMouseLeavePointer);
      });

      textElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterText);
        el.removeEventListener('mouseleave', handleMouseLeaveText);
      });
    };
  }, []);

  return (
    <div
      className={`fixed w-8 h-8 rounded-full bg-[#F7C9AF] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 border-l-[4px] border-b-[4px] border-blue-900 transition-opacity duration-0 ${
        isPointer || isText ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    />
  );
};

export default CursorDisk;
