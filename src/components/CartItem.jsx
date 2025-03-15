import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Trash } from '@deemlol/next-icons'

export default function CartItem({ id, image, title, price, quantity }) {
	const { handleRemoveProduct } = useContext(CartContext)

	return (
		<li className='cart-item' key={id}>
			<div className='cart-item__body'>
				<img src={image} alt={title} />
				<div>
					<p className='cart-item__title'>{title}</p>
					<p className='cart-item__price'>
						${price} x {quantity}
					</p>
				</div>
			</div>
			<button className='cart-remove' onClick={() => handleRemoveProduct(id)}>
				<Trash color='#ff7675' />
			</button>
		</li>
	)
}
