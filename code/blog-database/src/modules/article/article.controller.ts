import { Controller, Get } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  async getAllArticles() {
    // TODO(rushui 2021-04-09): add article service
    return await this.articleService;
  }
}
