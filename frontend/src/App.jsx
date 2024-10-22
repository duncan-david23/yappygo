import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateMessage from './pages/CreateMessage'
import ViewMessage from './pages/ViewMessage'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Toaster/>
      <Router>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create-secret' element={<CreateMessage/>} />
          <Route path='/view-secret' element={<ViewMessage/>} />

        </Routes>


      </Router>


    
    </div>
  )
}

export default App