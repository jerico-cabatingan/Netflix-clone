import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import './App.css';


const router = createBrowserRouter([{
  element: <HomeScreen />,
  path: "/",
}, {
  element: <ProfileScreen/>,
  path: "/profile",
}]);

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      user ?
        dispatch(login({
          uid: user.uid,
          email: user.email
        }))
      :
        dispatch(logout());
      ;
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
