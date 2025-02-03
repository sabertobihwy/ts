import { movieModeldb } from "../db/dbConnection";
import { Movie } from "../entity/Movie";
import { IMovie } from "../interface/IMovie";
const metadataKey_transform = Symbol("param_metadata_transform");
const metadataKey_validate = Symbol("param_metadata_validate");

export class MovieService {
    @updateMethod
    public static async addMovie(@transformMovie @validateMovie movie: any): Promise<string[] | IMovie> {
        // const m: Movie = Movie.transformToMovie(movie)
        // const result = await m.validateMovie()
        const result = movie
        if (result instanceof Movie) {
            return await movieModeldb.create(result)
        }
        return result
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