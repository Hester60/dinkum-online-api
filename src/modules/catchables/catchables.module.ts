import {Module} from '@nestjs/common';
import {CatchablesService} from './catchables.service';
import {CatchablesController} from './catchables.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Catchable} from "./catchables.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Catchable])],
    providers: [CatchablesService],
    controllers: [CatchablesController]
})
export class CatchablesModule {
}
