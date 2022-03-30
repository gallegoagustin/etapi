import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateImage3dTable1646361654553 implements MigrationInterface {
    name = 'CreateImage3dTable1646361654553'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "image3d" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "image" character varying NOT NULL, "longitude" character varying NOT NULL, "latitude" character varying NOT NULL, "locationId" integer, CONSTRAINT "PK_73ad9d337cb04c042d67e293532" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "image3d" ADD CONSTRAINT "FK_0c74d0b03bcb2c7b043772722fe" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image3d" DROP CONSTRAINT "FK_0c74d0b03bcb2c7b043772722fe"`);
        await queryRunner.query(`DROP TABLE "image3d"`);
    }

}
