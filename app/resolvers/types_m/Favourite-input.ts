import { InputType, Field } from 'type-graphql';
import { Favourite } from '../../entities_m/Favourite';

@InputType()
export class FavouriteInput implements Partial<Favourite> {
  @Field()
  name: String

  @Field()
  origin: String

  @Field()
  members: [Member]

  @Field()
  website: String

  @Field()
  genres: [Genre]
}
