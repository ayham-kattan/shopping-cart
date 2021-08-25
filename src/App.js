import React, { Component } from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import Cart from "./components/Cart";
import data from "./data";
export default class App extends Component {
	constructor() {
		super();
		this.state = { products: data.products, cartItems: [], size: "", sort: "" };
	}
	removeFromCart=(product)=>{
		const cartItems=this.state.cartItems;
		this.setState({cartItems:cartItems.filter(x=>x.id!==product.id)})
		
	}

	// for cart/////////////////////////////////
	addToCart = (product) => {
		const cartItems = this.state.cartItems;
		let alreadyInCart = false;
		cartItems.forEach((item) => {
			if (item.id === product.id) {
				item.count++;
				alreadyInCart = true;
			}
		});
		if (!alreadyInCart) {
			cartItems.push({ ...product, count: 1 });
		}
		this.setState({ cartItems });
	};
	//for sorting ////////////////////////////
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
							<Products
								products={this.state.products}
								addToCart={this.addToCart}
							></Products>
						</div>
						<div className="sidbar">
							<Cart
								cartItems={this.state.cartItems}
								removeFromCart={this.removeFromCart}
							/>
						</div>
					</div>
				</main>
				<footer>All Right is reserved.</footer>
			</div>
		);
	}
}
