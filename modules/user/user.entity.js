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
exports.UserEntity = exports.RoleEnum = void 0;
const typeorm_1 = require("typeorm");
const article_entity_1 = require("../article/article.entity");
var RoleEnum;
(function (RoleEnum) {
    RoleEnum[RoleEnum["ADMIN"] = 1] = "ADMIN";
    RoleEnum[RoleEnum["USER"] = 2] = "USER";
    RoleEnum[RoleEnum["FRIEND"] = 3] = "FRIEND";
    RoleEnum[RoleEnum["OTHER"] = 4] = "OTHER";
})(RoleEnum = exports.RoleEnum || (exports.RoleEnum = {}));
let UserEntity = class UserEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid', { name: 'user_id', comment: '用户id' }),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'create_at',
        nullable: false,
        comment: '创建时间',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "createAt", void 0);
__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'update_at',
        nullable: false,
        comment: '更新时间',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "updateAt", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        nullable: false,
        comment: '用户别名',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "nickname", void 0);
__decorate([
    typeorm_1.Column({
        type: 'char',
        length: 32,
        nullable: false,
        comment: '密码',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({
        type: 'char',
        name: 'password_salt',
        length: 6,
        nullable: false,
        comment: '密码盐，加密用',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "passwordSalt", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: RoleEnum,
        nullable: false,
        default: RoleEnum.USER,
        comment: '用户权限：1-admin, 2-user, 3-friend, 4-other',
    }),
    __metadata("design:type", Number)
], UserEntity.prototype, "auth", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 64,
        nullable: false,
        comment: '用户邮箱',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        default: null,
        nullable: true,
        comment: '头像对应的url',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "avatar", void 0);
__decorate([
    typeorm_1.JoinColumn({
        name: 'article_id',
    }),
    typeorm_1.OneToMany(() => article_entity_1.ArticleEntity, (article) => article.userId, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", article_entity_1.ArticleEntity)
], UserEntity.prototype, "articles", void 0);
UserEntity = __decorate([
    typeorm_1.Entity('t_user')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map