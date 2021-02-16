import React, { Component } from "react";
// import image5 from "../../img/image5.jpg";

export const Jumbotron = () => (
	<main className="page landing-page">
		<section className="clean-block clean-hero">
			<div className="text">
				<h2>Lorem ipsum dolor sit amet.</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in,
					mattis vitae leo.
				</p>
				<button className="btn btn-outline-light btn-lg" type="button">
					Learn more
				</button>
			</div>
		</section>
		<section className="clean-block clean-info dark">
			<div className="container">
				<div className="block-heading">
					<h2 className="text-info">Info</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor
						in, mattis vitae leo.
					</p>
				</div>
				<div className="row align-items-center">
					<div className="col-md-6">
						<img className="img-thumbnail" src={image5} />
					</div>
					<div className="col-md-6">
						<h3>Lorem impsum dolor sit amet</h3>
						<div className="getting-started-info">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
								consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</p>
						</div>
						<button className="btn btn-outline-primary btn-lg" type="button">
							Join Now
						</button>
					</div>
				</div>
			</div>
		</section>
		<section className="clean-block features">
			<div className="container">
				<div className="block-heading">
					<h2 className="text-info">Features</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor
						in, mattis vitae leo.
					</p>
				</div>
				<div className="row justify-content-center">
					<div className="col-md-5 feature-box">
						<i className="icon-star icon" />
						<h4>Bootstrap 4</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec
							auctor in, mattis vitae leo.
						</p>
					</div>
					<div className="col-md-5 feature-box">
						<i className="icon-pencil icon" />
						<h4>Customizable</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec
							auctor in, mattis vitae leo.
						</p>
					</div>
					<div className="col-md-5 feature-box">
						<i className="icon-screen-smartphone icon" />
						<h4>Responsive</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec
							auctor in, mattis vitae leo.
						</p>
					</div>
					<div className="col-md-5 feature-box">
						<i className="icon-refresh icon" />
						<h4>All Browser Compatibility</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec
							auctor in, mattis vitae leo.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section className="clean-block slider dark">
			<div className="container">
				<div className="block-heading">
					<h2 className="text-info">Slider</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor
						in, mattis vitae leo.
					</p>
				</div>
				<div className="carousel slide" data-ride="carousel" id="carousel-1">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="w-100 d-block" src="bs1/assets/img/scenery/image1.jpg" alt="Slide Image" />
						</div>
						<div className="carousel-item">
							<img className="w-100 d-block" src="bs1/assets/img/scenery/image4.jpg" alt="Slide Image" />
						</div>
						<div className="carousel-item">
							<img className="w-100 d-block" src="bs1/assets/img/scenery/image6.jpg" alt="Slide Image" />
						</div>
					</div>
					<div>
						<a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev">
							<span className="carousel-control-prev-icon" />
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next">
							<span className="carousel-control-next-icon" />
							<span className="sr-only">Next</span>
						</a>
					</div>
					<ol className="carousel-indicators">
						<li data-target="#carousel-1" data-slide-to="0" className="active" />
						<li data-target="#carousel-1" data-slide-to="1" />
						<li data-target="#carousel-1" data-slide-to="2" />
					</ol>
				</div>
			</div>
		</section>
		<section className="clean-block about-us">
			<div className="container">
				<div className="block-heading">
					<h2 className="text-info">About Us</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor
						in, mattis vitae leo.
					</p>
				</div>
				<div className="row justify-content-center">
					<div className="col-sm-6 col-lg-4">
						<div className="card clean-card text-center">
							<img className="card-img-top w-100 d-block" src="assets/img/avatars/avatar1.jpg" />
							<div className="card-body info">
								<h4 className="card-title">John Smith</h4>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								<div className="icons">
									<a href="#">
										<i className="icon-social-facebook" />
									</a>
									<a href="#">
										<i className="icon-social-instagram" />
									</a>
									<a href="#">
										<i className="icon-social-twitter" />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-lg-4">
						<div className="card clean-card text-center">
							<img className="card-img-top w-100 d-block" src="assets/img/avatars/avatar2.jpg" />
							<div className="card-body info">
								<h4 className="card-title">Robert Downturn</h4>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								<div className="icons">
									<a href="#">
										<i className="icon-social-facebook" />
									</a>
									<a href="#">
										<i className="icon-social-instagram" />
									</a>
									<a href="#">
										<i className="icon-social-twitter" />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-lg-4">
						<div className="card clean-card text-center">
							<img className="card-img-top w-100 d-block" src="assets/img/avatars/avatar3.jpg" />
							<div className="card-body info">
								<h4 className="card-title">Ally Sanders</h4>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								<div className="icons">
									<a href="#">
										<i className="icon-social-facebook" />
									</a>
									<a href="#">
										<i className="icon-social-instagram" />
									</a>
									<a href="#">
										<i className="icon-social-twitter" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
);
