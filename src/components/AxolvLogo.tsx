/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface AxolvLogoProps {
  className?: string;
}

export const AxolvLogo: React.FC<AxolvLogoProps> = ({
  className = 'w-32 sm:w-44 md:w-56 lg:w-64 h-auto',
}) => {
  return (
    <img
      src="/logo.png"
      alt="Axolv Logo"
      width={1600}
      height={394}
      className={`${className} object-contain block select-none`}
      loading="eager"
      fetchPriority="high"
      decoding="async"
      referrerPolicy="no-referrer"
    />
  );
};

export default AxolvLogo;
