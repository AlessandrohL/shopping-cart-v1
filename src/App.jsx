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
				setProducts(null)
			} finally {
				setLoading(false)
			}
		}

		fetchProducts()

		return () => {
			ignore = true
		}
	}, [])

	return (
		<CartProvider>
			<section className='catalog'>
				<Header />
				{loading && <Loader />}
				{!error ? (
					<CatalogList products={products} />
				) : (
					<p>Hubo un error al obtener los productos.</p>
				)}
			</section>
		</CartProvider>
	)
}

export default App
