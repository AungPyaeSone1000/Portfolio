export const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-3 z-10">
      <nav className="flex gap-1 p-0.5 bg-white/10 border border-yellow-400 backdrop-blur rounded-full">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          Projects
        </a>
        <a href="#" className="nav-item">
          About
        </a>
        <a href="#" className="nav-item ">
          Contact
        </a>
      </nav>
    </div>
  );
};
