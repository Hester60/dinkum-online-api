import {CatchablesController} from "../catchables/catchables.controller";
import {CatchablesService} from "../catchables/catchables.service";
import {Test} from "@nestjs/testing";
import {getRepositoryToken} from "@nestjs/typeorm";
import {Catchable} from "../catchables/catchables.entity";
import {Repository} from "typeorm";
import { ObjectId } from 'mongodb';

describe('CatchablesController', () => {
    let catchablesController: CatchablesController;
    let catchablesService: CatchablesService;
    let catchablesRepository: Repository<Catchable>;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [CatchablesController],
            providers: [CatchablesService,
                {
                    provide: getRepositoryToken(Catchable),
                    useClass: Repository
                }],
        }).compile();

        catchablesService = moduleRef.get<CatchablesService>(CatchablesService);
        catchablesRepository = moduleRef.get<Repository<Catchable>>(getRepositoryToken(Catchable));
        catchablesController = moduleRef.get<CatchablesController>(CatchablesController);
    });

    describe('findAll', () => {
        it('should return an array of catchables', async () => {

            const testCatchable: Catchable = {
                "name": "barcoo grunter",
                "description": "Beep. Beep. Grunt.",
                "habitats": ["rivers", "billabongs", "mangroves"],
                "timesFound": ["day", "morning", "night"],
                "seasons": ["autumn", "spring", "winter", "summer"],
                "sellPrice": 1290,
                "preview": "Inv_BarcooGrunter_River.png",
                "type": "fish",
                _id: new ObjectId()
            }

            const result = [testCatchable];
            jest.spyOn(catchablesRepository, 'find').mockResolvedValueOnce(result);
            expect(await catchablesService.findAll()).toEqual(result);
        });
    });
});
