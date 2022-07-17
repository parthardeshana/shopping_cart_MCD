import React, { useEffect, useState, useContext, useRef } from "react";
import { AutoSizer, CellMeasurer, CellMeasurerCache, List } from "react-virtualized";
import { McDonalsContext } from "../context/McDonalsContext";

function BurgerItems(props) {

	const cache = useRef(new CellMeasurerCache({
		fixedWidth: true,
		defaultHeight: 100
	}))
	const { McDonals, subTotal } = useContext(McDonalsContext);

	const McDonalsInfo = McDonals[0];
	const cartSubTotal = subTotal[0];

	const incrementCount = (id) => {
		let index = id - 1;
		let tempMcDonalsInfo = [...McDonalsInfo];
		let quantity = tempMcDonalsInfo[index].quantity;
		let price = tempMcDonalsInfo[index].price;

		let subPrice = tempMcDonalsInfo[index].subPrice;
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
				subTotal[1](cartSubTotal + price);
				McDonals[1](tempMcDonalsInfo);
			}
		}
	};
	const decrementCount = (id) => {
		let index = id - 1;
		let tempMcDonalsInfo = [...McDonalsInfo];
		let price = tempMcDonalsInfo[index].price;
		let quantity = tempMcDonalsInfo[index].quantity;

		let subPrice = tempMcDonalsInfo[index].subPrice;
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
				tempMcDonalsInfo.subPrice = 900;
				McDonals[1](tempMcDonalsInfo);
			}
		}
	};

	return (
		<div className="col-md-8">
			<AutoSizer>
				{() => <List
					width={950}
					height={600}
					rowHeight={cache.current.rowHeight}
					rowCount={McDonalsInfo.length}
					deferredMeasurementCache={cache.current}
					rowRenderer={({ key, index, style, parent }) => {
						const data = McDonalsInfo[index]
						return (
							<CellMeasurer key={key}
								cache={cache.current}
								parent={parent}
								columnIndex={0}
								rowIndex={index}
							>
								< div key={key} style={style} className="row p-4" >
									<div className="col-md-6">
										<div style={{ margin: "2px 100px" }}>
											<h6> {data.item_name} </h6>
											<p>
												Lorem ipsum, dolor sit pariatur quasi facere, mollitia? Laudantium,
												ullam ipsam.
											</p>
											<p>
												<strong>
													<i className="fas fa-rupee-sign"></i>
													{data.price}
												</strong>
											</p>
											{data.quantity !== 0 ? <div className="d-flex justify-content-between pr-3 btnGroup shadow">
												<button
													onClick={() => decrementCount(data.id)}
													className="btn btn-light"
												>
													-
												</button>
												<p className="mx-2 mt-1"> {data.quantity}</p>
												<button
													onClick={() => incrementCount(data.id)}
													className="btn btn-light"
												>
													+
												</button>
											</div> : <button
												onClick={() => incrementCount(data.id)}
												className="btn btn-success"
											>
												Add to Cart
											</button>}
										</div>
									</div>
									<div className="col-md-6">
										<img
											className="shadow rounded"
											style={{ width: "300px", height: "180px" }}
											src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=602&q=80"
											alt={data.item_name}
										/>
									</div>
								</div>
							</CellMeasurer>
						)

					}}
				/>}
			</AutoSizer>
		</div >
	)
}

export default BurgerItems;
