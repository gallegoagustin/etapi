import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRoomsDetailsColumnToLocationTable1646228613893 implements MigrationInterface {
    name = 'AddRoomsDetailsColumnToLocationTable1646228613893'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "room" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "image" character varying NOT NULL, "squareMeter" integer NOT NULL, "locationId" integer, CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "FK_7443454f937091459ed1d0b0990" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "FK_7443454f937091459ed1d0b0990"`);
        await queryRunner.query(`DROP TABLE "room"`);
    }

}
