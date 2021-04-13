import {
  Column,
  Entity,
  JoinColumn,
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
    type: 'char',
    length: 32,
    nullable: false,
    comment: '标签名',
    unique: true,
  })
  name: string;
  // - main fields end

  // relations
  @JoinColumn({
    name: 'article_id',
  })
  @ManyToMany(() => ArticleEntity, {
    // cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  articles: ArticleEntity;
}
