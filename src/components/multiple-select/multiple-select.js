import $ from 'jquery'

import fadeToggle from '../../assets/js/fadeToggle'

window.addEventListener('DOMContentLoaded', () => {
	fadeToggle(
		$('div.multiple-select div.multiple-select__header'),
		$('div.multiple-select div.multiple-select__body'),
		'multiple-select__body--show'
	)

	$('.multiple-select').each(function(i, j) {
		if (!j.hasOwnProperty('value')) {
			j.value = []
		}

		const value = []

		$(j)
			.find('li.multiple-select__item span.checkbox--select')
			.each(function(m, n) {
				value.push(
					$(n)
						.parent('li')
						.data('value')
				)
			})

		j.value = value

		changeNotice($(j), value.length)
	})

	$('.multiple-select ul.multiple-select__list li').click(function() {
		const $self = $(this)
		const $select = $self.parents('div.multiple-select')

		const value = $select.val()
		const index = value.indexOf($self.data('value'))

		if (index === -1) {
			value.push($self.data('value'))
		} else {
			value.splice(index, 1)
		}

		const length = value.length
		$select.value = value

		changeNotice($select, length)

		if (!$self.find('.checkbox').hasClass('checkbox--select'))
			$self.find('.checkbox').addClass('checkbox--select')
		else $self.find('.checkbox').removeClass('checkbox--select')

		$select.trigger('change')
	})
})

function changeNotice($select, length) {
	let text = ''

	switch (length) {
		case 0:
			text = 'Не выбрано'
			break
		case 1:
			text = 'Выбран 1'
			break
		default:
			text = `Выбрано ${length}`
	}

	$select.find('.multiple-select__choice').text(text)
}
