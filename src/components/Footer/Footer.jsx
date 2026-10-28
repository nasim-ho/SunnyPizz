import Logo from '../../assets/Images/logo.webp';

import instagram from '../../assets/icons/instagram.webp';
import facebook from '../../assets/icons/facebook.webp';
import linkedin from '../../assets/icons/linkedin.webp';

function Footer() {
  return (
    <footer
      id="contact"
      className="mt-13 lg:mt-6 bg-[#F5F3EF]"
    >
      {/* Top Row */}
      <div className="flex items-center justify-between gap-6 px-6 py-6 sm:px-10 lg:px-12">
        <div className="flex flex-col items-start">
          <a href="#home" aria-label="SunnyPizz home">
            <img
              src={Logo}
              alt="SunnyPizz"
              className="w-50 h-auto object-contain"
            />
          </a>

          <p className="mt-1 text-[13px] lg:text-[15px] text-paragraph">
            Every slice, made to make you smile
          </p>
        </div>

        {/*----------Back to Top---------*/}
        <button
          type="button"
          aria-label="Back to top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          className="flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full border border-black/50 text-2xl leading-none text-heading transition-colors hover:border-primary hover:text-primary"
        >
          ↑
        </button>
      </div>

      {/*----------Row----------*/}
      <div className="border-t border-black/10 px-6 py-4 sm:px-10 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

          {/* Footer Navigation */}
          <nav className="flex items-center gap-5 text-[13px] lg:text-[15px] text-paragraph">
            <a href="#home" className="transition-colors hover:text-primary">
              Home
            </a>

            <a
              href="#best-sellers"
              className="transition-colors hover:text-primary"
            >
              Menu
            </a>

            <a href="#about" className="transition-colors hover:text-primary">
              About
            </a>

            <a href="#contact" className="transition-colors hover:text-primary">
              Contact
            </a>
          </nav>

          {/* Social Icons — Visual Placeholders */}
          <div
            className="flex items-center gap-3 text-[15px] text-paragraph"
            aria-label="Social media"
          >
            <span aria-label="Instagram" title="Instagram">
              <img className='h-5.5 w-5.5 cursor-pointer' src={instagram} alt="instagram" />
            </span>
            <span aria-label="Facebook" title="Facebook">
              <img className='h-5.5 w-5.5 cursor-pointer' src={facebook} alt="facebook" />
            </span>
            <span aria-label="linkedin" title="linkedin">
              <img className='h-5.5 w-5.5 cursor-pointer' src={linkedin} alt="linkedin" />
            </span>
          </div>

          {/* Copyright */}
          <p className="text-center text-[13px] lg:text-[15px] text-paragraph sm:text-right">
            © 2026 SunnyPizz. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;