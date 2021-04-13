import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { resolve } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { PhotoModule } from './modules/photo/photo.module';

@Module({
  imports: [
    // ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    // TypeOrmModule.forRootAsync({
    //   useFactory: (config: ConfigService) => config.get('db'),
    //   inject: [ConfigService],
    // }),
    // UserModule,
    PhotoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
