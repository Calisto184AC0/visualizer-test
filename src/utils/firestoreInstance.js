import firebaseConfig from '../../firebase/config'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const app = initializeApp(firebaseConfig)
export default getFirestore(app)
