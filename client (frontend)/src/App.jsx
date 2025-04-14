import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import Collections from './pages/Collections/Collections.jsx'
import Accessories from './pages/Accessories/Accessories.jsx'
import Blog from './pages/Blog/Blog.jsx'
import Account from './pages/Account/Account.jsx'
import Delivery from './pages/Delivery/Delivery.jsx'
import Payment from './pages/Payment/Payment.jsx'
import ThankYou from './pages/ThankYou/ThankYou.jsx'
import Prodduct_Admin from './pages/Dashboard/Product_Admin/Product.jsx'
import CreateProdduct_Admin from './pages/Dashboard/Product_Admin/CreateProduct.jsx'
import UpdateProdduct_Admin from './pages/Dashboard/Product_Admin/UpdateProduct.jsx'
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
            <Route path='/account' element={<Account/>} />
            <Route path='/delivery' element={<Delivery/>} />
            <Route path='/payment' element={<Payment/>} />
            <Route path='/thankyou' element={<ThankYou/>}/>
            <Route path='/contact' />

            {/* admin */}
            <Route path="/Admin" element={<Prodduct_Admin/>}></Route>
            <Route path="/createAdmin" element={<CreateProdduct_Admin/>}></Route>
            <Route path="/updateAdmin/:id" element={<UpdateProdduct_Admin/>}></Route>
          </Routes>
          <Footer/>
        </div>
      </>
    )
  }
export default App

