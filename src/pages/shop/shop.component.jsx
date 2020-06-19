import React from 'react';
import { Route } from 'react-router-dom';



// import CollectionPreview from "../../components/collection-preview/collection-preview.component";
// import {selectCollections} from "../../redux/shop/shop.selectors";
// import {createStructuredSelector} from "reselect";
// import { connect } from 'react-redux';
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match })=> (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
</div>
);

export default ShopPage;



