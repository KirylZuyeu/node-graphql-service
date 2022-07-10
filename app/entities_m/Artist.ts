import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: 'The Artist' })
export class Artist {
  [x: string]: any;
  @Field(() => ID)
  id: string;

  @Field()
  @Property()
  firstName: string;

  @Field()
  @Property()
  secondName: string;

  @Field()
  @Property()
  middleName: string;

  @Field()
  @Property()
  birthDate: string;

  @Field()
  @Property()
  birthPlace: string;

  @Field()
  @Property()
  country: string;

  @Field()
  @Property()
  bandsIds: string[]

  @Field()
  @Property()
  instruments: string[];
}

export const ArtistModel = getModelForClass(Artist);
