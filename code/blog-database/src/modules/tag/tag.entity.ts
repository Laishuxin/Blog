import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ArticleEntity } from '../article/article.entity';

@Entity('t_tag')
export class TagEntity {
  // fields
  // - common fields start
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'tag_id',
    comment: '标签id',
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
    type: 'char',
    length: 32,
    nullable: false,
    comment: '标签名',
  })
  name: string;
  // - main fields end

  // relations
  @Column({
    name: 'article_id',
    type: 'bigint',
    comment: '文章id',
  })
  @ManyToMany(() => ArticleEntity)
  articles: ArticleEntity;
}
