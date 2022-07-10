import {
    Resolver,
    Mutation,
    Arg,
    Query
  } from 'type-graphql';
  import { Genre, GenreModel } from '../../entities_m/Genre';
  import { GenreInput } from '../types_m/Genre-input';
  
  @Resolver((_of) => Genre)
  export class GenresResolver {
    @Query((_returns) => Genre, { nullable: false })
    async getGenreById(@Arg('id') id: string) {
      return await GenreModel.findById({ _id: id });
    }
  
    @Query(() => [Genre])
    async returnAllGenres() {
      return await GenreModel.find();
    }
  
    @Mutation(() => Genre)
    async createGenre(
      @Arg('data') { name, description, country, year }: GenreInput
    ): Promise<Genre> {
      const genre = (
        await GenreModel.create({
          name,
          description,
          country,
          year
        })
      ).save();
      return genre;
    }
  
    @Mutation(() => Boolean)
    async deleteGenre(@Arg('id') id: string) {
      await GenreModel.deleteOne({ id });
      return true;
    }
  
    @Mutation(() => Boolean)
    async updatePost(
      @Arg('data') { id, name, description, country, year }: GenreInput
    ) {
      const genre = await GenreModel.findByIdAndUpdate(id, {
          name,
          description,
          country,
          year
        }, 
        {new: true})
      ;

      return genre;
    }

  }
  