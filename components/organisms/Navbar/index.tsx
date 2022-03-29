import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "../../../utils/constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <a className="text-2xl font-bold text-white transition-colors duration-200 transform lg:text-3xl hover:text-gray-300">
                DM
              </a>
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              aria-label="toggle menu"
              onClick={() => setOpen(!open)}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={`${open ? "block" : "hidden"} items-center md:flex`}>
          <div className="flex flex-col sm:items-center md:flex-row md:mx-6">
            {NAV_LINKS.map((link) => (
              <Link href={`/${link.toLowerCase()}`} key={link}>
                <a className="my-1 text-sm font-medium text-gray-200 transition-colors duration-200 transform hover:text-gray-300 md:mx-4 md:my-0">
                  {link}
                </a>
              </Link>
            ))}
            <button
              className="px-4 py-2 font-medium tracking-wide text-gray-800 capitalize transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-800  focus:ring-opacity-80"
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1F0Rrg1svgH0tdzbOYvG3uWtT7WiZaTe4bkpqstEP7Ok/edit?usp=sharing",
                  "_blank"
                )
              }
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
