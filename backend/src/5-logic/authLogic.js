import dal from "../2-utils/dal.js";
import cyber from "../2-utils/cyber.js";
import {
  UnauthorizedErrorModel,
  ValidationErrorModel,
} from "../4-models/error-model.js";

async function register(user) {
  if (await isEmailTaken(user.userEmail))
    throw new ValidationErrorModel(
      `email address ${user.userEmail} is already associated with another account`
    );
  user.userPassword = cyber.hash(user.userPassword);

  const sql = `INSERT INTO users VALUES(DEFAULT, ?, ?, ?, ?)`;
  const info = await dal.execute(sql, [
    user.userName,
    user.userEmail,
    user.userPassword,
    "User",
  ]);
  const userId = info.insertId;
  const token = cyber.getNewToken(user);
  return { token, userId, userRole: "User", userName: user.userName };
}
async function isEmailTaken(email) {
  const sql = `SELECT * FROM users WHERE userEmail = ?`;
  const count = await dal.execute(sql, [email]);
  return count.length > 0;
}

async function login(credentials) {
  credentials.userPassword = cyber.hash(credentials.userPassword);

  const sql = `SELECT * FROM users WHERE userEmail = ? AND userPassword = ?`;
  const users = await dal.execute(sql, [
    credentials.userEmail,
    credentials.userPassword,
  ]);

  if (users.length === 0)
    throw new UnauthorizedErrorModel("Incorrect email address or password");

  const user = users[0];
  const token = cyber.getNewToken(user);
  const userId = user.userId;
  const userRole = user.userRole;
  const userName = user.userName;
  return { token, userId, userRole, userName };
}

export default {
  register,
  login,
};
