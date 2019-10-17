import '../../assets/scss/common.scss'
import $ from 'jquery'

window.addEventListener('DOMContentLoaded', () => {
	$('.sidebar__hamburger').click(function() {
		const $layout = $('.layout')
		if ($layout.length) {
			if ($layout.hasClass('layout--switched')) {
				$layout.removeClass('layout--switched')
			} else {
				$layout.addClass('layout--switched')
			}
		}
	})
})
