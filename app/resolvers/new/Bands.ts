import {
    Resolver,
    Mutation,
    Arg,
    Query,
    FieldResolver,
    Root,
  } from 'type-graphql';
  import { Band, BandModel } from '../../entities_m/Band';
  import { BandInput } from '../types_m/Band-input';
  
  @Resolver((_of) => Band)
  export class BandsResolver {
    @Query((_returns) => Band, { nullable: false })
    async returnSingleUser(@Arg('id') id: string) {
      return await BandModel.findById({ _id: id });
    }
  
    @Query(() => [Band])
    async returnAllUsers() {
      return await BandModel.find();
    }
  
    @Mutation(() => Band)
    async createUser(
      @Arg('data') { username, email, cart_id }: BandInput
    ): Promise<Band> {
      const user = (
        await BandModel.create({
          username,
          email,
          cart_id,
        })
      ).save();
      return user;
    }
  
    @Mutation(() => Boolean)
    async deleteUser(@Arg('id') id: string) {
      await BandModel.deleteOne({ id });
      return true;
    }
  
    @FieldResolver((_type) => Cart)
    async cart(@Root() user: Band): Promise<Cart> {
      console.log(user, 'userr!');
      return (await CartModel.findById(user._doc.cart_id))!;
    }
  }
  