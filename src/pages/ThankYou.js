import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <br /><br />
            <h1>Thank You For Choosing Us !!</h1>
            <h1>Your Order has Been Placed !! <img style={{ height: '70px' }} src="assets/images/orderplace.png" /></h1>
            <h3>View Orders ?? <Link to='/ViewOrder'>Orders</Link></h3>
        </div>
    )
}

export default ThankYou;