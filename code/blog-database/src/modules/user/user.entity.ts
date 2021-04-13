import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ArticleEntity } from '../article/article.entity';

export enum RoleEnum {
  ADMIN = 1,
  USER = 2,
  FRIEND = 3,
  OTHER = 4,
}
@Entity('t_user')
export class UserEntity {
  // fields
  // - common fields start
  @PrimaryGeneratedColumn('uuid', { name: 'user_id', comment: '用户id' })
  id: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'create_at',
    nullable: false,
    comment: '创建时间',
  })
  createAt: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'update_at',
    nullable: false,
    comment: '更新时间',
  })
  updateAt: string;
  // - common fields end

  @Column({
    type: 'varchar',
    length: 32,
    nullable: false,
    unique: true,
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: false,
    comment: '用户别名',
  })
  nickname: string;

  @Column({
    type: 'char',
    length: 32,
    nullable: false,
    comment: '密码',
  })
  password: string;

  @Column({
    type: 'char',
    name: 'password_salt',
    length: 6,
    nullable: false,
    comment: '密码盐，加密用',
  })
  passwordSalt: string;

  @Column({
    type: 'enum',
    enum: RoleEnum,
    nullable: false,
    default: RoleEnum.USER,
    comment: '用户权限：1-admin, 2-user, 3-friend, 4-other',
  })
  auth: number;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
    // default: '',
    comment: '用户邮箱',
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
    default: null,
    nullable: true,
    comment: '头像对应的url',
  })
  avatar: string;

  // relations
  @JoinColumn({
    name: 'article_id',
  })
  @OneToMany(() => ArticleEntity, (article) => article.userId, {
    // cascade: true,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  articles: ArticleEntity;
}
