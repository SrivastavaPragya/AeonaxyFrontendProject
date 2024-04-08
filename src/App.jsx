import React from 'react'
import Sign from './components/Sign'
import SignPage from './components/SignPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign2 from './components/Sign2';
import Services from './components/Services';
import Confirm from './components/Confirm';


const App = () => {
  return (
    <div>
      <Router>

     <Routes>
     <Route path="/" element={<Sign />} />
     <Route path="/Sign" element={ <SignPage/>} />
     <Route path="/Signup" element={ <Sign2/>} />
     <Route path="/Services" element={ <Services/>} />
     <Route path="/confirm" element={ <Confirm/>} />

  </Routes>
  </Router>
    </div>
  )
}

export default App
