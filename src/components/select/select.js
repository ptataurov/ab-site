import $ from 'jquery'

import fadeToggle from '../../assets/js/fadeToggle'

window.addEventListener('DOMContentLoaded', () => {
	$('.select').each(function(i, j) {
		const $self = $(j)

		fadeToggle(
			$self.find('.select__header'),
			$self.find('.select__body'),
			'select__body--show'
		)

		const $checked = $self.find('.checkbox--select')

		if ($checked.length) {
			$self.find('.select__choice').text($checked.parent().data('name'))
		}
	})

	$('.select ul.select__list li').click(function() {
		const $self = $(this)
		const $parent = $self.parents('.select')

		$parent.data('value', $self.data('value'))
		$parent.find('.select__choice').text($self.data('name'))
		$parent.find('.checkbox').removeClass('checkbox--select')
		$self.find('.checkbox').addClass('checkbox--select')
		$parent.trigger('change')
	})
})
