import { useState } from 'react'
import './App.css'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const loggedUser = result.user
      setUser(loggedUser);
      console.log(loggedUser);
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <>
      <h1>Firebase + React</h1>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      {user && 
        <div>
          <h3>User: {user.displayName}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </>
  )
}

export default App
