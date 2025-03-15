import Rating from './Rating'
import { useContext, useState } from 'react'
import '../style/ProductCard.css'
import { CartContext } from '../contexts/CartContext'

export default function ProductCard({
	id,
	title,
	brand,
	price,
	image,
	rating,
}) {
	const { handleAddProduct } = useContext(CartContext)
	const [quantity, setQuantity] = useState(1)

	function handleChange(e) {
		const { value } = e.target
		if (isNaN(value) || value === '') {
			return
		}

		setQuantity(Number(value))
	}

	function onDecreaseQuantity() {
		if (quantity === 1) {
			return
		}
		setQuantity(quantity - 1)
	}

	function onIncrementQuantity() {
		setQuantity(quantity + 1)
	}

	return (
		<figure className='product-card'>
			<div className='product-card__body'>
				<div className='product-card__image-wrapper'>
					<img className='product-card__image' src={image} alt={title} />
				</div>
				<b className='product-card__title'>{title}</b>
				<span className='product-card__brand'>{brand}</span>
				<span className='product-card__price'>${price}</span>
				<Rating rate={rating.rate} count={rating.count} />
			</div>
			<footer className='product-card__footer'>
				<div className='product-card__quantity'>
					<button onClick={onDecreaseQuantity}>-</button>
					<input type='text' onChange={handleChange} value={quantity} />
					<button onClick={onIncrementQuantity}>+</button>
				</div>
				<button
					className='product-card__button'
					onClick={() => {
						handleAddProduct({
							id,
							title,
							image,
							quantity,
							price,
						})
					}}
				>
					Agregar al carro
				</button>
			</footer>
		</figure>
	)
}
