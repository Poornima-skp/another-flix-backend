const res = require("express/lib/response")

module.exports = (req, res, next) => {
    if(!req.user){
        return res.status(401).json('Unauthorized')    
    }
    next()
}