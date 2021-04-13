import { join } from 'path';

const mysql = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'admin',
  password: 'admin',
  database: 'test',
  entities: [join(__dirname, '/../modules/', '**/**.entity{.ts,.js}')],
  synchronize: true,
  connectionLimit: 10,
};

export default mysql;
