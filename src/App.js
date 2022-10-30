import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <div>
        <h1>Product data</h1>
        <div className='w-3/4 mx-auto bg-slate-200 flex justify-center'>
          <div className='flex justify-center items-center gap-10 py-10'>
            <div className='mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>No.</div>
            <div className='mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>Image</div>
            <div className='mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>Name</div>
            <div className='mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>Quantity</div>
            <div className='mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>Price</div>
            <div className='mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>Action</div>
          </div>
        </div>
      </div>
      


    </div>
  );
}

export default App;
