import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { Genre } from './Genre';
import { Ref } from '../types';
import { __Type } from 'graphql';

@ObjectType({ description: 'The Band' })
export class Band {
  @Field(() => ID)
  id: string;

  @Field()
  @Property()
  name: string

  @Field()
  @Property()
  origin: string

  @Field()
  @Property()
  website: string

  @Field((_type) => String)
  @Property({ ref: Genre })
  genres: Ref<Genre>;
  _doc: any;
}

export const BandModel = getModelForClass(Band);
