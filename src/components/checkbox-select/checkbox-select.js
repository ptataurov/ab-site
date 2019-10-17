import $ from 'jquery'

document.addEventListener('DOMContentLoaded', () => {
	$('div.checkbox-select').click(function(e) {
		const $target = $(e.target)

		// Возможно, это костыль, но как сделать правильно, я хз:
		if ($target.parents('.tooltip').length === 0) {
			const $self = $(this)
			const $checkbox = $self.find('span.checkbox')

			if ($checkbox.hasClass('checkbox--select')) {
				$checkbox.removeClass('checkbox--select')
				$self.data('selected', 0)
			} else {
				$checkbox.addClass('checkbox--select')
				$self.data('selected', 1)
			}

			$self.trigger('change')
		}
	})
})
