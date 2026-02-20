import type { ICharacterParams } from "@entities/character/model/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IFilterState {
    filters: ICharacterParams;
    setPage: (page: number) => void;
    setName: (name: string) => void;
    setStatus: (status: string) => void;
    setGender: (gender: string) => void;
    setSpecies: (species: string) => void;
    setType: (type: string) => void;
    resetFilters: () => void;
}
// выносим начальное состояние фильтров
const initialFilters: ICharacterParams = {
    page: 1,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: undefined,
};

export const useFilterStore = create<IFilterState>()(
    devtools(
        (set) => ({
            // начальное состояние
            filters: initialFilters,
            // filter page
            setPage: (page: number) =>
                set(
                    (state) => ({
                        filters: { ...state.filters, page },
                    }),
                    false,
                    "filters/setPage"
                ),
            // filter name
            setName: (name: string) =>
                set(
                    (state) => ({
                        filters: { ...state.filters, name, page: 1 },
                    }),
                    false,
                    "filters/setName"
                ),
            // filter status, species, type, gender
            // filter status
            setStatus: (status: string) =>
                set(
                    (state) => ({
                        filters: { ...state.filters, status, page: 1 },
                    }),
                    false,
                    "filters/setStatus"
                ),
            // filter species
            setSpecies: (species: string) =>
                set(
                    (state) => ({
                        filters: { ...state.filters, species, page: 1 },
                    }),
                    false,
                    "filters/setSpecies"
                ),
            // filter type
            setType: (type: string) =>
                set(
                    (state) => ({
                        filters: { ...state.filters, type, page: 1 },
                    }),
                    false,
                    "filters/setType"
                ),
            // filter gender
            setGender: (gender: string) =>
                set(
                    (state) => ({
                        filters: { ...state.filters, gender, page: 1 },
                    }),
                    false,
                    "filters/setGender"
                ),
            // сброс фильтров
            resetFilters: () =>
                set({
                    filters: initialFilters,
                } as Partial<IFilterState>),
        }),
        { name: "filter-store" }
    )
);
