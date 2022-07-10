import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: 'The Favourite' })
export class Favourite {
  [x: string]: any;
  @Field(() => ID)
  id: string;

  @Field()
  @Property()
  bands: [Band]

  @Field()
  @Property()
  genres: [Genre]

  @Field()
  @Property()
  artists: [Artist]

  @Field()
  @Property()
  tracks: [Track]
}

export const FavouriteModel = getModelForClass(Favourite);
