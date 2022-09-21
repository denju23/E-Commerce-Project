import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ViewCart(props) {
	const [cartdetails, setCart] = useState([]);
	var uid = localStorage.getItem('id');

	useEffect(() => {
		let formData = new FormData();
		formData.append('user_id', uid)
		axios.post('https://akashsir.in/myapi/ecom1/api/api-cart-list.php', formData)
			.then((response) => { setCart(response.data.cart) })
		// console.log(cartdetails[0].cart_id);
	})

	function deleteSingleProduct(cart_id) {
		console.log("Cart-Id: " + cart_id);
		const formdata = new FormData();
		formdata.append('cart_id', cart_id);
		axios.post('https://akashsir.in/myapi/ecom1/api/api-cart-remove-product.php', formdata)
			.then(function (response) {
				console.log(response);
				if (response.data.flag === 1) {
					var msg = response.data.message;
					console.log("" + msg);
				}
			}).catch(function (err) {

				console.log(err);
			});
	}
	if (!cartdetails) { return <div><br /><h1 align="center"><img src="/images/cartempty.png" /></h1></div> }
	return (
		<React.Fragment>
			<h3>Your shopping cart contains: <span>3 Products</span></h3>

			<div>
				<table border={1}>
					<thead>
						<tr>
							<th>Cart Id.</th>
							<th>Product Image</th>
							<th>Product Quantity</th>
							<th>Product Name</th>
							<th>Product Details</th>
							<th>Product Price</th>
							<th>Remove Item</th>
						</tr>
					</thead>
					{
						cartdetails.map((mycart =>
							<>
								<tr>
									<td>{mycart.cart_id}</td>
									<td><img src={mycart.product_image} alt="image" height={100} width={100} /></td>
									<td>
										<div>
											<div>
												<div>&nbsp;</div>
												<div><span>1</span></div>
												<div>&nbsp;</div>
											</div>
										</div>
									</td>
									<td>{mycart.product_name}</td>
									<td>{mycart.product_details}</td>
									<td>Rs. {mycart.product_price}</td>
									<td>
										<a><button onClick={() => deleteSingleProduct(mycart.cart_id)}>Remove</button></a>
									</td>
								</tr>
							</>))
					}
				</table>
			</div>
			<div>
				<div>
					<h4>Continue to basket</h4>
					<ul>
						<li>Product1 <i>-</i> <span>$200.00 </span></li>
						<li>Product2 <i>-</i> <span>$270.00 </span></li>
						<li>Product3 <i>-</i> <span>$212.00 </span></li>
						<li>Total Service Charges <i>-</i> <span>$15.00</span></li>
						<li>Total <i>-</i> <span>$697.00</span></li>
					</ul>
				</div>
				<div>
					<button><Link to='/Products'> Continue Shopping  </Link></button>
					<button><Link to='/PlaceOrder'> Place Order  </Link></button>
					
				</div>
			</div>
		</React.Fragment>
	)
}

export default ViewCart;