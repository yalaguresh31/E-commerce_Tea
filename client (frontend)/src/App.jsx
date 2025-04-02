import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import Collections from './pages/Collections/Collections.jsx'
import {
  Routes,
  Route
} from 'react-router-dom';


function App() {
  

  return (
    <>
      <div>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/collections' element={<Collections/>} />
          <Route path='/accessories'  />
          <Route path='/blog'  />
          <Route path='/contact' />
        </Routes>

        <Footer/>
      </div>
    </>
  )
}

export default App

