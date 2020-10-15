const uriDB_dev = 'mongodb+srv://devDB:1w3r5y7i@kompservice.bpaz2.mongodb.net/komp-service?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3000
const PORTsec = 443
const portDev = 80 

module.exports.DB_URI = uriDB_dev
module.exports.PORT = PORT
module.exports.PORTsec = PORTsec
module.exports.PORTdev = portDev