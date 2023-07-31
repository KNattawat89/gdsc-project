import { initializeApp } from 'firebase/app'
import { getAuth, signOut } from 'firebase/auth'
const firebaseConfig = {
	apiKey: 'AIzaSyAJGUODMRmlLPmvi0QQkL5-jJVN-2tLTWI',
	authDomain: 'gdsc-kmutt-website.firebaseapp.com',
	projectId: 'gdsc-kmutt-website',
	storageBucket: 'gdsc-kmutt-website.appspot.com',
	messagingSenderId: '323017173359',
	appId: '1:323017173359:web:3b3163d3298309208d609a',
	measurementId: 'G-K4GQ6TGWQK',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
