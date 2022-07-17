import React, { useContext } from "react";
import { withRouter } from "react-router";
import { McDonalsContext } from "../context/McDonalsContext";
import RightCart from "../components/RightCart";


function CartwithRouter(props) {
	const { McDonals, subTotal } = useContext(McDonalsContext);
	const cartSubTotal = subTotal[0];

	let GSTTax = subTotal[0] * (5 / 100);
	let cartTotal = subTotal[0] + GSTTax;

	const warningFunction = () => {
		alert("Thank you for shopping with us");
		alert("please complete your payment ");
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<RightCart />
				<div className="col-md-4 p-4">
					<div style={{ backgroundColor: "#c1e5ea", padding: "20px" }}>
						<h4>Summary</h4>
						<div className="d-flex justify-content-between">
							<h6>Subtotal</h6>
							<div>
								<i className="fas fa-rupee-sign mr-2" />
								<span>{cartSubTotal} </span>
							</div>
						</div>
						<div className="d-flex justify-content-between">
							<h6>Estimated Tax</h6>
							<div>
								<i className="fas fa-rupee-sign mr-2"></i>
								<span>{GSTTax}</span>
							</div>
						</div>
						<div className="d-flex justify-content-between">
							<h6>Shipping charge</h6>
							<h6> FREE </h6>
						</div>

						<hr className="mt-4" />
						<div className="d-flex justify-content-between mt-2">
							<div>
								<h5 className="m-0">Total</h5>
							</div>
							<div>
								<h6 style={{ marginTop: "10px" }}>
									<strong>
										<i
											className="fas fa-rupee-sign"
											style={{ marginRight: "10px" }}
										></i>
									</strong>
									{cartTotal}
								</h6>
							</div>
						</div>
					</div>
					<div className="mt-4">
						<button
							style={{
								fontWeight: "bold",
								color: "white",
								fontSize: "20px",
								width: "100%",
							}}
							className="btn btn-warning px-4 py-2"
							onClick={() => warningFunction()}
						>
							Proceed to Pay
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

const CheckoutCart = withRouter(CartwithRouter);
export default CheckoutCart;
