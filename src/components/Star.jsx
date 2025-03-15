export default function Star({ fillPercentage }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			className='star'
		>
			<defs>
				<linearGradient
					id={`grad-${fillPercentage}`}
					x1='0%'
					y1='0%'
					x2='100%'
					y2='0%'
				>
					<stop offset={`${fillPercentage}%`} stopColor='gold' />
					<stop offset={`${fillPercentage}%`} stopColor='#ddd' />
				</linearGradient>
			</defs>
			<path
				d='M12 2l3.09 6.26 6.91 1-5 4.87L18.18 22 12 18.26 5.82 22l1.09-6.87-5-4.87 6.91-1z'
				fill={`url(#grad-${fillPercentage})`}
			/>
		</svg>
	)
}
