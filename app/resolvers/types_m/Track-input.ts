import { InputType, Field } from 'type-graphql';
import { Track } from '../../entities_m/Track';

@InputType()
export class TrackInput implements Partial<Track> {
  @Field()
  title: string

  @Field()
  album: Album

  @Field()
  artists: [Artist]

  @Field()
  bands: [Band]

  @Field()
  duration: number

  @Field()
  released: number

  @Field()
  genres: [Genre]
}
