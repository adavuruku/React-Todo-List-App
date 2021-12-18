import React, { memo } from 'react';

function PercentageStat({ label, score = 0, total = Math.max(1, score) }) {
  return (
    <div>
      <h6>{ label }</h6>
      <span>{ Math.round(score / total * 100) }%</span>
    </div>
  )
}

function arePropsEqual(prevProps, nextProps) {
  return prevProps.label === nextProps.label; 
}

// Wrap component using `React.memo()` and pass `arePropsEqual`
// https://blog.logrocket.com/react-pure-components-functional/
// export default memo(PercentageStat);
export default memo(PercentageStat, arePropsEqual);