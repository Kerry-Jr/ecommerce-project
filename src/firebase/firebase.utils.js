import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyCgnbjWDWAlaezcwQjXspo_ExumiJ0ZQSo',
    authDomain: 'crwn-db-6839f.firebaseapp.com',
    databaseURL: 'https://crwn-db-6839f.firebaseio.com',
    projectId: 'crwn-db-6839f',
    storageBucket: 'crwn-db-6839f.appspot.com',
    messagingSenderId: '784808143385',
    appId: '1:784808143385:web:7b67617aac0ebba3055888'
};

    export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;
      // console.log('Kerrys data below')
      // console.log(userAuth);

      const userRef = await firestore.doc(`users/${userAuth.uid}`);

      const snapShot = userRef.get();



      if(!snapShot.exists) {
          const { displayName, email, photoURL } = userAuth;
          const createdAt = new Date();



          try {
            await userRef.set({
               displayName,
               email,
               createdAt,
                photoURL,
               ...additionalData
            })
          } catch (error) {
              console.log('error creating user', error.message);
              // console.log(error, 'msg: Error creating user Kerry.. Please check you code and firebase dashboard')
          }
      }

      return userRef;
    }



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;