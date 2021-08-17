import React, { Component } from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data";
export default class App extends Component {
	constructor() {
		super();
		this.state = { products: data.products, size: "", sort: "" };
	}
	sortProducts = (event) => {
		console.log(event.target.value);
		const sort = event.target.value;
		this.setState((state) => ({
			sort: sort,
			products: this.state.products
				.slice()
				
				.sort((a, b) =>
					sort === "lowest"
						? a.price > b.price
							? 1
							: -1
						: sort === "highest"
						? a.price < b.price
							? 1
							: -1
						: a.id > b.id
						? 1
						: -1
				),
		}));
	};
	filterProducts = (event) => {
		console.log(event.target.value);
		if (event.target.value === "") {
			this.setState({ size: event.target.value, products: data.products });
		} else {
			this.setState({
				size: event.target.value,
				products: data.products.filter(
					(product) => product.size.indexOf(event.target.value) >= 0
				),
			});
		}
	};

	render() {
		return (
			<div className="grid-container">
				<header>
					<a href="/">Shopping Cart</a>
				</header>
				<main>
					<div className="content">
						<div className="main">
							<Filter
								count={this.state.products.length}
								size={this.state.size}
								sort={this.state.sort}
								filterProducts={this.filterProducts}
								sortProducts={this.sortProducts}
							></Filter>
							<Products products={this.state.products}></Products>
						</div>
						<div className="sidbar">cards items</div>
					</div>
				</main>
				<footer>All Right is reserved.</footer>
			</div>
		);
	}
}
