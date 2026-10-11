/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import AxolvLogo from './components/AxolvLogo';
import CautionStripe from './components/CautionStripe';
import ContactButton from './components/ContactButton';

export default function App() {
  return (
    <main className="min-h-[100dvh] w-full bg-[#F6F5F1] text-[#1E2721] flex flex-col justify-between items-center selection:bg-[#D5E2D2] selection:text-[#18231B] overflow-x-hidden">
      {/* Centered Main Landing Content */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center my-auto px-4 py-8 sm:px-6 sm:py-10 md:py-12">
        {/* Axolv Logo: Fluid scaling across mobile, tablet, and desktop */}
        <div className="mb-4 sm:mb-6 md:mb-8 flex justify-center items-center">
          <AxolvLogo className="w-32 sm:w-40 md:w-52 lg:w-60 h-auto max-w-[75vw]" />
        </div>

        {/* Primary Visual Element: Perfectly centered, clean, compact restructuring animation */}
        <div className="w-full max-w-[320px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[540px] flex justify-center items-center px-1 sm:px-0 mx-auto">
          <div className="w-full aspect-video overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_12px_36px_-12px_rgba(35,50,40,0.08),0_4px_16px_-4px_rgba(35,50,40,0.04)] border border-[#E7E5DF]/80 bg-white">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              className="w-full h-full object-cover block select-none pointer-events-none"
              aria-label="Restructuring in progress animation"
            >
              <source src="/restructuring.mp4" type="video/mp4" />
              <source
                src="https://www.image2url.com/r2/default/videos/1791660558154-3f0f2b0e-c6cd-4ccc-a891-6d83e502c699.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Heading: Responsive typography */}
        <h1 className="mt-5 sm:mt-7 md:mt-8 lg:mt-9 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#161F18] font-['Space_Grotesk',sans-serif]">
          Under Maintenance
        </h1>

        {/* Message: Responsive muted subtext */}
        <p className="mt-2 sm:mt-2.5 md:mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-[#5E6D63] font-normal leading-relaxed max-w-[280px] sm:max-w-md md:max-w-lg">
          We're rebuilding something better. Stay tuned.
        </p>
      </div>

      {/* Bottom Interactive Contact Us Button */}
      <div className="w-full flex justify-center items-center px-4 mb-4 sm:mb-5 mt-auto z-20">
        <ContactButton />
      </div>

      {/* Hazard Caution Tape Stripe anchored at the bottom edge */}
      <CautionStripe className="w-full h-4 sm:h-5 md:h-6 shrink-0" />
    </main>
  );
}
