import { ArticleEntity } from '../article/article.entity';
export declare class TagEntity {
    id: number;
    createAt: string;
    updateAt: string;
    name: string;
    articles: ArticleEntity;
}
