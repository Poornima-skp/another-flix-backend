const Movie = require('../../models/Movie')

// Find all movies
const index = async (req, res) => {
    try {
        const movies = await Movie.find({})
        res.status(200).json(createdMovie)
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}

// Create a movie
const create = async (req, res) => {
    try {
        const createdMovie = await Movie.create(req.body)
        res.status(200).json(createdMovie)
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}

module.exports = {
    index,
    create
}