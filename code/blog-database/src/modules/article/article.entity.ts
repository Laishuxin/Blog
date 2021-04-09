import {
  Column,
  Entity,
  Generated,
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
    name: 'create_at',
    nullable: false,
    comment: '创建时间',
  })
  createAt: number;

  @Column({
    type: 'timestamp',
    name: 'updated_at',
    nullable: false,
    comment: '更新时间',
  })
  updateAt: number;
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
  @Column({ name: 'user_id', comment: '用户id' })
  @Generated('uuid')
  @ManyToOne(() => UserEntity, (user) => user.articles)
  userId: string;

  @Column({
    name: 'category_id',
    type: 'bigint',
    comment: '文章分类id',
  })
  @ManyToOne(() => CategoryEntity, (category) => category.articles)
  categoryId: number;

  @Column({
    name: 'tag_id',
    type: 'bigint',
    comment: '标签id',
  })
  @ManyToMany(() => TagEntity)
  @JoinTable()
  tags: TagEntity;

  @Column({
    name: 'comment_id',
    type: 'bigint',
    comment: '评论id',
  })
  @OneToMany(() => CommentEntity, (comment) => comment.articles)
  comments: CommentEntity;
}
