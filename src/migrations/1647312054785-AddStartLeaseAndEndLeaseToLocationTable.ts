import {MigrationInterface, QueryRunner} from "typeorm";

export class AddStartLeaseAndEndLeaseToLocationTable1647312054785 implements MigrationInterface {
    name = 'AddStartLeaseAndEndLeaseToLocationTable1647312054785'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location" ADD "startLease" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "location" ADD "endLease" TIMESTAMP WITH TIME ZONE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "endLease"`);
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "startLease"`);
    }

}
