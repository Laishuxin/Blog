import { ArticleEntity } from '../article/article.entity';
export declare class CommentEntity {
    id: number;
    createAt: string;
    updateAt: string;
    content: string;
    nickname: string;
    email: string;
    star: boolean;
    articles: ArticleEntity;
    children: CommentEntity[];
    parent: CommentEntity;
}
