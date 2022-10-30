import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const UserManage = ({ setEmailValue }) => {
    const [user, loading, error] = useAuthState(auth);
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        const url = "https://stark-shelf-57934.herokuapp.com/all_user";
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const result = users.find(userData => userData.email === user.email)
    console.log(result);
    setEmailValue(result);

    // Delete
    const handleDelete = id => {
        const url = `https://stark-shelf-57934.herokuapp.com/user_delete/${id}`;
        console.log(id);
        fetch(url, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const handleRole = id => {
        const url = `https://stark-shelf-57934.herokuapp.com/update_role/${id}`;
        const role = 'Editor';
        const value = { role };
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(value)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    return (
        <div className='my-20 w-full bg-stone-600 py-10'>
            <div className='w-10/12 mx-auto flex justify-between'>
                <h1 className='text-2xl font-bold uppercase text-orange-400'>User Data</h1>
                <button className='border bg-orange-400 rounded-md px-5 py-2' onClick={() => navigate('/add_user')}>+ Create user</button>
            </div>

            <div className='w-10/12 mx-auto bg-slate-200 flex-col justify-center'>
                <div className='flex justify-center items-center gap-x-5 py-10'>
                    <div className='w-40 mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>No.</div>

                    <div className='w-40 mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>Name</div>
                    <div className='w-40 mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>Email</div>
                    <div className='w-40 mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>Role</div>
                    <div className='w-40 mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>Action</div>
                    {
                        result?.role === 'Admin'
                            ?
                            <div className='w-40 mx-auto border-2 border-white bg-slate-700 font-lg font-medium my-auto text-white px-5 py-2'>Make Editor</div>
                            :
                            ""
                    }

                </div>


                {
                    users.map((user, index) => <div className='flex justify-center items-center gap-x-5 py-2'>
                        <div className=' mx-auto w-40 border-2 border-white bg-orange-500 font-lg font-medium my-1 text-white px-5 py-2'>{index}</div>
                        <div className=' mx-auto w-40 border-2 border-white bg-orange-500 font-lg font-medium my-1 text-white px-5 py-2'>{user.name}</div>
                        <div className=' mx-auto w-40 border-2 border-white bg-orange-500 font-lg font-medium my-1 text-white px-5 py-2'>{user.email}</div>
                        <div className=' mx-auto w-40 border-2 border-white bg-orange-500 font-lg font-medium my-1 text-white px-5 py-2'>{user.role}</div>
                        <div className=' mx-auto w-40 my-1 text-white py-2'>
                            <button className='border bg-green-600 rounded-md px-2 mr-2 py-2' onClick={() => navigate(`/update_user/${user._id}`)}>Update</button>
                            {
                                result?.role === 'Admin'
                                    ?
                                    <button className='border bg-red-600 rounded-md px-2 py-2' onClick={() => handleDelete(user._id)}>Delete</button>
                                    :
                                    ""
                            }

                        </div>
                        {
                            result?.role === 'Admin'
                                ?
                                <div className=' mx-auto w-40 my-1 text-white py-2'>
                                    {user.role === 'User' ?
                                        <button onClick={() => handleRole(user._id)} className='border bg-blue-800 rounded-md px-5 py-2'>Yes</button>
                                        :
                                        <h1 className='text-lg font-semibold text-black'>Not applicable</h1>
                                    }
                                </div>
                                :
                                ""
                        }
                    </div>)
                }



            </div>
        </div>
    );
};

export default UserManage;