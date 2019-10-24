const express = require('express')
const router = express.Router()

const jobs = [
  {
    'id': 0,
    'title': '',
    'company': 'Tanesco',
    'role': 'Junior Electrician',
    'location': 'Dar es Salaam',
    'description': 'A junior electrician with Level 3 qualifications required for role in Dar es Salaam'
  },
  {
    'id': 1,
    'title': '',
    'company': 'Company 2',
    'role': 'Apprentice Electrician',
    'location': 'Mtwara',
    'description': 'A motivated young electrician is needed for this family run company in Mtwara'
  }
]

// Add your routes here - above the module.exports line
router.get('/v1/jobs', (req, res) => {
  res.render('v1/jobs', {
    jobs: jobs
  })
})

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
