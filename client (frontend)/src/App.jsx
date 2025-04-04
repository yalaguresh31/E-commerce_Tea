import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import Collections from './pages/Collections/Collections.jsx'
import Accessories from './pages/Accessories/Accessories.jsx'
import Blog from './pages/Blog/Blog.jsx'
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
          <Route path='/collections' element={<Collections />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path='/product/:imageSrc' element={<Accessories />} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' />
        </Routes>

        <Footer/>
      </div>
    </>
  )
}

export default App

