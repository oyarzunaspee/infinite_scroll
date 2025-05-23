import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    tagTypes: ["products"],
    endpoints: (builder) => ({
        getProducts: builder.infiniteQuery({
            infiniteQueryOptions: {
                initialPageParam: 0,
                getNextPageParam: (
                    lastPage,
                    allPages,
                    lastPageParam,
                    allPageParams,
                    queryArg,
                ) => {
                    const total = lastPage.total
                    // calculate number of pages with the total of items divided by items per load
                    const mathFloor = Math.floor(total / queryArg.limit)

                    // if the last page contains less items than items per load add a page
                    const totalPages = (total % queryArg.limit) > 0 ? mathFloor + 1 : mathFloor
                    
                    // check that current page is not last page
                    if ((lastPageParam + 1) < totalPages) {
                        return lastPageParam + 1
                    } else {
                        return null
                    }
                }
            },
            query({ queryArg, pageParam }) {
                const defaultLimit = 10
                return `products${queryArg.search ?  "/search?q=" + queryArg.search + "&" : "?"}limit=${queryArg.limit || defaultLimit}&skip=${pageParam * queryArg.limit}&select=title,id,description,price,images`
            },
        }),
        providesTags: ["products"],
        invalidatesTags: ["products"]
    })
});


export const { useGetProductsInfiniteQuery } = api