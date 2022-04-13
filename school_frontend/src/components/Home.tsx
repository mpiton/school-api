import React from "react";
import { Header } from "./Header";

const Home = () => {
	return (
		<div className="container mt-4">
			<h3 className="pb-1 mb-4">
				Les derniers cours:{" "}
				<a className="float-end" href="#">
					Voir tout
				</a>
			</h3>
			{/* Latest Courses */}
			<div className="row mb-4">
				<div className="col-md-3">
					<a href="#">
						<div className="card">
							<img
								src="https://i.picsum.photos/id/742/200/300.jpg?hmac=sHIMP5dqRR6HpQIp-okFHEfCF2qUo8G3_cq7DuFoCRw"
								className="card-img-top"
								alt=""
							/>
							<div className="card-body">
								<h5 className="card-title">Titre du cours</h5>
							</div>
						</div>
					</a>
				</div>
			</div>
			{/* End Latest Courses */}
			{/* Popular Courses */}
			<h3 className="pb-1 mb-4 mt-5">
				Les cours populaires: <a className="float-end" href="#"></a>
			</h3>
			<div className="row mb-4">
				<div className="col-md-3">
					<a href="#">
						<div className="card">
							<img
								src="https://i.picsum.photos/id/742/200/300.jpg?hmac=sHIMP5dqRR6HpQIp-okFHEfCF2qUo8G3_cq7DuFoCRw"
								className="card-img-top"
								alt=""
							/>
							<div className="card-body">
								<h5 className="card-title">Titre du cours</h5>
							</div>
						</div>
					</a>
				</div>
			</div>
			{/* End Popular Courses */}
			{/* Popular Teachers */}
			<h3 className="pb-1 mb-4 mt-5">
				Les professeurs vedettes: <a className="float-end" href="#"></a>
			</h3>
			<div className="row mb-4">
				<div className="col-md-3">
					<a href="#">
						<div className="card">
							<img
								src="https://i.picsum.photos/id/742/200/300.jpg?hmac=sHIMP5dqRR6HpQIp-okFHEfCF2qUo8G3_cq7DuFoCRw"
								className="card-img-top"
								alt=""
							/>
							<div className="card-body">
								<h5 className="card-title">Nom du professeur</h5>
							</div>
						</div>
					</a>
				</div>
			</div>
			{/* End Popular Teachers */}
			{/* Student Testimonial */}
			<h3 className="pb-1 mb-4 mt-5">Témoignages:</h3>
			<div
				id="carouselExampleIndicators"
				className="carousel slide bg-dark text-white py-5"
				data-bs-ride="carousel"
			>
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<figure className="text-center">
							<blockquote className="blockquote">
								<p>A well-known quote, contained in a blockquote element.</p>
							</blockquote>
							<figcaption className="blockquote-footer">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</figcaption>
						</figure>
					</div>
					<div className="carousel-item">
						<figure className="text-center">
							<blockquote className="blockquote">
								<p>A well-known quote, contained in a blockquote element.</p>
							</blockquote>
							<figcaption className="blockquote-footer">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</figcaption>
						</figure>
					</div>
					<div className="carousel-item">
						<figure className="text-center">
							<blockquote className="blockquote">
								<p>A well-known quote, contained in a blockquote element.</p>
							</blockquote>
							<figcaption className="blockquote-footer">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</figcaption>
						</figure>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			{/* End Student Testimonial */}
		</div>
	);
};

export default Home;
