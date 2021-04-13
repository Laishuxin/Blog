import { ArticleService } from './article.service';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    getAllArticles(): Promise<ArticleService>;
}
