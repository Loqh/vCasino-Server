const { checkAuthToken, getUserById } = require('./services/auth_services')

async function mw_check_auth(req, res, next) {
    const { query, headers } = req

    // check query
    /* http://localhost:3344/maroute?auth_token=MON_AUTH_TOKEN */
    // check headers
    /* req.headers['authorization'] */
    const authToken = req.body.auth_token
    console.log("authToken");
        console.log(authToken);
        console.log("headers");
        console.log(headers);
        console.log("headers auth");
        console.log(req.headers['authorization']);
        console.log("req");
        console.log(req.body.auth_token);
    if (authToken) {
        console.log("check")
        const check = await checkAuthToken(authToken)
        console.log(check)
        if (check === false) {
            return res.status(401).end();
        }
        const user = await getUserById(authToken)
        console.log("user")
        console.log(user);
        req.user = user
        return next();
    }

    return res.status(401).end();
}

exports.mw_check_auth = mw_check_auth