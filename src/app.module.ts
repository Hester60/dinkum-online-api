import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CatchablesModule} from "./modules/catchables/catchables.module";
import {typeOrmAsyncConfig} from "./config/orm.config";

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
        CatchablesModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
