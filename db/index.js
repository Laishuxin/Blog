"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
const sequelize_1 = require("sequelize");
const print_utils_1 = require("../utils/print_utils");
const mysqlConfig = db_1.default;
const isProductionEnv = process.env.NODE_ENV === 'production';
const sequelize = new sequelize_1.Sequelize(mysqlConfig.database, mysqlConfig.username, mysqlConfig.password, {
    dialect: 'mysql',
    port: mysqlConfig.port,
    host: mysqlConfig.host,
    logging: console.log,
    pool: {
        min: 0,
        max: mysqlConfig.connectionLimit,
        idle: 10 * 1000,
        acquire: 30 * 1000,
    },
});
sequelize
    .authenticate()
    .then(() => {
    if (!isProductionEnv) {
        print_utils_1.printInfo(`[db]: connected ${mysqlConfig.database} successfully`);
    }
})
    .catch((err) => {
    if (!isProductionEnv) {
        print_utils_1.printInfo(`[db]: connected ${mysqlConfig.database} occurs error with ${err.message}`);
    }
    throw err;
});
exports.default = sequelize;
//# sourceMappingURL=index.js.map