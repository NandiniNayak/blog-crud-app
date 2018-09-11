// if production iuse Mlab else use local db
if (process.env.NODE_ENV === "production"){
  module.exports = { mongoURI: 'mongodb://nandini:nandini1@ds251362.mlab.com:51362/express-blog-prod'}
} else {
  module.exports = { mongoURI: 'mongodb://localhost/blog-dev' }
}
