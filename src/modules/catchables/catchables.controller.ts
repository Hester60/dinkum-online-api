import {Controller, Get, Req} from '@nestjs/common';
import {Request} from "express";
import {CatchablesService} from "./catchables.service";
import {Catchable} from "./catchables.entity";

@Controller('catchables')
export class CatchablesController {
    constructor(private catchablesService: CatchablesService) {
    }

    @Get()
    async findAll(@Req() request: Request): Promise<Catchable[]> {
        return await this.catchablesService.findAll();
    }
}

