import React from "react";
import { ElementsConsumer, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import "../App.css"
import Footer from "./Footer";
import Header from "./Header";

export const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const { id } = useParams();
    console.log(id);

    const OrderState = useSelector((state) => state?.OrderReducer?.OrderList)
    console.log("data from addtoorder", OrderState);

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);
        if (result.error) {
            console.log(result.error.message);
        } else {
            console.log(result.token);
        }
    };

    return (
        <>
            <Header />
            <div className="AddToCart">
                {
                    OrderState && OrderState.length > 0 && OrderState.map((ele) => {
                        const AddItems = ele?.OrderList;
                        return (
                            <div className='FoodItemInfo' key={AddItems?.id}>
                                <div className='leftimg'>
                                    <img className='paymentimg' src={AddItems?.image} alt="#" />
                                </div>
                                <div className='iteminfo'>
                                    <p ><b>{AddItems?.name}</b></p>
                                    <p className='category'>Category : {AddItems?.category}</p>
                                </div>
                                <p>Total price : INR {ele?.price}</p>

                            </div>
                        )
                    })
                }
                <form onSubmit={handleSubmit}>
                    <div className="cardsection">
                        <label>
                            Card details
                            <CardElement />
                        </label>
                    </div>
                    <button disabled={!stripe} className="btn-pay">
                        Buy Now
                    </button>
                    <p className="secure-note">Payments are encrypted and processed securely by Stripe</p>
                </form>
            </div>

            <Footer />
        </>
    );
}

export default function InjectedCheckoutForm() {
    return (
        <ElementsConsumer>
            {({ stripe, elements }) => (
                <CheckoutForm stripe={stripe} elements={elements} />
            )}
        </ElementsConsumer>
    );
}