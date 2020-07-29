import {connect} from "react-redux";
import CartComponent from "../../Component/Cart/CartComponent";

import {addItemToCart, emptyTheCart} from '../../../State/Actions';

const mapStateToProps = (state)=>{
    //debugger;
    return{
        user:state.user.user,
        cart:state.cart
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addItemToCart: () => {
            let id = Math.ceil(Math.random() * 10000); //item id
            //cart item object
            let item = {
                id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }

            const action = addItemToCart(item);
            dispatch(action);
        },
        //empty: bindActionCreators(empty, dispatch),
        emptyTheCart: () =>{
            dispatch(emptyTheCart())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);