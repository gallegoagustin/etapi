import {MigrationInterface, QueryRunner} from "typeorm";

export class User1645358031204 implements MigrationInterface {
    name = 'User1645358031204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "location_review" ("id" SERIAL NOT NULL, "comment" character varying(480) NOT NULL, "rating" text, "locationId" integer, "creatorId" integer, CONSTRAINT "PK_420e1561d1cada1f085487cf322" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "owner_review" ("id" SERIAL NOT NULL, "comment" character varying(480) NOT NULL, "rating" text, "ownerId" integer, "creatorId" integer, CONSTRAINT "PK_5c6dcea77ef93baba3ff73cf005" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "location" ADD "coords" text`);
        await queryRunner.query(`ALTER TABLE "location" ADD "suggestedValue" text`);
        await queryRunner.query(`ALTER TABLE "location" ADD "expectedValue" text`);
        await queryRunner.query(`ALTER TABLE "location_review" ADD CONSTRAINT "FK_0ff78b6e5f7abfe9ad84cd7f991" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "location_review" ADD CONSTRAINT "FK_ebca2f60b934736ea62fc057aeb" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "owner_review" ADD CONSTRAINT "FK_205864a0249efac7b0b5690f7ce" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "owner_review" ADD CONSTRAINT "FK_4e7b9063e14603c60565dc91600" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "owner_review" DROP CONSTRAINT "FK_4e7b9063e14603c60565dc91600"`);
        await queryRunner.query(`ALTER TABLE "owner_review" DROP CONSTRAINT "FK_205864a0249efac7b0b5690f7ce"`);
        await queryRunner.query(`ALTER TABLE "location_review" DROP CONSTRAINT "FK_ebca2f60b934736ea62fc057aeb"`);
        await queryRunner.query(`ALTER TABLE "location_review" DROP CONSTRAINT "FK_0ff78b6e5f7abfe9ad84cd7f991"`);
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "expectedValue"`);
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "suggestedValue"`);
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "coords"`);
        await queryRunner.query(`DROP TABLE "owner_review"`);
        await queryRunner.query(`DROP TABLE "location_review"`);
    }

}
