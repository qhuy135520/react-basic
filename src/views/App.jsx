import { useState } from 'react'
import './App.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Router } from 'react-router-dom'

import Nav from './Nav/Nav'
import ListToDo from './todos/ListToDo'
import MyComponent from './Example/MyComponent';
import Home from './Example/Home';
import ListUser from '../Users/ListUser';
import DetailUser from '../Users/DetailUser';
function App() {

  return (
    <>
      <Nav />

      <article>
        <h1>My First Component</h1>
        <ol>
          <li>Components: UI Building Blocks</li>
          <li>Defining a Component</li>
          <li>Using a Component</li>
        </ol>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<ListToDo />} />
          <Route path="/about" element={<MyComponent />} />
          <Route path="/user" element={<ListUser />} />
          <Route path="/user/:id" element={<DetailUser />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </article>
    </>
  )
}



export default App
