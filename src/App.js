import './App.css';
import ProductManage from './parts/ProductManage';
import UserManage from './parts/UserManage';

function App() {
  return (
    <div className="App">
      <div className='w-full bg-slate-900 py-20'>
        <h1 className='text-4xl font-bold text-white'>DASHBOARD</h1>
      </div>
      
      <ProductManage></ProductManage>
      <UserManage></UserManage>
      


    </div>
  );
}

export default App;
