import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  title: string;
  src: string;
  link: string;
  gap?: boolean; // Add the 'gap' property here with the type 'boolean'
}


const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const Menus: MenuItem[] = [
    { title: "Contacts", src: "contact", link: "/" },
    { title: "Dashboard", src: "dashboard (2)", link: "/Dashboard" },
    { title: "Others", src: "layout", link: "/others" },
    
  ];

  const handleButtonClick = (link: string) => {
    navigate(link);
  };

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className=" flex gap-6 border-r-2 border-cyan-200 ">
      {/* Sidebar */}
      <div
        className={`${
          open ? "w-72" : "w-20 border-cyan-100"
        } duration-700 p-5 pt-8 bg-sideclr  sm:block ${
          open ? "sm:block" : "hidden sm:block"
        }`}
      >
        <div className={`flex justify-end border ${open && "border-2 w-10 ml-56"} border-cyan-200 rounded-full   p-2`}>
          <img
            src="Images/arrow-right.png" alt=""
            className={`cursor-pointer  rounded-full -right-3 top-9 w-7 border-2 ${
              open && "rotate-180"
            }`}
            onClick={toggleSidebar}
          />
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-cyan-600 text-lg font-medium flex items-center gap-x-4 cursor-pointer p-2 hover:bg-cyan-300 rounded-md ${
                menu.gap ? "mt-9" : "mt-2 "
              } ${index && open === true && " hover:bg-cyan-500 hover:text-white hover:animate-bounce"}`}
              onClick = {()=> navigate(menu.link)}
            >
              <img className="w-9" src={`Images/${menu.src}.png`} alt={menu.title} />
              <span
                style={{ transitionDelay: `${index + 3}00ms` }}
                className={`${
                  !open && "opacity-0 translate-x-28 "
                } whitespace-pre origin-left duration-500`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom bar */}
      <div
        className={`flex  w-full fixed bottom-0 left-0 bg-cyan-400 h text-white justify-between items-center px-4 py-1 sm:hidden`}
      >
        {Menus.map((menu, index) => (
          <div key={index} className="flex items-center gap-x-2 p-1">
            <img
              src={`Images/${menu.src}.png`}
              onClick={() => handleButtonClick(menu.link)}
              className="w-9 h-9"
              alt={menu.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
