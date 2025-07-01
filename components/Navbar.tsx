import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-6 text-white">
        <li className="flex items-center">
          <Link href="/" className="flex items-center hover:underline">
            <FaHome /> <h1 className="pl-1"> Home</h1>
          </Link>
        </li>
        <li>
          <Link href="/hobbies" className="hover:underline">
            Hobbies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
