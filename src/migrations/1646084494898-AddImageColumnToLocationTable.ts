import {MigrationInterface, QueryRunner} from "typeorm";

export class AddImageColumnToLocationTable1646084494898 implements MigrationInterface {
    name = 'AddImageColumnToLocationTable1646084494898'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location" ADD "image" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "image"`);
    }

}
