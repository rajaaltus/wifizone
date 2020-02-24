import firebase from 'firebase/app'
import firebaseConf from '~/firebase.config.js'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConf)
}

export const authProviders = {
  // Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  // Email: firebase.auth.EmailAuthProvider.PROVIDER_ID,
  Phone: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  recaptchaParameters: {
    // type: 'image', // 'audio'
    size: 'invisible', // 'invisible' or 'compact'
    // badge: 'bottomright' // ' bottomright' or 'inline' applies to invisible.
  },
  defaultCountry: 'LA',
  defaultNationalNumber: '2058026838'
}
export const fireDb = firebase.firestore()
export const fireAuth = firebase.auth()
