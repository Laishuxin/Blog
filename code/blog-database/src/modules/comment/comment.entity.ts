import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ArticleEntity } from '../article/article.entity';

@Entity('t_comment')
export class CommentEntity {
  // fields
  // - common fields start
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'comment_id',
    comment: '评论id',
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
    type: 'longtext',
    nullable: false,
    comment: '评论内容',
  })
  content: string;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: false,
    comment: '评论人别名',
  })
  nickname: string;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
    // default: '',
    comment: '评论人邮箱',
  })
  email: string;

  @Column({
    type: 'bit',
    nullable: true,
    default: false,
    comment: '是否推荐改评论',
  })
  star: boolean;
  // - main fields end

  // relations
  @Column({
    type: 'bigint',
    name: 'article_id',
    comment: '文章id',
  })
  @ManyToOne(() => ArticleEntity, (article) => article.comments)
  articles: ArticleEntity;

  // - self-relation
  @Column({
    name: 'children_id',
    type: 'bigint',
    nullable: true,
    default: null,
    comment: '二级评论id',
  })
  children: CommentEntity;

  @Column({
    name: 'parent_id',
    type: 'bigint',
    nullable: true,
    default: null,
    comment: '父评论id',
  })
  parent: CommentEntity;
}
