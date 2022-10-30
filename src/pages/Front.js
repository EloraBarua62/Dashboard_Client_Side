import React from 'react';
import auth from '../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
const Front = () => {
    const [
        signInWithEmailAndPassword,
        
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        navigate('/dashboard');
    }
    return (
        <div className='flex justify-center items-center my-20'>
            <div className='w-1/3 bg-slate-100 '>
                <div className='w-full bg-slate-900 text-center py-5 '>
                    <h1 className='uppercase text-white text-xl'>Login</h1>
                </div>
                <form onSubmit={handleLogin} className='mx-auto py-10'>
                    <div className='flex-col justify-start mb-5'>
                        <h1 className='text-md text-left pl-12'>Email</h1>
                        <input name='email' type="email" className='border-2 border-orange-500 rounded-md w-4/5 mx-auto' />
                    </div>
                    <div className='flex-col justify-start mb-5'>
                        <h1 className='text-md text-left pl-12'>Password</h1>
                        <input name='password' type="password" className='border-2 border-orange-500 rounded-md w-4/5 mx-auto' />
                    </div>

                    <button type="submit" className='px-5 py-2 rounded-md bg-orange-500 text-white uppercase' >Submit</button>

                </form>
            </div>

        </div>
    );
};

export default Front;