import $ from 'jquery'

$(document).ready(() => {
	const commonRatingNodes = document.querySelectorAll('.table__rating')

	commonRatingNodes.forEach(ratingNode => {
		const commonRating = Number(ratingNode.dataset.rating)

		const commonWidth = ratingNode.querySelector(
			'.table__stars-common-container'
		).clientWidth

		const commonRatingWidthPercent = (commonRating * 100) / 5

		const commonRatingWidthPixels =
			(commonRatingWidthPercent * (commonWidth - 8)) / 100

		const goldContainer = ratingNode.querySelector(
			'.table__stars-gold-container'
		)

		const setGoldContainerWidth = width => {
			goldContainer.style.width = width
		}

		if (commonRating <= 1)
			setGoldContainerWidth(`calc(${commonRatingWidthPixels}px)`)
		else if (commonRating <= 2)
			setGoldContainerWidth(`calc(${commonRatingWidthPixels}px + 2px)`)
		else if (commonRating <= 3)
			setGoldContainerWidth(`calc(${commonRatingWidthPixels}px + 4px)`)
		else if (commonRating <= 4)
			setGoldContainerWidth(`calc(${commonRatingWidthPixels}px + 6px)`)
		else if (commonRating <= 5)
			setGoldContainerWidth(`calc(${commonRatingWidthPixels}px + 8px)`)
	})
})
