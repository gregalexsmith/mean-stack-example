var port;

if (process.env.NODE_ENV === "production") {
    port =  process.env.PORT || 8080;
} else {
    port = 3000
}

module.exports = {
  port: port
}
