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
  name: String

  @Field()
  @Property()
  origin: String

  @Field()
  @Property()
  members: [Member]

  @Field()
  @Property()
  website: String

  @Field()
  @Property()
  genres: [Genre]
}

export const BandModel = getModelForClass(Band);
