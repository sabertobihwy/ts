import Express from 'express'
import { MovieService } from '../service/MovieService'
import { ResponseHelper } from './ResponseHelper'

export const router = Express.Router()

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const result = await MovieService.findById(id)
        ResponseHelper.sendData(result, res)
    } catch {
        ResponseHelper.sendData(null, res)
    }

})

router.get('/', async (req, res) => {
    const result = await MovieService.findByCond(req.query)
    ResponseHelper.sendPaginationResult(result, res)
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const result = await MovieService.addMovie(req.body)
    if (Array.isArray(result)) {
        ResponseHelper.sendError(result, res)
    } else {
        ResponseHelper.sendData(result, res)
    }

})

router.put('/:id', async (req, res) => {
    try {
        const result: string[] = await MovieService.editMovie(req.params.id, req.body)
        if (result.length > 0) {
            ResponseHelper.sendError(result, res)
        } else {
            ResponseHelper.sendData(result, res)
        }
    } catch (error) {
        ResponseHelper.sendError('id is invalid', res)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await MovieService.deleteMovie(req.params.id)
        ResponseHelper.sendData(null, res)
    } catch (error) {
        ResponseHelper.sendError('id is invalid', res)
    }
})