import React from "react";
import { Header } from "./Header";

const Home = () => {
	return (
		<div className="container mt-4">
			<h3 className="pb-1 mb-4">Les derniers cours:</h3>
			{/* Latest Courses */}
			<div className="row">
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
			<h3 className="pb-1 mb-4 mt-5">Les cours populaires:</h3>
			<div className="row">
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
		</div>
	);
};

export default Home;
