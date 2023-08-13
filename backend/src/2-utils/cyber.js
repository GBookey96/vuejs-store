import jwt from "jsonwebtoken";
import crypto from "crypto"

const jwtSecretKey = "GershonBookeyVacationsProject";

function getNewToken(user) {
    delete user.userPassword;

    const container = { user };
    const options = { expiresIn: "3h" };
    const token = jwt.sign(container, jwtSecretKey, options);
    return token;
}

function verifyToken(request) {
    return new Promise((resolve, reject) => {
        try {
            const header = request.header("authorization");
            if (!header) {
                resolve(false);
                return;
            }
            const token = header.substring(7);
            if (!token) {
                resolve(false);
                return;
            }
            jwt.verify(token, jwtSecretKey, (err) => {
                if (err) {
                    resolve(false);
                    return;
                }
                resolve(true);
            });
        } catch (err) {
            reject(err);
        }
    });
}

async function verifyAdmin(request) {
    const isLoggedIn = await verifyToken(request);
    if (!isLoggedIn) return false;

    const header = request.header("authorization");
    const token = header.substring(7);

    const container = jwt.decode(token);

    const user = container.user;

    return user.userRole === 'Admin';
}

const salt = "LifeIsGood";

function hash(password) {
    if (!password) return null;
    const hashedPwd = crypto
        .createHmac("sha512", salt)
        .update(password)
        .digest("hex");
    return hashedPwd;
}

export default {
    hash,
    getNewToken,
    verifyToken,
    verifyAdmin,
};
