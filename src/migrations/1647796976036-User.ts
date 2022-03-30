import {MigrationInterface, QueryRunner} from "typeorm";

export class User1647796976036 implements MigrationInterface {
    name = 'User1647796976036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "review" ("id" SERIAL NOT NULL, "title" text, "comment" character varying(480) NOT NULL, "review" text, "creatorId" integer, "receiverId" integer, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "publication" ("id" SERIAL NOT NULL, "title" text, "description" character varying(480) NOT NULL, "userId" integer, CONSTRAINT "PK_8aea8363d5213896a78d8365fab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "didReview" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_9a25a94c510e29633c263673888" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_891b3728bc0f3c0970c9fb11a1a" FOREIGN KEY ("receiverId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "publication" ADD CONSTRAINT "FK_ca72b09f205afc223b9866471fe" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publication" DROP CONSTRAINT "FK_ca72b09f205afc223b9866471fe"`);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_891b3728bc0f3c0970c9fb11a1a"`);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_9a25a94c510e29633c263673888"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "didReview"`);
        await queryRunner.query(`DROP TABLE "publication"`);
        await queryRunner.query(`DROP TABLE "review"`);
    }

}
