import React from 'react';
import MyButton from '../utils/button';
import Login from './login';

const RegisterLogin = () =>{
    return(
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New Customers</h1>
                        <p>Deserunt portland tilde, fam offal 90's lomo ad voluptate squid trust fund you probably haven't heard of them in. Dolore bushwick disrupt etsy hexagon flexitarian banjo. Schlitz small batch subway tile, cloud bread trust fund authentic pariatur iPhone direct trade minim migas occupy XOXO. Eu before they sold out try-hard mlkshk 8-bit. Schlitz kale chips vexillologist pabst cloud bread kombucha,
                         +1 cardigan 3 wolf moon chicharrones waistcoat hexagon minim.
                        Celiac elit narwhal ex venmo vegan, chicharrones voluptate. Echo park sustainable vice artisan keffiyeh id paleo. Qui velit man braid dolore twee, kitsch cliche poke williamsburg. Echo park meditation vexillologist, church-key franzen voluptate banh mi. Thundercats green juice poutine sartorial pinterest activated charcoal. Wayfarers williamsburg sint austin af franzen meh, lo-fi authentic gluten-free 
                        pabst deserunt listicle dreamcatcher. Occaecat offal drinking vinegar cupidatat.
                        Blue bottle celiac aliqua, taxidermy microdosing offal tempor scenester vape vinyl fashion axe. 
                        </p>
                        <MyButton
                            type="default"
                            title="Create an Account"
                            linkTo="/register"
                            addStyles={{
                                margin: '10px 0 0 0'
                            }}
                        />
                    </div>
                    <div className="right">
                        <h2>Registered Customers</h2>
                        <p>If you have an account, please login.</p>
                        <Login/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterLogin;