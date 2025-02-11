import { Response } from 'express'
import { BaseResult } from '../entity/BaseResult'

export class ResponseHelper {
    public static sendError(error: string | string[], res: Response) {
        let e: string = ""
        if (Array.isArray(error)) {
            e = error.join(',')
        } else {
            e = error
        }
        res.send({
            error: e,
            data: null
        })
    }

    public static sendData(data: any, res: Response) {
        res.send({
            data,
            error: ""
        })
    }

    public static sendPaginationResult<T>(result: BaseResult<T>, res: Response) {
        if (result.errors.length > 0) {
            ResponseHelper.sendError(result.errors, res)
        } else {
            res.send({
                error: "",
                data: result.data,
                total: result.count
            })
        }

    }
}