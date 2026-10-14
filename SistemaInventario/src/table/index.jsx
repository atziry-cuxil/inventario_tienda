import './table.css'
import { apiClient } from '../api'

const DataTable = ({ setForm, data, setIdUpdate, setData }) => {

    const onUpdate = async (id) => {
        try {
            const response = await apiClient.put(`/${id}`)
            console.log(response)
            return console.log(response.message)
        } catch (error) {
            console.log(error)
        }
    }

    const onDelete = async (id) => {
        try {
            const response = await apiClient.delete(`/${id}`)
            console.log(response)
            try {
                const response = await apiClient.get('/')
                return setData(response?.data?.data)
            } catch (error) {
                console.log(error)
            }
            return console.log(response.message)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='tableFlex'>
                <table className="table">
                    <thead>
                        <tr >
                            <th> Codigo </th>
                            <th> Nombre </th>
                            <th> Descripcion </th>
                            <th> Categoria </th>
                            <th> Marca </th>
                            <th> Precio</th>
                            <th> Stock </th>
                            <th> Estado </th>
                            <th> Acciones </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(product => (
                            <tr key={product.codigo}>
                                <td> {product.codigo} </td>
                                <td> {product.nombre} </td>
                                <td> {product.description} </td>
                                <td> {product.categoria} </td>
                                <td> {product.marca} </td>
                                <td> {product.precio} </td>
                                <td> {product.stock} </td>
                                <td> {product.estado ? 'activo' : 'inactivo'} </td>
                                <td>
                                    <button type='button' className='buttonUpdate' onClick={() => {
                                        setIdUpdate(product.producto_id)
                                        setForm(true)
                                    }}  >Editar </button>
                                    <button type='button' className='buttonDelete' onClick={() => onDelete(product.producto_id)}> Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type='button' className="buttonPost" onClick={() => setForm(true)}> Agregar Producto </button>
            </div>
        </>
    )
}

export { DataTable }