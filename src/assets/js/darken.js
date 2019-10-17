import $ from 'jquery'
import { hide as hideModal } from '../../components/modal/modal'

const $darken = $('.darken')

const show = () => {
    if ($darken.length) {
        $darken.addClass('darken--show')
        $darken.removeClass('fade-out')
        $darken.addClass('fade-in')
    }
}

const hide = () => {
    if ($darken.length) {
        $darken.removeClass('fade-in')
        $darken.addClass('fade-out')

        setTimeout(() => {
            $darken.removeClass('darken--show')
        }, 200)
    }
}

const toggle = () => {
    if ($darken.length) {
        if ($darken.hasClass('darken--show')) {
            hide()
        } else {
            show()
        }
    }
}

$darken.click(() => {
    hide()
    hideModal($('.modal--show'))
})

export { show, hide, toggle }
