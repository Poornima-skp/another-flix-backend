const express = require('express')
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')

// POST /api/v1/users
router.post('/', usersCtrl.create)

// POST /api/v1/users/login
router.post('/login', usersCtrl.login)

// The below routes should not be accessible to unauthorized users

// GET /api/v1/users/:id
router.get('/:id',ensureLoggedIn, usersCtrl.show)

// GET /api/v1/users/:id/favorites
router.get('/:id/favorites', ensureLoggedIn, usersCtrl.getFavorites)

// PUT /api/v1/users/:id
router.put('/:id', ensureLoggedIn, usersCtrl.update)

module.exports = router
