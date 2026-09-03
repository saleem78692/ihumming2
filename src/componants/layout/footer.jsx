import React from "react";
import { ArrowUpRight, ArrowUp, Mail, MapPin } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0B0F0D] text-white">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#16A34A]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#16A34A]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-5">
            <a
              href="#top"
              className="group inline-flex items-center text-2xl font-black tracking-[-0.04em] sm:text-3xl"
            >
              <span className="text-[#16A34A] transition-transform duration-300 group-hover:-translate-y-1">
                i
              </span>
              HUMMING
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/55 sm:text-base">
              Digital experiences for a world in motion. We create meaningful
              digital products, brands and experiences that help businesses
              move forward.
            </p>

            {/* Contact Info */}
            <div className="mt-7 space-y-3">
              <a
                href="mailto:hello@ihumming.com"
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-[#16A34A]"
              >
                <Mail size={17} />
                hello@ihumming.com
              </a>

              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin size={17} />
                India · Worldwide
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Explore
            </h3>

            <nav className="flex flex-col gap-3">
              {["Work", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group flex w-fit items-center gap-1 text-sm text-white/65 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {item}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Services
            </h3>

            <nav className="flex flex-col gap-3">
              <a
                href="#services"
                className="text-sm text-white/65 transition-colors hover:text-[#16A34A]"
              >
                Web Development
              </a>

              <a
                href="#services"
                className="text-sm text-white/65 transition-colors hover:text-[#16A34A]"
              >
                UI / UX Design
              </a>

              <a
                href="#services"
                className="text-sm text-white/65 transition-colors hover:text-[#16A34A]"
              >
                Digital Marketing
              </a>

              <a
                href="#services"
                className="text-sm text-white/65 transition-colors hover:text-[#16A34A]"
              >
                Branding
              </a>
            </nav>
          </div>

          {/* CTA */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#16A34A]">
                Have a project?
              </p>

              <h3 className="mt-3 text-xl font-bold leading-tight sm:text-2xl">
                Let's build something meaningful.
              </h3>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#16A34A] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#15803D] hover:shadow-lg hover:shadow-[#16A34A]/20"
              >
                Start a project
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          
          <p>
            © {currentYear}{" "}
            <span className="font-semibold text-white/60">iHumming</span>.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="transition-colors hover:text-white"
            >
              Terms
            </a>

            <a
              href="#top"
              className="group flex items-center gap-2 text-white/60 transition-colors hover:text-[#16A34A]"
            >
              Back to top
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#16A34A]">
                <ArrowUp size={13} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;