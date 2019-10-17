import $ from 'jquery'

window.addEventListener('DOMContentLoaded', () => {
	$('.radio-input .radio-input__item').click(function() {
		const $self = $(this)
		const $parent = $self.parents('.radio-input')

		$parent.data('value', $self.data('value'))
		$parent.find('.radio-input__item').removeClass('radio-input__item--check')
		$self.addClass('radio-input__item--check')
		$parent.trigger('change')
	})
})
