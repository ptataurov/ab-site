import $ from 'jquery'

const show = ($spinner = $('.layout__spinner')) => {
	if ($spinner.length) {
		$spinner.addClass('spinner--show')
	}
}

const hide = ($spinner = $('.layout__spinner')) => {
	if ($spinner.length) {
		$spinner.removeClass('spinner--show')
	}
}

export { show, hide }
