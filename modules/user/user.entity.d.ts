import { ArticleEntity } from '../article/article.entity';
export declare enum RoleEnum {
    ADMIN = 1,
    USER = 2,
    FRIEND = 3,
    OTHER = 4
}
export declare class UserEntity {
    id: string;
    createAt: string;
    updateAt: string;
    username: string;
    nickname: string;
    password: string;
    passwordSalt: string;
    auth: number;
    email: string;
    avatar: string;
    articles: ArticleEntity;
}
