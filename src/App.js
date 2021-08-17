import React, { Component } from "react";
import Products from "./components/Products";
import data from "./data";
export default class App extends Component {
	constructor() {
		super();
		this.state = { products: data.products, date: "", sort: "" };
		
	}
	render() {
		return (
			<div className="grid-container">
				<header>
					<a href="/">Shopping Cart</a>
				</header>
				<main>
					<div className="content">
						<div className="main">
							
							<Products products={this.state.products}>{console.log(this.state.p)}</Products>
						</div>
						<div className="sidbar">cards items</div>
					</div>
				</main>
				<footer>All Right is reserved.</footer>
			</div>
		);
	}
}
