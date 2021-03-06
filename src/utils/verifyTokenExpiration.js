import jwt from 'jsonwebtoken'

// Verifies that the provided JWT is still valid
// if the token has not expired, returns true. if the tokenb has expired, returns false
function verifyTokenExpiration(token) {
    const { exp } = jwt.decode(token)

    if (exp*1000 < Date.now()) {
        return false
    }

    return true
}

export default verifyTokenExpiration