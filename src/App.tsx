import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route} from 'react-router'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import AdminHome from './pages/admin/AdminHome'
import MainProduct from './pages/admin/MainProduct'
import AddProduct from './pages/admin/AddProduct'
import { create, updateProduct, getAll } from './api/product'
import UppdateProducts from './pages/admin/UppdateProducts'

function App() {
  const [products, setProduct] = useState([])

  useEffect(() => 
  {
   fetch(`http://localhost:3000/products`)
   .then(response => response.json())
   .then(data => setProduct(data))  
  },[])
  const onHanlderRemove = (id) =>{
    const comfime = window.confirm("Xác nhận xóa?")
    if(comfime){
      fetch(`http://localhost:3000/products/` +id,{
        method: 'DELETE'
      }).then(()=> setProduct(products.filter(item=>item.id != id)))
    }
  }
  const onHandleAdd = (product) =>{
    create(product)
    alert("Thêm thành công");
    
  }
  const onHandleUppdate = (product) =>{
    updateProduct(product).then(()=> getAll().then(({data}) => setProduct(data)))
  }
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}/>
          <Route path='products' >
            <Route index element={<Product products={products} /> }/>
            <Route path=':id' element={<ProductDetail products={products} />} />
            </Route>
        </Route>
        <Route path='/admin'>
          <Route index element={<AdminHome />}/>
          <Route path='products' >
            <Route index element={<MainProduct products={products} onRemove={onHanlderRemove} />}/>
            <Route path='add' element={<AddProduct onAdd={onHandleAdd} />}/>
            <Route path=':id/update' element={<UppdateProducts onUpdate={onHandleUppdate} products={products} />}/>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
