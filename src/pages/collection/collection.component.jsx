import React from 'react';

import CollectionItem from '../../components/collection-items/collection-item.component';



// import './category.styles.scss';
import './collection.styles.scss'

const CollectionPage = ({ match }) => {
  console.log(match.params.collectionId)
  
  return (
    <div className='category'>
      <h2>COLLECTION PAGE</h2>
  </div>
  )
 
};

export default CollectionPage;
