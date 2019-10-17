import $ from 'jquery'

const show = $alert => {
	$alert.addClass('alert--show')
	$alert.removeClass('fade-out')
	$alert.addClass('fade-in')
}

const hide = $alert => {
	$alert.removeClass('fade-in')
	$alert.addClass('fade-out')

	setTimeout(() => {
		$alert.removeClass('alert--show')
		$alert.remove()
	}, 200)
}

const template = $('#alert')

const createAlert = (title, text) => {
	let html = $('#alert')
		.html()
		.trim()
	let $alert = $(html)

	$alert.find('.alert__btn-close').click(function() {
		hide($alert)
	})

	if (title && title.length) {
		$alert.find('.alert__title').text(title)
	}

	if (text && text.length) {
		$alert.find('.alert__text').text(text)
	}

	$('body').append($alert)

	show($alert)
}

const $alert = $('.alert')

$('.alert__btn-close').click(function() {
	hide($alert)
})

export { createAlert }
