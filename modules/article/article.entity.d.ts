import { TagEntity } from '../tag/tag.entity';
import { CommentEntity } from '../comment/comment.entity';
export declare class ArticleEntity {
    id: number;
    createAt: string;
    updateAt: string;
    title: string;
    description: string;
    content: string;
    firstPicture: string;
    views: number;
    appreciated: boolean;
    commendable: boolean;
    published: boolean;
    star: boolean;
    sharable: boolean;
    userId: string;
    categoryId: number;
    tags: TagEntity;
    comments: CommentEntity;
}
