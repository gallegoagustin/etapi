import {MigrationInterface, QueryRunner} from "typeorm";

export class User1645280528585 implements MigrationInterface {
    name = 'User1645280528585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "zone" ("id" SERIAL NOT NULL, "data" jsonb DEFAULT '{}', CONSTRAINT "PK_bd3989e5a3c3fb5ed546dfaf832" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "uuid" character varying(100) NOT NULL, "isVerified" boolean, "isOwner" boolean, "isClient" boolean, "firstName" character varying(100) NOT NULL, "lastName" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "country" character varying(100) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "location" ("id" SERIAL NOT NULL, "isActive" boolean, "name" text, "address" text, "rooms" text, "bathrooms" text, "painting" text, "floor" text, "value" text, "zoneId" integer, "ownerId" integer, CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "location" ADD CONSTRAINT "FK_55f37f10ce9a65705888ba1b4b9" FOREIGN KEY ("zoneId") REFERENCES "zone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "location" ADD CONSTRAINT "FK_c4bb729e05086154519f3721868" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location" DROP CONSTRAINT "FK_c4bb729e05086154519f3721868"`);
        await queryRunner.query(`ALTER TABLE "location" DROP CONSTRAINT "FK_55f37f10ce9a65705888ba1b4b9"`);
        await queryRunner.query(`DROP TABLE "location"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "zone"`);
    }

}
