import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: 'The Genre' })
export class Genre {
  @Field(() => ID)
  id: string;

  @Field()
  @Property()
  name: string
  
  @Field()
  @Property()
  description: string
  
  @Field()
  @Property()
  country: string
  
  @Field()
  @Property()
  year: number
}

export const GenreModel = getModelForClass(Genre);
