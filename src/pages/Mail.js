import React from 'react'

function Mail() {
    return(
        <React.Fragment>
            <div className="mail">
		<div className="container">
			<h3 style={{textAlign:'center'}}>Mail Us</h3>
			<div className="agile_mail_grids">
				<div className="col-md-5 contact-left">
					<h4>Address</h4>
					<p>est eligendi optio cumque nihil impedit quo minus id quod maxime
						<span>26 56D Rescue,US</span></p>
					<ul>
						<li>Free Phone :+1 078 4589 2456</li>
						<li>Telephone :+1 078 4589 2456</li>
						<li>Fax :+1 078 4589 2456</li>
						<li><a href="mailto:info@example.com">info@example.com</a></li>
					</ul>
				</div>
				<div>
					<h4>Contact Form</h4>
					<form action="#" method="post">
						<input type="text" name="Name" defaultValue="Name"  required=""/><br/><br/>
						<input type="email" name="Email" defaultValue="Email"  required=""/><br/><br/>
						<input type="text" name="Telephone" defaultValue="Telephone"  required=""/><br/><br/>
						<textarea name="message" required="">Message...</textarea><br/><br/>
						<input type="submit" defaultValue="Submit" /><br/><br/><br/>
					</form>
				</div>
				<div className="clearfix"> </div>
			</div>

			<div className="contact-bottom">
				<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d96908.54934770924!2d-73.74913540000001!3d40.62123259999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sanimal+rescue+service+near+Inwood%2C+New+York%2C+NY%2C+United+States!5e0!3m2!1sen!2sin!4v1436335928062" frameBorder="0" style={{border:"0", width:'100%', height:'200px'}} allowFullScreen></iframe>
			</div><br/><br/><br/>
		</div>
	</div>
        </React.Fragment>
    )
}

export default Mail;