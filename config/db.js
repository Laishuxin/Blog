"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
let host = process.env.DB_HOST || 'localhost';
let username = process.env.DB_USERNAME || 'admin';
let password = process.env.DB_PASSWORD || 'admin';
let database = process.env.DB_DATABASE || 'db_blog';
let port = process.env.DB_PORT || 3306;
const mysql = {
    type: 'mysql',
    host: host,
    port: 3306,
    username: username,
    password: password,
    database: database,
    entities: [path_1.join(__dirname, '../', '**/**.entity{.ts,.js}')],
    synchronize: true,
    connectionLimit: 10,
};
exports.default = mysql;
//# sourceMappingURL=db.js.map