import db from '../config/db';
import { Sequelize } from 'sequelize';
import { printInfo } from 'src/utils/print_utils';

const mysqlConfig = db;
const isProductionEnv = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize(
  mysqlConfig.database,
  mysqlConfig.username,
  mysqlConfig.password,
  {
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
    // timezone: '+08:00',
  },
);

sequelize
  .authenticate()
  .then(() => {
    if (!isProductionEnv) {
      printInfo(`[db]: connected ${mysqlConfig.database} successfully`);
    }
  })
  .catch((err) => {
    if (!isProductionEnv) {
      printInfo(
        `[db]: connected ${mysqlConfig.database} occurs error with ${err.message}`,
      );
    }
    throw err;
  });
export default sequelize;
