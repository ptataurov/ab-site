import $ from 'jquery'
import { hide as hideDarken } from '../../assets/js/darken'

const show = $modal => {
	if ($modal.length) {
		$modal.addClass('modal--show')
		$modal.removeClass('fade-out')
		$modal.addClass('fade-in')
	}
}

const hide = $modal => {
	if ($modal.length) {
		$modal.removeClass('fade-in')
		$modal.addClass('fade-out')

		setTimeout(() => {
			$modal.removeClass('modal--show')
		}, 200)
	}
}

const toggle = $modal => {
	if ($modal.length) {
		if ($modal.hasClass('modal--show')) {
			hide($modal)
		} else {
			show($modal)
		}
	}
}

const $modals = $('.modal')

$modals.each(function(i, modal) {
	$(modal)
		.find('.modal__btn-close')
		.click(function(e) {
			e.preventDefault()
			hide($(modal))
			hideDarken()
		})
})

export { show, hide, toggle }
