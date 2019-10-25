/* global $ */

$('.job-box').click(function (e) {
  window.location = $(this).find('a').attr('href')
})

$('#code').focus()
$('#login .govuk-button').hide()

$('#login #code').keypress(function (e) {
  console.log($(this).val())
  let value = $(this).val()
  if (value.length >= 3) {
    $('.govuk-button').fadeIn('slow')
  }
})

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})
