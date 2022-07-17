import React, { useState, useEffect, useContext } from "react";
import BurgerItems from "../components/BurgerItems";
import { withRouter } from "react-router";
import RightCart from "../components/RightCart";

function HomepagewithRouter(props) {
	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					<BurgerItems />
					<RightCart />
				</div>
			</div>
		</div>
	);
}

const Homepage = withRouter(HomepagewithRouter);
export default Homepage;
