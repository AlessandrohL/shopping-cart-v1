import ProductCard from './ProductCard'

export default function CatalogList({ products = [] }) {
	const mockRate = { rate: 4, count: 20 }

	return (
		<div className='catalog__list'>
			{products.map(p => (
				<ProductCard key={p.id} {...p} rating={mockRate} />
			))}
		</div>
	)
}
