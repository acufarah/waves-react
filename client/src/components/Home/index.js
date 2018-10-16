import React, {Component} from 'react';
import HomeSlider from './homeSlider';
import HomePromotion from './home_promotions'
import { connect } from 'react-redux';
import { GET_PRODUCTS_BY_SELL, GET_PRODUCTS_BY_ARRIVAL, getProductsBySell} from '../../actions/products_actions';

class Home extends Component{

    componentDidMount(){
        this.props.dispatch(getProductsBySell());
    }

    render(){
        return(
            <div>
                <HomeSlider/>
                <HomePromotion/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        products: state.prop
    }
}

export default connect(mapStateToProps)(Home);