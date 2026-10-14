const Notify = ({ product }) => {
    return (
        <div>
            <h3>Eliminar Producto</h3>
            <p>{`Desea eliminar el producto ${product.nombre}`}</p>
            <button type="button" className="buttonCancel" onClick={() => setForm(false)}> Cancelar </button>
            <button type='button' className='buttonDelete' onClick={() => onDelete(product.producto_id)}> Confirmar </button>
        </div>
    )


}

export { Notify }