import React from "react";

function Home() {
	return (
		<div className="container">
			<div className="row d-flex justify-content-center align-items-center h-100vh">
				<div className="col sm-4 mx-auto">
					<h1 className="title">Tic Tac Toe</h1>
					<div id="board">
						{[...Array(9)].map((_, index) => (
							<div className="cells" key={index}></div>
						))}
					</div>

				</div>
			</div>
		</div>
	);
}

export default Home;
