import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyAobYlDAp5mDZfzADqHL53nCMI6j6FQP1A',
    authDomain: 'chatapp-443c2.firebaseapp.com',
    projectId: 'chatapp-443c2',
    storageBucket: 'chatapp-443c2.appspot.com',
    messagingSenderId: '12317414844',
    appId: '1:12317414844:web:fe8fab1edceb78095b87b9',
  })
  .auth()
