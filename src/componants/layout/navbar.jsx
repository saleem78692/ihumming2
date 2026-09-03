import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-[1000]
          flex items-center justify-between
          px-5 sm:px-8 lg:px-12
          py-4 lg:py-5
          transition-all duration-300
          ${scrolled
            ? "bg-black/95 text-white shadow-sm backdrop-blur-md"
            : "bg-transparent text-white"
          }
        `}
      >
        {/* Logo */}
        <a
          href="#top"
          onClick={closeMenu}
          className="text-xl sm:text-2xl font-extrabold tracking-tight text-black"
        >
          <span className="text-green-600">i</span>HUMMING
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <a
            href="#services"
            className="flex items-center gap-1 text-sm font-medium text-black hover:text-green-600 transition"
          >
            Services
            <ChevronDown size={14} />
          </a>

          <a
            href="#companies"
            className="flex items-center gap-1 text-sm font-medium text-black hover:text-green-600 transition"
          >
            Companies
            <ChevronDown size={14} />
          </a>

          <a
            href="#industries"
            className="flex items-center gap-1 text-sm font-medium text-black hover:text-green-600 transition"
          >
            Industries
            <ChevronDown size={14} />
          </a>

          <a href="#work" className="text-sm font-medium hover:text-green-600">
            Work
          </a>

          <a href="#about" className="text-sm font-medium hover:text-green-600">
            About
          </a>

          <a href="#blog" className="text-sm font-medium hover:text-green-600">
            Blog
          </a>

          <a href="#contact" className="text-sm font-medium hover:text-green-600">
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="
            hidden lg:flex
            items-center gap-2
            rounded-full
            bg-green-600
            px-5 py-3
            text-sm font-semibold text-white
            transition
            hover:bg-green-700
          "
        >
          Start a Project
          <ArrowRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          onClick={() => setMenu((prev) => !prev)}
          className="
            relative z-[1100]
            flex lg:hidden
            h-11 w-11
            items-center justify-center
            rounded-full
            border border-black/10
            bg-white
            text-black
          "
        >
          {menu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* ================= OVERLAY ================= */}
      <div
        onClick={closeMenu}
        className={`
          fixed inset-0 z-[1050]
          bg-black/40 backdrop-blur-sm
          transition-all duration-300
          lg:hidden
          ${
            menu
              ? "visible opacity-100"
              : "invisible opacity-0 pointer-events-none"
          }
        `}
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        className={`
          fixed top-0 right-0
          z-[1090]
          h-[100dvh]
          w-[85%] max-w-[380px]
          bg-white
          shadow-2xl
          overflow-y-auto
          transition-transform duration-300 ease-in-out
          lg:hidden

          ${
            menu
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-5">
          <a
            href="#top"
            onClick={closeMenu}
            className="text-xl font-extrabold"
          >
            <span className="text-green-600">i</span>HUMMING
          </a>

          <button
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="px-5 py-6">
          <a
            href="#services"
            onClick={closeMenu}
            className="flex items-center justify-between border-b border-black/10 py-5"
          >
            <span className="flex items-center gap-4">
              <span className="text-xs text-green-600">01</span>
              <span className="text-lg font-semibold">Services</span>
            </span>

            <ArrowRight size={18} />
          </a>

          <a
            href="#companies"
            onClick={closeMenu}
            className="flex items-center justify-between border-b border-black/10 py-5"
          >
            <span className="flex items-center gap-4">
              <span className="text-xs text-green-600">02</span>
              <span className="text-lg font-semibold">Companies</span>
            </span>

            <ArrowRight size={18} />
          </a>

          <a
            href="#industries"
            onClick={closeMenu}
            className="flex items-center justify-between border-b border-black/10 py-5"
          >
            <span className="flex items-center gap-4">
              <span className="text-xs text-green-600">03</span>
              <span className="text-lg font-semibold">Industries</span>
            </span>

            <ArrowRight size={18} />
          </a>

          <a
            href="#work"
            onClick={closeMenu}
            className="flex items-center justify-between border-b border-black/10 py-5"
          >
            <span className="flex items-center gap-4">
              <span className="text-xs text-green-600">04</span>
              <span className="text-lg font-semibold">Work</span>
            </span>

            <ArrowRight size={18} />
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="flex items-center justify-between border-b border-black/10 py-5"
          >
            <span className="flex items-center gap-4">
              <span className="text-xs text-green-600">05</span>
              <span className="text-lg font-semibold">About</span>
            </span>

            <ArrowRight size={18} />
          </a>

          <a
            href="#blog"
            onClick={closeMenu}
            className="flex items-center justify-between border-b border-black/10 py-5"
          >
            <span className="flex items-center gap-4">
              <span className="text-xs text-green-600">06</span>
              <span className="text-lg font-semibold">Blog</span>
            </span>

            <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="flex items-center justify-between border-b border-black/10 py-5"
          >
            <span className="flex items-center gap-4">
              <span className="text-xs text-green-600">07</span>
              <span className="text-lg font-semibold">Contact</span>
            </span>

            <ArrowRight size={18} />
          </a>

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={closeMenu}
            className="
              mt-8
              flex items-center justify-center gap-2
              rounded-full
              bg-green-600
              px-6 py-4
              font-semibold text-white
              hover:bg-green-700
              transition
            "
          >
            Start a Project
            <ArrowRight size={17} />
          </a>
        </nav>
      </aside>
    </>
  );
}

export default Navbar;