import $ from 'jquery'

import { show as showDarken } from '../../assets/js/darken'
import { show as showModal } from '../modal/modal'

window.addEventListener('DOMContentLoaded', () => {
	$('.user-popup__btn-add-user').click(function() {
		showDarken()
		showModal($('[data-name="addUser"]'))
	})

	$('.btn-logout').click(function(e) {
		e.preventDefault()
		$('#logout-form').submit()
	})
})
