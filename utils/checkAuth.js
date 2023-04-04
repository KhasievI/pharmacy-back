const { secret } = require("../config");
const jwt = require("jsonwebtoken");

module.exports = checkAuth = (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

  if (token) {
      try {
          const decoded = jwt.verify(token, secret)

          req.pharmacyId = decoded.id

          next()
      } catch (error) {
          return res.status(401).json({
              message: 'Нет доступа.',
          })
      }
  } else {
      return res.status(401).json({
          message: 'Нет доступа!!!!!',
      })
  }
}