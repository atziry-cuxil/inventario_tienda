import { Form } from "react-hook-form"
import { apiClient } from "../api"
import { DataTable } from "../table"
import React, { useEffect } from "react"
import { FormProducts } from "../form"
import './app.css'
import { Detalle } from "../components/detalle"
import { ErrorMensaje } from "../components/errorMessage"

function App() {
  const [product, setProduct] = React.useState(null)
  const [idUpdate, setIdUpdate] = React.useState(null)
  const [data, setData] = React.useState([])
  const [form, setForm] = React.useState('negativo')
  const [idDetalle, setIdDetalle] = React.useState(null)
  const [errorMensaje, setError] = React.useState(null)
  const [isError, setIsError] = React.useState(false)

  useEffect(() => {
    const getProducts = async () => {
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
    }
    getProducts();
  }, [form])

  useEffect(() => {
    const id = idUpdate
    if (id === null) return
    const getProduct = async (id) => {
      try {
        const response = await apiClient.get(`/${id}`)
        setProduct(response?.data?.data[0])
        setForm('positivo')
        return
      } catch (error) {
        setError(error?.error?.message)
        setIsError(true)
        setTimeout(() => {
          setIsError(false)
        }, 5000)
      }
    }
    getProduct(id)
  }, [idUpdate])


  return (
    <>
      <h1>Registro de productos </h1>
      {isError && <ErrorMensaje error={errorMensaje} />}
      {form == 'negativo' &&
        <DataTable setForm={setForm} data={data} setIdUpdate={setIdUpdate} setData={setData} setIdDetalle={setIdDetalle} />
      }
      {form == 'positivo' &&
        <FormProducts setForm={setForm} product={product} idUpdate={idUpdate} setProduct={setProduct} setIdUpdate={setIdUpdate} />
      }
      {form == 'detalle' &&
        <Detalle setForm={setForm} idDetalle={idDetalle} setIdDetalle={setIdDetalle} />}
    </>
  )
}

export default App
