import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PlaceOrder(props) {
    var uid = localStorage.getItem('id');
    let navigate = useNavigate();
    const [order, setOrder] = useState(
        {
            order_details: '',
            shipping_name: '',
            shipping_address: '',
            shipping_mobile: '',
            total_amount: '',
            payment_method: ''
        })

    const handleChange = (event) => {
        event.preventDefault();
        setOrder({ ...order, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        let formData = new FormData();
        formData.append('user_id', uid)
        formData.append('shipping_name', order.shipping_name);
        formData.append('shipping_address', order.shipping_address);
        formData.append('shipping_mobile', order.shipping_mobile);
        formData.append('total_amount', order.total_amount);
        formData.append('payment_method', order.payment_method);
        axios.post('https://akashsir.in/myapi/ecom1/api/api-add-order.php', formData)
            .then(function (response) {
                console.log(response);
                if (response.data.flag === 1) {
                    navigate('/ThankYou')
                    var msg = response.data.message;
                    console.log("Order Placed Successfully " + msg);
                    deleteCart(uid);
                    alert('Order Placed Successfully Your order successfully added')
                }
            }).catch(function (err) {

                console.log(err);
            });
    }

    function deleteCart(uid) {
        const formdata = new FormData();
        formdata.append('user_id', uid);
        axios.post('https://akashsir.in/myapi/ecom1/api/api-cart-remove-after-place-order.php', formdata)
            .then(function (response) {
                console.log(response);
                if (response.data.flag === 1) {
                    var msg = response.data.message;
                    console.log("Cart Cleared " + msg);
                }
            }).catch(function (err) {

                console.log(err);
            });
    }
    return (
        <div>
           
            <div className="register" align="center">
                <div className="container">
                    <br /><br /><h2>Add Shipping Details</h2>
                </div><br /><br />
                <form onSubmit={handleSubmit} method="post">
                    <input placeholder="Shipping Name" name="shipping_name" type="text" required="" onChange={handleChange} />	<br /><br />
                    <input placeholder="Shipping Mobile" name="shipping_mobile" type="text" required="" onChange={handleChange} />	<br /><br />
                    <input placeholder="Shipping Address" name="shipping_address" type="text" required="" onChange={handleChange} />	<br /><br />
                    <input placeholder="Total Amount" name="total_amount" type="text" required="" onChange={handleChange} /><br /><br />
                    <b>Choose Payment Method : </b>&nbsp;
                    <input name="payment_method" type="radio" value="Net Banking" required="" onChange={handleChange} />&nbsp;Net-Banking&nbsp;
                    <input name="payment_method" type="radio" value="Cash" required="" onChange={handleChange} />&nbsp;Cash&nbsp;
                    <input name="payment_method" type="radio" value="Credit Card" required="" onChange={handleChange} />&nbsp;Credit-Card&nbsp;
                    <div className="sign-up">
                        <input type="submit" value="Place Order" />
                    </div>
                </form>
            </div>
            
        </div>
    )
}