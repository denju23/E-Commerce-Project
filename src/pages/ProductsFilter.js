import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function ProductFilter(props) {
    let subid = useParams();
    const [productdetails, setProduct] = useState([]);
    console.log(subid)

    useEffect(() => {
        axios.get(`https://akashsir.in/myapi/ecom1/api/api-view-product.php?sub_category_id=${subid['subid']}`)
            .then((response) => setProduct(response.data.product))
        console.log("yes" + productdetails[0]);
        console.log(`https://akashsir.in/myapi/ecom1/api/api-view-product.php?sub_category_id=${subid['subid']}`);

    });

    console.log(subid)
    const [subcat, setSubcat] = useState([])

    useEffect(() => {
        axios.get(`https://akashsir.in/myapi/ecom1/api/sub_category_display.php`)
            .then((response) => { setSubcat(response.data.sub_category) })
        //console.log(productdetails[0].product_name);
    });
    return (
        <div>

            <div className="dresses">
                <div className="container">
                    <div className="w3ls_dresses_grids">
                        <div className="col-md-4 w3ls_dresses_grid_left">
                            <div className="w3ls_dresses_grid_left_grid">
                                <h3>Categories</h3>
                                <div className="w3ls_dresses_grid_left_grid_sub">
                                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingOne">
                                                <h4 className="panel-title asd">
                                                    <a className="pa_italic" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingTwo">
                                            <h4 className="panel-title asd">
                                                <a className="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span><i className="glyphicon glyphicon-minus" aria-hidden="true"></i>Foot Wear
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                            <div className="panel-body panel_text">
                                                <ul>
                                                    <li><a href="sandals.html">Flats</a></li>
                                                    <li><a href="sandals.html">Sandals</a></li>
                                                    <li><a href="sandals.html">Boots</a></li>
                                                    <li><a href="sandals.html">Heals</a></li>
                                                    <li><a href="sandals.html">Shirts</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="panel_bottom">
                                        <li><a href="products.html">Summer Store</a></li>
                                        <li><a href="dresses.html">New In Clothing</a></li>
                                        <li><a href="sandals.html">New In Shoes</a></li>
                                        <li><a href="products.html">Latest Watches</a></li>
                                    </ul>
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
                            <br />
                            <div className="w3ls_dresses_grid_right_grid3">
                                {
                                    productdetails.map((productdata =>
                                        <div className="col-md-4 agileinfo_new_products_grid agileinfo_new_products_grid_dresses">
                                            <div className="agile_ecommerce_tab_left dresses_grid">
                                                <div className="hs-wrapper hs-wrapper2">
                                                    <Link to={`/ProductDetails/${productdata.product_id}`}><img src={productdata.product_image} alt=" " className="img-responsive" /></Link>

                                                    <div className="w3_hs_bottom w3_hs_bottom_sub1">
                                                        <ul>
                                                            <li>
                                                                <Link to={`/ProductDetails/${productdata.product_id}`} data-toggle="modal" data-target="#myModal6"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <h5><a href="single.html"><Link to={`/ProductDetails/${productdata.product_id}`}>{productdata.product_name}</Link></a></h5>
                                                <div className="simpleCart_shelfItem">
                                                    <p>Rs. <i className="item_price">{productdata.product_price}&nbsp;&nbsp;</i></p>
                                                    <p><Link to={`/ProductDetails/${productdata.product_id}`}>Details</Link></p><br /><br />
                                                </div>
                                                <div className="dresses_grid_pos">
                                                    <h6>New</h6>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFilter;

