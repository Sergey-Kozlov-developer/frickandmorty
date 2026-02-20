import { SearchCharacter } from "@features/search-character";
import { FilterCharacters } from "@features/filter-characters";
import Hero from "@shared/ui/hero/hero";
import { CharacterList } from "@widgets/character-list/ui/character-list";

export const Home = () => {
    return (
        <div className="w-full">
            <Hero />
            <div className="container px-4 mx-auto mt-8">
                <div className="flex flex-col gap-5">
                    <SearchCharacter />
                    <FilterCharacters />
                </div>
                <CharacterList />
            </div>
        </div>
    );
};
