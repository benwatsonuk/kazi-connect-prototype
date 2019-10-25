/* global $ */

$('.job-box').click(function (e) {
  window.location = $(this).find('a').attr('href')
})



$('#code').focus()
$('#login .govuk-button').hide()

$('#login #code').change(function (e) {
  console.log($(this).val())
  let value = $(this).val()
  if (value.length >= 3) {
    $('.govuk-button').fadeIn('slow')
  }
})

$('.buttons button').click(function (e) {
  console.log($(this).find('span').text())
  let value = $(this).find('span').text()
  let codeVal = $('#code').val() + value
  if (codeVal.length === 4) {
    $('#code').val(codeVal)
    $('.buttons').fadeToggle()
    $('.govuk-button').fadeIn('slow')
  } else {
    $('#code').val(codeVal)
  }
  // $('.govuk-button').fadeIn('slow')
})

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})
