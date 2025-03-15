import ShoppingCart from './ShoppingCart'
import '../style/Header.css'
import { Github } from '@deemlol/next-icons'

export default function Header() {
	return (
		<nav className='navbar'>
			<div className='navbar__logo'>
				<span href='#' className='navbar__link'>
					MyStore v1
				</span>
				<a href='https://github.com/AlessandrohL' target='_blank'>
					<Github />
				</a>
			</div>
			<ShoppingCart />
		</nav>
	)
}
