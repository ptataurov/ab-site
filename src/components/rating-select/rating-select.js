import $ from 'jquery'

import fadeToggle from '../../assets/js/fadeToggle'

window.addEventListener('DOMContentLoaded', () => {
	fadeToggle(
		$('div.rating-select div.rating-select__header'),
		$('div.rating-select div.rating-select__body'),
		'rating-select__body--show'
	)

	$('.rating-select').each(function(i, j) {
		if (!j.hasOwnProperty('value')) {
			j.value = []
		}

		const value = []

		$(j)
			.find('li.rating-select__item--selected')
			.each(function(m, n) {
				value.push($(n).data('value'))
			})

		j.value = value

		changeNotice($(j), value.length)
	})

	$('.rating-select ul.rating-select__list li').click(function() {
		const $self = $(this)
		const $select = $self.parents('div.rating-select')

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

		if (!$self.hasClass('rating-select__item--selected'))
			$self.addClass('rating-select__item--selected')
		else $self.removeClass('rating-select__item--selected')

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

	$select.find('.rating-select__choice').text(text)
}
