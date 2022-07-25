import {MigrationInterface} from "typeorm"
import {MongoQueryRunner} from "typeorm/driver/mongodb/MongoQueryRunner";
import catchables from './data/bugs.json';

export class EraseBugsCollection1658734487020 implements MigrationInterface {

    public async up(queryRunner: MongoQueryRunner): Promise<void> {
        await queryRunner.insertMany('catchables', catchables);
    }

    public async down(queryRunner: MongoQueryRunner): Promise<void> {
        await queryRunner.deleteMany('catchables', catchables);
    }
}
