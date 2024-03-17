import React from 'react';
import './tracker.css';

export const Tracker = () => {
  return (
    <div className='tracker'>
      <div className='trackerSec'>
        <div className='trackertitle'>
          <h2>Carbon Footprint Tracker</h2>
        </div>
        <iframe
          frameborder="0" 
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          src="https://calculator.carbonfootprint.com/calculator.aspx?lang=en-GB"></iframe>
          {/* src="https://calculator.carbonfootprint.com/calculator.aspx?lang=en-GB&b=00B9FF"></iframe> */}
      </div>
    </div>
  )
}
export default Tracker