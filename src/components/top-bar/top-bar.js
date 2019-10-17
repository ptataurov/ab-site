import $ from 'jquery'

import { show as showDarken } from '../../assets/js/darken'
import { show as showModal } from '../modal/modal'

import fadeToggle from '../../assets/js/fadeToggle'

window.addEventListener('DOMContentLoaded', () => {
	const $topBar = $('.top-bar')

	if ($topBar.length) {
		const $btnNoti = $topBar.find('.top-bar__btn-noti')
		const $notiPopup = $('.noti-popup')
		const $btnUser = $topBar.find('.top-bar__user-more')
		const $userPopup = $('.user-popup')

		fadeToggle($btnNoti, $notiPopup, 'noti-popup--show')
		fadeToggle($btnUser, $userPopup, 'user-popup--show')

		$topBar.find('.btn-add').click(() => {
			showDarken()
			showModal($('[data-name="addUser"]'))
		})
	}
})
