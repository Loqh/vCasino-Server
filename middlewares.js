const { checkAuthToken, getUserById } = require('./services/auth_services')

async function mw_check_auth(req, res, next) {
    const { query, headers } = req

    // check query
    /* http://localhost:3344/maroute?auth_token=MON_AUTH_TOKEN */
    // check headers
    /* req.headers['authorization'] */
    const authToken = query.auth_token || headers['authorization']

    if (authToken) {
        const authToken = headers['authorization']
        const check = await checkAuthToken(authToken)
        if (check === false) {
            return res.status(401).end();
        }
        const user = await getUserById(check)
        req.user = user
        return next();
    }

    return res.status(401).end();
}

exports.mw_check_auth = mw_check_auth