import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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
    comment: '分类名',
  })
  name: string;
  // - main fields end

  // relations
  @Column({
    name: 'article_id',
    type: 'bigint',
    comment: '文章id',
  })
  @OneToMany(() => ArticleEntity, (article) => article.categoryId)
  articles: ArticleEntity;
}
