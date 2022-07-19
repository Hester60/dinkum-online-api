import {Entity, ObjectID, ObjectIdColumn, Column} from 'typeorm';
import {Habitat} from "../../common/types/habitat.type";
import {TimeFound} from "../../common/types/timeFound.type";
import {Season} from "../../common/types/season.type";
import {CatchableType} from "../../common/types/catchableType.type";

@Entity('catchables')
export class Catchable {
    @ObjectIdColumn() _id: ObjectID;

    @Column('string')
    name: string;

    @Column('string')
    description: string;

    @Column('string')
    preview: string;

    @Column('string')
    sellPrice: number;

    @Column('array', {default: []})
    habitats: Habitat[]

    @Column('array', {default: []})
    timesFound: TimeFound[]

    @Column('array', {default: []})
    seasons: Season[]

    @Column('string')
    type: CatchableType
}
