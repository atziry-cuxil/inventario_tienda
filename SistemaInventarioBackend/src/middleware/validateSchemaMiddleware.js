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


const validateId = (response) => {
    console.log(response)
    return (req, res, next) => {
        console.log('response')
        if (response.length == 0) {
            return res.status(404).json({
                message: 'Producto inexistente'
            })
        }
        next()
    }
}

const validateCode = (error) => {
    console.log(error)
    return (req, res, next) => {
        console.log('error dentro')
        if (error) {
            return res.status(409).json({
                message: 'El código del producto ya existe'
            });
        }
        next();
    };

};

export { ValidateSchema, validateId, validateCode }