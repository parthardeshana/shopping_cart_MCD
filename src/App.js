import React, { useEffect, useState, component } from "react";
import Homepage from "./pages/Homepage";
import { Route, Switch } from "react-router-dom";
import CheckoutCart from "./pages/CheckoutCart";
import { McDonalsProvider } from "./context/McDonalsContext";
import CartNavbar from "./components/CartNavbar";

function App() {
	return (
		<div>
			<McDonalsProvider>
				<CartNavbar />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/cart" component={CheckoutCart} />
				</Switch>
			</McDonalsProvider>
		</div>
	);
}

export default App;
