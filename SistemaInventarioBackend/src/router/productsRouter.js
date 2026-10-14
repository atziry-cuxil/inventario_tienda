import { Router } from "express";
import { deleteProduct, getProduct, getProducts, postProduct, putProduct } from "../controller/productsController.js";
import { ValidateSchema } from "../middleware/validateSchemaMiddleware.js";
import { productsPostShema, productsPutShema } from "../schema/productsShema.js";

const productRouter = Router();

productRouter.get('/', getProducts)
productRouter.get('/:id', getProduct)
productRouter.post('/', ValidateSchema(productsPostShema), postProduct)
productRouter.put('/:id', ValidateSchema(productsPutShema), putProduct)
productRouter.delete('/:id', deleteProduct)

export { productRouter }