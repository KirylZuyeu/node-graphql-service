import { InputType, Field } from 'type-graphql';
import { Favourite } from '../../entities_m/Favourite';

@InputType()
export class FavouriteInput implements Partial<Favourite> {
  @Field()
  name: string

  @Field()
  origin: string

  @Field()
  members: [Member]

  @Field()
  website: string

  @Field()
  genres: [Genre]
}
