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
exports.TagEntity = void 0;
const typeorm_1 = require("typeorm");
const article_entity_1 = require("../article/article.entity");
let TagEntity = class TagEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'tag_id',
        comment: '标签id',
    }),
    __metadata("design:type", Number)
], TagEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'create_at',
        nullable: false,
        comment: '创建时间',
    }),
    __metadata("design:type", String)
], TagEntity.prototype, "createAt", void 0);
__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'update_at',
        nullable: false,
        comment: '更新时间',
    }),
    __metadata("design:type", String)
], TagEntity.prototype, "updateAt", void 0);
__decorate([
    typeorm_1.Column({
        type: 'char',
        length: 32,
        nullable: false,
        comment: '标签名',
        unique: true,
    }),
    __metadata("design:type", String)
], TagEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.JoinColumn({
        name: 'article_id',
    }),
    typeorm_1.ManyToMany(() => article_entity_1.ArticleEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", article_entity_1.ArticleEntity)
], TagEntity.prototype, "articles", void 0);
TagEntity = __decorate([
    typeorm_1.Entity('t_tag')
], TagEntity);
exports.TagEntity = TagEntity;
//# sourceMappingURL=tag.entity.js.map