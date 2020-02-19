module.exports = dept => {
  return function(req, res, next) {
    if (req.decodedJwt.department && req.decodedJwt.department.includes(dept)) {
      next();
    } else {
      res.status(403).json({message: "You don't have permissions"})
    }
  }
}
