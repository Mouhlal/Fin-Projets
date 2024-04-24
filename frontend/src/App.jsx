import React from 'react'
import { Nav } from './Composants/Nav'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
export default function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Nav />} />
      </Routes>
   </BrowserRouter>
  )
}
