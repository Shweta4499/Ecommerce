import React from 'react';
import './NewCollections.css';
import new_collections from '../../assets/newcollections';
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className='newcollections'>
      <h2 className='section-title'>NEW COLLECTIONS</h2>
      <hr />
      <div className='collections-grid'>
        {new_collections.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
