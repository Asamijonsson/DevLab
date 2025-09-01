import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Navbar () {
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
         <li>
          <Link href="/quiz" className="hover:underline">
            Quiz
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};


