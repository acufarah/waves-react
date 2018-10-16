import React from 'react';
import MyButton from '../utils/button';
import { Link } from 'react-router-dom';

const HomePromotion=(props)=>{

    const promotion= {
        image: '/image/featured/featured_home_3.jpg',
        lineOne: 'Up to 40% off',
        lineTwo: 'In second hand guitars',
        linkTitle: 'Shop now',
        linkTo: '/shop'
    }

    const showPromotion= ()=>(
        promotion ?
            <div className="promotion_container_img"
            style= {{
                background: `url(${promotion.image})`
            }}
            >
            <div className="featured_action">
                            <br></br>
                            <div className="tag title">{promotion.lineOne}</div>
                            <br></br>
                            <div className="tag low_title">{promotion.lineTwo}</div>
                            <br></br>
                            <div>
                                <button className="tag low_title">
                                    <Link  to={promotion.linkTo}>
                                    {promotion.linkTitle}
                                    </Link>
                                </button>
                            </div>
                            <br></br>
                        </div>   
                        
            </div>
        :null
    )

    return (
        <div className="home_promotion">
            {showPromotion()}
        </div>
    )
}

export default HomePromotion;