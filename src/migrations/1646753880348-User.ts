import {MigrationInterface, QueryRunner} from "typeorm";

export class User1646753880348 implements MigrationInterface {
    name = 'User1646753880348'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isActive" boolean`);
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "suggestedValue"`);
        await queryRunner.query(`ALTER TABLE "location" ADD "suggestedValue" jsonb DEFAULT '{"min":0,"max":0}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "suggestedValue"`);
        await queryRunner.query(`ALTER TABLE "location" ADD "suggestedValue" text`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isActive"`);
    }

}
