import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ArticleEntity } from '../article/article.entity';

@Entity('t_category')
export class CategoryEntity {
  // fields
  // - common fields start
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'category_id',
    comment: '分类id',
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
    comment: '分类名',
    unique: true,
  })
  name: string;
  // - main fields end

  // relations
  @JoinColumn({
    name: 'article_id',
  })
  @OneToMany(() => ArticleEntity, (article) => article.categoryId, {
    // cascade: true,
    // onDelete: 'SET NULL',
  })
  articles: ArticleEntity;
}
