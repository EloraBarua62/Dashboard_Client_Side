import { Route, Routes } from 'react-router-dom';
import './App.css';
import Front from './pages/Front';
import UpdateProduct from './pages/UpdateProduct';
import CreateProduct from './pages/CreateProduct';
import DashboardFront from './pages/DashboardFront';
import CreateUser from './pages/CreateUser';
import UpdateUser from './pages/UpdateUser';


function App() {
  return (
    <div className="App">

    
      <Routes>
         <Route path='/dashboard' element={<DashboardFront></DashboardFront>}></Route>
         <Route path='/' element={<Front></Front>}></Route>
         <Route path='/update_product/:id' element={<UpdateProduct></UpdateProduct>}></Route>
         <Route path='/update_user/:id' element={<UpdateUser></UpdateUser>}></Route>
         <Route path='/create_product' element={<CreateProduct></CreateProduct>}></Route>
         <Route path='/add_user' element={<CreateUser></CreateUser>}></Route>
         
          
      </Routes>
      
      


    </div>
  );
}

export default App;
