import React from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';

const user = null

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route exact path="/" element={<HomeScreen/>}/>
    </Route>
  )
);

function App() {
  const user = null;

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
