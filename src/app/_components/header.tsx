'use client'
import React, { useState } from "react";
import Link from "next/link";


const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMenu = () => {
    setIsChecked(!isChecked);
  };

  return (
    <header className="flex justify-between items-center py-4 md:py-8">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-0">
      <Link href="/" className="hover:underline">
          Atul Lal
        </Link>
      </h2>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <input
          type="checkbox"
          id="hamburger-menu"
          className="peer hidden"
          aria-label="Toggle Navigation Menu"
          checked={isChecked}
          onChange={toggleMenu}
        />
        <label
          htmlFor="hamburger-menu"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 peer-checked:bg-gray-100 peer-checked:text-gray-500"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            onClick={toggleModal}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>

      {/* Navigation Menu for Larger Screens */}
      <nav className="hidden md:flex md:items-center md:space-x-4">
{/* Search Bar for Larger Screens */}
<div className="relative flex">
  <input
    type="text"
    placeholder="Search..."
    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
  />
</div>


        <div>
          <Link
            href="/about"
            className="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-gray-900 mr-4"
          >
            About
          </Link>
          <Link
            href="/resume"
            className="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-gray-900 mr-4"
          >
            Resume
          </Link>
          <Link
            href="/blog"
            className="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-gray-900 mr-4"
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-gray-900"
          >
            Projects
          </Link>
        </div>
      </nav>

      {/* Full Page Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={toggleModal}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Navigation Menu */}
            <nav className="mt-4">
              <div>
                <Link
                  href="/about"
                  className="block mt-4 text-gray-500 hover:text-gray-900"
                >
                  About
                </Link>
                <Link
                  href="/resume"
                  className="block mt-4 text-gray-500 hover:text-gray-900"
                >
                  Resume
                </Link>
                <Link
                  href="/blog"
                  className="block mt-4 text-gray-500 hover:text-gray-900"
                >
                  Blog
                </Link>
                <Link
                  href="/projects"
                  className="block mt-4 text-gray-500 hover:text-gray-900"
                >
                  Projects
                </Link>
              </div>
              {/* Search Bar */}
              <div className="mt-8">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
