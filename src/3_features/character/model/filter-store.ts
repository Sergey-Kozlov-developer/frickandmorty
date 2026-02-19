import type { ICharacterParams } from "@entities/character/model/types";
import { create } from "zustand";

interface IFilterState extends ICharacterParams {
    setFilter: <K extends keyof ICharacterParams>(
        key: K,
        value: ICharacterParams[K]
    ) => void;
    setPage: (page: number) => void;
    resetFilters: () => void;
}

export const useFilterStore = create<IFilterState>((set) => ({
    // начальное состояние
    page: 1,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: undefined,
    setFilter: (key, value) => set({ [key]: value, page: 1 }),
    setPage: (page) => set({ page }),
    resetFilters: () =>
        set({
            page: 1,
            name: "",
            status: "",
            species: "",
            type: "",
            gender: undefined,
        }),
}));
