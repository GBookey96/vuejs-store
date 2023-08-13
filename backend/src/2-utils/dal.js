import mysql from "mysql";
import appConfig from './app-config.js';

const connection = mysql.createPool({
    host: appConfig.host,
    user: appConfig.user,
    password: appConfig.password,
    database: appConfig.database
});

function execute(sql, values) {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

export default {
    execute
};
