"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleEntity = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("../category/category.entity");
const user_entity_1 = require("../user/user.entity");
const tag_entity_1 = require("../tag/tag.entity");
const comment_entity_1 = require("../comment/comment.entity");
let ArticleEntity = class ArticleEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'article_id',
        comment: '文章id',
    }),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'create_at',
        nullable: false,
        comment: '创建时间',
    }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "createAt", void 0);
__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'update_at',
        nullable: false,
        comment: '更新时间',
    }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "updateAt", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        nullable: false,
        comment: '文章标题',
    }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 1024,
        nullable: true,
        default: '',
        comment: '文章描述',
    }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        nullable: false,
        comment: '文章内容',
    }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "content", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        name: 'first_picture',
        nullable: false,
        comment: '文章首图',
    }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "firstPicture", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        default: 0,
        nullable: false,
        comment: '访问人数',
    }),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "views", void 0);
__decorate([
    typeorm_1.Column({
        type: 'bit',
        nullable: false,
        default: true,
        comment: '是否可以赞赏',
    }),
    __metadata("design:type", Boolean)
], ArticleEntity.prototype, "appreciated", void 0);
__decorate([
    typeorm_1.Column({
        type: 'bit',
        nullable: false,
        default: true,
        comment: '是否可以评论',
    }),
    __metadata("design:type", Boolean)
], ArticleEntity.prototype, "commendable", void 0);
__decorate([
    typeorm_1.Column({
        type: 'bit',
        nullable: false,
        default: true,
        comment: '是否公开发布',
    }),
    __metadata("design:type", Boolean)
], ArticleEntity.prototype, "published", void 0);
__decorate([
    typeorm_1.Column({
        type: 'bit',
        nullable: false,
        default: false,
        comment: '是否是星级文章',
    }),
    __metadata("design:type", Boolean)
], ArticleEntity.prototype, "star", void 0);
__decorate([
    typeorm_1.Column({
        type: 'bit',
        nullable: false,
        default: true,
        comment: '是否可以分享',
    }),
    __metadata("design:type", Boolean)
], ArticleEntity.prototype, "sharable", void 0);
__decorate([
    typeorm_1.JoinColumn({ name: 'user_id' }),
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (user) => user.articles, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.JoinColumn({
        name: 'category_id',
    }),
    typeorm_1.ManyToOne(() => category_entity_1.CategoryEntity, (category) => category.articles, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "categoryId", void 0);
__decorate([
    typeorm_1.JoinColumn({
        name: 'tag_id',
    }),
    typeorm_1.ManyToMany(() => tag_entity_1.TagEntity, {
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinTable({
        name: 't_article_tag',
        joinColumn: {
            name: 'article_id',
        },
        inverseJoinColumn: {
            name: 'tag_id',
        },
    }),
    __metadata("design:type", tag_entity_1.TagEntity)
], ArticleEntity.prototype, "tags", void 0);
__decorate([
    typeorm_1.JoinColumn({
        name: 'comment_id',
    }),
    typeorm_1.OneToMany(() => comment_entity_1.CommentEntity, (comment) => comment.articles, {}),
    __metadata("design:type", comment_entity_1.CommentEntity)
], ArticleEntity.prototype, "comments", void 0);
ArticleEntity = __decorate([
    typeorm_1.Entity('t_article')
], ArticleEntity);
exports.ArticleEntity = ArticleEntity;
//# sourceMappingURL=article.entity.js.map