import $ from 'jquery'

document.addEventListener('DOMContentLoaded', () => {
	$('div.checkbox-input').click(() => {
		const $target = $(this).find('span')
		const $input = $(this).find('input')

		if ($target.hasClass('checkbox--select')) {
			$input.val(1)
		} else {
			$input.val(0)
		}
	})
})
