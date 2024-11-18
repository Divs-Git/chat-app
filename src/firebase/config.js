import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBGLLX6DyRqB3EifscxPUX4u_EIXgUeCv0',
  authDomain: 'chat-room-backend-c8a2e.firebaseapp.com',
  projectId: 'chat-room-backend-c8a2e',
  storageBucket: 'chat-room-backend-c8a2e.firebasestorage.app',
  messagingSenderId: '327884111920',
  appId: '1:327884111920:web:d2cbc2128bca6b5abe2df5',
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
