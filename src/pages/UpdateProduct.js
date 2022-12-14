import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleUpdate = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const url = `https://stark-shelf-57934.herokuapp.com/update_product_info/${id}`;

        const value = { quantity };
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(value)
        })
            .then(res => res.json())
            .then(data => navigate('/dashboard'));
    }
    return (
        <div className='flex justify-center items-center my-20'>
            <div className='w-1/3 bg-slate-100 '>
                <div className='w-full bg-slate-900 text-center py-5 '>
                    <h1 className='uppercase text-white text-xl'>Update Product Info</h1>
                </div>
                <form onSubmit={handleUpdate} className='mx-auto py-10'>

                    <div className='flex-col justify-center mb-5'>
                        <h1 className='text-md text-left pl-12'>Quantity</h1>
                        <input name='quantity' type="number" className='border-2 border-orange-500 rounded-md w-4/5 mx-auto' />
                    </div>

                    <button type="submit" className='px-5 py-2 rounded-md bg-orange-500 text-white uppercase' >Update</button>
                </form>
            </div>

        </div>
    );
};

export default UpdateProduct;