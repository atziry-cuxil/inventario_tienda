import { ErrorMessage, useForm } from "react-hook-form"
import { postProductShema, putProductShema } from "./productShema"
import { zodResolver } from "@hookform/resolvers/zod"
import './form.css'
import { apiClient } from "../api"
import React, { useEffect } from "react"
import { ErrorMensaje } from "../components/errorMessage"

const FormProducts = ({ setForm, product, idUpdate, setProduct, setIdUpdate }) => {
    const [error, setError] = React.useState(null)
    const [isError, setIsError] = React.useState(false)

    let initialForm = {
        codigo: product?.codigo || '',
        nombre: product?.nombre || '',
        description: product?.description || '',
        categoria: product?.categoria || '',
        marca: product?.marca || '',
        precio: parseFloat(product?.precio) || '',
        stock: parseInt(product?.stock) || '',
        estado: product?.estado || true
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: initialForm,
        resolver: zodResolver(product?.codigo ? putProductShema : postProductShema)
    })

    const onUpdate = async (data) => {
        try {
            const response = await apiClient.put(`/${idUpdate}`, data)
            setProduct(null)
            setIdUpdate(null)
            setForm('negativo')
            initialForm = {
                codigo: '',
                nombre: '',
                description: '',
                categoria: '',
                marca: '',
                precio: '',
                stock: '',
                estado: true
            }
            return
        } catch (error) {
            console.log('errores')
            console.log(error)
            setError(error?.error?.message)
            setIsError(true)
            setTimeout(() => {
                setIsError(false)
            }, 5000)
        }
        reset()
    }

    const onSubmit = async (data) => {
        try {
            const response = await apiClient.post('/', data)
            setForm('negativo')
            setProduct(null)
            setIdUpdate(null)
            return response
        } catch (error) {
            console.log(error)
            if (error == undefined) return
            setError(error?.error?.message)
            setIsError(true)
            setTimeout(() => {
                setIsError(false)
            }, 5000)
        }
        initialForm = {
            codigo: '',
            nombre: '',
            description: '',
            categoria: '',
            marca: '',
            precio: '',
            stock: '',
            estado: true
        }
        reset()
    }

    const errorForm = (error) => {
        setForm('positivo')
    }

    return (
        <>
            {isError && <ErrorMensaje error={error} />}

            <div className="divPadre" >
                <form onSubmit={!idUpdate ? handleSubmit(onSubmit, errorForm) : handleSubmit(onUpdate, errorForm)}>
                    <div className="campo" >
                        <label htmlFor="codigo">Codigo del producto: </label>
                        <input type="text" id="codigo" name="codigo"  {...register('codigo')} placeholder="El. 001H" />
                        {errors?.codigo && <span className="error">{errors?.codigo?.message} </span>}
                    </div>

                    <div className="campo" >
                        <label htmlFor="nombre">Nombre del producto: </label>
                        <input type="text" id="nombre" name="nombre" {...register('nombre')} placeholder="Ej. Telefono " />
                        {errors?.nombre && <span className="error">{errors?.nombre?.message} </span>}
                    </div>

                    <div className="campo">
                        <label htmlFor="description">Descripcion</label>
                        <input type="text" id="description" name="description" {...register('description')} placeholder="Ej. samsumg" />
                        {errors?.description && <span className="error">{errors?.description?.message} </span>}
                    </div>

                    <div className="campo" >
                        <label htmlFor="categoria">Categoria: </label>
                        <input type="text" id="categoria" name="categoria" {...register('categoria')} placeholder='Ej. Dispositivo' />
                        {errors?.categoria && <span className="error">{errors?.categoria?.message} </span>}
                    </div>

                    <div className="campo" >
                        <label htmlFor="marca">Marca: </label>
                        <input type="text" id="marca" name="marca" {...register('marca')} placeholder="SAMUMG" />
                        {errors?.marca && <span className="error">{errors?.marca?.message} </span>}
                    </div>

                    <div className="campo" >
                        <label htmlFor="precio">Precio del producto: </label>
                        <input type="number" id="precio" name="precio" {...register('precio', { valueAsNumber: true })} placeholder="Ej. 100.00" />
                        {errors?.precio && <span className="error">{errors?.precio?.message} </span>}
                    </div>

                    <div className="campo" >
                        <label htmlFor="stock">Cantidad de producto: </label>
                        <input type="number" id="stock" name="stock" {...register('stock', { valueAsNumber: true })} placeholder="Ej. 0" />
                        {errors?.stock && <span className="error">{errors?.stock?.message} </span>}
                    </div>
                    {product &&
                        <div className="campo" >
                            <label htmlFor="estado">Estado: </label>
                            <input type="checkbox" id="estado" name="estado" {...register('estado')} />
                            {errors?.estado && <span className="error">{errors?.estado?.message} </span>}
                        </div>
                    }
                    <button type="submit" className="buttonEnviar" > Enviar </button>
                </form>
                <button type="button" className="buttonCancel" onClick={() => (
                    initialForm = {
                        codigo: '',
                        nombre: '',
                        description: '',
                        categoria: '',
                        marca: '',
                        precio: '',
                        stock: '',
                        estado: true
                    }, reset(),
                    setForm('negativo')
                )}> Cancelar </button>
            </div >
        </>
    )
}

const formUpdate = () => {

}

export { FormProducts }