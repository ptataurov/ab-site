import $ from 'jquery'

document.addEventListener('DOMContentLoaded', () => {
	$('div.checkbox-label').click(function() {
		const $self = $(this)
		const $checkbox = $self.find('span.checkbox')

		if ($checkbox.hasClass('checkbox--select')) {
			$checkbox.removeClass('checkbox--select')
			$self.data('selected', false)
		} else {
			$checkbox.addClass('checkbox--select')
			$self.data('selected', true)
		}

		$self.trigger('change')
	})
})
