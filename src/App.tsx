import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import HeaderMain from './routes/HeaderMain'
import Home from './routes/HeaderMain/Home'

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeaderMain />}>
          <Route index element={<Navigate to='/home' />} />
          <Route path='home' element={<Home />}></Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
