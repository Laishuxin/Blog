import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<{
        code: number;
        message: string;
        data: object[];
    } | {
        code: number;
        message: any;
        data?: undefined;
    }>;
}
