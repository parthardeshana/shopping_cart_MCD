import axios from "axios";
import React, { useState, useEffect, createContext } from "react";

export const McDonalsContext = createContext();

export const McDonalsProvider = (props) => {
	const url = "https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7";

	const [McDonalsInfo, setMcDonalsInfo] = useState([]);
	const [subTotal, setSubTotal] = useState(0);

	let obj = {
		McDonals: [McDonalsInfo, setMcDonalsInfo],
		subTotal: [subTotal, setSubTotal],
	};

	useEffect(async () => {
		let data = await axios.get(url);
		let filteredEle = data?.data.filter((e, index) => e);
		// let filteredEle = data?.data.filter((e, index) => index < 30);
		filteredEle.forEach((e) => (e.quantity = 0));
		filteredEle.forEach((e) => (e.subPrice = 0));
		filteredEle.cartIndexes = [];
		filteredEle.cartSubtotal = 0;
		setMcDonalsInfo(filteredEle);
	}, []);

	return (
		<>
			<McDonalsContext.Provider value={obj}>
				{props.children}
			</McDonalsContext.Provider>
		</>
	);
};
