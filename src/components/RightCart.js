import React, { useContext } from "react";
import { useLocation, withRouter } from "react-router";
import { McDonalsContext } from "../context/McDonalsContext";

function RightCartwithRouter(props) {
	let location = useLocation();
	const { McDonals, subTotal } = useContext(McDonalsContext);

	const McDonalsInfo = McDonals[0];
	const cartSubTotal = subTotal[0];

	const tempcartIndexes = McDonalsInfo.cartIndexes;

	const TempMcDonalsInfo = [...McDonalsInfo];

	const incrementCount = (id) => {
		let index = id - 1;
		let tempMcDonalsInfo = [...McDonalsInfo];
		let quantity = tempMcDonalsInfo[index].quantity;
		let subPrice = tempMcDonalsInfo[index].subPrice;
		let price = tempMcDonalsInfo[index].price;

		if (quantity >= 0) {
			if (index !== -1) {
				let tempCartIndexArr = [...McDonalsInfo.cartIndexes];
				let updatedIndexArr = [...tempCartIndexArr, index];
				updatedIndexArr = [...new Set(updatedIndexArr)];
				tempMcDonalsInfo.cartIndexes = [...updatedIndexArr];
				tempMcDonalsInfo[index] = {
					...tempMcDonalsInfo[index],
					quantity: quantity + 1,
					subPrice: subPrice + price,
				};
				tempMcDonalsInfo.cartSubtotal = cartsubTotal;
				McDonals[1](tempMcDonalsInfo);
				subTotal[1](cartSubTotal + price);
			}
		}
	};
	const decrementCount = (id) => {
		let index = id - 1;
		let tempMcDonalsInfo = [...McDonalsInfo];
		let quantity = tempMcDonalsInfo[index].quantity;
		let subPrice = tempMcDonalsInfo[index].subPrice;
		let price = tempMcDonalsInfo[index].price;
		if (quantity > 0) {
			if (index !== -1) {
				let tempCartIndexArr = [...McDonalsInfo.cartIndexes];
				let updatedIndexArr = [...tempCartIndexArr, index];
				updatedIndexArr = [...new Set(updatedIndexArr)];
				tempMcDonalsInfo.cartIndexes = [...updatedIndexArr];
				tempMcDonalsInfo[index] = {
					...tempMcDonalsInfo[index],
					quantity: quantity - 1,
					subPrice: subPrice - price,
				};
				tempMcDonalsInfo.cartSubtotal = cartsubTotal;
				McDonals[1](tempMcDonalsInfo);
				subTotal[1](cartSubTotal + price);
			}
		}
	};
	const gotoCart = () => {
		props.history.push("/cart");
	};

	let FilteredMcDInfo = tempcartIndexes
		? tempcartIndexes.map(
			(cartIndex) => TempMcDonalsInfo.filter((da) => da.id === cartIndex + 1)[0]
		)
		: [];
	let cartTotalTemp = 0;

	let cartsubTotal = FilteredMcDInfo
		? FilteredMcDInfo.map((e) => (cartTotalTemp = cartTotalTemp + e.subPrice))[
		FilteredMcDInfo.length - 1
		]
		: 0;

	return (
		<div className="col-md-4 p-4">
			<div style={{ padding: "20px" }}>
				<h4 className="m-0">Cart</h4>
				<div>
					<div className="col-md-8">
						{FilteredMcDInfo ? (
							FilteredMcDInfo.map((myData, index) => (
								<>
									{myData.quantity > 0 ? <div key={index} className="row py-3">
										<div className="col-md-8">
											<h6> {myData.item_name} </h6>
											<p>
												<i className="fas fa-rupee-sign"></i>
												<strong>{myData.subPrice} </strong>
											</p>
											<div
												className="d-flex justify-content-between px-3"
												style={{ color: "green", width: "100px", height: "35px" }}
											>
												<button
													onClick={() => decrementCount(myData.id)}
													className="btn btn-success"
												>
													-
												</button>
												<p className="mx-2 mt-1"> {myData.quantity}</p>
												<button
													onClick={() => incrementCount(myData.id)}
													className="btn btn-success"
												>
													+
												</button>
											</div>
										</div>
										<div className="col-md-4">
											<img
												className="shadow rounded"
												style={{ width: "200px", height: "120px" }}
												src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=602&q=80"
												alt={myData.item_name}
											/>
										</div>
										<hr style={{ color: "black", backgroundColor: "black" }} />
									</div> : null}
								</>
							))
						) : (
							<h1>not available</h1>
						)}
					</div>
				</div>
				{location?.pathname !== "/cart" ? <>
					<div className="d-flex justify-content-between">
						<div>
							<h4 className="m-0">Subtotal</h4>
						</div>
						<h6 style={{ marginTop: "20px" }}>
							<span> {cartsubTotal}</span>
						</h6>
					</div>
					<div className="mt-4">
						<button
							onClick={gotoCart}
							style={{
								fontWeight: "bold",
								color: "white",
								fontSize: "20px",
								width: "100%",
							}}
							className="btn btn-success px-4 py-2"
						>
							CHECKOUT
						</button>
					</div>
				</>
					: null}
			</div>

		</div>
	);
}

const RightCart = withRouter(RightCartwithRouter);
export default RightCart;
