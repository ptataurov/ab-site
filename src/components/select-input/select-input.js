import * as $ from 'jquery'

$(function() {
	const selectInputs = $('div[class="select-input"]')

	selectInputs.each(function(i, j) {
		$(j)
			.find(`input[name="${$(j).data('type')}"]`)
			.change(function() {
				$(this)
					.parent('div')
					.trigger('change')
			})
	})
})
