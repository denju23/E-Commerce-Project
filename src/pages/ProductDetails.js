import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


function ProductDetails(props) {
	let { id } = useParams();
	let uid = localStorage.getItem('id')
	//console.log(id)

	const [productdetails, setProduct] = useState([]);

	useEffect(() => {
		axios.get(`https://akashsir.in/myapi/ecom1/api/api-view-product.php?product_id=${id}`)
			.then((response) => { setProduct(response.data.product) })
		// console.log(productdetails[0].product_name);
	});

	function addCart() {
		const formdata = new FormData();
		formdata.append('user_id', uid);
		formdata.append('product_id', id);
		formdata.append('product_qty', productdetails[0].product_qty);
		axios.post('https://akashsir.in/myapi/ecom1/api/api-cart-insert.php', formdata)
			.then(function (response) {
				console.log(response);
				if (response.data.flag === 1) {
					var msg = response.data.message;
					console.log("" + msg);
				alert('Your product added to cart successfully')
				}
			}).catch(function (err) {

				console.log(err);
			});
	}
	if (!productdetails) { return <div><br /><h1 align="center"><img style={{ height: '400px' }} src="/images/no details.jpg" /></h1></div> }
	return (
		<div>

			<br /><br />
			{
				productdetails.map((myproduct =>
					<React.Fragment>

						<div>
							<div>
								<img src={myproduct.product_image} style={{height:'200px',width:'150px'}} alt="Image " />
							</div>
							<div>
								<h4>{myproduct.product_name}</h4><br />

								<h4>DESCRIPTION:</h4>
								<p>{myproduct.product_details}</p><br />
								<h4>Quantity: {myproduct.product_quantity}</h4>

								<div>
									<p>Rs.{myproduct.product_price}</p>
									<p className="item_add" onClick={addCart}><button>Add to cart</button></p>
									<button><Link to='/ViewCart'> View Cart  </Link></button>
								</div>
							</div>
						</div>
					</React.Fragment>))}

		</div>
	)
}

export default ProductDetails;