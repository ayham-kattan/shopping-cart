import React, { Component } from "react";

export default class Products extends Component {
	render() {
		return (
			<div>
				{console.log(Products)}
				<ul className="products">
					{this.props.products.map((product) => (
						<li key={product.id}>
							<div className="product">
								<a href={"#" + product.id}>
									<img
										src={product.image}
										alt={product.name}
										width="300 px"
										height="350px"
									/>
									<p>{product.name}</p>
								</a>
								<div className="product-price">
									<div>{product.price}$</div>
									<button className="button-primary">add to cart</button>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
