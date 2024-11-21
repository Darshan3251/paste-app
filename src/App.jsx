import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link,createBrowserRouter,RouterProvider } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Paste from './components/paste';
import ViewPaste from './components/ViewPaste';


function App() {
 const router= createBrowserRouter(
  [
    {
      path: '/',
      element:
      <div>
      <NavBar/>
      <Home/>
      </div>
    },
    {
      path: '/pastes',
      element:
      <div>
  <NavBar/>
  <Paste/>
      </div>
    },
    {
      path: '/pastes/:id',
      element:
      <div>
        <NavBar/>
        <ViewPaste/>
      </div>
    },
  ]
 )

  return (
    <>
  
    <RouterProvider router={router} />
    </>
  )
}

export default App
