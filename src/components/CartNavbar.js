import React from "react";
import { withRouter } from "react-router";

function CartNavbarWithRouter(props) {
	const gotoHomeHandler = () => {
		props.history.push("/");
	};
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" onClick={() => gotoHomeHandler()}>
					Cart Demo
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li >
							<button onClick={gotoHomeHandler} className="btn btn-warning mx-3" >
								Home
							</button>
						</li>
						<li >
							<button onClick={() => props.history.push("/cart")} className="btn btn-warning" >
								Cart
							</button>
						</li>
					</ul>

				</div>
			</nav>

		</div>
	);
}

const CartNavbar = withRouter(CartNavbarWithRouter);
export default CartNavbar;
