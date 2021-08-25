import React, { Component } from "react";

export default class Cart extends Component {
	render() {
		const { cartItems } = this.props;
		console.log({ cartItems });
		return (
			<div>
				{cartItems.length === 0 ? (
					<div className=" cart cart-header">cart empty</div>
				) : (
					<div className=" cart cart-header">
						you have {cartItems.length}In the cart{" "}
					</div>
				)}
				<div>
					<div className="cart">
						<ul className="cart-item">
							{cartItems.map((item) => (
								<li key={item.id}>
									<div>
										<img src={item.image} alt={item.name} />
									</div>
									<div>
										<div>{item.name}</div>
										<p> {item.price}x{item.count}</p>
										<button onClick={()=>this.props.removeFromCart(item)}>remove</button>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="cart">
						<div className="total">
							<p>Total</p>
							$ {cartItems.reduce((a,c)=>a + c.price*c.count,0)}
							<button>proccessd</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
