import $ from 'jquery'

window.addEventListener('DOMContentLoaded', () => {
	$('.user_add__modal form').submit(function(e) {
		e.preventDefault()

		const $form = $(this)

		let url = $form.attr('action')
		let data = $form.serialize()

		$form.find('.input').removeClass('input--invalid')

		$.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		})

		$.post(url, data)
			.done(data => {
				if (data.success) {
					document.location.reload(true)
				} else {
					for (let fieldName in data.fields) {
						if (data.fields.hasOwnProperty(fieldName)) {
							let $input = $form.find('[name="' + fieldName + '"]')

							if ($input.length) {
								let $div = $input.parents('.input')
								$div.find('.input__alert').text(data.fields[fieldName])
								$div.addClass('input--invalid')
							}
						}
					}
				}
			})
			.fail(() => {
				alert('К сожалению, произошла ошибка')
			})
	})
})
