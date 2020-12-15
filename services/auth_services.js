var { dbQuery } = require('../database');
const { createWallet } = require('./wallet_services')
const crypto = require('crypto')

async function createUser(username, password, email) {
    password = crypto.createHash('sha512').update(password).digest('hex')
    const sql = "INSERT INTO users VALUES ('0','" + username + "','" + password + "','" + email + "')";
    console.log(sql);
    try {
        const userCreated = await dbQuery(sql);
        await createWallet(userCreated.insertId);
        const createdToken = await createAuthToken(userCreated.insertId);
        return createdToken;
    }
    catch(err) {
        console.log("createUser error");
        console.log(err);
        throw new Error('Cannot create user')
    }
}

async function login(email, password) {
    password = crypto.createHash('sha512').update(password).digest('hex')
    const sql = "SELECT user_id FROM users WHERE user_email='" + email + "' && user_password ='" + password + "'";
    try {
        const result = await dbQuery(sql);
        const userFound = result[0]

    }
    catch(err) {
        throw new Error('Cannot create user')
    }
}


/*
tokens: id, user_id, auth_token, date_create, expiration
*/
async function createAuthToken(user_id) {
    const authToken = crypto.randomBytes(24).toString('hex')
    const sql = `INSERT INTO tokens VALUES('0', '${user_id}', '${authToken}', FROM_UNIXTIME(${+new Date()} / 1000), FROM_UNIXTIME(3600000 / 1000))`;
    try {
        const result = await dbQuery(sql);
        console.log("result createauth");
        console.log(result);
        return authToken;
    }
    catch(err) {
        console.log("createtoken error")
        console.log(err)
        throw new Error('Cannot create user')
    }
}

/**
 * @param {string} token
 * @returns {false|number} false or user_id
 */
async function checkAuthToken(token) {
    const sql = `SELECT UNIX_TIMESTAMP(date_create) as date_create, UNIX_TIMESTAMP(expiration) as expiration FROM tokens WHERE auth_token = '${token}'`;
    try {
        const result = await dbQuery(sql);
        console.log("result checkAuth")
        console.log(result)
        if (result.length === 0) {
            return false
        }
        const authToken = result[0]
        if (authToken.date_create + authToken.expiration < +new Date()) {
            return true;
        }
        return false
    }
    catch(err) {
        throw new Error('Cannot create user')
    }
}

async function getUserById(auth_token) {
    const sql = `SELECT users.user_id FROM users LEFT JOIN tokens ON users.user_id = tokens.user_id WHERE tokens.auth_token =  '${auth_token}'`;
    try {
        const result = await dbQuery(sql);
        if (result.length === 0) {
            return false
        }
        return result[0].user_id
    }
    catch(err) {
        throw new Error('Cannot create user')
    }
}

exports.createUser = createUser
exports.getUserById = getUserById
exports.checkAuthToken = checkAuthToken
exports.createAuthToken = createAuthToken