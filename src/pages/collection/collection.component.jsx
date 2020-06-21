import React from 'react';
import { connect } from 'react-redux';



import CollectionItem  from '../../components/collection-items/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';


import './collection.styles.scss'


const CollectionPage = ({ collection }) => {
    const { name, items } = collection;
  console.log(collection);
  console.log('Kerry')
  
  return (
    <div className='collection-page'>
      <h2 className='title'>{ name }</h2>
        <div className='items'>
           
          
            {
                items.map(item => ( <CollectionItem key={item.id} item={item} />)
                )} 
        </div>
  </div>
  )
 
};

 const mapStateToProps = (state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state)
 });



export default connect(mapStateToProps)(CollectionPage);
