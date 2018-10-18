import React, {Component} from 'react';
import HomeSlider from './homeSlider';
import HomePromotion from './home_promotions';
import CardBlock from '../utils/card_block';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { GET_PRODUCTS_BY_SELL, GET_PRODUCTS_BY_ARRIVAL, getProductsBySell, getProductsByArrival} from '../../actions/products_actions';

class Home extends Component{

    componentDidMount(){
        this.props.dispatch(getProductsBySell());
        this.props.dispatch(getProductsByArrival());
    }

    render(){
        return(
            <div>
                <HomeSlider/>
                <CardBlock
                list={this.props.products.bySell}
                title="Best Selling Guitars"
                />
                <HomePromotion/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        products: state.products
    }
}

export default connect(mapStateToProps)(withRouter(Home));