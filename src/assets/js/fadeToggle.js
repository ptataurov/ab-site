import $ from 'jquery'

export default (
  $clickNode,
  $popupNode,
  showClass,
  delay = 200,
  cb = () => {}
) => {
  if (!$clickNode.length || !$popupNode.length) return

  $clickNode.click(function() {
    if ($popupNode.hasClass(showClass)) {
      $popupNode.removeClass('fade-in')
      $popupNode.addClass('fade-out')

      setTimeout(() => {
        $popupNode.removeClass(showClass)
      }, delay)
    } else {
      const $otherShows = $('.fade-in')

      $otherShows.each(function(i, item) {
        $(item).removeClass('fade-in')
        $(item).addClass('fade-out')

        setTimeout(() => {
          const regex = RegExp('--show$')
          let showClass = ''

          item.classList.forEach(item => {
            if (regex.test(item)) showClass = item
          })

          $(item).removeClass(showClass)
        }, delay)
      })

      $popupNode.addClass(showClass)
      $popupNode.removeClass('fade-out')
      $popupNode.addClass('fade-in')

      cb()
    }
  })
}
