import { useGetCharactersQuery } from "@entities/character/model/characterApi";
import type { ICharacter } from "@entities/character/model/types";
import { useFilterStore } from "@features/character";
import { CharacterCard } from "@widgets/character-list/ui/character-card";
import { useMemo } from "react";

export const CharacterList = () => {
    // получаем данные из Zustand
    const { filters } = useFilterStore();
    // создаем параметры для запроса с использованием useMemo
    const filtersParams = useMemo(
        () => ({
            page: filters.page || 1,
            name: filters.name || "",
            status: filters.status || "",
            species: filters.species || "",
            type: filters.type || "",
            gender: filters.gender || undefined,
        }),
        [filters]
    );
    // получаем данные из RTK Query
    const { data, isLoading, error, isFetching } =
        useGetCharactersQuery(filtersParams);

    if (isLoading) {
        return (
            <div className="text-center py-8 text-muted-foreground">
                Загрузка...
            </div>
        );
    }

    if (error) {
        const errorMessage =
            "message" in error ? error.message : "Неизвестная ошибка";
        return (
            <div className="text-center py-8 text-muted-foreground">
                Ошибка: {errorMessage}
            </div>
        );
    }

    if (!data?.results.length) {
        return (
            <div className="text-center py-8 text-muted-foreground">
                Персонажи не найдены
            </div>
        );
    }
    return (
        <>
            {isFetching && (
                <div className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg">
                    Обновление...
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
                {data?.results.map((item: ICharacter) => (
                    <CharacterCard key={item.id} character={item} />
                ))}
            </div>
        </>
    );
};
