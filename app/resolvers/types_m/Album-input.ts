import { InputType, Field } from 'type-graphql';
import { Product } from '../../entities/Product';
import { ObjectId } from 'mongodb';

@InputType()
export class AlbumInput implements Partial<Product> {
  @Field()
  name: String;

  @Field()
  released: number;

  @Field()
  image: String;

  @Field(() => String)
  artists: ObjectId

  @Field(() => String)
  bands: ObjectId

  @Field(() => String)
  tracks: ObjectId

  @Field(() => String)
  genres: ObjectId

  @Field(() => String)
  category_id: ObjectId;
}
