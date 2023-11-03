import React from "react";

function Home() {
	return (
		<div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
			<h1 className="text-center mb-1">Tic Tac Toe</h1>
			<div className="row row justify-content-center align-items-center">
				<div className="col sm-4 mx-auto">
					<div id="board">
						{[...Array(9)].map((_, index) => (
							<div className="col-4 cells border border-dark" key={index}></div>
						))}
					</div>

				</div>
			</div>
		</div>
	);
}

export default Home;
