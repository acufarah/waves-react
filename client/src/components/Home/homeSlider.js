import React from 'react';
import Slider from 'react-slick';
import MyButton from '../utils/button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const HomeSlider = (props)=>{
    const slides= [{
        image: '/image/featured/featured_home.jpg',
        lineOne: 'Fender',
        lineTwo: 'Custom shop',
        linkTitle: 'Shop now',
        linkTo: '/shop'
    },
    {
        image: '/image/featured/featured_home_2.jpg',
        lineOne: 'B-stock',
        lineTwo: 'Awesome discounts',
        linkTitle: 'View Offers',
        linkTo: '/shop'
    }]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    const generateSlides = () =>(
        slides ?
            slides.map( (item, i) =>(
                <div key={i}>
                    <div className="featured_image"
                    style= {{
                        background:`url(${item.image})`,
                        height: `${window.innerHeight}px`
                    }}
                    >
                        <div className="featured_action">
                            <div className="tag title">{item.lineOne}</div>
                            <div className="tag low_title">{item.lineTwo}</div>
                            <button className="tag low_title">
                            <Link  to={item.linkTo}>
                            {item.linkTitle}
                            </Link>
                            </button>
                        </div>
                        
                    </div>
                </div>
            ))
        : null
    )

    return(
        <div className="featured_container">
            <Slider {...settings}>
                {generateSlides()}
            </Slider>
        </div>
    );
};

export default connect()(withRouter(HomeSlider));