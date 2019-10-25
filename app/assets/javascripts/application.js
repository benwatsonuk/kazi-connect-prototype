/* global $ */

$('.job-box').click(function (e) {
  window.location = $(this).find('a').attr('href')
})

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})
