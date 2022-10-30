import React, { useEffect, useState } from 'react';

const ProductManage = () => {
    const [products , setproducts] = useState([]);
    useEffect(()=>{
        const url = "http://localhost:5000/all_product";
        fetch(url)
            .then(res => res.json())
            .then(data => setproducts(data));
    },[products]);


    // Delete
    const handleDelete = id => {     
        const url = `http://localhost:5000/product_delete/${id}`;
        console.log(id);
        fetch(url ,{method:'DELETE'})
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <h1>Product data</h1>
            <div className='w-10/12 mx-auto bg-slate-200 flex-col justify-center'>
                <div className='flex justify-center items-center gap-x-5 py-10'>
                    <div className='w-40 mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>No.</div>
                    <div className='w-40 mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>Image</div>
                    <div className='w-40 mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>Name</div>
                    <div className='w-40 mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>Quantity</div>
                    <div className='w-40 mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>Price</div>
                    <div className='w-40 mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>Action</div>
                </div>
            
            
                {
                    products.map((product,index) => <div className='flex justify-center items-center gap-x-5 py-2'>
                        <div className='drop-shadow-lg shadow-black mx-auto w-40 border-2 border-white bg-orange-500 font-lg font-medium my-1 text-white px-5 py-2'>{index}</div>
                        <div className=' mx-auto w-40 h-12 border-2 border-white bg-orange-500 font-lg font-medium my-1 text-white'>
                            <img src={product.img} alt=""/>
                        </div>
                        <div className=' mx-auto w-40 border-2 border-white bg-orange-500 font-lg font-medium my-1 text-white px-5 py-2'>{product.name}</div>
                        <div className=' mx-auto w-40 border-2 border-white bg-orange-500 font-lg font-medium my-1 text-white px-5 py-2'>{product.quantity}</div>
                        <div className=' mx-auto w-40 border-2 border-white bg-orange-500 font-lg font-medium my-1 text-white px-5 py-2'>{product.price}</div>
                        <div className=' mx-auto w-40 my-1 text-white py-2'>
                            <button className='border bg-green-600 rounded-md px-2 mr-2 py-2'>Update</button>
                            <button className='border bg-red-600 rounded-md px-2 py-2' onClick={() => handleDelete(product._id)}>Delete</button>
                        </div>
                    </div>)
                }
                   
            
            
        </div>
        </div>
    );
};

export default ProductManage;