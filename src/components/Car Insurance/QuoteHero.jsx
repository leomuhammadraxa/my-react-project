import React from "react";
import {
  CheckSquare,
  CreditCard,
  AlignJustify,
} from "lucide-react";
import quoteHeroData from "../data/quoteHeroData";

export default function QuoteHero() {
  const { header, hero, formFields, features } = quoteHeroData;

  const iconMap = {
    checkSquare: CheckSquare,
    creditCard: CreditCard,
    alignJustify: AlignJustify,
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#d9dcee]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero.backgroundImage}
          alt="Hero Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(230,232,244,0.92)_0%,rgba(230,232,244,0.78)_35%,rgba(230,232,244,0.28)_70%,rgba(230,232,244,0.08)_100%)]" />
      </div>

      {/* Header */}
      <div className="relative z-20">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-5 md:px-10 lg:px-16">
          <div className="flex items-center">
            <img
              src={header.logo}
              alt="Logo"
              className="h-[40px] w-auto object-contain"
            />
          </div>

          <div className="flex items-center gap-8">
            {header.navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="text-[14px] font-semibold uppercase tracking-wide text-[#1d1d1f] transition hover:text-[#ff0f6d]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 lg:px-16">
          <div className="max-w-[470px]">
            <h1 className="text-[32px] font-extrabold leading-tight text-[#1d1d1f] md:text-[42px]">
              {hero.title}
            </h1>

            <p className="mt-2 text-[18px] font-medium text-[#4a4a4a]">
              {hero.subtitle}
            </p>

            {/* Form */}
            <form className="mt-10 space-y-4">
              {formFields.map((field, index) => (
                <input
                  key={index}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="h-[58px] w-full rounded-[4px] border border-[#707070] bg-transparent px-4 text-[18px] text-[#222] placeholder:text-[#7b7b85] focus:outline-none"
                />
              ))}

              <button
                type="submit"
                className="flex h-[58px] w-full items-center justify-center rounded-[14px] bg-[#ff0f6d] text-[22px] font-extrabold uppercase tracking-wide text-white transition hover:opacity-90"
              >
                {hero.buttonText}
                <span className="ml-2 text-[24px]">{hero.buttonArrow}</span>
              </button>
            </form>

            <p className="mt-4 text-[15px] text-[#4e4e4e]">
              {hero.policyText}{" "}
              <a href={hero.policyLink} className="text-[#3b49df] underline">
                {hero.policyLinkText}
              </a>
              .
            </p>
          </div>

          {/* Bottom Features */}
          <div className="mt-16 grid max-w-[1100px] grid-cols-1 gap-8 text-[#2d2d2d] sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];

              return (
                <div key={index} className="flex items-center gap-4">
                  <IconComponent
                    className="h-6 w-6 text-[#1f8cff]"
                    strokeWidth={2.2}
                  />
                  <span className="text-[22px] font-medium uppercase tracking-wide">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}