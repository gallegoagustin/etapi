import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from "typeorm";

import { Zone } from "./Zone";
import { User } from "./User";
import { Room } from "./Room";
import { Image3d } from "./Image3d";

@Entity()
export class Location extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean", nullable: true })
  isActive: boolean;

  @Column({ type: "text", nullable: true })
  name: string;

  @Column({ type: "text", nullable: true })
  address: string;

  @Column("jsonb", { nullable: true, default: { long: "", lat: "" } })
  coords: object;

  @ManyToOne(() => Zone, (zone) => zone)
  zone: Zone;

  @Column({ type: "text", nullable: true })
  rooms: number;

  @Column({ type: "text", nullable: true })
  bathrooms: number;

  @Column({ type: "text", nullable: true })
  painting: number;

  @Column({ type: "text", nullable: true })
  floor: number;

  @Column({ type: "text", nullable: true })
  value: number;

  @Column("jsonb", { nullable: true, default: { min: 0, max: 0 } })
  suggestedValue: object;

  @Column({ type: "text", nullable: true })
  expectedValue: number;

  @Column({ type: "text", nullable: true })
  image: string;

  @ManyToOne(() => User, (user) => user.locations)
  owner: User;

  @ManyToOne(() => User, (user) => user.locations)
  admins: User;

  @OneToMany(() => Room, (room) => room.location)
  roomsDetails: Room[];

  @OneToMany(() => Image3d, (image3d) => image3d.location)
  images3D: Image3d[];

  @Column({ type: "text", nullable: true })
  email: string;

  @Column({ type: "text", nullable: true })
  phone: number;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "timestamptz", nullable: true })
  startLease: Date;

  @Column({ type: "timestamptz", nullable: true })
  endLease: Date;
}
