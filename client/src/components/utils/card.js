import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Card extends Component{

    renderCardImage(images){

        if(images.length>0){
                return images[0].url
        }else{
            return '/image/image_not_available.png'
        }

    }


    render(){

        const props= this.props;

        return(
            <div className={`card_item_wrapper ${props.grid}`}>
                <div
                className="image"
                style= {{
                    background: `url(${this.renderCardImage(props.images)}) norepeat`
                }}
                >
                </div>
                <div className="action_container">
                    <div className="tags">
                        <div classname="brand">
                            {props.brand.name}
                        </div>
                        <div className="name">
                            {props.name}
                        </div>
                        <div className="name">
                            ${props.price}
                        </div>
                    </div>
                </div>
                { props.grid ?
                    <div className="description">
                            hjggfdtrupoiupoiu[u[iu]]
                    </div>
                    : null
                
                }
            </div>
        )
    }
}

export default Card;