const express = require('express')
const router = express.Router()

// type = mechanical, electrical, mason
const user = {
  name: 'Victor',
  type: 'electrical',
  phone: '+255 123456789'
}

const jobs = require('./data/jobs.json')
// Add your routes here - above the module.exports line
router.get('/v1/jobs', (req, res) => {
  res.render('v1/jobs', {
    user: user,
    jobs: jobs
  })
})

router.get(['/v1/'], (req, res) => {
  const keyboard = req.query.keyboard || false
  res.render('v1/index', {
    keyboard: keyboard
  })
})

router.get(['/v1/job/:jobId'], (req, res) => {
  const jobId = [req.params.jobId] || 0
  const job = jobs[jobId]
  res.render('v1/job', {
    user: user,
    job: job
  })
})

router.get(['/v1/apply/:jobId'], (req, res) => {
  const jobId = [req.params.jobId] || 0
  const job = jobs[jobId]
  user.address = req.query.address || false
  user.phone = req.query.phone || false
  user.email = req.query.email || false
  res.render('v1/apply', {
    user: user,
    job: job
  })
})

router.get(['/v1/check-details', '/v1/check-details/:jobId'], (req, res) => {
  const jobId = [req.params.jobId] || 0
  const job = jobs[jobId]
  res.render('v1/check-details', {
    user: user,
    job: job
  })
})

router.get(['/v1/confirmation'], (req, res) => {
  let employerName = req.query.employerName || 'TANESCO'
  res.render('v1/confirmation', {
    user: user,
    employerName: employerName
  })
})

router.get('/v1/confirmation', (req, res) => {
  let employerName = req.query.employerName || 'TANESCO'
  res.render('v1/confirmation', {
    user: user,
    employerName: employerName
  })
})

module.exports = router
