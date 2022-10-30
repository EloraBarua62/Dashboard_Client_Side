import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const {id} = useParams();
    const nameRef = useRef('');
    const imgRef = useRef('');
    const quantityRef = useRef('');
    const priceRef = useRef('');
    const handleUpdate = event =>{
        event.preventDefault();
        const url = `http://localhost:5000/update_product/${id}`;
        const product = {name:nameRef , img:imgRef , quantity:quantityRef , price:priceRef};
        fetch(url,{
            method:'PUT',
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    return (
        <div className='flex justify-center items-center my-20'>            
            <div className='w-1/3 bg-slate-100 '>
                <div className='w-full bg-slate-900 text-center py-5 '>
                    <h1 className='uppercase text-white text-xl '>Update Product</h1>
                </div>
                <form onSubmit={handleUpdate} className='mx-auto py-10'>
                    <div className='flex-col justify-start w-10/12 mb-5'>
                        <label htmlFor="" className='text-black text-md'>Product name</label>
                        
                        <input ref={nameRef} type="text" className='border-2 border-orange-500 rounded-md' />
                    </div>
                    <div>
                        <label htmlFor="Image link"></label>
                        <input ref={imgRef} type="file" className='border-2 border-orange-500 rounded-md' />
                    </div>                 
                    <div>
                        <label htmlFor="Quantity"></label>
                        <input ref={quantityRef} type="number" className='border-2 border-orange-500 rounded-md' />
                    </div>                  
                    <div>
                        <label htmlFor="Price"></label>
                        <input ref={priceRef} type="number" className='border-2 border-orange-500 rounded-md' />
                    </div>
                    <input type="submit" value="Submit" className='w-20 bg-orange-500 text-white uppercase'/>
                    
                </form>
            </div>
            
        </div>
    );
};

export default UpdateProduct;