import { Form } from "react-hook-form"
import { apiClient } from "../api"
import { DataTable } from "../table"
import React, { useEffect } from "react"
import { FormProducts } from "../form"
import './app.css'

function App() {
  const [data, setData] = React.useState([])
  const [form, setForm] = React.useState(true)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await apiClient.get('products/')
        console.log('respuesta positiva')
        console.log(response)
        //return setData(response?.data)
      } catch (error) {
        console.log('respuesta negativa')
        console.log(error)
      }
    }
    getProducts();
    console.log(data)
  }, [data])

  return (
    <>
      <h1>Registro de productos </h1>
      {!form &&
        <DataTable setForm={setForm} />
      }
      {form &&
        <FormProducts setForm={setForm} />
      }
    </>
  )
}

export default App
