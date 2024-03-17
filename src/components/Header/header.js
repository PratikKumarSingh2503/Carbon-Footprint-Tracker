import React, { useRef } from 'react';
import './header.css';
import headerPic from '../../assessts/carbon footprint_img 1.gif'

const Header = () => {

  return (
    <div className='header'>
      <div className='headerTitle'>
        <img src={headerPic} alt='' />
        <span className='title1'>Escape, Explore, Experience</span>

        <h1>CARBON FOOTPRINT TRACKER</h1>
        <p>
          Carbon Footprint Tracker Website Application share a common responsible goal to track and reduce carbon emissions 'at source' as much as possible and to compensate for
          unavoidable emissions - via carbon offsetting - to render their activities to be net zero carbon/carbon neutral. With this
          action, they protect both environment and individuals businesses. Better sustainability credentials allow them to maximise
          commercial opportunities (from both sales tender and operational savings), enhance their brands, engage stakeholders and make
          theirs better businesses to work at.
        </p>
      </div>

    </div>
  );
}

export default Header;