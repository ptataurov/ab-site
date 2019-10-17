import $ from 'jquery'

window.addEventListener('DOMContentLoaded', () => {
	$('.tabs__btn').click(function() {
		const $self = $(this)
		const target = $self.data('target')

		if (!$self.hasClass('tabs__btn--active')) {
			$('.tabs__btn--active').removeClass('tabs__btn--active')
			$self.addClass('tabs__btn--active')

			window.location.hash = target

			$('div.tab').each(function(i, j) {
				if ($(j).data('tab') != target) {
					$(j).addClass('tab--hidden')
				} else {
					$(j).removeClass('tab--hidden')
				}
			})
		}
	})

	if (window.location.hash.length) {
		changeHashHandler()
	}

	$(window).on('hashchange', function(e) {
		changeHashHandler()
	})
})

function changeHashHandler() {
	let tab = window.location.hash.split('#')[1]
	let $buttonTab = $('.tabs').find('button[data-target="' + tab + '"]')

	if ($buttonTab.length) {
		$buttonTab.trigger('click')
	}
}
