let http = require('./http')
async function login(end_point, user, password) {
  let sessionManager = new http.SessionManager( new http.SessionConfig(end_point) )
    let res = await sessionManager.R('POST', '/login/', {
        email: user,
        pass: password
    })
    let token = res.data.data.token
    return token
}

module.exports = {
  login,
}
