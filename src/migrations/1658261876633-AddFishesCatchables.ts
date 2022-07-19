import {MigrationInterface} from "typeorm"
import {MongoQueryRunner} from "typeorm/driver/mongodb/MongoQueryRunner";
import catchables from '../data/catchables.json';

export class AddFishesCatchables1658261876633 implements MigrationInterface {

    public async up(queryRunner: MongoQueryRunner): Promise<void> {
        await queryRunner.insertMany('catchables', catchables);
    }

    public async down(queryRunner: MongoQueryRunner): Promise<void> {
        await queryRunner.clearTable('catchables');
    }
}
