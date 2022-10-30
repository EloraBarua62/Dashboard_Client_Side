import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
    const navigate = useNavigate();

    const handleUpdate = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;


        const url = "https://stark-shelf-57934.herokuapp.com/add_product";
        const product = { name, img, quantity, price };
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => navigate('/dashboard'));
    }
    return (
        <div className='flex justify-center items-center my-20'>
            <div className='w-1/3 bg-slate-100 '>
                <div className='w-full bg-slate-900 text-center py-5 '>
                    <h1 className='uppercase text-white text-xl'>Create Product</h1>
                </div>
                <form onSubmit={handleUpdate} className='mx-auto py-10'>
                    <div className='flex-col justify-center mb-5'>
                        <h1 className='text-md text-left pl-12'>Product name</h1>
                        <input name='name' type="text" className='border-2 border-orange-500 rounded-md w-4/5 mx-auto' />
                    </div>
                    <div className='flex-col justify-center mb-5'>
                        <h1 className='text-md text-left pl-12'>Product Image Link</h1>
                        <input name='img' type="text" className='border-2 border-orange-500 rounded-md w-4/5 mx-auto' />
                    </div>
                    <div className='flex-col justify-center mb-5'>
                        <h1 className='text-md text-left pl-12'>Quantity</h1>
                        <input name='quantity' type="number" className='border-2 border-orange-500 rounded-md w-4/5 mx-auto' />
                    </div>
                    <div className='flex-col justify-center mb-5'>
                        <h1 className='text-md text-left pl-12'>Price</h1>
                        <input name='price' type="number" className='border-2 border-orange-500 rounded-md w-4/5 mx-auto' />
                    </div>
                    <button type="submit" className='px-5 py-2 rounded-md bg-orange-500 text-white uppercase' >Submit</button>
                </form>
            </div>

        </div>
    );
};

export default CreateProduct;