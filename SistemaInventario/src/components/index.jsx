import { apiClient } from "../api"
import { ErrorMensaje } from "./errorMessage"

const Notify = ({ setConfirm, id, setData }) => {
    const [error, setError] = React.useState(null)
    const [isError, setIsError] = React.useState(false)
    const onDelete = async (id) => {
        try {
            const response = await apiClient.delete(`/${id}`)
            try {
                const response = await apiClient.get('/')
                return setData(response?.data?.data)
            } catch (error) {
                setError(error?.error?.message)
                setIsError(true)
                setTimeout(() => {
                    setIsError(false)
                }, 5000)
            }
            return
        } catch (error) {
            setError(error?.error?.message)
            setIsError(true)
            setTimeout(() => {
                setIsError(false)
            }, 5000)
        }
    }
    return (
        <>
            {isError && <ErrorMensaje error={error} />}
            <div>
                <h3>Eliminar Producto</h3>
                <p>{`Desea eliminar el producto`}</p>
                <button type="button" className="buttonCancel" onClick={() => setConfirm(false)}> Cancelar </button>
                <button type='button' className='buttonDelete' onClick={() => (onDelete(id), setConfirm(false))}> Confirmar </button>
            </div>
        </>

    )


}

export { Notify }