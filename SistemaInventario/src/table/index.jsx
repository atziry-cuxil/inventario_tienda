import './table.css'
import { apiClient } from '../api'
import React from 'react'
import { Notify } from '../components'

const DataTable = ({ setForm, data, setIdUpdate, setData, setIdDetalle }) => {
    const [confirm, setConfirm] = React.useState(false)
    const [id, setId] = React.useState(null)

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
                        {data?.map(product => (
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
                                    }}  >Editar </button>
                                    <button type='button' className='buttonDelete' onClick={() => (setConfirm(true), setId(product.producto_id))}> Eliminar</button>
                                    <button type='button' className='detalle' onClick={() => (setForm('detalle'), setIdDetalle(product.producto_id))}> ver </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {confirm && <Notify setConfirm={setConfirm} id={id} setData={setData} />}
                <button type='button' className="buttonPost" onClick={() => setForm('positivo')}> Agregar Producto </button>
            </div >
        </>
    )
}

export { DataTable }