import { Form } from "react-hook-form"
import { apiClient } from "../api"
import { DataTable } from "../table"
import React, { useEffect } from "react"
import { FormProducts } from "../form"
import './app.css'

function App() {
  const [product, setProduct] = React.useState(null)
  const [idUpdate, setIdUpdate] = React.useState(null)
  const [data, setData] = React.useState([])
  const [form, setForm] = React.useState(false)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await apiClient.get('/')
        return setData(response?.data?.data)
      } catch (error) {
        console.log(error)
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
        return setProduct(response?.data?.data[0])
      } catch (error) {
        console.log(error)
      }
    }
    getProduct(id)
  }, [idUpdate])

  return (
    <>
      <h1>Registro de productos </h1>

      {!form &&
        <DataTable setForm={setForm} data={data} setIdUpdate={setIdUpdate} setData={setData} />
      }
      {form &&
        <FormProducts setForm={setForm} product={product} idUpdate={idUpdate} />
      }
    </>
  )
}

export default App
