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
exports.CommentEntity = void 0;
const typeorm_1 = require("typeorm");
const article_entity_1 = require("../article/article.entity");
let CommentEntity = class CommentEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'comment_id',
        comment: '评论id',
    }),
    __metadata("design:type", Number)
], CommentEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'create_at',
        nullable: false,
        comment: '创建时间',
    }),
    __metadata("design:type", String)
], CommentEntity.prototype, "createAt", void 0);
__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'update_at',
        nullable: false,
        comment: '更新时间',
    }),
    __metadata("design:type", String)
], CommentEntity.prototype, "updateAt", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        nullable: false,
        comment: '评论内容',
    }),
    __metadata("design:type", String)
], CommentEntity.prototype, "content", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        nullable: false,
        comment: '评论人别名',
    }),
    __metadata("design:type", String)
], CommentEntity.prototype, "nickname", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 64,
        nullable: false,
        comment: '评论人邮箱',
    }),
    __metadata("design:type", String)
], CommentEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({
        type: 'bit',
        nullable: true,
        default: false,
        comment: '是否推荐改评论',
    }),
    __metadata("design:type", Boolean)
], CommentEntity.prototype, "star", void 0);
__decorate([
    typeorm_1.JoinColumn({
        name: 'article_id',
    }),
    typeorm_1.ManyToOne(() => article_entity_1.ArticleEntity, (article) => article.comments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", article_entity_1.ArticleEntity)
], CommentEntity.prototype, "articles", void 0);
__decorate([
    typeorm_1.TreeChildren(),
    typeorm_1.JoinColumn({ name: 'children_id' }),
    __metadata("design:type", Array)
], CommentEntity.prototype, "children", void 0);
__decorate([
    typeorm_1.TreeParent(),
    typeorm_1.JoinColumn({ name: 'parent_id' }),
    __metadata("design:type", CommentEntity)
], CommentEntity.prototype, "parent", void 0);
CommentEntity = __decorate([
    typeorm_1.Entity('t_comment')
], CommentEntity);
exports.CommentEntity = CommentEntity;
//# sourceMappingURL=comment.entity.js.map