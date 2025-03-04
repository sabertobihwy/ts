import 'reflect-metadata'
import { IsArray, IsNotEmpty, IsString, Min, MinLength, Max, MaxLength, validate, ArrayNotEmpty, isInstance, MIN, ArrayMinSize } from 'class-validator'
import 'class-transformer'
import { plainToInstance, Type } from 'class-transformer'
import { BaseEntity } from './BaseEntity'
import { BooleanExpression } from 'mongoose'

export class Movie extends BaseEntity {
    public static transformToMovie(obj: Object): Movie {
        return super.baseTransform(Movie, obj)
    }

    @IsNotEmpty({ message: "should not be empty" })
    @Type(() => String)
    name: string
    @ArrayMinSize(1, { message: "size at least 1" })
    @IsString({ each: true })
    // @MinLength(5, { each: true })
    // @MaxLength(10, { each: true })
    @Type(() => String)
    types: string[]

    @ArrayMinSize(1, { message: "size at least 1" })
    @Type(() => String)
    @IsArray({ message: "should be []" })
    areas: string[]
    @IsNotEmpty({ message: "should not be empty" })
    @Min(10, { message: "longer than 10min" })
    @Type(() => Number)
    timeLong: number
    @IsNotEmpty({ message: "should not be empty" })
    @Type(() => Boolean)
    isHot: boolean
    @IsNotEmpty({ message: "should not be empty" })
    @Type(() => Boolean)
    isClassic: boolean


}