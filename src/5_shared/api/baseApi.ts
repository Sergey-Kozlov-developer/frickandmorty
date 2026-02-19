import type { ICharacter } from "@entities/character/model/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
    tagTypes: ["Character"],
    endpoints: (builder) => ({
        getCharacters: builder.query<ICharacter[], void>({
            query: () => "/character",
        }),
    }),
});
