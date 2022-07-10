import { InputType, Field } from 'type-graphql';
import { Album } from '../../entities_m/Album';

@InputType()
export class AlbumInput implements Partial<Album> {
  @Field()
  name: String

  @Field()
  released: number

  @Field()
  artists: [Artist]

  @Field()
  bands: [Band]

  @Field()
  tracks: [Track]

  @Field()
  genres: [Genre]

  @Field()
  image: String
}
