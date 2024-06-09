const NavBtn = ({ text, playBtn, authBtn, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block px-6 py-2 duration-200 rounded-full text-[20px] ${
        playBtn ? "-ml-10 border-2 border-blue-900 text-[#0429AD]" : ""
      } ${authBtn ? "ml-12 text-[#0429AD]" : ""} ${
        isActive
          ? "font-bold text-black relative after:absolute after:content-[''] after:w-2 after:h-2 after:bg-blue-900 after:rounded-full after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2"
          : ""
      }`}
    >
      {text}
    </button>
  );
};

export default NavBtn;
