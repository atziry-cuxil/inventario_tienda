import { apiClient } from "../api";
import React, { useEffect } from "react";
import { ErrorMensaje } from "./errorMessage";

const Detalle = ({ setForm, idDetalle, setIdDetalle }) => {
    const [product, setProduct] = React.useState(null)
    const [errorMensaje, setError] = React.useState(null)
    const [isError, setIsError] = React.useState(false)

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await apiClient.get(`/${idDetalle}`)
                setProduct(response?.data?.data[0])
                return
            } catch (error) {
                setError(error?.error?.message)
                setIsError(true)
                setTimeout(() => {
                    setIsError(false)
                }, 5000)
            }
        }
        getProduct()

    }, [idDetalle])

    return (
        <>
            {isError && <ErrorMensaje error={errorMensaje} />}
            <div>
                <h3>Detalle del producto <em>{product?.nombre}</em></h3>
                <div>
                    <p>{product?.codigo}</p>
                    <p>{product?.nombre}</p>
                    <p>{product?.description}</p>
                    <p>{product?.categoria}</p>
                    <p>{product?.marca}/</p>
                    <p>{product?.precio}</p>
                    <p>{product?.stock}</p>
                    <p>{product?.estado} </p>
                </div>
                <button type="button" className="buttonCancel" onClick={() => (setIdDetalle(null), setForm('negativo'))}> Regresar </button>
            </div>
        </>
    )
}

export { Detalle }