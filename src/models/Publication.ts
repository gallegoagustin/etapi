import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
} from "typeorm";

import { User } from "./User";
  
  @Entity()
  export class Publication extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", nullable: true })
    title: string;

    @Column({ length: 480 })
    description: string;

    @Column({ length: 480, nullable: true })
    image: string;

    @ManyToOne(() => User, (user) => user.publications)
    user: User;

    @Column({ type: "boolean", default: false })
    isVerified: boolean;

  }
  