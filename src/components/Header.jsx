import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-300 z-50">
      <div className="flex justify-center">
        <div className="w-full max-w-[1440px] flex justify-between items-center py-4 md:py-6 px-4 md:px-[70px]">

          {/* Logo */}
          <div className="text-[28px] md:text-[32px] leading-[32px] tracking-[-0.04em] font-manrope font-semibold text-black">
            PanePinto
          </div>

          {/* Mobile/Small screen menu button */}
          <button
            className={`flex items-center md:hidden ${
              menuOpen ? 'bg-gray-200' : 'bg-gray-200'
            } rounded p-2`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-black text-[20px]">
              {menuOpen ? '▲' : '▼'}
            </span>
          </button>

          {/* Desktop navigation */}
          <nav
            className="hidden md:flex gap-6 lg:gap-8 font-manrope text-[18px] md:text-[20px] lg:text-[22px] leading-[22px]"
            aria-label="Main navigation"
          >
            {['Home', 'About', 'Services', 'Resources'].map((name) => (
              <NavLink
                key={name}
                to={`/${name.toLowerCase() === 'home' ? '' : name.toLowerCase()}`}
                className={({ isActive }) =>
                  `font-normal ${
                    isActive ? 'text-black' : 'text-gray-600 hover:text-black'
                  } transition-colors`
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop contact button - hidden on small screens */}
          <Link
            to="/contact"
            className="hidden sm:flex md:flex ml-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors items-center justify-center w-[120px] md:w-[138px] h-[40px] md:h-[44px] font-manrope font-light text-[16px] md:text-[18px] leading-[18px] tracking-[-0.02em]"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile menu items */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white border-t border-gray-300">
          {['Home', 'About', 'Services', 'Resources'].map((name) => (
            <NavLink
              key={name}
              to={`/${name.toLowerCase() === 'home' ? '' : name.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-manrope font-normal text-[18px] ${
                  isActive ? 'text-black' : 'text-gray-600'
                }`
              }
            >
              {name}
            </NavLink>
          ))}
          <Link
            to ="/contact"
            className="bg-black text-white rounded-full hover:bg-gray-800 transition-colors px-6 py-2 font-manrope font-light text-[16px]"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
