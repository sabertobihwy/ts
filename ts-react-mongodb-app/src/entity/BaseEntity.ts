import { ClassConstructor, plainToInstance, Type } from 'class-transformer'
import { validate } from 'class-validator'

export abstract class BaseEntity {
    public static baseTransform<T>(cls: ClassConstructor<T>, obj: Object): T {
        if (obj instanceof cls) {
            return obj
        }
        return plainToInstance(cls, obj)
    }

    public async validate(skipIfNotExists = false): Promise<string[]> {
        const error = await validate(this, {
            skipMissingProperties: skipIfNotExists
        })
        if (error.length > 0) {
            const cons = error.map(ve => Object.values(ve.constraints!))
            const result = cons.flatMap(x => x)
            // for (const r of result) {
            //     console.log(r)
            // }
            return result
        }
        return []
    }


}