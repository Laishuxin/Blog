import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from '../category/category.entity';
import { UserEntity } from '../user/user.entity';
import { TagEntity } from '../tag/tag.entity';
import { CommentEntity } from '../comment/comment.entity';

@Entity('t_article')
export class ArticleEntity {
  // fields
  // - common fields start
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'article_id',
    comment: '文章id',
  })
  id: number;

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

  // - main fields start
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    comment: '文章标题',
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
    default: '',
    comment: '文章描述',
  })
  description: string;

  @Column({
    type: 'longtext',
    nullable: false,
    comment: '文章内容',
  })
  content: string;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'first_picture',
    nullable: false,
    comment: '文章首图',
  })
  firstPicture: string;

  @Column({
    type: 'int',
    default: 0,
    nullable: false,
    comment: '访问人数',
  })
  views: number;
  // - main fields end

  // - flags start
  @Column({
    type: 'bit',
    nullable: false,
    default: true,
    comment: '是否可以赞赏',
  })
  appreciated: boolean;

  @Column({
    type: 'bit',
    nullable: false,
    default: true,
    comment: '是否可以评论',
  })
  commendable: boolean;

  @Column({
    type: 'bit',
    nullable: false,
    default: true,
    comment: '是否公开发布',
  })
  published: boolean;

  @Column({
    type: 'bit',
    nullable: false,
    default: false,
    comment: '是否是星级文章',
  })
  star: boolean;

  @Column({
    type: 'bit',
    nullable: false,
    default: true,
    comment: '是否可以分享',
  })
  sharable: boolean;
  // - flags end

  // relations
  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => UserEntity, (user) => user.articles, {
    // cascade: true,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  userId: string;

  @JoinColumn({
    name: 'category_id',
  })
  @ManyToOne(() => CategoryEntity, (category) => category.articles, {
    // cascade: true,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  categoryId: number;

  @JoinColumn({
    name: 'tag_id',
  })
  @ManyToMany(() => TagEntity, {
    // cascade: true,
    // onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinTable({
    name: 't_article_tag',
    joinColumn: {
      name: 'article_id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
    },
  })
  tags: TagEntity;

  @JoinColumn({
    name: 'comment_id',
  })
  @OneToMany(() => CommentEntity, (comment) => comment.articles, {
    // cascade: true,
    // onDelete: 'CASCADE',
    // onUpdate: 'CASCADE',
  })
  comments: CommentEntity;
}
