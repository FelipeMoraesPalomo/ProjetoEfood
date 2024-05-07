import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ProductModel from '../Models/ProductModel'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<ProductModel[], void>({
      query: () => 'restaurantes'
    }),
    getMenu: builder.query<ProductModel, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantQuery, useGetMenuQuery } = api

export default api
