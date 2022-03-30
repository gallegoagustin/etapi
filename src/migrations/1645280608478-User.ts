import {MigrationInterface, QueryRunner} from "typeorm";

export class User1645280608478 implements MigrationInterface {
    name = 'User1645280608478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location" ADD "adminsId" integer`);
        await queryRunner.query(`ALTER TABLE "location" ADD CONSTRAINT "FK_1d04293182b00f4024c08faa340" FOREIGN KEY ("adminsId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location" DROP CONSTRAINT "FK_1d04293182b00f4024c08faa340"`);
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "adminsId"`);
    }

}
