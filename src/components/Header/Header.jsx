import User from '../../assets/icons/user.png';
import Shopping from '../../assets/icons/shopping.png';
import Search from '../../assets/icons/search.png';

import Logo from '../../assets/Images/logo.webp';

import { useState } from 'react';

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex h-18 w-full items-center justify-between border-b border-black/10 px-6 lg:px-12">

      {/*-------------Logo and Navigation-------------*/}
      <div className="flex h-full items-center gap-8">
        <a href="#home" className="shrink-0">
          <img
            src={Logo}
            alt="SunnyPizz"
            className="w-30 h-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex h-full items-center gap-7 text-[16px]">
          <a
            href="#home"
            className="relative flex h-full items-center font-medium text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
          >
            Home
          </a>

          <a
            href="#best-sellers"
            className="flex h-full items-center text-heading transition-colors hover:text-primary"
          >
            Menu
          </a>

          <a
            href="#about"
            className="flex h-full items-center text-heading transition-colors hover:text-primary"
          >
            About
          </a>

          <a
            href="#contact"
            className="flex h-full items-center text-heading transition-colors hover:text-primary"
          >
            Contact
          </a>
        </nav>
      </div>

      {/*-------------Header Icons-------------*/}
      <div className="flex items-center gap-3 sm:gap-5">
        <button type="button" aria-label="Search" className='cursor-pointer'>
          <img src={Search} alt="" className="h-6 w-6 object-contain" />
        </button>

        <button type="button" aria-label="Shopping cart" className='cursor-pointer'>
          <img src={Shopping} alt="" className="h-6 w-6 object-contain" />
        </button>

        <button type="button" aria-label="User account" className='cursor-pointer'>
          <img src={User} alt="" className="h-6 w-6 object-contain" />
        </button>

        {/*---------------mobile button---------------*/}
        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-6 w-6 cursor-pointer items-center justify-center text-heading md:hidden"
        >
          <span className="text-2xl leading-none">
            {isMenuOpen ? '×' : '☰'}
          </span>
        </button>
      </div>

      {/*---------------mobile menu----------------*/}


      <nav
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        className={`fixed right-0 top-18 z-50 flex w-max flex-col rounded-bl-lg border border-black/10 bg-background px-5 py-2 shadow-md transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen
            ? 'translate-x-0'
            : 'translate-x-full pointer-events-none'
          }`}
      >
        <a
          href="#home"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => setIsMenuOpen(false)}
          className="whitespace-nowrap py-3 font-medium text-primary"
        >
          Home
        </a>

        <a
          href="#best-sellers"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => setIsMenuOpen(false)}
          className="whitespace-nowrap py-3 text-heading transition-colors hover:text-primary"
        >
          Menu
        </a>

        <a
          href="#about"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => setIsMenuOpen(false)}
          className="whitespace-nowrap py-3 text-heading transition-colors hover:text-primary"
        >
          About
        </a>

        <a
          href="#contact"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => setIsMenuOpen(false)}
          className="whitespace-nowrap py-3 text-heading transition-colors hover:text-primary"
        >
          Contact
        </a>
      </nav>

    </header>
  );
}

export default Header;