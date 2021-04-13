import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  TreeChildren,
  TreeParent,
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
  @JoinColumn({
    name: 'article_id',
  })
  @ManyToOne(() => ArticleEntity, (article) => article.comments, {
    // cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  articles: ArticleEntity;

  // - self-relation
  @TreeChildren()
  @JoinColumn({ name: 'children_id' })
  children: CommentEntity[];

  @TreeParent()
  @JoinColumn({ name: 'parent_id' })
  parent: CommentEntity;
}
