import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Sidebar from './components/Sidebar/Sidebar'
import Homepage from './pages/Homepage'
import Upcoming from './pages/Upcoming'
import Calendar from './pages/Calendar'
import StickyWall from './pages/StickyWall'
import SortByList from './pages/SortByList'
import SortByTag from './pages/SortByTag'
import PrivateRoute from './components/utils/PrivateRoute'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/upcoming' element={<Upcoming />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/sticky-wall' element={<StickyWall />} />
          <Route path='/list/:listName' element={<SortByList />} />
          <Route path='/tag/:tagName' element={<SortByTag />} />
          <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Route>
      </Routes>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
