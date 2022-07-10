import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: 'The Album' })
export class Album {
  [x: string]: any;
  @Field(() => ID)
  id: string;

  @Field()
  @Property()
  name: String
  
  @Field()
  @Property()
  released: number

  @Field()
  @Property()
  artists: [Artist]

  @Field()
  @Property()
  bands: [Band]

  @Field()
  @Property()
  tracks: [Track]

  @Field()
  @Property()
  genres: [Genre]

  @Field()
  @Property()
  image: String
}

export const AlbumModel = getModelForClass(Album);
