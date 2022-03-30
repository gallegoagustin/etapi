import {MigrationInterface, QueryRunner} from "typeorm";

export class User1647799119989 implements MigrationInterface {
    name = 'User1647799119989'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publication" ADD "isVerified" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publication" DROP COLUMN "isVerified"`);
    }

}
