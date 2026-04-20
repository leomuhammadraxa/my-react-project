import React from "react";
import { ChevronDown } from "lucide-react";
import headerData from "../data/headerData"
import Logo from "/src/assets/Logo/logo-text.png"

function Header() {
  const { navLinks, plansDropdown, phone } = headerData;

  return (
    <header className="fixed z-[8] w-full bg-[#E9BC4D]">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Easy Insurance"
            className="h-10 w-auto object-contain"
          />
        </div>

        <div className="flex items-center gap-8">
          
          {/* NAV LINKS */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="text-[13px] font-medium uppercase tracking-wide text-black hover:opacity-70"
              >
                {link.label}
              </a>
            ))}

            {/* PLANS DROPDOWN */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-[13px] font-medium uppercase tracking-wide text-black hover:opacity-70">
                Plans
                <ChevronDown size={14} strokeWidth={2.2} />
              </button>

              <div className="invisible absolute right-0 top-full z-20 mt-3 min-w-[180px] rounded-md bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {plansDropdown.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* PHONE */}
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-3 rounded-md border-2 border-black px-4 py-2 text-[14px] font-medium text-black transition hover:bg-black hover:text-white"
          >
            <span>{phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;