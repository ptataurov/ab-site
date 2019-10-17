import $ from 'jquery'

$('.reviews__table-body tr').click(function() {
	$(this)
		.next()
		.toggleClass('reviews__table-review-body--open')

	$('.reviews__table-toggle-btn', this).toggleClass(
		'reviews__table-toggle-btn--open'
	)
})

$('.reviews__table-body tr').on('click', '.btn-toggle', function(e) {
	e.stopPropagation()

	$(this).toggleClass('btn-toggle--active')
})
