import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterLocationTableChangeCoordTypeFromStringToJSONB1646233758720 implements MigrationInterface {
    name = 'AlterLocationTableChangeCoordTypeFromStringToJSONB1646233758720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "coords"`);
        await queryRunner.query(`ALTER TABLE "location" ADD "coords" jsonb DEFAULT '{"long":"","lat":""}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "coords"`);
        await queryRunner.query(`ALTER TABLE "location" ADD "coords" text`);
    }

}
