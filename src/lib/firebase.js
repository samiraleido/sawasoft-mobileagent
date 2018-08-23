
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import config from './firebase-config';

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

export default firebase;
export { firestore, auth };
