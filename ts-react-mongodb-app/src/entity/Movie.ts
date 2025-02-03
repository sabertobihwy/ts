import 'reflect-metadata'
import { IsNotEmpty, IsString, Min, MinLength, Max, MaxLength, validate, ArrayNotEmpty, isInstance, MIN } from 'class-validator'
import 'class-transformer'
import { plainToInstance, Type } from 'class-transformer'

export class Movie {
    public static transformToMovie(obj: Object): Movie {
        if (obj instanceof Movie) {
            return obj
        }
        return plainToInstance(Movie, obj)
    }

    @IsNotEmpty({ message: "should not be empty" })
    @Type(() => String)
    name: string
    @ArrayNotEmpty({ message: "should not be empty" })
    @IsString({ each: true })
    @MinLength(5, { each: true })
    @MaxLength(10, { each: true })
    @Type(() => String)
    types: string[]
    @IsNotEmpty({ message: "should not be empty" })
    @Type(() => String)
    areas: string
    @IsNotEmpty({ message: "should not be empty" })
    @Min(10, { message: "longer than 10min" })
    @Type(() => Number)
    timeLong: number
    @IsNotEmpty({ message: "should not be empty" })
    @Type(() => Boolean)
    isHot: boolean

    public async validateMovie(): Promise<string[] | Movie> {
        const error = await validate(this)
        if (error.length > 0) {
            const cons = error.map(ve => Object.values(ve.constraints!))
            const result = cons.flatMap(x => x)
            // for (const r of result) {
            //     console.log(r)
            // }
            return result
        }
        return this
    }

}