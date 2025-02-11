import { ResponseHelper } from './ResponseHelper'
import Express from 'express'
import multer from 'multer'
import path from 'path'

export const uploadRouter = Express.Router()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../public/uploads'))

    },
    filename: function (req, file, cb) {
        cb(null, generateFileName() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function fileFilter(req, file, cb) {

        // 这个函数应该调用 `cb` 用boolean值来
        // 指示是否应接受该文件

        // 拒绝这个文件，使用`false`，像这样:
        const originName = file.originalname!
        const ext = path.extname(originName)
        if (!validateExt(ext)) {
            cb(new Error('ext 不正确'))
        } else {
            cb(null, true)
        }

    },
    limits: {
        fileSize: 1024 * 1024
    }
}).single('avatar')
//const upload = multer({ dest: path.resolve(__dirname, '../public/uploads') })

function validateExt(ext: string) {
    const list = ['.jpg', '.png']
    if (!list.includes(ext)) {
        return false
    }
    return true
}

function generateFileName() {
    return new Date().getTime()
}

uploadRouter.post('/', function (req, res, next) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // 发生错误
            ResponseHelper.sendError(err.message, res)
        } else if (err) {
            // 发生错误
            ResponseHelper.sendError(err.message, res)
        } else {
            // 静态资源url
            ResponseHelper.sendData({ url: '/static/upload/' + req.file?.filename }, res)
        }

    })


})

