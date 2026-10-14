import { useForm } from "react-hook-form"
import { postProductShema } from "./productShema"
import { zodResolver } from "@hookform/resolvers/zod"
import './form.css'
import { apiClient } from "../api"
import React, { useEffect } from "react"

const FormProducts = ({ setForm, product, idUpdate }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            codigo: product?.codigo || '',
            nombre: product?.nombre || '',
            description: product?.description || '',
            categoria: product?.categoria || '',
            marca: product?.marca || '',
            precio: parseFloat(product?.precio) || '',
            stock: parseFloat(product?.stock) || '',
            estado: product?.estado || true
        },
        resolver: zodResolver(postProductShema)
    })

    const onUpdate = async (id) => {
        try {
            const response = await apiClient.put(`/${id}`)
            console.log(response)
            return console.log(response.message)
        } catch (error) {
            console.log(error)
        }
        reset()
    }

    const onSubmit = async (data) => {
        try {
            const response = await apiClient.post('/', data)
            setForm(false)
            return response
        } catch (error) {
            console.log(error)
        }
        reset()
    }

    const error = (error) => {
        console.log(error)
        setForm(true)
    }

    return (
        <div className="divPadre" >
            <form onSubmit={!idUpdate ? handleSubmit(onSubmit, error) : handleSubmit(onUpdate, error)}>
                <div className="campo" >
                    <label htmlFor="codigo">Codigo del producto: </label>
                    <input type="text" id="codigo" name="codigo"  {...register('codigo')} placeholder="El. 001H" />
                    {errors?.codigo && <span className="error">{errors?.codigo?.message} </span>}
                </div>

                <div className="campo" >
                    <label htmlFor="nombre">Nombre del producto: </label>
                    <input type="text" id="nombre" name="nombre" {...register('nombre')} placeholder="Ej. " />
                    {errors?.codigo && <span className="error">{errors?.codigo?.message} </span>}
                </div>

                <div className="campo">
                    <label htmlFor="description">Descripcion</label>
                    <input type="text" id="description" name="description" {...register('description')} placeholder="Ej." />
                    {errors?.codigo && <span className="error">{errors?.codigo?.message} </span>}
                </div>

                <div className="campo" >
                    <label htmlFor="categoria">Categoria: </label>
                    <input type="text" id="categoria" name="categoria" {...register('categoria')} />
                    {errors?.codigo && <span className="error">{errors?.codigo?.message} </span>}
                </div>

                <div className="campo" >
                    <label htmlFor="marca">Marca: </label>
                    <input type="text" id="marca" name="marca" {...register('marca')} />
                    {errors?.codigo && <span className="error">{errors?.codigo?.message} </span>}
                </div>

                <div className="campo" >
                    <label htmlFor="precio">Precio del producto: </label>
                    <input type="number" id="precio" name="precio" {...register('precio', { valueAsNumber: true })} />
                    {errors?.codigo && <span className="error">{errors?.codigo?.message} </span>}
                </div>

                <div className="campo" >
                    <label htmlFor="stock">Cantidad de producto: </label>
                    <input type="number" id="stock" name="stock" {...register('stock', { valueAsNumber: true })} />
                    {errors?.codigo && <span className="error">{errors?.codigo?.message} </span>}
                </div>

                <div className="campo" >
                    <label htmlFor="estado">Estado: </label>
                    <input type="text" id="estado" name="estado" {...register('estado')} />
                    {errors?.codigo && <span className="error">{errors?.codigo?.message} </span>}
                </div>
                <button type="submit" className="buttonEnviar" > Enviar </button>
            </form>
            <button type="button" className="buttonCancel" onClick={() => setForm(false)}> Cancelar </button>
        </div >
    )
}

export { FormProducts }