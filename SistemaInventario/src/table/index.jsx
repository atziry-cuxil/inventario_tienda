import './table.css'

const DataTable = ({ setForm }) => {
    const data = [
        {
            "producto_id": 1,
            "codigo": "otro",
            "nombre": "otro",
            "description": "otro",
            "categoria": "otro",
            "marca": "otro",
            "precio": "10.00",
            "stock": 3,
            "estado": true,
            "create_at": "2026-10-13T10:38:32.343Z"
        },
        {
            "producto_id": 2,
            "codigo": "23",
            "nombre": "otro",
            "description": "otro",
            "categoria": "otro",
            "marca": "otro",
            "precio": "10.00",
            "stock": 3,
            "estado": true,
            "create_at": "2026-10-13T10:43:09.033Z"
        },
        {
            "producto_id": 3,
            "codigo": "45",
            "nombre": "jioj",
            "description": "ogjh",
            "categoria": "otro",
            "marca": "otro",
            "precio": "10.00",
            "stock": 3,
            "estado": true,
            "create_at": "2026-10-13T10:43:30.332Z"
        }
    ]
    const onUpdate = async (id) => {
        console.log('actualizar')
        try {
            const response = await apiClient.put(`products/:${id}`)
            console.log('respuesta positiva')
            console.log(response)
            return console.log(response.message)
        } catch (error) {
            console.log('respuesta negativa')
            console.log(error)
        }
    }

    const onDelete = async (id) => {
        console.log('eliminar')
        try {
            const response = await apiClient.delete(`products/:${id}`)
            console.log('respuesta positiva')
            console.log(response)
            return console.log(response.message)
        } catch (error) {
            console.log('respuesta negativa')
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
                                        onUpdate(product.id)
                                    }}  > {product.estado ? 'Desactivar' : 'Activar'}</button>
                                    <button type='button' className='buttonDelete' onClick={() => {
                                        onDelete(product.id)
                                    }}> Eliminar</button>
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