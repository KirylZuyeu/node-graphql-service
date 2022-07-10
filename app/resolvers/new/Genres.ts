import {
    Resolver,
    Mutation,
    Arg,
    Query,
    FieldResolver,
    Root,
  } from 'type-graphql';
  import { Genre, GenreModel } from '../../entities_m/Genre';
  import { GenreInput } from '../types_m/Genre-input';
  
  @Resolver((_of) => Genre)
  export class GenresResolver {
    @Query((_returns) => Genre, { nullable: false })
    async returnSingleUser(@Arg('id') id: string) {
      return await GenreModel.findById({ _id: id });
    }
  
    @Query(() => [Genre])
    async returnAllUsers() {
      return await GenreModel.find();
    }
  
    @Mutation(() => Genre)
    async createUser(
      @Arg('data') { username, email, cart_id }: GenreInput
    ): Promise<Genre> {
      const user = (
        await GenreModel.create({
          username,
          email,
          cart_id,
        })
      ).save();
      return user;
    }
  
    @Mutation(() => Boolean)
    async deleteUser(@Arg('id') id: string) {
      await GenreModel.deleteOne({ id });
      return true;
    }
  
    @FieldResolver((_type) => Cart)
    async cart(@Root() user: Genre): Promise<Cart> {
      console.log(user, 'userr!');
      return (await GenreModel.findById(user._doc.cart_id))!;
    }
  }
  