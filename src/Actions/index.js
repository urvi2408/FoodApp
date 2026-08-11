export const AddToCartItem = (Food) => {
    console.log("data from add to cart action",Food);
    return (dispatch) => {
        dispatch({
        type:"ADD_FOOD_ITEM",
        payload : {
            Food:Food
        }
        })
    }
}

export const DeleteToCartItem = (Food) => {
    console.log("data from delete to cart action",Food); 
    return (dispatch) => {
        dispatch({
        type:"DELETE_FOOD_ITEM",
        payload : {
            Food:Food
        }
        })
    }
}

export const RemoveToCartItem = (Food) => {
    console.log("data from remove to cart action",Food); 
    return (dispatch) => {
        dispatch({
        type:"REMOVE_FOOD_ITEM",
        payload : {
            Food:Food
        }
        })
    }
}

export const totalPrice = (quantity,id) => {
    console.log("data from price action",id,quantity); 
    return (dispatch) => {
        dispatch({
        type:"TOTALPRICE",
        payload : {
            id:id,
            quantity:quantity
        }
        })
    }
}

export const AddToOrderItem = (id) => {
    console.log("data from add to order action",id); 
    return (dispatch) => {
        dispatch({
        type:"ADD_ORDER_ITEM",
        payload : {
            id : id
        }
        })
    }
}

export const DeleteToOrderItem = (id) => {
    console.log("data from delete to order action",id); 
    return (dispatch) => {
        dispatch({
        type:"DELETE_ORDER_ITEM",
        payload : {
            id:id
        }
        })
    }
}

export const RemoveToOrderItem = (id) => {
    console.log("data from remove to order action",id); 
    return (dispatch) => {
        dispatch({
        type:"REMOVE_ORDER_ITEM",
        payload : {
            id:id
        }
        })
    }
}

export const SetFoodItems = (items) => ({
  type: "SET_FOOD_ITEMS",
  payload: items,
});