import './table.css'

const DataTable = ({data}) => {
    console.log(data)
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
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(product => {
                            <tr>
                                <th> {product.codigo} </th>
                                <th> {product.nombre} </th>
                                <th> {product.description} </th>
                                <th> {product.categoria} </th>
                                <th> {product.marca} </th>
                                <th> {product.precio} </th>
                                <th> {product.stock} </th>
                                <th> {product.estado} </th>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export { DataTable }