import { join } from 'path';

const mysql = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'admin',
  password: 'admin',
  database: 'db_blog',
  entities: [join(__dirname, '../', '**/**.entity{.ts,.js}')],
  synchronize: true,
  connectionLimit: 10,
};

export default mysql;
