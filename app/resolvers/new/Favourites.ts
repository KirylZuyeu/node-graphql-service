import {
    Resolver,
    Mutation,
    Arg,
    Query,
    FieldResolver,
    Root,
  } from 'type-graphql';
  import { Favourite, FavouriteModel } from '../../entities_m/Favourite';
  import { FavouriteInput } from '../types_m/Favourite-input';
  
  @Resolver((_of) => Favourite)
  export class FavouritesResolver {
    @Query((_returns) => Favourite, { nullable: false })
    async returnSingleUser(@Arg('id') id: string) {
      return await FavouriteModel.findById({ _id: id });
    }
  
    @Query(() => [Favourite])
    async returnAllUsers() {
      return await FavouriteModel.find();
    }
  
    @Mutation(() => Favourite)
    async createUser(
      @Arg('data') { username, email, cart_id }: FavouriteInput
    ): Promise<Favourite> {
      const user = (
        await FavouriteModel.create({
          username,
          email,
          cart_id,
        })
      ).save();
      return user;
    }
  
    @Mutation(() => Boolean)
    async deleteUser(@Arg('id') id: string) {
      await FavouriteModel.deleteOne({ id });
      return true;
    }
  
    @FieldResolver((_type) => Cart)
    async cart(@Root() user: Favourite): Promise<Cart> {
      console.log(user, 'userr!');
      return (await CartModel.findById(user._doc.cart_id))!;
    }
  }
  