import React from 'react';
import ProductManage from '../parts/ProductManage';
import UserManage from '../parts/UserManage';

const DashboardFront = () => {
    return (
        <div>
            <div className='w-full bg-slate-900 py-20'>
                <h1 className='text-4xl font-bold text-white'>DASHBOARD</h1>
            </div>
            <ProductManage></ProductManage>
            <UserManage></UserManage>
        </div>
    );
};

export default DashboardFront;