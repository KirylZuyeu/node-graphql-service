import { InputType, Field } from 'type-graphql';
import { Artist } from '../../entities_m/Artist';

@InputType()
export class ArtistInput implements Partial<Artist> {
  @Field()
  firstName: string

  @Field()
  secondName: string;

  @Field()
  middleName: string;

  @Field()
  birthDate: string;

  @Field()
  birthPlace: string;

  @Field()
  country: string;

  @Field()
  bandsIds: string[]

  @Field()
  instruments: string[];
}
