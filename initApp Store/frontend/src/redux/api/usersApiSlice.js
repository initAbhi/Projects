import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../features/constants";


const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: `${USERS_URL}/auth`,
                method: "POST",
                body: credentials,
                }),
            })
        })
})


export const {useLoginMutation} = userApiSlice