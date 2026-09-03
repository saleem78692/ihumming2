import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import PageLoader from './componants/common/pageLoader'

function App() {
  return (
    <div>
      <PageLoader/>
        <Routes>
              <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default App