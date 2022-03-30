import {MigrationInterface, QueryRunner} from "typeorm";

export class Location1646779202661 implements MigrationInterface {
    name = 'Location1646779202661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location" ADD "email" text`);
        await queryRunner.query(`ALTER TABLE "location" ADD "phone" text`);
        await queryRunner.query(`ALTER TABLE "location" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "email"`);
    }

}
