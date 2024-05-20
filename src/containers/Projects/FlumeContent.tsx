import React from 'react';

const FlumeContent = () => {
  return (
    <>
      <p className="">
        I built a dependency-free, flexible plugin for creating responsive,
        highly-customizable, touch-enabled sliders and carousels with ease.
      </p>
      <h4 className="mt-4 text-sm font-bold uppercase lg:text-base">
        Features:
      </h4>
      <ul className="my-2 list-disc px-6 text-xs md:px-8 lg:text-[0.85rem]">
        <li>Touch/swipe support</li>
        <li className="mt-1">CSS3 Sliding Transitions</li>
        <li className="mt-1">Infinite loop</li>
        <li className="mt-1">Autoplay</li>
        <li>Dot indicators</li>
        <li className="mt-1">Arrow indicators</li>
      </ul>
    </>
  );
};

export default FlumeContent;
