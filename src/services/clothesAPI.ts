import { api } from "./api";

export const clothAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        getMensProducts: builder.query<unknown, void>({
            query: () => ({
                url: "products/category/men's clothing",
                method: "GET",
                params: {

                }
            })
        }),
        getWomensProducts: builder.query<unknown, void>({
            query: () => ({
                url: "products/category/women's clothing",
                method: "GET",
                params: {

                }
            })
        })
    })
})

export const {
    useGetMensProductsQuery,
    useGetWomensProductsQuery
} = clothAPI;