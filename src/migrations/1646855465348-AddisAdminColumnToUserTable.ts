import {MigrationInterface, QueryRunner} from "typeorm";

export class AddisAdminColumnToUserTable1646855465348 implements MigrationInterface {
    name = 'AddisAdminColumnToUserTable1646855465348'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isAdmin" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isAdmin"`);
    }

}
