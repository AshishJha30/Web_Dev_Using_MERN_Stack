import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white">
      <NavLink to={"/"}>
        <h1 className="font-bold text-3xl text-center">
          Blog Adda
        </h1>
      </NavLink>
      
    </header>
  );
}
