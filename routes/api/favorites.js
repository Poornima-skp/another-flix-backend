const express = require('express')
const router = express.Router()
const favoritesCtrl = require('../../controllers/api/favorites')

// GET /api/v1/favorites
router.get('/', favoritesCtrl.index)
// DELETE /api/v1/favorites/:id
router.delete('/:id', favoritesCtrl.remove)

module.exports = router