import {
    Resolver,
    Mutation,
    Arg,
    Query,
    FieldResolver,
    Root
  } from 'type-graphql';
  import { Band, BandModel } from '../../entities_m/Band';
  import { BandInput } from '../types_m/Band-input';
  import { Genre, GenreModel } from '../../entities_m/Genre';
  
  @Resolver((_of) => Band)
  export class BandsResolver {
    @Query((_returns) => Band, { nullable: false })
    async returnSingleBand(@Arg('id') id: string) {
      return await BandModel.findById({ _id: id });
    }
  
    @Query(() => [Band])
    async returnAllBand() {
      return await BandModel.find();
    }
  
    @Mutation(() => Band)
    async createBand(
      @Arg('data') { name, origin, website, genres }: BandInput
    ): Promise<Band> {
      const band = (
        await BandModel.create({
          name,
          origin,
          website,
          genres
        })
      ).save();
      return band;
    }
  
    @Mutation(() => String)
    async deleteBand(@Arg('id') id: string) {
      await BandModel.deleteOne({ id });
      return `Bands was deleted`;
    }

    @Mutation(() => Band)
    async updateBand(
      @Arg('id') id: string,
      @Arg('data') { name, origin, website, genres }: BandInput
    ) {
      const band = await BandModel.findByIdAndUpdate(id, {
          name,
          origin,
          website,
          genres
        }, 
        {new: true})
      ;

      return band;
    }

    @FieldResolver((_type) => Genre)
    async genre(@Root() band: Band): Promise<Genre> {
      return (await GenreModel.findById(band._doc.genres))!;
    }
  }
  