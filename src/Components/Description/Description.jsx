import React, { useState } from 'react';
import './Description.css';

const Description = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div
          className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : 'fade'}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </div>
        <div
          className={`descriptionbox-nav-box ${activeTab === 'review' ? 'active' : 'fade'}`}
          onClick={() => setActiveTab('review')}
        >
          Review (135)
        </div>
      </div>

      <div className="descriptionbox-description">
        {activeTab === 'description' ? (
          <>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
          </>
        ) : (
          <p>★ ★ ★ ★ ☆ – Great product! Highly recommend. (Add real reviews here)</p>
        )}
      </div>
    </div>
  );
};

export default Description;
