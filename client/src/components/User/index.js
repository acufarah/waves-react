import React from 'react';
import UserLayout from '../../hoc/user_layout';
import MyButton from '../utils/button';

const UserDashboard= ({user})=>{
    return(
        <UserLayout>
            <div className= 'user_nfo_panel'>
                <h1>User Information</h1>
                <div>
                    <span>{user.userData.name}</span>
                    <span>{user.userData.lastname}</span>
                    <span>{user.userData.email}</span>
                </div>
                <MyButton
                    type='default'
                    title='Edit Account Info'
                    linkTo= 'user/user_profile'
                />
            </div>
            <div className='user_nfo_panel'>
                <h1>Purchase History</h1>
                <div className='user_product_block_wrapper'>
                    History
                </div>
            </div>
        </UserLayout>
    );
};

export default UserDashboard;