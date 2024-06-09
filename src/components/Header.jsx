import React, { useState } from "react";
import Logo from "./Logo";
import NavBtn from "./NavBtn";

const Header = () => {
  const [activeNav, setActiveNav] = useState("Home");

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "About",
      slug: "/about",
    },
    {
      name: "Community",
      slug: "/community",
    },
    {
      name: "Store",
      slug: "/store",
    },
    {
      name: "Login",
      slug: "/login",
      authBtn: true,
    },
    {
      name: "Play",
      slug: "/play",
      play: true,
    },
  ];

  return (
    <nav className="h-[85px] shadow flex items-center bg-[#FFFFFF]">
      <div className="ml-40">
        <Logo width={"180px"} />
      </div>
      <ul className="flex ml-40">
        {navItems.map((item) => (
          <li key={item.name} className="mx-10">
            <NavBtn
              text={item.name}
              playBtn={item.play}
              authBtn={item.authBtn}
              isActive={activeNav === item.name}
              onClick={() => setActiveNav(item.name)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
