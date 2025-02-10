import { movieModeldb } from "../db/dbConnection";
import { BaseResult } from "../entity/BaseResult";
import { Movie } from "../entity/Movie";
import { SearchCondition } from "../entity/SearchCondition";
import { IMovie } from "../interface/IMovie";
const metadataKey_transform = Symbol("param_metadata_transform");
const metadataKey_validate = Symbol("param_metadata_validate");

export class MovieService {
    // @updateMethod
    // public static async addMovie(@transformMovie @validateMovie movie: any): Promise<string[] | IMovie> {
    //     // const m: Movie = Movie.transformToMovie(movie)
    //     // const result = await m.validateMovie()
    //     const result = movie
    //     if (result instanceof Movie) {
    //         return await movieModeldb.create(result)
    //     }
    //     return result
    // }
    public static async addMovie(movie: any): Promise<string[] | IMovie> {
        const m: Movie = Movie.transformToMovie(movie)
        const result: string[] = await m.validate()
        if (result.length === 0) {
            return await movieModeldb.create(m)
        }
        return result
    }

    public static async editMovie(id: string, movie: any): Promise<string[]> {
        const m: Movie = Movie.transformToMovie(movie)
        const result = await m.validate(true)
        if (result.length > 0) {
            return result
        }
        await movieModeldb.updateOne({ _id: id }, movie) // origin obj 
        return []
    }

    public static async deleteMovie(id: string): Promise<void> {
        await movieModeldb.deleteOne({ _id: id })
    }

    public static async findById(id: string): Promise<Movie | null> {
        return await movieModeldb.findById({ _id: id })
    }

    public static async findByCond(cond: object): Promise<BaseResult<IMovie>> {
        const c: SearchCondition = SearchCondition.transformToCondition(cond)
        const result = await c.validate()
        if (result.length > 0) {
            return {
                data: [],
                errors: result,
                count: 0
            }
        }
        const list = await movieModeldb.find({ name: { $regex: new RegExp(c.key) } })
            .skip((c.page - 1) * c.limit).limit(c.limit)
        return {
            data: list,
            errors: [],
            count: 0
        }

    }
}

export function updateMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const transformParams: string[] = Reflect.getMetadata(metadataKey_transform, target, propertyKey) || [];
    const validateParams: string[] = Reflect.getMetadata(metadataKey_validate, target, propertyKey) || [];

    descriptor.value = async function (...args: any[]) {
        transformParams.forEach((index) => {
            args[+index] = Movie.transformToMovie(args[+index]);
        })
        //console.log("validateParams" + validateParams)
        for (const index of validateParams) {
            console.log(index)
            args[+index] = await args[+index].validateMovie();
        }

        console.log(args.length)
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

export function transformMovie(target: any, methodName: string, index: number) {
    const existingParams: number[] =
        Reflect.getMetadata(metadataKey_transform, target, methodName) || [];
    existingParams.push(index);
    Reflect.defineMetadata(metadataKey_transform, existingParams, target, methodName);
}
export function validateMovie(target: any, method: string, index: number) {
    const existingParams: number[] =
        Reflect.getMetadata(metadataKey_validate, target, method) || [];
    existingParams.push(index);
    Reflect.defineMetadata(metadataKey_validate, existingParams, target, method);
}