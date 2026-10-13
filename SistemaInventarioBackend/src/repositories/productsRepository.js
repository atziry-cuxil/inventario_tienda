import { pool } from "../config/database.js";

const productsGet = async () => {
    try {
        const response = await pool.query('select * from productos')
        return response.rows
    } catch (error) {
        throw new Error('No se pudieron listar los productos')
    }
}

const productGet = async (id) => {
    try {
        const response = await pool.query(`select * from productos where producto_id = ${id}`)
        return response.rows
    } catch (error) {
        throw new Error('No se encontro el producto')
    }
}

const productPost = async (req) => {
    try {
        const { codigo, nombre, description, categoria, marca, precio, stock } = req.body
        const response = await pool.query(`insert into productos ( codigo, nombre, description, categoria, marca, precio, stock) 
            values ($1, $2, $3, $4, $5, $6, $7)` , [codigo, nombre, description, categoria, marca, precio, stock])
        return response.rows
    } catch (error) {
        console.log(error)
        throw new Error('No se creo el nuevo producto')
    }
}

const productPut = async (id, req) => {
    try {
        const { codigo, nombre, description, categoria, marca, precio, stock, estado } = req
        const response = await pool.query(`update productos 
            set codigo = $1, nombre = $2, description = $3 , categoria = $4, marca = $5,
            precio = $6, stock = $7, estado = $8
            where producto_id = ${id}`, [codigo, nombre, description, categoria, marca, precio, stock, estado])
        return response.rows
    } catch (error) {
        throw new Error('No se pudo actualizar el producto')
    }
}

const productDelete = async (id) => {
    try {
        const response = await pool.query(`delete from productos where producto_id = ${id}`)
        return response.rows
    } catch (error) {
        throw new Error('No se puedo eliminar el producto')
    }
}

export { productsGet, productGet, productPost, productPut, productDelete }