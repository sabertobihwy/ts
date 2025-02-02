import 'reflect-metadata'
import { IsNotEmpty, IsString, Min, MinLength, Max, MaxLength, validate, ArrayNotEmpty, isInstance, MIN } from 'class-validator'
import 'class-transformer'
import { plainToInstance } from 'class-transformer'

export class Movie {
    public static transformToMovie(obj: Object): Movie {
        if (obj instanceof Movie) {
            return obj
        }
        return plainToInstance(Movie, obj)
    }

    @IsNotEmpty({ message: "should not be empty" })
    name: string
    @ArrayNotEmpty({ message: "should not be empty" })
    @IsString({ each: true })
    @MinLength(5, { each: true })
    @MaxLength(10, { each: true })
    types: string[]
    @IsNotEmpty({ message: "should not be empty" })
    areas: string
    @IsNotEmpty({ message: "should not be empty" })
    @Min(10, { message: "longer than 10min" })
    timeLong: number
    @IsNotEmpty({ message: "should not be empty" })
    isHot: boolean

    public async validateMovie(): Promise<string[] | Movie> {
        const error = await validate(this)
        if (error.length > 0) {
            const cons = error.map(ve => Object.values(ve.constraints!))
            return cons.flatMap(x => x)
        }
        return this
    }

}