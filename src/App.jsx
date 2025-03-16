import { useEffect, useState } from 'react'
import Header from './components/Header'
import Loader from './components/Loader'
import CatalogList from './components/CatalogList'
import './style/App.css'
import './style/Catalog.css'
import CartProvider from './contexts/CartProvider'

const API_BASE = 'https://fakestoreapi.in/api'

function App() {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [search, setSearch] = useState('')

	useEffect(() => {
		let ignore = false

		const fetchProducts = async () => {
			try {
				setLoading(true)
				const response = await fetch(`${API_BASE}/products`)
				if (!response.ok) {
					throw new Error('Error obtaining the products.')
				}
				const data = await response.json()
				if (!ignore) {
					setProducts(data.products)
				}
				setError(null)
			} catch (error) {
				setError(error.message)
				setProducts([])
			} finally {
				setLoading(false)
			}
		}

		fetchProducts()

		return () => {
			ignore = true
		}
	}, [])

	const searchTerm = search.toLowerCase()
	const filteredProducts = products.filter(
		p => p.title.toLowerCase().indexOf(searchTerm) !== -1
	)

	function handleSearchChange(e) {
		const { value } = e.target
		if (products.length > 0) {
			setSearch(value)
		}
	}

	let content

	if (loading) {
		content = <Loader />
	} else if (error) {
		content = <p>Hubo un error al obtener los productos</p>
	} else {
		content = (
			<div className='catalog__body'>
				<input
					className='catalog-search'
					value={search}
					onChange={handleSearchChange}
					type='text'
					placeholder='Buscar...'
				/>
				<CatalogList products={filteredProducts} />
			</div>
		)
	}

	return (
		<CartProvider>
			<section className='catalog'>
				<Header />
				{content}
			</section>
		</CartProvider>
	)
}

export default App
