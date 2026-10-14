import { useForm } from "react-hook-form"
import { postProductShema } from "./productShema"
import { zodResolver } from "@hookform/resolvers/zod"
import './form.css'
import { apiClient } from "../api"
import React, { useEffect } from "react"

const FormProducts = ({ setForm, product }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            codigo: product?.codigo || '',
            nombre: product?.nombre || '',
            description: product?.description || '',
            categoria: product?.categoria || '',
            marca: product?.marca || '',
            precio: parseFloat(product?.precio) || 0,
            stock: parseFloat(product?.stock) || 0,
            estado: product?.estado || true
        },
        resolver: zodResolver(postProductShema)
    })

    const onSubmit = async (data) => {
        try {
            const response = await apiClient.post('/', data)
            setForm(false)
            return response
        } catch (error) {
            console.log(error)
        }
    }

    const error = (error) => {
        console.log(error)
        setForm(true)
    }

    return (
        <div className="divPadre" >
            <form onSubmit={handleSubmit(onSubmit, error)}>
                <div className="campo" >
                    <label htmlFor="codigo">Codigo del producto: </label>
                    <input type="text" id="codigo" name="codigo"  {...register('codigo')} placeholder="El. 001H" />
                </div>

                <div className="campo" >
                    <label htmlFor="nombre">Nombre del producto: </label>
                    <input type="text" id="nombre" name="nombre" {...register('nombre')} placeholder="Ej. " />
                </div>

                <div className="campo">
                    <label htmlFor="description">Descripcion</label>
                    <input type="text" id="description" name="description" {...register('description')} placeholder="Ej." />
                </div>

                <div className="campo" >
                    <label htmlFor="categoria">Categoria: </label>
                    <input type="text" id="categoria" name="categoria" {...register('categoria')} />
                </div>

                <div className="campo" >
                    <label htmlFor="marca">Marca: </label>
                    <input type="text" id="marca" name="marca" {...register('marca')} />
                </div>

                <div className="campo" >
                    <label htmlFor="precio">Precio del producto: </label>
                    <input type="number" id="precio" name="precio" {...register('precio', { valueAsNumber: true })} />
                </div>

                <div className="campo" >
                    <label htmlFor="stock">Cantidad de producto: </label>
                    <input type="number" id="stock" name="stock" {...register('stock', { valueAsNumber: true })} />
                </div>

                <div className="campo" >
                    <label htmlFor="estado">Estado: </label>
                    <input type="text" id="estado" name="estado" {...register('estado')} />
                </div>
                <button type="submit" className="buttonEnviar" > Enviar </button>
            </form>
            <button type="button" className="buttonCancel" onClick={() => setForm(false)}> Cancelar </button>
        </div >
    )
}

export { FormProducts }