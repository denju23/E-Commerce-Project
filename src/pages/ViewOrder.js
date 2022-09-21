import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function ViewOrder(props) {
    const [orderdetails, setOrder] = useState([]);
    var uid = localStorage.getItem('id');

    useEffect(() => {
        let formData = new FormData();
        formData.append('user_id', uid)
        axios.post('https://akashsir.in/myapi/ecom1/api/api-order-listing.php', formData)
            .then((response) => { setOrder(response.data.order_list) })
        //console.log(cartdetails[0].cart_id);
    })
    if (!orderdetails) { return <div><br /><h1 align="center"><img src="/images/orderempty.jpeg" /></h1></div> }
    return (
        <div>

            <h2 align="center">Orders</h2><br /><br />
            <div>
                <table border={1} style={{padding:'10', margin:'10'}}>
                    <thead>
                        <tr >
                            <th>Order Id</th>
                            <th>Order Date</th>
                            <th>Order Status</th>
                            <th>Total Amount</th>
                            <th>Shipping Name</th>
                            <th>Shipping Mobile</th>
                            <th>Shipping Address</th>
                            <th>Payment Method</th>
                            <th>Product Details</th>
                        </tr>
                    </thead>
                    {
                        orderdetails.map((myorder =>
                            <>
                                <tr>
                                    <td>{myorder.order_id}</td>
                                    <td>{myorder.order_date}</td>
                                    <td>{myorder.order_status}</td>
                                    <td>Rs. {myorder.total_amount}</td>
                                    <td>{myorder.shipping_name}</td>
                                    <td>{myorder.shipping_mobile}</td>
                                    <td>{myorder.shipping_address}</td>
                                    <td>{myorder.payment_method}</td>
                                </tr>
                            </>))
                    }
                </table>

            </div>
           
        </div>
    )
}

export default ViewOrder;