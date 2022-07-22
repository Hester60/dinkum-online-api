import {TypeOrmModuleAsyncOptions, TypeOrmModuleOptions} from "@nestjs/typeorm";
import dotenv from 'dotenv';
import { ConfigModule, ConfigService } from '@nestjs/config';

dotenv.config()

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (): Promise<TypeOrmModuleOptions> => {
        return {
            type: 'mongodb',
            url: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@dinkum-online-db:27017/${process.env.MONGO_INITDB_DATABASE}`,
            entities: ["dist/**/*.entity.js"],
            autoLoadEntities: true,
            migrationsTableName: "migrations",
            migrations: ["dist/migrations/*{.ts,.js}"],
        }
    }
}

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mongodb',
    url: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@dinkum-online-db:27017/${process.env.MONGO_INITDB_DATABASE}`,
    entities: ["dist/**/*.entity.js"],
    autoLoadEntities: true,
    migrationsTableName: "migrations",
    migrations: ["dist/migrations/*{.ts,.js}"],
    cli: {
        "migrationsDir": "src/migrations"
    }
}
