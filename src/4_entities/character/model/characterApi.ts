import type {
    ICharacter,
    ICharacterParams,
    ICharacterResponse,
} from "@entities/character/model/types";
import { baseApi } from "@shared/api/baseApi";

// добавляем endpoints в baseApi
export const characterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Запрос для получения всех персонажей с фильтрацией
        getCharacters: builder.query<ICharacterResponse, ICharacterParams>({
            query: (params) => ({
                url: "/character",
                params,
            }),
        }),

        // Запрос для получения конкретного персонажа по ID
        getCharacterById: builder.query<ICharacter, string>({
            query: (id) => ({
                url: `/character/${id}`,
            }),
        }),
    }),
});

export const {
    useGetCharactersQuery,
    useGetCharacterByIdQuery,
    useLazyGetCharacterByIdQuery,
} = characterApi;
