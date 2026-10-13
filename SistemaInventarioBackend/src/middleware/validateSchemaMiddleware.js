const ValidateSchema = (body) => {
    return (req, res, next) => {
        const response = body.safeParse(req.body)
        if (!response.success) {
            return res.status(400).json({
                message: "Error de validacion de la informacion",
                errors: response.error.issues.map(error => error.message)
            })
        }
        req.dody = response.data
        next()
    }
}

const validacionId = (response, res, next) => {
    if (response[0] == null || response[0] == undefined) {
        return res.status(404).json({
            message: 'Producto inexistente'
        })
    }
}

export { ValidateSchema, validacionId }