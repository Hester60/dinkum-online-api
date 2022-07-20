import {Controller, Get, Req} from '@nestjs/common';
import {CatchablesService} from "./catchables.service";
import {Catchable} from "./catchables.entity";

@Controller('catchables')
export class CatchablesController {
    constructor(private catchablesService: CatchablesService) {
    }

    @Get()
    async findAll(): Promise<Catchable[]> {
        return await this.catchablesService.findAll();
    }
}

