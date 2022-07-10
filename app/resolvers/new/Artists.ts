import {
    Resolver,
    Mutation,
    Arg,
    Query,
    FieldResolver,
    Root,
  } from 'type-graphql';
  import { Artist, ArtistModel } from '../../entities_m/Artist';
  import { ArtistInput } from '../types_m/Artist-input';
  
  @Resolver((_of) => Artist)
  export class ArtistsResolver {
    @Query((_returns) => Artist, { nullable: false })
    async returnSingleUser(@Arg('id') id: string) {
      return await ArtistModel.findById({ _id: id });
    }
  
    @Query(() => [Artist])
    async returnAllUsers() {
      return await ArtistModel.find();
    }
  
    @Mutation(() => Artist)
    async createUser(
      @Arg('data') { username, email, cart_id }: ArtistInput
    ): Promise<Artist> {
      const user = (
        await ArtistModel.create({
          username,
          email,
          cart_id,
        })
      ).save();
      return user;
    }
  
    @Mutation(() => Boolean)
    async deleteUser(@Arg('id') id: string) {
      await ArtistModel.deleteOne({ id });
      return true;
    }
  
    @FieldResolver((_type) => Cart)
    async cart(@Root() user: Artist): Promise<Cart> {
      console.log(user, 'userr!');
      return (await CartModel.findById(user._doc.cart_id))!;
    }
  }
  