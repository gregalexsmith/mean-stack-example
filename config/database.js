if (process.env.NODE_ENV === "production") {
  module.exports = {
    database: process.env.MONGODB_URI,
    secret: 'yoursecret'
  }
} else {
  module.exports = {
    database: 'mongodb://localhost:27017/meanauth',
    secret: 'yoursecret'
  }
}
