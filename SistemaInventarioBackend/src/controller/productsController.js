//import { validateId } from "../middleware/validateSchemaMiddleware.js";
import { productsGet, productGet, productPut, productDelete, productPost } from "../repositories/productsRepository.js"

const getProducts = async (req, res) => {
    const response = await productsGet();
    res.status(200).json({ data: response })
}

const getProduct = async (req, res) => {
    const response = await productGet(req.params.id)
    if (response.length == 0) {
        return res.status(404).json({
            message: 'Producto inexistente'
        })
    }
    //validateId(response)
    res.status(200).json({ data: response, message: 'Consulta exitosa' })
}

const postProduct = async (req, res) => {
    try {
        const response = await productPost(req)
        res.status(201).json({ message: 'Producto creado' })
    } catch (error) {
        if (error) {
            return res.status(409).json({
                message: 'El código del producto ya existe'
            });
        }
    }
}

const putProduct = async (req, res) => {
    const response = await productPut(req.params.id, req.body)
    res.status(200).json({ message: 'Actualizacion exitosa' })
}

const deleteProduct = async (req, res) => {
    const response = await productDelete(req.params.id)
    res.status(200).json({ message: "Eliminacion exitosa" })
}

export { getProducts, getProduct, postProduct, putProduct, deleteProduct }