import React from 'react';
// import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
// import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";


import './App.css';

class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;


        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                        })
                    });
            }

            setCurrentUser(userAuth);
            // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({ title, items})))

        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render(){
      return (
          <div>
              <Header />
              <Switch>
                  <Route exact path ='/' component={HomePage} />
                  <Route  path ='/shop' component={ShopPage} />
                  <Route  exact path ='/signin' render={() => this.props.currentUser ? ( <Redirect to='/' /> ): ( <SignInAndSignUp/> )}
                    />
                    <Route exact='/checkout' component={CheckoutPage} />
              </Switch>
              <p>React E-commerce project made by Kerry Smith &copy; </p>
          </div>

      );
  }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
    // collectionsArray: selectCollectionsForPreview
});


const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);


