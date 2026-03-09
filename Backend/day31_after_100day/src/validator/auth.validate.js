import { body, validationResult } from 'express-validator'
function validate(req, res, next) {
    const err = validationResult(req)

    if (err.isEmpty()) {
        return next()
    }
    return res.status(405).json({
        message: 'you fault',
        err: err.array()
    })
}
export default [
    body('email').isEmail().withMessage('eamil should be valid '),
    body('username').isString().withMessage('email should be valid '),
    validate
]