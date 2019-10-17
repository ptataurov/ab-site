import $ from 'jquery'

window.addEventListener('resize', () => {
	const $tooltip = $('.tooltip--show')
	const $popup = $('.tooltip__popup')
	$popup.removeClass('tooltip__popup--position-left')
	$popup.removeClass('tooltip__popup--position-right')
	$popup.removeClass('tooltip__popup--position-center')

	$tooltip.removeClass('tooltip--show')
})

const show = $tooltip => {
	const tooltipNode = $tooltip[0]

	const { x, width } = tooltipNode.getBoundingClientRect()

	const offsetLeft = x
	const offsetRight = $(window).width() - (x + width)

	const $popup = $('.tooltip__popup', $tooltip)

	if (offsetRight >= offsetLeft) {
		$popup.css('width', `${offsetRight - 20}px`)
		$popup.addClass('tooltip__popup--position-right')
	} else {
		$popup.css('width', `${offsetLeft - 20}px`)
		$popup.addClass('tooltip__popup--position-left')
	}

	$tooltip.addClass('tooltip--show')
	$popup.removeClass('fade-out')
	$popup.addClass('fade-in')
}

const hide = $tooltip => {
	const $popup = $('.tooltip__popup', $tooltip)
	$popup.removeClass('fade-in')
	$popup.addClass('fade-out')

	setTimeout(() => {
		$tooltip.removeClass('tooltip--show')

		$popup.removeClass('tooltip__popup--position-left')
		$popup.removeClass('tooltip__popup--position-right')
		$popup.removeClass('tooltip__popup--position-center')
	}, 200)
}

const toggle = $tooltip => {
	if ($tooltip.hasClass('tooltip--show')) {
		hide($tooltip)
	} else {
		show($tooltip)
	}
}

const $tooltip = $('.tooltip')

$tooltip.on('click', '.tooltip__btn', function() {
	const $tooltip = $(this).parents('.tooltip')

	if ($tooltip.hasClass('tooltip--show')) {
		toggle($tooltip)
	} else {
		const $otherTooltips = $('.tooltip--show')

		$otherTooltips.each(function(i, item) {
			const $popup = $('.tooltip__popup', item)
			$popup.removeClass('fade-in')
			$popup.addClass('fade-out')

			setTimeout(() => {
				const regex = RegExp('--show$')
				let showClass = ''

				item.classList.forEach(item => {
					if (regex.test(item)) showClass = item
				})

				$(item).removeClass(showClass)
			}, 100)
		})

		show($tooltip)
	}
})
