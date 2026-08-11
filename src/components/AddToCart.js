import { useSelector } from 'react-redux';
import Footer from './Footer';
import Header from './Header';
import { DeleteToCartItem, RemoveToCartItem } from "../Actions";
import { useDispatch } from "react-redux";
import { AddToOrderItem } from "../Actions";
import { FaTrash } from 'react-icons/fa';


const AddToCart = () => {

  const dispatch = useDispatch();


  const FoodState = useSelector((state) => state?.FoodReducer?.FoodList)

  return (
    <>
      <Header />
      <div className='AddToCart'>
        {
          FoodState && FoodState.length > 0 && FoodState.map((ele) => {
            const AddItems = ele?.FoodList;
            return (
              <>
                <div className='FoodItemInfo'>
                  <div className='leftimg'>
                    <img className='img' src={AddItems?.image} alt="#" />
                  </div>
                  <div className='iteminfo'>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <p><b>{AddItems?.name}</b></p>
                      <button className='removeBtn' onClick={() => dispatch(DeleteToCartItem(ele))}><FaTrash /></button>
                    </div>
                    <p className='category'>Category : {AddItems?.category}</p>
                    <p className='description'>{AddItems?.description}</p>
                    <p className='description'> INR {AddItems?.price}</p>
                    <button className='infobtn' onClick={() => dispatch(AddToOrderItem(AddItems))}>Order Now</button><br /><br />
                  </div>
                </div>
              </>
            )
          })
        }
        <button className='clearButton' onClick={() => dispatch(RemoveToCartItem(FoodState))}>clear</button>
      </div>
      <Footer />
    </>
  )
}

export default AddToCart