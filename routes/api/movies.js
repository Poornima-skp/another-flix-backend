const express = require('express')
const router = express.Router()
const moviesCtrl = require('../../controllers/api/movies')

// GET /api/v1/movies
router.get('/', moviesCtrl.index)
// POST /api/v1/movies
router.post('/', moviesCtrl.create)

module.exports = router