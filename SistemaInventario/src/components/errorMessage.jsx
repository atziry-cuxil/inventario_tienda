const ErrorMensaje = ({ error }) => {
    return (
        <div className="errorMesaje">
            <h3 className="">Ocurrio un error</h3>
            <p>{error}</p>
        </div>
    )
}

export { ErrorMensaje }