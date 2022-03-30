import {MigrationInterface, QueryRunner} from "typeorm";

export class User1647798626786 implements MigrationInterface {
    name = 'User1647798626786'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "review" ADD "isVerified" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "review" DROP COLUMN "isVerified"`);
    }

}
