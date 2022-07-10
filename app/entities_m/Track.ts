import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: 'The Track' })
export class Track {
  [x: string]: any;
  @Field(() => ID)
  id: string;

  @Field()
  @Property()
  title: String!

  @Field()
  @Property()
  album: Album

  @Field()
  @Property()
  artists: [Artist]

  @Field()
  @Property()
  bands: [Band]

  @Field()
  @Property()
  duration: Int

  @Field()
  @Property()
  released: Int

  @Field()
  @Property()
  genres: [Genre]
}

export const TrackModel = getModelForClass(Track);
