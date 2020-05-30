import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from './context';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart,item]);
	};
	const deletItem =id =>{
		const newItem = cart.filter(c=>c.id !== id);
		setCart(newItem);
	}

	return (
		<div className="App">
		<ProductContext.Provider value={{ products, addItem,cart,deletItem  }}>
			<Navigation />
			
			{/* Routes */}
			<Route exact path="/">
				<Products /> 
				{/* products={products} addItem={addItem} 	 */}
			</Route>

			<Route path="/cart">
				<ShoppingCart /> 
				
			</Route>
		</ProductContext.Provider>
		</div>
	);
}

export default App;
