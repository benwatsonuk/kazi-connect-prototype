const express = require('express')
const router = express.Router()

const user = {
  name: 'Victor'
}

const jobs = [
  {
    'id': 0,
    'title': '',
    'company': 'Rotana',
    'role': 'Junior Mechanical Supervisor',
    'type': 'mechanical',
    'time': 'Full-time',
    'location': 'Lindi, Tanzania',
    'description': 'A junior electrician with Level 3 qualifications required for role in Dar es Salaam',
    'salary': 'TSh 300K - 500K per month',
    'requirements': 'Grade 3 VETA Certification or Diploma in Mechanical',
    'number': '6 positions',
    'companyProfile': '<p>Rotana Hotel Management Corporation (Rotana) was founded in 1992, by a partnership between two visionary thinkers, Nasser Al Nowais and Selim El Zyr.</p> <p>Rotana\'s plans to grow from the two properties it started in 1993 to a total of 80 by 2020. With several further properties planned for opening and new projects in the pipeline confirming the company’s intention to have a Rotana managed property in all the major cities throughout the Middle East, Africa and Eastern Europe within the next five years.</p>',
    'jobDetails': 'As a General Mechanical Supervisor you are responsible to supervise and coordinate the installation, modification and maintenance of equipment and your role will include key responsibilities such as:' +
      '<ul><li>Maintain all kitchen and laundry equipments in good working order</li>' +
      '<li>Prepare preventive maintenance schedule</li>' +
      '<li>Maintain the cleanliness of all kitchen and laundry equipments</li>' +
      '</ul>'
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
    user: user,
    jobs: jobs
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
  res.render('v1/apply', {
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
