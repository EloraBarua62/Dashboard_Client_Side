import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleUpdate = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const url = `https://stark-shelf-57934.herokuapp.com/update_user_info/${id}`;
        const value = { name };
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
                    <h1 className='uppercase text-white text-xl'>Update User Info</h1>
                </div>
                <form onSubmit={handleUpdate} className='mx-auto py-10'>

                    <div className='flex-col justify-center mb-5'>
                        <h1 className='text-md text-left pl-12'>User name</h1>
                        <input name='name' type="text" className='border-2 border-orange-500 rounded-md w-4/5 mx-auto' />
                    </div>

                    <button type="submit" className='px-5 py-2 rounded-md bg-orange-500 text-white uppercase' >Update</button>
                </form>
            </div>

        </div>
    );
};

export default UpdateUser;