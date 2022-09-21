import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Products()
{
    const [product,setProduct]=useState([]);
	useEffect(()=>  
   {
    axios.get('https://akashsir.in/myapi/ecom1/api/api-view-product.php')
    .then((response)=>setProduct(response.data.product));   
    });
    
	const [subcat,setSubcat] = useState([])
    
		useEffect(() => {
			axios.get(`https://akashsir.in/myapi/ecom1/api/sub_category_display.php`)
			.then((response) => {setSubcat(response.data.sub_category)})
		});
		if(!product){return <div><br/><h1 align="center"><img src="/images/no-products.jpg" /></h1></div>}
    return(
	<div>
		<div>
		<div>
			<div>
				<div>
					<div>
						<h3>Categories</h3>
						<div>
						<div>
							  <div>
								<div>
								  <h4>
									<a>
									  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span><i className="glyphicon glyphicon-minus" aria-hidden="true"></i>New Arrivals
									</a>
								  </h4>
								</div>
							  </div>
							</div>
							{
								subcat.map((mysubcat => 
									<div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
								  <div className="panel-body panel_text">
									<ul>
										<li><Link to={`/ProductFilter/${mysubcat.sub_category_id}`}>{mysubcat.sub_category_name}</Link></li>
									</ul>
								  </div>
								</div>
								))
							}
						</div>
					</div>
					<div className="w3ls_dresses_grid_left_grid">
						<h3>Color</h3>
						<div className="w3ls_dresses_grid_left_grid_sub">
							<div className="ecommerce_color">
								<ul>
									<li><a href="#"><i></i> Red(5)</a></li>
									<li><a href="#"><i></i> Brown(2)</a></li>
									<li><a href="#"><i></i> Yellow(3)</a></li>
									<li><a href="#"><i></i> Violet(6)</a></li>
									<li><a href="#"><i></i> Orange(2)</a></li>
									<li><a href="#"><i></i> Blue(1)</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="w3ls_dresses_grid_left_grid">
						<h3>Size</h3>
						<div className="w3ls_dresses_grid_left_grid_sub">
							<div className="ecommerce_color ecommerce_size">
								<ul>
									<li><a href="#">Medium</a></li>
									<li><a href="#">Large</a></li>
									<li><a href="#">Extra Large</a></li>
									<li><a href="#">Small</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-8 w3ls_dresses_grid_right">
					<div className="col-md-6 w3ls_dresses_grid_right_left">
						
					</div>
					<div className="col-md-6 w3ls_dresses_grid_right_left">
						
					</div>
					<div className="clearfix"> </div>

					<div className="w3ls_dresses_grid_right_grid2">
						<div className="w3ls_dresses_grid_right_grid2_left">
							<h3>Showing Results: 0-1</h3>
						</div>
						<div className="w3ls_dresses_grid_right_grid2_right">
							<select name="select_item" className="select_item">
								<option selected="selected">Default sorting</option>
								<option>Sort by popularity</option>
								<option>Sort by average rating</option>
								<option>Sort by newness</option>
								<option>Sort by price: low to high</option>
								<option>Sort by price: high to low</option>
							</select>
						</div>
						<div className="clearfix"> </div>
					</div>
					<div className="w3ls_dresses_grid_right_grid3">
					{
						product.map((productdata => 
							<div className="col-md-4 agileinfo_new_products_grid agileinfo_new_products_grid_dresses">
							<div className="agile_ecommerce_tab_left dresses_grid">
								<div className="hs-wrapper hs-wrapper2">
								<Link to={`/ProductDetails/${productdata.product_id}`}>
									<img src={productdata.product_image} alt=" " className="img-responsive" height={150} width={150} />
									</Link>

									<div className="w3_hs_bottom w3_hs_bottom_sub1">
										<ul>
											<li>
												<Link to={`/ProductDetails/${productdata.product_id}`} data-toggle="modal" data-target="#myModal6">
													<span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
											</li>
										</ul>
									</div>
								</div>
								<h5><Link to={`/ProductDetails/${productdata.product_id}`}>{productdata.product_name}</Link>
								</h5>
								<div className="simpleCart_shelfItem">
									<p>Rs. <i className="item_price">{productdata.product_price}&nbsp;&nbsp;</i></p>
									<p><Link to={`/ProductDetails/${productdata.product_id}`}>Details</Link></p>
								</div>
								
							</div>
						</div>
							))
					}	
						
						<div className="clearfix"> </div>
					</div>
					<div className="modal video-modal fade" id="myModal6" tabIndex="-1" role="dialog" aria-labelledby="myModal6">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
								</div>
								<section>
									<div className="modal-body">
										<div className="col-md-5 modal_body_left">
											<img src="images/39.jpg" alt=" " className="img-responsive" />
										</div>
										<div className="col-md-7 modal_body_right">
											<h4>a good look women's Long Skirt</h4>
											<p>Ut enim ad minim veniam, quis nostrud 
												exercitation ullamco laboris nisi ut aliquip ex ea 
												commodo consequat.Duis aute irure dolor in 
												reprehenderit in voluptate velit esse cillum dolore 
												eu fugiat nulla pariatur. Excepteur sint occaecat 
												cupidatat non proident, sunt in culpa qui officia 
												deserunt mollit anim id est laborum.</p>
											<div className="rating">
												<div className="rating-left">
													<img src="images/star-.png" alt=" " className="img-responsive" />
												</div>
												<div className="rating-left">
													<img src="images/star-.png" alt=" " className="img-responsive" />
												</div>
												<div className="rating-left">
													<img src="images/star-.png" alt=" " className="img-responsive" />
												</div>
												<div className="rating-left">
													<img src="images/star.png" alt=" " className="img-responsive" />
												</div>
												<div className="rating-left">
													<img src="images/star.png" alt=" " className="img-responsive" />
												</div>
												<div className="clearfix"> </div>
											</div>
											<div className="modal_body_right_cart simpleCart_shelfItem">
												<p><span>$320</span> <i className="item_price">$250</i></p>
												<p><a className="item_add" href="#">Add to cart</a></p>
											</div>
											<h5>Color</h5>
											<div className="color-quality">
												<ul>
													<li><a href="#"><span></span>Red</a></li>
													<li><a href="#" className="brown"><span></span>Yellow</a></li>
													<li><a href="#" className="purple"><span></span>Purple</a></li>
													<li><a href="#" className="gray"><span></span>Violet</a></li>
												</ul>
											</div>
										</div>
										<div className="clearfix"> </div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
	</div>
		
      </div>  );
}

export default Products;