import React from 'react';
const Markers = ({ariaLabel, symbol}) => (
  <span role="img" aria-label={ariaLabel}>
      {symbol}
  </span>
);
export default Markers;