import React, { useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import './App.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route exact path="/" element={<HomeScreen/>}/>
    </Route>
  )
);

function App() {
  const user = null;

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log(user)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [])

  return (
    <div className="app">
      {!user ? 
        <LoginScreen/> :
        <RouterProvider router={router} />
      }
    </div>
  );
}

export default App;
