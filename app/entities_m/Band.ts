import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: 'The Band' })
export class Band {
  [x: string]: any;
  @Field(() => ID)
  id: string;

  @Field()
  @Property()
  firstName: string;

  @Field()
  @Property()
  name: string

  @Field()
  @Property()
  origin: string

  @Field()
  @Property()
  members: [Member]

  @Field()
  @Property()
  website: string

  @Field()
  @Property()
  genres: [Genre]
}

export const BandModel = getModelForClass(Band);
