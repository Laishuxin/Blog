import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import sequelize from '../../db/index';
import Sequelize from 'sequelize';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private connection: Connection,
  ) {}
  async findAll() {
    const sql = `SELECT * FROM t_user;`;
    try {
      const result = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.SELECT,
        raw: true,
        logging: true,
      });
      return {
        code: 200,
        message: 'success',
        data: result,
      };
    } catch (err) {
      return {
        code: 501,
        message: err.message,
      };
    }
    // return { message: 'emmmm~~~', code: 404 };
  }

  async createOne() {
    const sql = ``;
  }
}
