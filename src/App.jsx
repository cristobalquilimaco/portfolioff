import './App.css'
import { Route, Routes } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </div>
  )
}

export default App