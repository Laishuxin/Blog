import { UserEntity } from './user.entity';
import { Connection, Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    private connection;
    constructor(userRepository: Repository<UserEntity>, connection: Connection);
    findAll(): Promise<{
        code: number;
        message: string;
        data: object[];
    } | {
        code: number;
        message: any;
        data?: undefined;
    }>;
    createOne(): Promise<void>;
}
