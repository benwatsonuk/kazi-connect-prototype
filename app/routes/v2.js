module.exports = function (router) {
  const jobs = require('../data/jobsv2.json')

  router.get('/v2/jobs', (req, res) => {
    res.render('v2/jobs', {
      user: req.session.user,
      jobs: jobs
    })
  })

  router.get(['/v2/'], (req, res) => {
    const keyboard = req.query.keyboard || false
    res.render('v2/index', {
      keyboard: keyboard
    })
  })

  router.get(['/v2/job/:jobId'], (req, res) => {
    const jobId = [req.params.jobId] || 0
    const job = jobs[jobId]
    res.render('v2/job', {
      user: req.session.user,
      job: job
    })
  })

  router.get(['/v2/apply/:jobId'], (req, res) => {
    const jobId = [req.params.jobId] || 0
    const job = jobs[jobId]
    const user = req.session.user
    user.address = req.query.address || false
    user.phone = req.query.phone || false
    user.email = req.query.email || false
    res.render('v2/apply', {
      user: req.session.user,
      job: job
    })
  })

  router.get(['/v2/check-details', '/v2/check-details/:jobId'], (req, res) => {
    const jobId = [req.params.jobId] || 0
    const job = jobs[jobId]
    res.render('v2/check-details', {
      user: req.session.user,
      job: job
    })
  })

  router.get(['/v2/confirmation'], (req, res) => {
    let employerName = req.query.employerName || 'TANESCO'
    res.render('v2/confirmation', {
      user: req.session.user,
      employerName: employerName
    })
  })

  router.get('/v2/confirmation', (req, res) => {
    let employerName = req.query.employerName || 'TANESCO'
    res.render('v2/confirmation', {
      user: req.session.user,
      employerName: employerName
    })
  })
}
