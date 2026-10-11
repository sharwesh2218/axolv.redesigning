/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface CautionStripeProps {
  className?: string;
}

export const CautionStripe: React.FC<CautionStripeProps> = ({
  className = 'w-full h-4 sm:h-5 md:h-6',
}) => {
  return (
    <div
      className={`w-full overflow-hidden border-t border-black/30 select-none pointer-events-none ${className}`}
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, #94C83D 0px, #94C83D 16px, #171A16 16px, #171A16 32px)',
      }}
      role="presentation"
      aria-hidden="true"
    />
  );
};

export default CautionStripe;
