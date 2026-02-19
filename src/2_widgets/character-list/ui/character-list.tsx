import { useGetCharactersQuery } from "@entities/character/model/characterApi";
import type { ICharacter } from "@entities/character/model/types";
import { useFilterStore } from "@features/character/model/filter-store";
import { CharacterCard } from "@widgets/character-list/ui/characted-card";

interface ICharacterListProps {
    characters: ICharacter[];
}

export const CharacterList = ({ characters }: ICharacterListProps) => {
    // получаем данные из Zustand
    const { page, name, status, species, type, gender, setPage } =
        useFilterStore();
    // получаем данные из RTK Query
    const { data, isLoading, error, isFetching } = useGetCharactersQuery({
        page,
        name,
        status,
        species,
        type,
        gender,
    });

    if (!data?.results.length) {
        return (
            <div className="text-center py-8 text-muted-foreground">
                Персонажи не найдены
            </div>
        );
    }
    return (
        <>
            {data?.results.map((item: ICharacter) => (
                <CharacterCard key={item.id} character={item} />
            ))}
        </>
    );
};
