import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 text-white">
      <ul className="flex space-x-6">
        <li className=" items-center">
          <Link href="/" className="flex items-center hover:underline">
            <FaHome /> <h1 className="pl-1"> Home</h1>
          </Link>
        </li>
        <li>
          <Link href="/cooking" className="hover:underline">
            Cooking
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
