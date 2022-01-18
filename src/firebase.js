import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAZmkEy7yqzRpvXL9J4uKZYnvFglGkyfss",
   authDomain: "pwa-ecommerce-656a8.firebaseapp.com",
   databaseURL: "https://pwa-ecommerce-656a8-default-rtdb.firebaseio.com",   
   projectId: "pwa-ecommerce-656a8",
   storageBucket: "pwa-ecommerce-656a8.appspot.com",
   messagingSenderId: "113608081717",
   appId: "1:113608081717:web:f7727c90eb2052d2984c7c",
   measurementId: "G-ZJP2K08F9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(
  app,
  "https://pwa-ecommerce-656a8-default-rtdb.firebaseio.com"
);

// import firebase from "firebase/app";
// import 'firebase/firestore'

// import "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

// var config = {
//   apiKey: "AIzaSyAZmkEy7yqzRpvXL9J4uKZYnvFglGkyfss",
//   authDomain: "pwa-ecommerce-656a8.firebaseapp.com",
//   databaseURL: "https://pwa-ecommerce-656a8.firebaseio.com",
//   projectId: "pwa-ecommerce-656a8",
//   storageBucket: "pwa-ecommerce-656a8.appspot.com",
//   messagingSenderId: "113608081717",
//   appId: "1:113608081717:web:f7727c90eb2052d2984c7c",
//   measurementId: "G-ZJP2K08F9T"
// }
// const app = firebase.initializeApp({
//   apiKey: "AIzaSyAZmkEy7yqzRpvXL9J4uKZYnvFglGkyfss",
//   authDomain: "pwa-ecommerce-656a8.firebaseapp.com",
//   databaseURL: "https://pwa-ecommerce-656a8.firebaseio.com",
//   projectId: "pwa-ecommerce-656a8",
//   storageBucket: "pwa-ecommerce-656a8.appspot.com",
//   messagingSenderId: "113608081717",
//   appId: "1:113608081717:web:f7727c90eb2052d2984c7c",
//   measurementId: "G-ZJP2K08F9T",
// });

// export const createUserProfileDocument = async (userAuth) => {
//   if (!userAuth) return


//   const userRef = firestore.doc(`Users/${userAuth.uid}`)
//   const snapShot = await userRef.get()
//   // console.log(snapShot)


//   if (!snapShot.exists) {
//       const { email } = userAuth
//       const createdAt = new Date()

//       try {
//           await userRef.set({
//               // displayName,
//               email,
//               createdAt,
//               // ...additionalData
//           })
//       } catch (error) {
//           console.log("error creating user", error.message)
//       }
//   }
//   return userRef
// }


// firebase.initializeApp(config)

// export const auth = firebase.auth()
// export const firestore = firebase.firestore()
// export const auth = app.auth();
// export const firestore = firebase.firestore();
// export default app;
