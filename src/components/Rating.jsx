import Star from './Star'

export default function Rating({ rate, count }) {
	return (
		<div className='rating'>
			{[...Array(5)].map((_, i) => {
				let fillPercentage = 0
				if (i < Math.floor(rate)) {
					fillPercentage = 100 // Estrella completa
				} else if (i === Math.floor(rate) && rate % 1 !== 0) {
					fillPercentage = (rate % 1) * 100 // Media estrella (o parte de ella)
				}
				return <Star key={i} fillPercentage={fillPercentage} />
			})}
			<span className='rating-count'>({count})</span>
		</div>
	)
}
