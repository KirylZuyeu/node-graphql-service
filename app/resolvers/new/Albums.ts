import {
  Resolver,
  Mutation,
  Arg,
  Query,
  FieldResolver,
  Root,
} from 'type-graphql';
import { Album, AlbumModel } from '../../entities_m/Album';
import { AlbumInput } from '../types_m/Album-input';

@Resolver((_of) => Album)
export class AlbumsResolver {
  @Query((_returns) => Album, { nullable: false })
  async returnSingleUser(@Arg('id') id: string) {
    return await AlbumModel.findById({ _id: id });
  }

  @Query(() => [Album])
  async returnAllUsers() {
    return await AlbumModel.find();
  }

  @Mutation(() => Album)
  async createUser(
    @Arg('data') { username, email, cart_id }: AlbumInput
  ): Promise<Album> {
    const user = (
      await AlbumModel.create({
        username,
        email,
        cart_id,
      })
    ).save();
    return user;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg('id') id: string) {
    await AlbumModel.deleteOne({ id });
    return true;
  }

  @FieldResolver((_type) => Cart)
  async cart(@Root() user: Album): Promise<Cart> {
    console.log(user, 'userr!');
    return (await CartModel.findById(user._doc.cart_id))!;
  }
}
