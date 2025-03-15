import { useEffect, useReducer } from 'react'
import { CartContext } from './CartContext'
import { cartReducer } from '../reducers/cartReducer'

const LOCAL_STORAGE_KEY = 'shopping-cart-v1-kz'

function getCartFromLocalStorage(initialValue) {
	try {
		const json = localStorage.getItem(LOCAL_STORAGE_KEY)
		return JSON.parse(json ?? '[]')
	} catch {
		return initialValue
	}
}

const initialCart = []

export default function CartProvider({ children }) {
	const [cart, dispatch] = useReducer(
		cartReducer,
		initialCart,
		getCartFromLocalStorage
	)

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart))
	}, [cart])

	function handleAddProduct(product) {
		dispatch({
			type: 'add-product',
			product,
		})
	}

	function handleRemoveProduct(productId) {
		dispatch({
			type: 'remove-product',
			productId,
		})
	}

	return (
		<CartContext.Provider
			value={{ cart, handleAddProduct, handleRemoveProduct }}
		>
			{children}
		</CartContext.Provider>
	)
}
