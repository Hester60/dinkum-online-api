import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {MongoRepository, Like} from "typeorm";
import {Catchable} from "./catchables.entity";

@Injectable()
export class CatchablesService {
    constructor(@InjectRepository(Catchable) private readonly catchableRepository: MongoRepository<Catchable>) {
    }

    async findAll(): Promise<Catchable[]> {
        return await this.catchableRepository.find();
    }
}

