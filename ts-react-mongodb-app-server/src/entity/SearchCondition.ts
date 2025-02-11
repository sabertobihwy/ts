import { IsInt, Min } from 'class-validator'
import { Type } from 'class-transformer'
import { BaseEntity } from './BaseEntity'

export class SearchCondition extends BaseEntity {

    public static transformToCondition(obj: Object): SearchCondition {
        return super.baseTransform(SearchCondition, obj)
    }

    @IsInt({ message: "必须是整数" })
    @Min(1, { message: "页码最小值为1" })
    @Type(() => Number)
    public page: number = 1

    @IsInt({ message: "必须是整数" })
    @Min(1, { message: "页容量最小值为1" })
    @Type(() => Number)
    public limit: number = 10

    @Type(() => String)
    public key: string = ""


}