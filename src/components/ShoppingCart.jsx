import { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import '../style/Cart.css'
import CartItem from './CartItem'
import { ShoppingCart as ShoppingCartIcon } from '@deemlol/next-icons'

export default function ShoppingCart() {
	const [showCart, setShowCart] = useState(false)
	const { cart } = useContext(CartContext)

	return (
		<div className='cart'>
			<button className='cart-button' onClick={() => setShowCart(!showCart)}>
				<span className='cart-count'>{cart.length}</span>
				<ShoppingCartIcon size={28} />
			</button>
			<div className={`cart-dropdown ${showCart ? 'active' : ''}`}>
				<ul className='cart-list'>
					{cart.map(product => (
						<CartItem key={product.id} {...product} />
					))}
				</ul>
				<div className='cart-footer'>
					<p className='cart-total'>
						Total: $
						{cart.reduce((total, product) => total + product.totalPrice, 0)}
					</p>
					<button disabled={cart.length === 0} className='cart-checkout'>
						Checkout
					</button>
				</div>
			</div>
		</div>
	)
}
