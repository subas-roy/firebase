/**
 * 1. visit: console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project
 * 6. Danger: do not publish or make firebase config to public by pushing to github
 * ------------------------------
 *        INTEGRATION
 * ------------------------------
 * 7. visit: Go to docs > Build > Authentication > Web > Get Started
 * 8. export app from the firenase.init.js file: export default app;
 * 9. in Login.jsx: import {getAuth} from firebase/auth
 * 10. create const auth = getAuth(app)
 * ------------------------------
 *        PROVIDER SETUP
 * ------------------------------
 * 11. import googleAuthProvider and create a new provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13. acivate sign-in method (google, facebook, github etc.)
 * 14. [visit]: change 127.0.0.1 to localhost
 * 
 * ------------------------------
 *        MORE AUTH PROVIDER
 * ------------------------------
 * 1. activate the auth provider (create app, provide redirect url, client id, client secret)
 * 
 */