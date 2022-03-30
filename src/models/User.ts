import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from "typeorm";

import { Location } from "./Location";
import { Review } from "./Review";
import { Publication } from "./Publication";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  uuid: string;

  @Column({ type: "boolean", nullable: true })
  isVerified: boolean;

  @Column({ type: "boolean", nullable: true })
  isActive: boolean;

  @Column({ type: "boolean", nullable: true })
  isOwner: boolean;

  @Column({ type: "boolean", nullable: true })
  isClient: boolean;

  @Column({ type: "boolean", default: false })
  isAdmin: boolean;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  country: string;

  @OneToMany(() => Location, (location) => location.owner)
  locations: Location[];

  @OneToMany(() => Location, (location) => location.admins)
  sharedLocations: Location[];

  @OneToMany(() => Review, (review) => review.creator)
  createdReviews: Review[];

  @OneToMany(() => Review, (review) => review.receiver)
  receivedReviews: Review[];

  @Column({ type: "boolean", default: false })
  didReview: boolean;

  @OneToMany(() => Publication, (publication) => publication.user)
  publications: Publication[];

}
