import { ArticleEntity } from '../article/article.entity';
export declare class CategoryEntity {
    id: number;
    createAt: string;
    updateAt: string;
    name: string;
    articles: ArticleEntity;
}
