const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// router.get('/v1/jobs', (req, res) => {
//   res.render('v1/jobs', {
//   })
// })

router.get(['/v1/job', '/v1/job/1'], (req, res) => {
  res.render('v1/job', {
    job: 1
  })
})

router.get('/v1/confirmation', (req, res) => {
  let employerName = req.query.employerName || 'TANESCO'
  res.render('v1/confirmation', {
    employerName: employerName
  })
})

module.exports = router
