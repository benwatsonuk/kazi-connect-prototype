const express = require('express')
const router = express.Router()

require('./routes/v1')(router)
require('./routes/v2')(router)

router.post(['/', '/index'], (req, res) => {
  // type = mechanical, electrical, mason
  const user = {
    name: 'Victor',
    type: 'electrical',
    phone: '+255 123456789'
  }
  req.session.user = user
  const userName = req.body.name || user.name
  req.session.user.name = userName
  const userType = req.body.type || user.type
  req.session.user.type = userType
  res.redirect('/v2/')
})

module.exports = router
