import {
    Resolver,
    Mutation,
    Arg,
    Query,
    FieldResolver,
    Root,
  } from 'type-graphql';
  import { Track, TrackModel } from '../../entities_m/Track';
  import { TrackInput } from '../types_m/Track-input';
  
  @Resolver((_of) => Track)
  export class TracksResolver {
    @Query((_returns) => Track, { nullable: false })
    async returnSingleUser(@Arg('id') id: string) {
      return await TrackModel.findById({ _id: id });
    }
  
    @Query(() => [Track])
    async returnAllUsers() {
      return await TrackModel.find();
    }
  
    @Mutation(() => Track)
    async createUser(
      @Arg('data') { username, email, cart_id }: TrackInput
    ): Promise<Track> {
      const user = (
        await TrackModel.create({
          username,
          email,
          cart_id,
        })
      ).save();
      return user;
    }
  
    @Mutation(() => Boolean)
    async deleteUser(@Arg('id') id: string) {
      await TrackModel.deleteOne({ id });
      return true;
    }
  
    @FieldResolver((_type) => Cart)
    async cart(@Root() user: Track): Promise<Cart> {
      console.log(user, 'userr!');
      return (await CartModel.findById(user._doc.cart_id))!;
    }
  }
  