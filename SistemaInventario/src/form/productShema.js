import { object, z } from 'zod'

const postProductShema = z.object({
    codigo: z
        .string()
        .trim()
        .min(1, 'Debe tener al menos un caracter')
        .max(20, 'No debe tener mas de 20 caracteres'),
    nombre: z
        .string()
        .trim()
        .min(3, 'Debe tener al menos tres caracteres')
        .max(100, 'No debe tener mas de 100 caractes'),
    description: z
        .string()
        .trim(),
    categoria: z
        .string()
        .trim()
        .min(1, 'Debe tener al menos un caracter')
        .max(50, 'No debe tener mas de 50 caracteres'),
    marca: z
        .string()
        .trim()
        .min(1, 'Debe tener al menos un caracter')
        .max(50, 'No debe tener mas de 50 caracteres'),
    precio: z
        .number()
        .positive(0, 'Debe ser un numero mayor a 0')
        .min(1, 'Debe tener al menos un caracter'),
    stock: z
        .number()
        .nonnegative()
        .min(1, 'Debe tener al menos un caracter'),
})

const putProductShema = z.object({
    codigo: z
        .string()
        .trim()
        .min(1, 'Debe tener al menos un caracter')
        .max(20, 'No debe tener mas de 20 caracteres'),
    nombre: z
        .string()
        .trim()
        .min(3, 'Debe tener al menos tres caracteres')
        .max(100, 'No debe tener mas de 100 caractes'),
    description: z
        .string()
        .trim(),
    categoria: z
        .string()
        .trim()
        .min(1, 'Debe tener al menos un caracter')
        .max(50, 'No debe tener mas de 50 caracteres'),
    marca: z
        .string()
        .trim()
        .min(1, 'Debe tener al menos un caracter')
        .max(50, 'No debe tener mas de 50 caracteres'),
    precio: z
        .number()
        .positive(0, 'Debe ser un numero mayor a 0')
        .min(1, 'Debe tener al menos un caracter'),
    stock: z
        .number()
        .nonnegative()
        .min(1, 'Debe tener al menos un caracter'),
    estado: z
        .boolean()
})

export { postProductShema, putProductShema }