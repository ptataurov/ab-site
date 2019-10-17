import $ from 'jquery'

window.addEventListener('DOMContentLoaded', () => {
	$('.source_add__modal form').submit(function(e) {
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

		$form
			.find('.btn')
			.addClass('btn--disabled')
			.prop('disabled', true)

		$.post(url, data)
			.done(data => {
				if (data.success) {
					document
						.getElementsByClassName('source_add__modal')[0]
						.querySelector('.modal__body').innerHTML =
						'Ваш запрос успешно отправлен'
					document
						.getElementsByClassName('source_add__modal')[0]
						.querySelector('.modal__footer').innerText = ''
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
				document
					.getElementsByClassName('source_add__modal')[0]
					.querySelector('.modal__body').innerHTML =
					'К сожалению, произошла ошибка'
				document
					.getElementsByClassName('source_add__modal')[0]
					.querySelector('.modal__footer').innerText = ''
			})
			.always(() => {
				$form
					.find('.modal__footer .btn')
					.prop('disabled', false)
					.removeClass('btn--disabled')
			})
	})
})
