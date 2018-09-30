import React from 'react';
import UserLayout from '../../hoc/user_layout';
import MyButton from '../utils/button';

const UserDashboard= ()=>{
    return(
        <UserLayout>
            <div className= 'user_nfo_panel'>
                <h1>User Information</h1>
                <div>
                    <span>name</span>
                    <span>last name</span>
                    <span>email</span>
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