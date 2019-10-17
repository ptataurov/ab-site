import $ from 'jquery'

import fadeToggle from '../../assets/js/fadeToggle'

fadeToggle(
	$('div.search-select div.search-select__header'),
	$('div.search-select div.search-select__body'),
	'search-select__body--show'
)

$('div.search-select').each(function(i, j) {
	if (!j.hasOwnProperty('value')) {
		j.value = []
	}

	const value = []

	$(j)
		.find('li.search-select__item span.checkbox--select')
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

$('div.search-select').on('click', 'button[type="search-select"]', function(e) {
	const $self = $(this)
	$self
		.parents('div.search-select__body')
		.find('div.search-select__list-container span.checkbox--select')
		.each(function(i, j) {
			$(j).removeClass('checkbox--select')

			const $select = $self.parents('div.search-select')
			$select.val([])

			changeNotice($select, 0)
			$select.trigger('change')
		})
})

$('body').on('click', 'div.search-select', function(e) {
	if (!$(this).find('li').length) {
		ajaxSearchProducts($(this).find('input.search-select__search-input'))
	}
})

$('div.search-select').on(
	'click',
	'input.search-select__search-input',
	function(e) {
		if (!$(this).val()) {
			$(this)
				.parent('.search-select__search-group')
				.addClass('search-select__search-group--input')
		}
	}
)

$('div.search-select').on('blur', 'input.search-select__search-input', function(
	e
) {
	if (!$(this).val()) {
		$(this)
			.parent('.search-select__search-group')
			.removeClass('search-select__search-group--input')
	}
})

$('div.search-select').on(
	'input',
	'input.search-select__search-input',
	function(e) {
		const $self = $(this)

		if (!$self.get(0).hasOwnProperty('usedDate')) {
			$self.get(0).usedDate = Date.now() - 1000
		}

		if (Date.now() - $self.get(0).usedDate >= 1000) {
			ajaxSearchProducts($self)
			$self.get(0).usedDate = Date.now()
		}
	}
)

function ajaxSearchProducts($self) {
	$.get(
		$self.parents('div.search-select').data('url'),
		{
			name: $self.val()
		},
		function(res) {
			const $ul = $self
				.parents('div.search-select')
				.find('ul.search-select__list')

			$ul.find('span').each(function(i, j) {
				if (!$(j).hasClass('checkbox--select')) {
					$(j)
						.parent()
						.remove()
				}
			})

			if (res.length) {
				$ul.append(res)
			}
		}
	)
}

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

	$select.find('.search-select__choice').text(text)
}

$('body').on('click', '.search-select__item', function(e) {
	const $self = $(this)
	const $select = $self.parents('div.search-select')

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
