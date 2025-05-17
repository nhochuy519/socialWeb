"use-client";

import React from "react";

const MenuDropDown = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="absolute right-[15px] bg-white w-[360px] rounded-xl h-[calc(100vh_-_100px)] shadow-lg z-9999999999">
      {children}
    </div>
  );
};

export default MenuDropDown;
