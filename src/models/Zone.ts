import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToMany
  } from "typeorm";
  
  @Entity()
  export class Zone extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column("jsonb", { nullable: true, default: {} })
    data: object;

  }
  