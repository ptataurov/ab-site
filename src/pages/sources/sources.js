import $ from 'jquery'

import { show as showDarken } from '../../assets/js/darken'
import { show as showModal } from '../../components/modal/modal'

window.addEventListener('DOMContentLoaded', () => {
	$('.add_source_btn').click(function(e) {
		e.preventDefault()
		showDarken()
		showModal($('[data-name="addSource"]'))
	})
})
