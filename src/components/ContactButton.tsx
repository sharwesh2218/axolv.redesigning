/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';

export const ContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative inline-flex flex-col items-center">
      {/* Simple, subtle contact card */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Contact options"
          className="absolute bottom-full mb-2.5 w-[250px] sm:w-[270px] bg-white rounded-xl border border-[#E5E2DA] shadow-[0_10px_30px_-6px_rgba(35,50,40,0.1)] p-2.5 z-30 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="flex flex-col gap-1">
            {/* Call Link */}
            <a
              href="tel:6379501095"
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#2C382E] hover:bg-[#F6F5F1] hover:text-[#18231B] transition-colors"
              title="Call 6379501095"
            >
              <svg
                className="w-3.5 h-3.5 text-[#94C83D] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>6379501095</span>
            </a>

            {/* Email Link */}
            <a
              href="mailto:hello@axolv.in?subject=Axolv%20Inquiry"
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#2C382E] hover:bg-[#F6F5F1] hover:text-[#18231B] transition-colors"
              title="Email hello@axolv.in"
            >
              <svg
                className="w-3.5 h-3.5 text-[#94C83D] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>hello@axolv.in</span>
            </a>
          </div>
        </div>
      )}

      {/* Clean, subtle button with adjusted curved borders */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg text-xs font-medium text-[#38463D] bg-[#EFECE5] hover:bg-[#E5E1D8] border border-[#DDD9CE] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#94C83D]"
        aria-expanded={isOpen}
      >
        <span>Contact Us</span>
      </button>
    </div>
  );
};

export default ContactButton;
