import {MigrationInterface} from "typeorm"
import {MongoQueryRunner} from "typeorm/driver/mongodb/MongoQueryRunner";
import catchables from './data/critters.json';

export class AddCrittersCatchables1658654120498 implements MigrationInterface {

    public async up(queryRunner: MongoQueryRunner): Promise<void> {
        await queryRunner.insertMany('catchables', catchables);
    }

    public async down(queryRunner: MongoQueryRunner): Promise<void> {
        await queryRunner.clearTable('catchables');
    }
}
