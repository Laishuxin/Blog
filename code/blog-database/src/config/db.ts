import { join } from 'path';
import { config } from 'dotenv';
config();
const mysql_host = process.env.DB_MYSQL_HOST || 'localhost';
const mysql_port = parseInt(process.env.DB_MYSQL_PORT) || 3306;
const mysql_username = process.env.DB_MYSQL_USERNAME || 'root';
const mysql_password = process.env.DB_MYSQL_PASSWORD || 'password';
const mysql_database = process.env.DB_MYSQL_DATABASE || 'test';
const mysql_limit = parseInt(process.env.DB_MYSQL_LIMIT) || 10;

const mysql = {
  type: 'mysql',
  host: mysql_host,
  port: mysql_port,
  username: mysql_username,
  password: mysql_password,
  database: mysql_database,
  entities: [join(__dirname, '/../modules/', '**/**.entity{.ts,.js}')],
  synchronize: true,
  connectionLimit: mysql_limit,
};

// console.log(mysql)
export default mysql;
