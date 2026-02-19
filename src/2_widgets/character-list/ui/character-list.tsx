import { useGetCharactersQuery } from "@entities/character/model/characterApi";
import type { ICharacter } from "@entities/character/model/types";
import { useFilterStore } from "@features/character/model/filter-store";
import { CharacterCard } from "@widgets/character-list/ui/characted-card";

export const CharacterList = () => {
    // получаем данные из Zustand
    const { page, name, status, species, type, gender } = useFilterStore();
    // получаем данные из RTK Query
    const { data, isLoading, error, isFetching } = useGetCharactersQuery({
        page,
        name,
        status,
        species,
        type,
        gender,
    });

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
