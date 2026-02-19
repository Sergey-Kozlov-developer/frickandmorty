import { SearchCharacter } from "@features/search-character";
import { SortCharacter } from "@features/sort-character";
import Hero from "@shared/ui/hero/hero";
import { CharacterList } from "@widgets/character-list/ui/character-list";

export const Home = () => {
    return (
        <div className="w-full">
            <Hero />
            <div className="container px-4 mx-auto mt-8">
                <div className="flex gap-5 max-sm:flex-col">
                    <SearchCharacter />
                    <SortCharacter />
                </div>
                <CharacterList characters={[]} />
            </div>
        </div>
    );
};
