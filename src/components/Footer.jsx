import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-white py-10 px-4" aria-label="Site Footer">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Left: Logo + Description */}
        <div className="flex-shrink-0 max-w-[545px] w-full">
          <h2 className="font-manrope font-semibold text-[48px] sm:text-[64px] leading-[52px] sm:leading-[64px] tracking-[-0.04em] text-black">
            Panepinto
          </h2>
          <p className="font-manrope text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] tracking-[-0.03em] text-black mt-6">
            Relax, none of this is your fault. Don’t stop — what you’re afraid of won’t happen. Lemme add another line to make it look like review.
          </p>
        </div>

        {/* Right: Links */}
        <nav className="flex flex-wrap md:flex-nowrap gap-10 sm:gap-12" aria-label="Footer Links">
          {[
            { title: 'Services', items: ['Supervision', 'Psychoeducation', 'Psychotherapy', 'Articles'] },
            { title: 'Company', items: ['About', 'Press', 'Careers'] },
            { title: 'Connect', items: ['LinkedIn', 'Twitter', 'Instagram', 'Facebook'] },
          ].map(({ title, items }) => (
            <div key={title}>
              <h3 className="text-base font-semibold text-black font-manrope mb-3 uppercase tracking-wide">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 font-manrope hover:text-black transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Row */}
      <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-4">
        <p className="text-xs text-gray-600 font-manrope text-center md:text-left">
          ©2024 Dr. John C. Panepinto Psychologist. All rights reserved.
        </p>
        <a
          href="#terms"
          className="text-xs text-gray-600 font-manrope hover:text-black transition-colors mt-2 md:mt-0"
        >
          Terms | Policy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
